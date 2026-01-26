import JobApplication from "../JobApplication";

export default function AIArchitectJob() {
  const jobDescription = (
    <>
      <p>
        My Client is seeking a hands-on, technically proficient AI Architect to design, integrate,
        and scale AI-powered systems that enhance field operations, automate repetitive tasks, and
        drive efficiency across our restoration business.
      </p>

      <h2>Key Responsibilities</h2>
      <ul>
        <li>Architect and implement AI solutions using OpenAI, Microsoft Copilot, and enterprise tools</li>
        <li>Build and integrate data pipelines connecting internal systems like Xactimate, Cotality RMS (DASH), and custom data warehouses</li>
        <li>Design scalable AI agent workflows using approved enterprise platforms and secure APIs</li>
        <li>Collaborate with multiple teams to translate roadmap priorities into technical blueprints</li>
        <li>Evaluate third-party tools (e.g., XTGlobal, Glean) and partner on implementation and integration</li>
        <li>Partner with IT on governance, model risk, and data privacy to ensure SOC2, GDPR, and internal standards</li>
        <li>Tune models and prompt flows based on real-time field feedback to improve adoption and utility</li>
      </ul>

      <h2>Qualifications</h2>
      <ul>
        <li>5+ years in machine learning, enterprise architecture, or AI/ML engineering roles</li>
        <li>Demonstrated experience working with LLMs, OpenAI APIs, and prompt engineering</li>
        <li>Strong technical skills in Python, REST APIs, Azure/GCP, and enterprise data architectures</li>
        <li>Familiarity with systems integration (e.g., Xactimate, custom CRMs, etc)</li>
        <li>Experience working cross-functionally with IT, operations, and business leaders</li>
        <li>Ability to work autonomously in a startup-style environment within a larger organization</li>
        <li>Experience in construction, restoration, or adjacent industries a plus</li>
      </ul>

      <h2>Compensation</h2>
      <p>
        <strong>Estimated Total Compensation: $150,000 – $200,000+</strong>
        <br />
        Includes base salary and performance-based bonus (dependent on experience and location).
      </p>
    </>
  );

  return (
    <JobApplication
      jobTitle="AI Architect"
      jobLocation="Remote or Hybrid"
      jobSalary="$150,000 - $200,000+"
      jobDescription={jobDescription}
    />
  );
}
