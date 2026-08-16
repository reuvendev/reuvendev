export interface Project {
  title: string;
  status: string;
  description: string;
  tags: string[];
  linkUrl?: string; // The URL for the button
  linkText?: string; // The custom text displayed inside the button
}

export const projects: Project[] = [
  {
    title: "WaterWatch – Smart Water Level Monitoring",
    status: "Completed / Hardware",
    description: "Developed an automated water tank monitoring system with real-time level detection and automatic pump control.",
    tags: ["Arduino Uno", "C++", "HC-SR04", "Relay", "LCD I2C"],
    linkUrl: "https://cdn.reuvendev.site/PDF/Projects/WaterWatch+Project+Document.pdf",
    linkText: "[ View Project Document (.PDF) ]", // You can change this to "[ View GitHub Repository ]", "[ Visit Live Website ]", etc.
  },
];