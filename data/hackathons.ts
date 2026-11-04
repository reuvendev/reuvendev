export interface Hackathon {
  event: string;
  team: string;
  date: string;
  recognition: string;
  project: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const hackathons: Hackathon[] = [
  {
    event: "PinaSIKLab Hackathon 2026",
    team: "Team Valiance",
    date: "October 2026",
    recognition: "Participant",
    project: "NEGOSYO READY",
    description:
      "Developed an AI-assisted compliance prototype to help micro and small businesses in Baguio City prepare for compliance requirements.",
    imageUrl:
      "https://cdn.reuvendev.site/Images/medias/projects/IMG_4380.webp",
    imageAlt: "Team Valiance at PinaSIKLab Hackathon 2026",
  },
];
