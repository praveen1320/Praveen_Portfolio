import { motion } from "framer-motion";
import {
  Braces,
  Database,
  GitBranch,
  Palette,
  Server,
  TestTube2,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Braces,
    featured: true,
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
    featured: false,
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
    featured: false,
    skills: [
      "REST APIs",
      "Axios",
      "Fetch API",
      "Third-Party Integrations",
    ],
  },
  {
    title: "Testing",
    icon: TestTube2,
    featured: false,
    skills: [
      "Jest",
      "React Testing Library",
      "Vitest",
      "Unit Testing",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: GitBranch,
    featured: false,
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
    featured: false,
    skills: [
      "Figma",
      "UI/UX Principles",
      "Responsive Design",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Skills
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                My technical toolkit
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Technologies and tools I use to build scalable web and
                mobile applications.
              </p>
            </div>

            {/* Core Stack Indicator */}
            <div className="flex items-center gap-2 self-start rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 lg:self-auto">
              <Sparkles
                size={15}
                className="text-cyan-400"
              />

              <span className="text-xs font-medium text-cyan-300">
                Core Stack
              </span>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                }}
                className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
                  category.featured
                    ? "border-cyan-400/25 bg-cyan-400/[0.04]"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20"
                }`}
              >
                {/* Top Highlight */}
                <div
                  className={`absolute left-0 right-0 top-0 h-px transition-opacity duration-300 ${
                    category.featured
                      ? "bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-100"
                      : "bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100"
                  }`}
                />

                {/* Background Hover Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        category.featured
                          ? "bg-cyan-400/15"
                          : "bg-white/[0.05]"
                      }`}
                    >
                      <Icon
                        size={22}
                        className="text-cyan-400"
                      />
                    </motion.div>

                    <span className="text-xs font-medium tracking-widest text-slate-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {category.title}
                  </h3>

                  {/* Skills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay:
                            index * 0.08 +
                            skillIndex * 0.035,
                        }}
                        whileHover={{
                          y: -2,
                        }}
                        className={`cursor-default rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                          category.featured &&
                          (skill === "React.js" ||
                            skill === "React Native" ||
                            skill === "TypeScript")
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                            : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/20 hover:text-slate-100"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Core Stack */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Primary Technologies
              </p>

              <p className="mt-1 text-sm text-slate-400">
                The technologies most closely aligned with my frontend
                development experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "React Native",
                "TypeScript",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;