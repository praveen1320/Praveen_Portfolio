export interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Airline Maintenance Dashboard",
    category: "Web Application",
    description:
      "Enterprise dashboard designed for aircraft maintenance operations, helping engineers monitor serviceability, maintenance schedules, and task workflows.",
    technologies: [
      "React.js",
      "Redux Saga",
      "JavaScript",
      "Jest",
    ],
    highlights: [
      "Used by approximately 50+ engineers",
      "Built reusable component architecture",
      "Improved dashboard responsiveness",
      "Implemented asynchronous state management",
    ],
    icon: "✈️",
  },
  {
    title: "Airport Operations Mobile App",
    category: "Mobile Application",
    description:
      "Cross-platform mobile application designed for airport operations across iOS and Android, with support for low-connectivity environments.",
    technologies: [
      "React Native",
      "TypeScript",
      "REST APIs",
      "Axios",
    ],
    highlights: [
      "Cross-platform iOS and Android application",
      "Offline support",
      "Real-time synchronization",
      "Improved field usability in low-connectivity environments",
    ],
    icon: "📱",
  },
  {
    title: "OTA Deployment & Monorepo Modernization",
    category: "Mobile / Architecture",
    description:
      "Implemented an OTA update approach for React Native applications and contributed to monorepo modernization using TurboRepo.",
    technologies: [
      "React Native",
      "Revopush",
      "TurboRepo",
      "TypeScript",
    ],
    highlights: [
      "Enabled OTA application updates",
      "Reduced dependency duplication",
      "Improved developer productivity",
      "Accelerated application release cycles",
    ],
    icon: "🚀",
  },
];