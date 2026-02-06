
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { BALU_SYSTEM_INSTRUCTION } from "../constants";
import { Language } from "../types";

export class BaluService {
  private ai: GoogleGenAI;
  private chat: Chat | null = null;
  private currentLanguage: Language = Language.ENGLISH;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  setLanguage(lang: Language) {
    this.currentLanguage = lang;
    // We recreate the chat context to ensure the system instruction takes the language context into account
    this.initChat();
  }

  private initChat() {
    const langInstructions = {
      [Language.ENGLISH]: "Primary communication language is English.",
      [Language.SPANISH]: "Primary communication language is Spanish (starting with Usted, then Tú for collaboration).",
      [Language.FRENCH]: "Primary communication language is French (using Vous and structural logic).",
    };

    this.chat = this.ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: `${BALU_SYSTEM_INSTRUCTION}\n\n${langInstructions[this.currentLanguage]}`,
        temperature: 0.7,
        topP: 0.95,
        thinkingConfig: { thinkingBudget: 2000 }
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      this.initChat();
    }

    try {
      const response: GenerateContentResponse = await this.chat!.sendMessage({ message });
      return response.text || "Communication timeout. Check connection.";
    } catch (error) {
      console.error("Gemini Error:", error);
      if (error instanceof Error && error.message.includes("Requested entity was not found")) {
          // This might be an API key issue or model access issue
          return "Logic Error: Access denied to automation modules. Verify credentials.";
      }
      return "Critical failure in the automation pipeline. Please re-scope the request.";
    }
  }
}

export const baluService = new BaluService();
