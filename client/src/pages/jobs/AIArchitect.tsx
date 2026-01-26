import { JobApplication } from "../JobApplication";

export default function AIArchitect() {
  const jobData = {
    title: "AI Architect",
    location: "San Francisco, CA",
    employmentType: "Full Time",
    postedDate: "Posted Recently",
    tags: ["Technology", "AI/ML", "Leadership", "Strategy"],
    
    quickOverview: `Our client is hiring an AI Architect for a cutting-edge technology company revolutionizing the construction industry with artificial intelligence. This is your chance to lead AI strategy and implementation while working for one of the most innovative tech companies in the space.`,
    
    theWho: "A venture-backed technology company with over 500 employees transforming construction through AI and machine learning. Trusted by Fortune 500 construction firms.",
    
    theWhat: "You'll be the technical leader for AI architecture and implementation, responsible for designing scalable AI systems, leading ML engineering teams, and driving AI strategy across the organization.",
    
    theWhy: "Shape the future of construction technology by building AI systems that solve real-world problems for an industry ready for transformation.",
    
    theWhere: "San Francisco, California, with hybrid work options and occasional travel to construction sites.",
    
    roleDescription: "You are a technical visionary and hands-on architect. You lead with innovation, strategic thinking, and deep technical expertise while earning respect from engineering teams to executive leadership.",
    
    keyResponsibilities: [
      "Design and implement scalable AI/ML architecture for construction applications",
      "Lead cross-functional teams of ML engineers and data scientists",
      "Define AI strategy and roadmap in collaboration with product and executive teams",
      "Build and optimize large-scale machine learning pipelines",
      "Evaluate and integrate cutting-edge AI technologies and frameworks",
      "Establish best practices for ML ops, model deployment, and monitoring",
      "Mentor engineering teams on AI/ML best practices and architecture patterns"
    ],
    
    mustHaves: [
      "8+ years in software engineering with 4+ years focused on AI/ML",
      "Proven track record architecting and deploying production ML systems at scale",
      "Deep expertise in modern ML frameworks (PyTorch, TensorFlow, etc.)",
      "Strong foundation in computer vision, NLP, or reinforcement learning",
      "Experience leading technical teams and driving AI strategy",
      "Excellent communication skills with both technical and non-technical stakeholders"
    ],
    
    preferred: [
      "PhD or Master's in Computer Science, AI, or related field",
      "Experience in construction tech, PropTech, or related industries",
      "Published research or contributions to open-source AI projects",
      "Experience with cloud ML platforms (AWS SageMaker, Google Vertex AI, Azure ML)"
    ],
    
    compensation: {
      range: "$200k - $250k",
      label: "Base Salary",
      additional: [
        "Equity/Stock Options",
        "Performance Bonuses"
      ]
    },
    
    benefits: [
      "Medical, dental, vision plans",
      "401k matching",
      "Flexible PTO policy",
      "Remote/hybrid work options",
      "Professional development budget",
      "Conference and education stipend",
      "Latest tech equipment"
    ]
  };

  return <JobApplication jobData={jobData} jobId="ai-architect" />;
}
