import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Code2,
  Users,
  Sparkles,
} from "lucide-react";

const experienceHighlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Designed and developed high-performance React.js web applications and cross-platform React Native applications for airline and airport solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Architecture & State Management",
    description:
      "Built scalable frontend solutions using Redux and Redux Saga for state management, asynchronous operations, and API orchestration.",
  },
  {
    icon: Users,
    title: "Cross-functional Collaboration",
    description:
      "Worked closely with UI/UX designers, backend developers, and cross-functional teams in an Agile/Scrum environment.",
  },
  {
    icon: Award,
    title: "Quality & Performance",
    description:
      "Improved application responsiveness through React optimization and contributed to unit and integration testing using Jest and React Testing Library.",
  },
];

const responsibilities = [
  "Developed dynamic, high-performance React.js applications for airline maintenance operations.",
  "Built cross-platform React Native applications for iOS and Android.",
  "Implemented Redux and Redux Saga for efficient asynchronous state management and API orchestration.",
  "Worked on real-time baggage tracking and push notification functionality for flight and travel updates.",
  "Optimized application performance using React memoization, lazy loading, and lifecycle optimization.",
  "Created engineering dashboards for aircraft serviceability, maintenance schedules, and task workflows.",
  "Developed unit and integration tests using Jest and React Testing Library.",
];

const technologies = [
  "React.js",
  "React Native",
  "TypeScript",
  "Redux",
  "Redux Saga",
  "REST APIs",
  "Jest",
  "React Testing Library",
  "Git",
  "CI/CD",
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

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
              Experience
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My professional journey
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Building enterprise-grade web and mobile applications in the
            Travel, Transport & Hospitality domain.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-black/10 backdrop-blur-xl"
        >
          {/* Top Accent */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Card Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-3xl" />

          <div className="relative p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-medium text-cyan-300">
                    February 2022 — Present
                  </span>

                  <span className="text-xs text-slate-600">
                    TCS
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                  Frontend Developer
                </h3>

                <p className="mt-2 text-lg font-medium text-slate-300">
                  Tata Consultancy Services (TCS)
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Travel, Transport & Hospitality — Airline & Airport
                  Solutions
                </p>
              </div>

              {/* Role Icon */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 3,
                }}
                className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] md:flex"
              >
                <Code2
                  size={25}
                  className="text-cyan-400"
                />
              </motion.div>
            </div>

            {/* Divider */}
            <div className="my-9 h-px bg-white/10" />

            {/* Responsibilities */}
            <div>
              <div className="flex items-center gap-3">
                <Sparkles
                  size={18}
                  className="text-cyan-400"
                />

                <h4 className="text-lg font-semibold text-white">
                  What I work on
                </h4>
              </div>

              <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={responsibility}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -15 : 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group flex gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-cyan-400 transition-transform duration-200 group-hover:scale-110"
                    />

                    <p className="text-sm leading-7 text-slate-400">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Technologies & Tools
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
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
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/25 hover:text-cyan-300"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {experienceHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-cyan-400/20"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/[0.07] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Career Summary */}
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
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Current Focus
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Building scalable React.js and React Native solutions for
              enterprise airline and airport applications.
            </p>
          </div>

          <div className="shrink-0">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Frontend Engineering
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;