import { motion } from "framer-motion";
import {
  Braces,
  Database,
  GitBranch,
  Palette,
  Server,
  TestTube2,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Braces,
    skills: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "State Management",
    icon: Database,
    skills: [
      "Redux",
      "Redux Saga",
      "Redux Toolkit",
      "Context API",
      "React Hooks",
    ],
  },
  {
    title: "APIs & Data",
    icon: Server,
    skills: ["REST APIs", "Axios", "Fetch API", "Third-Party Integrations"],
  },
  {
    title: "Testing",
    icon: TestTube2,
    skills: ["Jest", "React Testing Library", "Vitest", "Unit Testing"],
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub Actions",
      "Jenkins",
      "CI/CD",
      "TurboRepo",
    ],
  },
  {
    title: "Design",
    icon: Palette,
    skills: ["Figma", "UI/UX Principles", "Responsive Design"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            My technical toolkit
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Technologies and tools I use to build scalable web and mobile
            applications.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <Icon
                  size={28}
                  className="text-cyan-400 transition group-hover:scale-110"
                />

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {category.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;