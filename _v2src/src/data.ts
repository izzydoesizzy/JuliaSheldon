export type Service = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  tone: string;
};

export const services: Service[] = [
  {
    id: "relationships",
    index: "01",
    title: "Healthy Relationships",
    blurb: "Boundaries, communication, and what “good” actually feels like.",
    tone: "teal",
  },
  {
    id: "consent",
    index: "02",
    title: "Consent",
    blurb: "Beyond “yes means yes” — consent they can actually use in real life.",
    tone: "violet",
  },
  {
    id: "puberty",
    index: "03",
    title: "Puberty & Bodily Changes",
    blurb: "The “WTF is my body doing” talk, minus the panic.",
    tone: "light",
  },
  {
    id: "gender",
    index: "04",
    title: "Gender Identity & Expression",
    blurb: "Language and safety for every kid in the room.",
    tone: "teal",
  },
  {
    id: "orientation",
    index: "05",
    title: "Sexual Orientation",
    blurb: "Affirming, inclusive, and zero assumptions.",
    tone: "violet",
  },
  {
    id: "safer-sex",
    index: "06",
    title: "Safer Sex & Birth Control",
    blurb: "Practical, judgment-free, and genuinely useful.",
    tone: "light",
  },
  {
    id: "queer-sex-ed",
    index: "07",
    title: "Queer Sex Ed",
    blurb: "The education most of us never got — done right.",
    tone: "teal",
  },
  {
    id: "coaching",
    index: "08",
    title: "1:1 Relationship Coaching",
    blurb: "Private sessions for adults ready to do the work.",
    tone: "violet",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 150, suffix: "+", label: "Workshops delivered" },
  { value: 1500, suffix: "+", label: "Humans taught" },
  { value: 10, suffix: "yrs", label: "Trauma-informed experience" },
  { value: 100, suffix: "%", label: "Multi-week completion rate" },
];

export type Audience = {
  title: string;
  blurb: string;
};

export const audiences: Audience[] = [
  {
    title: "Schools & classrooms",
    blurb: "Curriculum-aligned health education students actually stay awake for.",
  },
  {
    title: "Non-profits & camps",
    blurb: "Programming and facilitation that builds safe, real community.",
  },
  {
    title: "Teens & families",
    blurb: "Honest guidance that earns trust on both sides of the conversation.",
  },
  {
    title: "Adults",
    blurb: "Coaching for confidence, communication, and connection.",
  },
];

export const partners: string[] = [
  "The Grove Hub — U of Guelph",
  "Mayfield Secondary School",
  "John F. Ross CVI",
  "CISV Canada",
  "Centre Wellington DHS",
  "Bishop Macdonell CHS",
  "St. Jerome’s University",
  "Rainbow Mentors",
  "OK2BMe GSA Conference",
  "Centre Connexions",
  "Studio Dreamshare",
  "The Grove Hub — Fergus",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "workshops", label: "Workshops" },
  { id: "voices", label: "Voices" },
  { id: "contact", label: "Contact" },
];
