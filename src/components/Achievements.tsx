import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Palette,
  Users,
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Rising Star Award",
    organization: "Tata Consultancy Services",
    description:
      "Recognized for contributions and commitment toward delivering quality frontend solutions.",
  },
  {
    icon: BadgeCheck,
    title: "Star Team Award",
    organization: "Tata Consultancy Services",
    description:
      "Recognized as part of a team for successful delivery and collaboration on enterprise solutions.",
  },
  {
    icon: Users,
    title: "POC Team Leadership",
    organization: "Tata Consultancy Services",
    description:
      "Led a team of 4 for multiple proof-of-concept initiatives and contributed to frontend solution development.",
  },
  {
    icon: BadgeCheck,
    title: "Frontend Testing",
    organization: "Engineering Practice",
    description:
      "Championed unit testing practices using Jest/Vitest and React Testing Library to improve frontend quality.",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "Frontend Development",
    subtitle: "React.js",
    organization: "HackerRank",
  },
  {
    icon: Palette,
    title: "UI/UX Figma Design Course",
    subtitle: "UI/UX Design",
    organization: "Udemy",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[130px]" />

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
              Achievements
            </p>
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recognition & learning
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            Recognition received through professional contributions and
            continued learning across frontend development and UI/UX design.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Professional Recognition
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Achievements
              </h3>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 sm:block">
              04 Highlights
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={achievement.title}
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
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-cyan-400/20"
                >
                  {/* Top Highlight */}
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/[0.07] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10"
                      >
                        <Icon
                          size={22}
                          className="text-cyan-400"
                        />
                      </motion.div>

                      <span className="text-xs tracking-[0.2em] text-slate-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="mt-6 text-lg font-semibold text-white">
                      {achievement.title}
                    </h4>

                    <p className="mt-1 text-xs font-medium text-cyan-400">
                      {achievement.organization}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
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
            duration: 0.6,
          }}
          className="mt-14"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Certifications & Courses
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Continued learning
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((certification, index) => {
              const Icon = certification.icon;

              return (
                <motion.div
                  key={certification.title}
                  whileHover={{
                    y: -4,
                  }}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/20"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06]">
                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                      {certification.organization}
                    </p>

                    <h4 className="mt-1 text-base font-semibold text-white">
                      {certification.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {certification.subtitle}
                    </p>
                  </div>

                  <span className="hidden text-xs text-slate-700 sm:block">
                    0{index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;