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
    tone: "coral",
  },
  {
    id: "consent",
    index: "02",
    title: "Consent",
    blurb: "Beyond “yes means yes” — consent they can actually use in real life.",
    tone: "marigold",
  },
  {
    id: "puberty",
    index: "03",
    title: "Puberty & Bodily Changes",
    blurb: "The “WTF is my body doing” talk, minus the panic.",
    tone: "sage",
  },
  {
    id: "gender",
    index: "04",
    title: "Gender Identity & Expression",
    blurb: "Language and safety for every kid in the room.",
    tone: "sky",
  },
  {
    id: "orientation",
    index: "05",
    title: "Sexual Orientation",
    blurb: "Affirming, inclusive, and zero assumptions.",
    tone: "lilac",
  },
  {
    id: "safer-sex",
    index: "06",
    title: "Safer Sex & Birth Control",
    blurb: "Practical, judgment-free, and genuinely useful.",
    tone: "blush",
  },
  {
    id: "queer-sex-ed",
    index: "07",
    title: "Queer Sex Ed",
    blurb: "The education most of us never got — done right.",
    tone: "coral",
  },
  {
    id: "coaching",
    index: "08",
    title: "1:1 Relationship Coaching",
    blurb: "Private sessions for adults ready to do the work.",
    tone: "marigold",
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

export type Testimonial = {
  quote: string;
  author: string;
  size: "lg" | "md" | "sm";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Julia is everything one can hope for in a spice educator: warm, engaging, patient, approachable, humorous, knowledgeable, inquisitive, and non-judgmental.",
    author: "Disability Advocate & Educator",
    size: "lg",
  },
  {
    quote:
      "From the moment she started, Julia created a safe and welcoming environment that made even the most uncomfortable topics approachable.",
    author: "High School Teacher",
    size: "md",
  },
  {
    quote:
      "You don’t judge the way most adults do — I know I can tell you anything, and you’ll find a way to make it funny and teach me something.",
    author: "Teen Client",
    size: "md",
  },
  {
    quote: "Auntie Julia is as energizing and approachable as she is knowledgeable.",
    author: "Colleague",
    size: "sm",
  },
  {
    quote:
      "I wasn’t sure a one-off session would be worth it. YOU are worth every penny!",
    author: "Adult Client",
    size: "sm",
  },
  {
    quote:
      "You are a safe space in a person. I know I don’t have to filter with you!",
    author: "Stag Shop Manager",
    size: "md",
  },
  {
    quote:
      "Working with you is like having my hilarious friend give me relationship advice and then hold me accountable with actual tools.",
    author: "Adult Client",
    size: "lg",
  },
  {
    quote: "If only I had you when I was a teen; these kids are SO lucky.",
    author: "Colleague",
    size: "sm",
  },
  {
    quote:
      "Candid, relatable, and incredibly engaging — inclusive and accessible. I would highly recommend her services!",
    author: "Centre Connexions · “Real Talk” series",
    size: "md",
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
