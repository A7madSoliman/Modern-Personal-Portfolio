import {
  Code2,
  Github,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Users,
  X,
} from "lucide-react";

export const navlinks = [
  {
    id: 1,
    href: "#about",
    label: "About",
  },
  {
    id: 2,
    href: "#projects",
    label: "Projects",
  },
  {
    id: 3,
    href: "#experience",
    label: "Experience",
  },
];

export const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "I built a full-featured e-commerce web application from scratch using React, TypeScript, Vite, and React Query. The goal was to simulate a real-world online store with best-practice.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "Typescript",
      "Tailwind",
      "React Query",
      "JWT",
      "Axios",
      "Formik",
      "Yup ",
    ],
    link: "https://final-ecommerce-project-six.vercel.app/",
    github: "https://github.com/A7madSoliman/Final-Ecommerce-Project",
  },
  {
    title: "E-Commerce Platform",
    description:
      "I’m excited to share my project: FreshCart, a modern e-commerce web app built with Next.js featuring a clean UI and smooth user experience.",
    image: "/projects/project2.png",
    tags: [
      "Next.js",
      "Typescript",
      "React Query",
      "Tailwind",
      "React Hook",
      "Zod",
      "Middleware",
    ],
    link: "https://freshcart-ecommerce-nextjs.vercel.app/",
    github: "https://github.com/A7madSoliman/freshcart-ecommerce-next",
  },
  {
    title: "Modern Travel Website",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/project3.png",
    tags: ["React", "Typescript", "Tailwind", "Lucide React (Icons)"],
    link: "https://static-travel-website.vercel.app/",
    github: "https://github.com/A7madSoliman/Modern-Travel-Website",
  },
  {
    title: "Movies-App",
    description:
      "Movies-App helps you discover and explore movies with an intuitive interface, providing key details like ratings and reviews to find your next favorite film.",
    image: "/projects/project4.png",
    tags: ["React", "Typescript", "Tailwind"],
    link: "https://movies-app-ten-plum.vercel.app/",
    github: "https://github.com/A7madSoliman/Movies-App/tree/master",
  },
];

export const experiences = [
  {
    period: "2025 — Present",
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    description:
      "Delivered tailored web solutions for small businesses and startups, shipping 10+ responsive websites and web apps from planning and UI implementation to deployment, performance optimization, and ongoing support.",
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack React Query",
      "React Hook Form",
      "Zod",
      "Next.js Middleware",
      "REST APIs",
      "UI/UX",
      "Git",
    ],
    current: true,
  },
  {
    period: "2024 — 2025",
    role: "Frontend Engineer Intern",
    company: "Route Internship",
    description:
      "Built a production-style e-commerce experience with Next.js (App Router) and TypeScript, implementing authentication flows, protected routes, cart CRUD, wishlist, checkout/payment session, and orders history. Improved UX with React Query caching/mutations, per-action loaders, and consistent UI components.",
    technologies: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "UI/UX",
      "Git",
      "Vercel",
    ],
    current: false,
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ahmadsoliman283@gmail.com",
    href: "https://www.linkedin.com/in/ahmed-soliman-1334b116a/",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+2 01014215587",
    href: "tel:+201014215587",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egy, Cairo",
    href: "#",
  },
];

export const footerLinks = [
  {
    id: 1,
    href: "#about",
    label: "About",
  },
  {
    id: 2,
    href: "#projects",
    label: "Projects",
  },
  {
    id: 3,
    href: "#experience",
    label: "Experience",
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/A7madSoliman", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ahmed-soliman-1334b116a/",
    label: "LinkedIn",
  },
  { icon: X, href: "https://x.com/A7madSoliman92", label: "Twitter" },
];
