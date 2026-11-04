export interface Certification {
  title: string;
  issuer: string;
  level: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  verificationUrl: string;
}

export const certifications: Certification[] = [
  {
    title: "DICT Cybersecurity Professional Recognition",
    issuer:
      "Department of Information and Communications Technology (DICT)",
    level: "Level 1 — Entry-Level",
    date: "October 6, 2026",
    imageUrl:
      "https://cdn.reuvendev.site/Images/medias/certifications/dict-cyberpro-badge.png",
    imageAlt:
      "DICT Cybersecurity Professional Recognition Level 1 Digital Badge",
    verificationUrl: "https://cyberpro.dict.gov.ph/",
  },
];
