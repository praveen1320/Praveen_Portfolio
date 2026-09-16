import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Code2,
  Users,
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

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            My professional journey
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Building enterprise-grade web and mobile applications in the
            Travel, Transport & Hospitality domain.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
        >
          {/* Top accent */}
          <div className="h-1 w-full bg-cyan-400" />

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  February 2022 — Present
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Frontend Developer
                </h3>

                <p className="mt-2 text-lg font-medium text-slate-300">
                  Tata Consultancy Services (TCS)
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Travel, Transport & Hospitality — Airline & Airport
                  Solutions
                </p>
              </div>

              <div className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-400">
                4+ Years
              </div>
            </div>

            {/* Description */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <h4 className="text-lg font-semibold text-white">
                What I work on
              </h4>

              <ul className="mt-5 space-y-4">
                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Developed dynamic, high-performance React.js applications
                    for airline maintenance operations.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Built cross-platform React Native applications for iOS and
                    Android.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Implemented Redux and Redux Saga for efficient asynchronous
                    state management and API orchestration.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Worked on real-time baggage tracking and push notification
                    functionality for flight and travel updates.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Optimized application performance using React memoization,
                    lazy loading, and lifecycle optimization.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Created engineering dashboards for aircraft serviceability,
                    maintenance schedules, and task workflows.
                  </span>
                </li>

                <li className="flex gap-3 text-sm leading-7 text-slate-400">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-cyan-400"
                  />
                  <span>
                    Developed unit and integration tests using Jest and React
                    Testing Library.
                  </span>
                </li>
              </ul>
            </div>

            {/* Technology Tags */}
            <div className="mt-10 border-t border-white/10 pt-8">
              <h4 className="text-lg font-semibold text-white">
                Technologies
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
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
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {experienceHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <Icon size={26} className="text-cyan-400" />

                <h3 className="mt-4 font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;