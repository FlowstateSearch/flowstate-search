import { JobApplication } from "../JobApplication";

export default function AIArchitect() {
  const jobData = {
    title: "AI Architect",
    location: "Remote or Hybrid",
    employmentType: "Full Time",
    postedDate: "Posted Recently",
    tags: ["Technology", "AI/ML", "Enterprise Architecture", "Restoration"],
    
    quickOverview: `My Client is seeking a hands-on, technically proficient AI Architect to design, integrate, and scale AI-powered systems that enhance field operations, automate repetitive tasks, and drive efficiency across our restoration business. You will work at the intersection of machine learning, enterprise platforms, and operational systems to deliver AI tools that impact real-world workflows.`,
    
    theWho: "A leading restoration company leveraging cutting-edge AI technology to transform field operations and drive efficiency. We partner with both internal teams and external vendors to implement the best technologies for our business needs.",
    
    theWhat: "You'll architect and implement AI solutions using OpenAI, Microsoft Copilot, and enterprise tools while building data pipelines that connect internal systems like Xactimate, Cotality RMS (DASH), and custom data warehouses.",
    
    theWhy: "Work at the intersection of AI innovation and real-world impact. Your solutions will directly improve field operations, automate repetitive tasks, and enhance the daily work of restoration professionals.",
    
    theWhere: "Remote or Hybrid work environment with flexibility to collaborate across teams.",
    
    roleDescription: "You are a hands-on technical leader who bridges the gap between AI innovation and practical business applications. You work autonomously in a startup-style environment within a larger organization, partnering with IT, operations, and business leaders to deliver secure, compliant AI solutions.",
    
    keyResponsibilities: [
      "Architect and implement AI solutions using OpenAI, Microsoft Copilot, and enterprise tools",
      "Build and integrate data pipelines connecting internal systems like Xactimate, Cotality RMS (DASH), and custom data warehouses",
      "Design scalable AI agent workflows using approved enterprise platforms and secure APIs",
      "Collaborate with multiple teams to translate roadmap priorities into technical blueprints",
      "Evaluate third-party tools (e.g., XTGlobal, Glean) and partner on implementation and integration",
      "Partner with IT on governance, model risk, and data privacy to ensure SOC2, GDPR, and internal standards",
      "Tune models and prompt flows based on real-time field feedback to improve adoption and utility",
      "Contribute to long-term AI infrastructure design including vector databases, embedding models, and RAG pipelines when applicable"
    ],
    
    mustHaves: [
      "5+ years in machine learning, enterprise architecture, or AI/ML engineering roles",
      "Demonstrated experience working with LLMs, OpenAI APIs, and prompt engineering",
      "Strong technical skills in Python, REST APIs, Azure/GCP, and enterprise data architectures",
      "Familiarity with systems integration (e.g., Xactimate, custom CRMs, etc)",
      "Experience working cross-functionally with IT, operations, and business leaders",
      "Ability to work autonomously in a startup-style environment within a larger organization"
    ],
    
    preferred: [
      "Experience in construction, restoration, or adjacent industries",
      "Background in field operations or understanding of restoration workflows",
      "Experience with vector databases, embedding models, and RAG pipelines",
      "Track record of deploying AI solutions that improved operational efficiency"
    ],
    
    compensation: {
      range: "$150k - $200k+",
      label: "Total Compensation",
      additional: [
        "Base Salary",
        "Performance-Based Bonus"
      ]
    },
    
    benefits: [
      "Remote or hybrid work flexibility",
      "Medical, dental, vision plans",
      "401k matching",
      "Professional development budget",
      "Opportunity to build and lead a team",
      "Work with cutting-edge AI technologies",
      "Direct impact on field operations"
    ]
  };

  return <JobApplication jobData={jobData} jobId="ai-architect" />;
}
