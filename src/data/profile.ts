export const profile = {
  name: "Nehal Qadeer",
  role: "AI & Automation Engineer",
  subroles: ["Computer Vision Specialist", "Python Developer", "Systems Integrator"],
  location: "Mannheim, Germany",
  email: "nehal.q.s@gmail.com",
  phone: "+49 155 66441747",
  links: {
    linkedin: "https://linkedin.com/in/nehalqadeer",
    github: "https://github.com/nehalqadeer",
    portfolio: "https://nehal-qadeer.github.io"
  },
  tagline: "I build the plumbing between systems.",
  summary:
    "I build the plumbing between systems — CV models, REST APIs, automations that run while I sleep. M.Sc. Applied Computer Science, SRH Heidelberg.",
  readouts: [
    { label: "Inference latency", value: "-30%", unit: "OpenVINO conversion" },
    { label: "Records harvested", value: "2,000-4,000", unit: "per pipeline run" },
    { label: "M.Sc. grade", value: "2.2", unit: "SRH Heidelberg, 2025" }
  ]
} as const;
