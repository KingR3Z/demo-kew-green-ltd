export const client = {
  // Business Details
  name: "Kew Green Ltd",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Oxford.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07795 468047",
  email: "",
  website: "",

  // Location
  address: "Oxford",
  city: "Oxford",
  county: "",
  postcode: "",
  basedIn: "Oxford",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "10",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Matt Higgins", rating: 5, text: "Pete and the guys from Kew Green did some major landscaping work at my home. They built a Cotswold Stone wall and a patio, as well as building steps, and installing gates. They were outstanding from start to finish. Everything was done to …  ", date: "4 years ago" },
    { name: "Ed Woodhouse", rating: 5, text: "Kew Green recently carried out the landscaping for our garden, and we couldn’t be happier with the results. The team was friendly, professional, and clearly very experienced. They were respectful of our space, worked efficiently, and kept …  ", date: "8 months ago" },
    { name: "Chooi-leng Tan", rating: 5, text: "I've worked with Kew Green for many years now, and they’ve consistently delivered excellent results. Their work is reliable, thoughtful, and always carried out to a high standard. Whether it's planting, hard landscaping, or problem-solving …  ", date: "8 months ago" },
    { name: "Jo Stevens", rating: 5, text: "I can’t recommend Kew Green enough. The whole team were fantastic and the quality of work is top notch. They left my garden clean and tidy and looking amazing!  ", date: "3 years ago" },
    { name: "FLISS EMPTAGE", rating: 5, text: "Excellent service, trustworthy  & Honest. Fitted our artificial turf, very pleased with result  no more muddy paws or digging Thank you. ", date: "2 months ago" },
    { name: "Marvellous Electricals", rating: 5, text: "We at Marvellous Electricals Ltd have been consistently impressed by Kew Green Ltd! Having worked with them for a while now, we can confidently say their quality and craftsmanship are top-notch. They always deliver exceptional results, and …  ", date: "8 months ago" },
    { name: "Anastasia Souzdaltseva", rating: 5, text: "I have just bought a new built house and was looking for a good landscaper that I could trust and I'm honestly so glad that I didn't go elsewhere! The level of professionalism, attentiveness and perfection is truly astounding. Pete and his …  ", date: "2 years ago" },
    { name: "zoltan bago", rating: 5, text: "These guys are truly professional, they put passion into their work and pay exrtemely high attention to the smalles details which makes them truly outstanding. I can only say good things about them, i would reccommend them to everyone who wants quali", date: "8 months ago" },
    { name: "Derek Gillard", rating: 5, text: "My neighbours and I employed Kew Green to renovate our shared drive and my front garden. Pete and Jack and their staff did a superb job at the price quoted and in the time estimated. We were impressed with their professionalism, workmanship, attentio", date: "7 years ago" },
    { name: "Tom Hirst-Dunton", rating: 5, text: "We were really happy with the work that Jack and the team at Kew Green did for us. The design and delivery were both first class and our garden looks great. The team were very receptive to our ideas and responsive to our comments. We would definitely", date: "7 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Kew Green Ltd | Landscaper in Oxford",
    description: "Professional landscaper in Oxford. 5.0-star rated on Google. Call for a free quote.",
  },
};
