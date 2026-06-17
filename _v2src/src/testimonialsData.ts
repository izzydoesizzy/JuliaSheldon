// Single source of truth for every testimonial. All second-person ("you")
// phrasing has been rewritten into the third person, referring to Julia by
// name, while keeping each quote's authentic voice. Quotes are stored WITHOUT
// surrounding quotation marks — the components add the typographic “ ”.

export type Category =
  | "Teens & Youth"
  | "Adults & 1:1"
  | "Educators & Colleagues"
  | "Parents & Families"
  | "Camps & Community"
  | "Organizations";

export type Size = "lg" | "md" | "sm";

export type Testimonial = {
  quote: string;
  author: string;
  category: Category;
  featured?: boolean;
  size?: Size;
};

export const categories: Category[] = [
  "Teens & Youth",
  "Adults & 1:1",
  "Educators & Colleagues",
  "Parents & Families",
  "Camps & Community",
  "Organizations",
];

export const allTestimonials: Testimonial[] = [
  // ───────────────────────── Teens & Youth ─────────────────────────
  {
    quote:
      "Julia doesn’t judge the way most adults do — I know I can tell her anything, and she’ll find a way to make it funny and teach me something.",
    author: "Teen Client",
    category: "Teens & Youth",
    featured: true,
    size: "md",
  },
  {
    quote: "The energy Julia brings to each conversation is her biggest flex.",
    author: "Teen Client",
    category: "Teens & Youth",
  },
  {
    quote: "Julia is so cool! This was fun!",
    author: "Teen Workshop Participant",
    category: "Teens & Youth",
  },
  {
    quote: "Julia is my favourite aunt. Can she adopt me?",
    author: "Teen Camper",
    category: "Teens & Youth",
  },
  {
    quote:
      "I’m so grateful Julia checked with me first about what to share with my parents.",
    author: "Teen Client",
    category: "Teens & Youth",
  },
  {
    quote: "Julia was my comfort person for the whole day at camp.",
    author: "Rainbow Leadership Camper",
    category: "Teens & Youth",
  },
  {
    quote: "Julia is an awesome role model.",
    author: "Rainbow Leadership Camper",
    category: "Teens & Youth",
  },

  // ───────────────────────── Adults & 1:1 ─────────────────────────
  {
    quote:
      "I wasn’t sure a one-off session would be worth it. Julia is worth every penny!",
    author: "Adult Client",
    category: "Adults & 1:1",
    featured: true,
    size: "sm",
  },
  {
    quote:
      "Working with Julia is like having my hilarious friend give me relationship advice and then hold me accountable with actual tools.",
    author: "Adult Client",
    category: "Adults & 1:1",
    featured: true,
    size: "lg",
  },
  {
    quote:
      "Julia gives off good vibes, and I knew right away it would be fun to work with her.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "I’m always surprised by how quickly time passes when we’re together. I love how Julia explains things!",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "I really like that we figure things out together — Julia is also learning and working on stuff.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "I’m talking to all of my friends about boundaries now. It’s SO much easier than I thought!",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote: "Julia gave me a reframe I really needed to hear.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "It took me a long time to reach out, but Julia put me at ease right away.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "Julia helped me understand my emotions and how I can do things differently in my relationship.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote: "Julia gave me extra time exactly when I needed it most.",
    author: "Adult Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "There is NO way I’d have this amazing relationship without everything Julia has done for me.",
    author: "A Very Happy Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "Julia told me to move at my own pace and be firm holding my boundaries — and it worked!",
    author: "Happy Client",
    category: "Adults & 1:1",
  },
  {
    quote:
      "This has been the best sex-ed-type course I’ve been in. It could be so awkward, but Julia gives off such a fun and nice energy.",
    author: "“Real Talk” Attendee",
    category: "Adults & 1:1",
  },

  // ─────────────────── Educators & Colleagues ───────────────────
  {
    quote:
      "Julia is everything one can hope for in a spice educator: warm, engaging, patient, approachable, humorous, knowledgeable, inquisitive, and non-judgmental.",
    author: "Disability Advocate & Educator",
    category: "Educators & Colleagues",
    featured: true,
    size: "lg",
  },
  {
    quote:
      "From the moment she started, Julia created a safe and welcoming environment that made even the most uncomfortable topics approachable.",
    author: "High School Teacher",
    category: "Educators & Colleagues",
    featured: true,
    size: "md",
  },
  {
    quote: "Auntie Julia is as energizing and approachable as she is knowledgeable.",
    author: "Colleague",
    category: "Educators & Colleagues",
    featured: true,
    size: "sm",
  },
  {
    quote:
      "If only I’d had Julia when I was a teen; these kids are SO lucky.",
    author: "Colleague",
    category: "Educators & Colleagues",
    featured: true,
    size: "sm",
  },
  {
    quote:
      "The amount of preparedness Julia brings and her high work ethic make her very trustworthy — I’ll always recommend anyone to work with her.",
    author: "Non-profit Assistant Director",
    category: "Educators & Colleagues",
  },
  {
    quote:
      "Julia was always ready and creative preparing workshops. She’s an amazing solo and team worker, with leadership qualities people naturally gravitate to, and she brought enthusiasm and high energy every single time.",
    author: "UGDSB Teacher",
    category: "Educators & Colleagues",
  },
  {
    quote:
      "I highly recommend Julia for any educational setting looking to provide comprehensive, engaging spicy health education. She truly made a difference for my students.",
    author: "High School Teacher",
    category: "Educators & Colleagues",
  },
  {
    quote:
      "Julia knows how to use levity to balance the seriousness of many sexual-health topics.",
    author: "Disability Advocate",
    category: "Educators & Colleagues",
  },
  {
    quote:
      "The way Julia moves through the world and the positive impact she has on others is immeasurably valuable.",
    author: "Colleague",
    category: "Educators & Colleagues",
  },
  {
    quote: "I really value Julia’s feedback.",
    author: "Sex-Positive Colleague",
    category: "Educators & Colleagues",
  },
  {
    quote: "Julia is the perfect person to be working with teens!",
    author: "Sex-Positive Colleague",
    category: "Educators & Colleagues",
  },
  {
    quote:
      "Julia created the space and encouraged me to take the time to feel my feelings.",
    author: "Colleague",
    category: "Educators & Colleagues",
  },
  {
    quote: "I just want to spend more time basking in Julia’s presence.",
    author: "Workshop Facilitator",
    category: "Educators & Colleagues",
  },

  // ───────────────────── Parents & Families ─────────────────────
  {
    quote:
      "I trust Julia with my teen because of her honesty, humour, and authenticity.",
    author: "Sex-Positive Colleague & Parent",
    category: "Parents & Families",
    featured: true,
    size: "md",
  },
  {
    quote:
      "It’s quite a miracle, where she is now versus only a few weeks ago. I’m very grateful to Julia for her work in this field.",
    author: "Parent of a Client",
    category: "Parents & Families",
  },
  {
    quote:
      "Julia gives kids a safe place to learn and explore without fear of judgment. It’s amazing — and something I wish I’d had growing up.",
    author: "Mom & Camp Friend",
    category: "Parents & Families",
  },

  // ───────────────────── Camps & Community ──────────────────────
  {
    quote: "I love that Julia has this vision and is making things happen!",
    author: "Connection Camp Staff",
    category: "Camps & Community",
  },
  {
    quote: "Julia brings sunshine, even when she’s struggling herself.",
    author: "Camp Staff",
    category: "Camps & Community",
  },
  {
    quote:
      "Julia’s energy is truly infectious, and she’s so much fun to be around.",
    author: "Camp Staff",
    category: "Camps & Community",
  },
  {
    quote:
      "Julia’s ability to cat-wrangle with a smile and logistical success is incredible.",
    author: "Camp Volunteer",
    category: "Camps & Community",
  },
  {
    quote: "Julia made every space she was in a safe one.",
    author: "Camper",
    category: "Camps & Community",
  },
  {
    quote: "Julia is so good at being present and authentic.",
    author: "SGSC Camper",
    category: "Camps & Community",
  },
  {
    quote: "Julia is such a delight of good energy!",
    author: "SGSC Camper",
    category: "Camps & Community",
  },
  {
    quote: "I really saw the strength of Julia’s leadership today.",
    author: "Connection Camp ’24 Staff",
    category: "Camps & Community",
  },
  {
    quote: "Julia is SUCH an entertainer — she’s meant to be on camera!",
    author: "Entrepreneur Retreat Participant",
    category: "Camps & Community",
  },
  {
    quote:
      "Julia’s expressiveness is such a beautiful art form. I’m so happy she shares it so often and so naturally.",
    author: "Colleague",
    category: "Camps & Community",
  },
  {
    quote: "I learn so much from Julia’s posts. They start cool conversations.",
    author: "Follower",
    category: "Camps & Community",
  },

  // ─────────────────────── Organizations ────────────────────────
  {
    quote:
      "Julia delivered a virtual series titled “Real Talk” for our Youth Mental Health Initiative, educating participants on sexual and relational health. She was candid, relatable, and incredibly engaging — accessible and inclusive — and truly met participants at their level. I would highly recommend her services!",
    author: "Centre Connexions",
    category: "Organizations",
    featured: true,
    size: "md",
  },
  {
    quote:
      "Auntie Julia was candid, relatable, and incredibly engaging, delivering these workshops in a way that was inclusive and accessible.",
    author: "Non-Profit Staff",
    category: "Organizations",
  },
  {
    quote:
      "It’s a treat to collaborate with Julia, especially in community-building and youth-support settings where she truly shines.",
    author: "Community Partner",
    category: "Organizations",
  },
  {
    quote:
      "Wow, they were engaged the whole time — and this time was way more entertaining.",
    author: "Staff at a Teen Presentation",
    category: "Organizations",
  },
  {
    quote:
      "I had to stop the work I was doing to listen, because Julia’s presentation was so interesting.",
    author: "Staff at a Teen Talk",
    category: "Organizations",
  },
  {
    quote:
      "Julia is a safe space in a person. I know I never have to filter with her!",
    author: "Stag Shop Manager",
    category: "Organizations",
    featured: true,
    size: "md",
  },
];

export const featuredTestimonials: Testimonial[] = allTestimonials.filter(
  (t) => t.featured
);

export const categoryAccent: Record<Category, string> = {
  "Teens & Youth": "bg-teal",
  "Adults & 1:1": "bg-violet",
  "Educators & Colleagues": "bg-teal-deep",
  "Parents & Families": "bg-violet-bright",
  "Camps & Community": "bg-teal-light",
  Organizations: "bg-violet",
};
