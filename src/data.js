// Featured projects render as large showcase rows with a browser-frame screenshot
// gallery; the rest render as cards in a grid below.
// `screenshots[0]` is the cover image. Leave `screenshots` empty for a placeholder.
export const projects = [
  {
    id: 1,
    featured: true,
    badge: "Co-Founder · Startup",
    category: "Software Studio · Co-Founder",
    title: "NoqTech",
    description:
      "NoqTech is the software studio I co-founded and am building — we design, engineer and ship web apps, mobile apps, AI systems, enterprise software and games for businesses that want to innovate and grow. I built the company site end to end as a fast, statically exported Next.js app with a full portfolio, services catalogue and project-brief intake.",
    facts: [
      { label: "Core disciplines", value: "8" },
      { label: "App installs", value: "1M+" },
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    screenshots: [
      { src: "/projects/noqtech/home.png", label: "Home" },
      { src: "/projects/noqtech/work.png", label: "Our Work" },
    ],
    github: "https://github.com/henryelorm/noqtech",
    demo: "https://noqtech.vercel.app/",
  },
  {
    id: 2,
    featured: true,
    badge: "Live",
    category: "Enterprise SaaS · Church Operations",
    title: "Church Management System",
    description:
      "A production-grade, multi-tenant church management platform that brings members, attendance, giving, events, groups, sermons and communications into one workspace — with schema-per-tenant isolation, JWT auth and role-based access for every level of a church.",
    facts: [
      { label: "Architecture", value: "Multi-tenant" },
      { label: "Core modules", value: "7" },
    ],
    tech: ["Next.js", "TypeScript", "Django REST", "PostgreSQL", "Celery", "Redis", "Docker"],
    screenshots: [
      { src: "/projects/church-ms/dashboard.webp", label: "Dashboard" },
      { src: "/projects/church-ms/attendance.webp", label: "Attendance" },
      { src: "/projects/church-ms/finance.webp", label: "Finance" },
    ],
    github: "https://github.com/quarshie133/tlpci-hop-chms",
    demo: "https://tlpci-hop.vercel.app",
  },
  {
    id: 3,
    category: "Web Platform · Courses & Payments",
    title: "Love Vibe Studio Platform",
    description:
      "A full-stack relationship counseling platform with expert-led online courses, a custom enrollment system with Paystack payments, discovery-call booking and a secure admin dashboard for enrollments and enquiries.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Paystack", "Vercel"],
    screenshots: [{ src: "/projects/lovevibe/home.png", label: "Home" }],
    github: "https://github.com/quarshie133/Love_vibe_studios",
    demo: "https://www.lovevibestudio.com/",
  },
  {
    id: 4,
    category: "Full-stack CMS · Publishing",
    title: "Writer Portfolio App",
    description:
      "A full-stack writer portfolio and content management platform with a rich-text editor, subscriber newsletter, image uploads, admin dashboard and authentication — built and deployed to production.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary", "Tailwind CSS", "Vercel"],
    screenshots: [{ src: "/projects/writer/home.png", label: "Home" }],
    github: "https://github.com/quarshie133/prince-henry-portfolio-app",
    demo: "https://prince-henry-portfolio-app.vercel.app/",
  },
  {
    id: 5,
    category: "Mobile App · Marketplace",
    title: "GigPlug Mobile App",
    description:
      "A React Native MVP marketplace connecting musicians with gig organizers, featuring role-based navigation, searchable feeds and direct gig applications.",
    tech: ["React Native", "Expo", "TypeScript", "NativeWind", "Zustand"],
    screenshots: [],
    github: "https://github.com/quarshie133/gigplug",
    demo: "",
  },
];
