
import React from 'react';

export const BALU_SYSTEM_INSTRUCTION = `
### ROLE & IDENTITY
You are the Digital Twin of Balu, a highly technical Project Manager and Automation Architect. You do not act as a generic AI; you are a professional extension of Balu.

### DYNAMIC PERSONA SWITCHING
Switch between these modes based on context. ALWAYS acknowledge the shift with "### [MODE] ACTIVATED".
1. **BA Mode (Business Analyst)**: Focus on requirements/user stories. Use "functional requirements", "criterios de aceptación".
2. **PM Mode (Product Manager)**: Strategic roadmaps/deadlines. Use "la feuille de route", "stakeholder value".
3. **Dev Mode (Developer)**: Python, React, Make.com. Logic Summary first, then code.
4. **Tester Mode (QA)**: Edge cases. Ask "What if X fails?". Provide test cases.
5. **DevOps Mode (Engineer)**: CI/CD, "automation-first", "mise en production".
6. **Coach Mode (AI Productivity Coach)**: Focus on time-saving AI tools, prompt engineering, and workflow optimization. Style: Motivational but practical. Focus on "ROI of time".

### COMMUNICATION PROTOCOL
- **Conciseness**: Be extremely direct. If you can answer in three sentences, do not use ten.
- **Output Style**: Every technical response MUST follow the "Technical Brief" style.
- **Logic Summary**: ALWAYS start technical or automation responses with "### LOGIC SUMMARY".
- **AI Disclosure**: NEVER say "As an AI" or similar. You are Balu's Digital Twin.
- **Vagueness**: If a request is vague, ask ONE targeted follow-up question regarding "Scope" or "KPIs".

### MULTILINGUAL PROTOCOL
- Respond in the language used by the user (English, Spanish, French).
- **Spanish**: Use "Usted" for initial contact; pivot to "Tú" for collaboration. Use "flujo de trabajo", "entregables".
- **French**: Use "Vous" by default. Maintain structural logic. Use "gestion de projet".

### OUTPUT FORMATTING
- Use "### HEADERS" for sections.
- Use horizontal rules (---) for logical separation.
- Use **bolding** for key project variables, deliverables, or deadlines.
- Code must be in clean Markdown blocks.
`;

export const METRICS = [
  { label: 'Automation Efficiency', value: '98.2%', trend: 'up' },
  { label: 'Sprint Velocity', value: '42 pts', trend: 'stable' },
  { label: 'Technical Debt', value: '-12%', trend: 'down' },
];

export const MODE_QUESTIONS = {
  'BA MODE': [
    "Draft comprehensive user stories for a secure client login flow.",
    "Map out the functional requirements for a real-time data sync module.",
    "Define acceptance criteria for a multi-tenant dashboard system.",
    "Create a data flow diagram description for an e-commerce checkout.",
    "Perform a gap analysis between legacy spreadsheets and new CRM logic.",
    "Identify non-functional requirements for a high-traffic API gateway.",
    "Draft a business requirement document (BRD) for automated invoicing.",
    "Outline the logic for a custom role-based access control (RBAC) system.",
    "Structure a stakeholder interview guide for an automation project.",
    "Define UI/UX requirements for a complex financial reporting tool."
  ],
  'PM MODE': [
    "Generate a 6-month digital transformation roadmap with 3 key phases.",
    "Conduct a project risk assessment for a cloud migration initiative.",
    "Define the primary KPIs for an enterprise automation rollout.",
    "Draft a stakeholder communication plan for a high-stakes sprint.",
    "Prioritize a backlog of 10 items based on ROI and technical effort.",
    "Create a milestone chart for a cross-departmental ERP integration.",
    "Outline a resource allocation strategy for a lean development team.",
    "Draft a 'Definition of Done' for an AI-integrated product feature.",
    "Analyze project velocity and suggest optimizations for the next cycle.",
    "Create a post-mortem template for identifying process bottlenecks."
  ],
  'DEV MODE': [
    "Refactor a Python script for better performance and error handling.",
    "Design a scalable database schema for a global notification system.",
    "Write a logic summary for implementing a secure JWT authentication.",
    "Audit this React component for technical debt and reusability.",
    "Propose a technical architecture for a microservices-based app.",
    "Develop a custom webhook router logic for complex Make.com flows.",
    "Create a secure API integration pattern for third-party SaaS tools.",
    "Optimize a slow SQL query involving multi-million row datasets.",
    "Draft a standard for code documentation across the repository.",
    "Design a fail-safe mechanism for automated data migration scripts."
  ],
  'TESTER MODE': [
    "Identify 10 critical edge cases for a global payment processor.",
    "Create a regression testing plan for a major platform update.",
    "Draft unit test cases for a complex calculation engine.",
    "Design a penetration testing checklist for a new web portal.",
    "Define performance benchmarks for a real-time streaming API.",
    "Outline a UI automation strategy for responsive mobile web views.",
    "Draft an accessibility audit (WCAG 2.1) for a public dashboard.",
    "Create a test data generation strategy for GDPR-compliant testing.",
    "Design an integration test suite for multi-service cloud logic.",
    "Analyze a bug report and suggest a systematic reproduction path."
  ],
  'DEVOPS MODE': [
    "Design a CI/CD pipeline architecture for a multi-stack deployment.",
    "Draft a Dockerization strategy for a Python/React application.",
    "Outline a cloud cost optimization plan for AWS/Azure environments.",
    "Create a disaster recovery and data backup protocol.",
    "Design a real-time monitoring and alerting system for critical infra.",
    "Draft a secret management policy for automated deployments.",
    "Analyze infrastructure-as-code (Terraform) for security gaps.",
    "Define an auto-scaling policy for a traffic-variable web service.",
    "Plan a blue-green deployment strategy for zero-downtime releases.",
    "Optimize logging pipelines for better troubleshooting efficiency."
  ],
  'COACH MODE': [
    "Suggest prompt engineering techniques for technical documentation.",
    "Audit a professional workflow for AI-driven productivity gains.",
    "Recommend an AI tool stack for a high-performance PM team.",
    "Draft a deep-work schedule for an automation architect.",
    "Create a prompt library for standard BA/PM deliverable drafting.",
    "Analyze time-to-output and suggest automation for recurring tasks.",
    "Propose a learning path for mastering AI automation in 2025.",
    "Draft a strategy for effective asynchronous team communication.",
    "Create a checklist for maximizing the ROI of project meetings.",
    "Suggest methods for accelerating the feedback loop in agile sprints."
  ]
};
