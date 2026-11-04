export interface Project {
  title: string;
  subtitle?: string;
  status: string;
  description: string;
  tags: string[];
  eventLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  linkUrl?: string; // The URL for the button
  linkText?: string; // The custom text displayed inside the button
}

export const projects: Project[] = [
  {
    title: "NEGOSYO READY",
    subtitle: "AI-Assisted Compliance Companion for Micro and Small Businesses",
    status: "Hackathon Prototype",
    description: "Developed with Team Valiance to help Baguio City businesses prepare for compliance checks through AI-assisted document and establishment photo analysis, plus permit expiration monitoring. The prototype supports preparation and does not replace official inspections or approvals.",
    tags: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel"],
    eventLabel: "PinaSIKLab 2026 • Team Valiance",
    imageUrl: "https://cdn.reuvendev.site/Images/medias/projects/negosyo_ready.webp",
    imageAlt: "NEGOSYO READY compliance companion project interface",
    linkUrl:  "https://github.com/reuvendev/NegosyoReady",
    linkText: "[ View GitHub Repository]"
  },
  {
    title: "WaterWatch – Smart Water Level Monitoring",
    status: "Completed / Hardware",
    description: "Developed an automated water tank monitoring system with real-time level detection and automatic pump control.",
    tags: ["Arduino Uno", "C++", "HC-SR04", "Relay", "LCD I2C"],
    imageUrl: "https://cdn.reuvendev.site/Images/medias/projects/waterwatch.webp",
    imageAlt: "Water Watch Smart Water Level Monitoring",
    linkUrl: "https://cdn.reuvendev.site/PDF/Projects/WaterWatch+Project+Document.pdf",
    linkText: "[ View Project Document (.PDF) ]", // You can change this to "[ View GitHub Repository ]", "[ Visit Live Website ]", etc.
  },
];
