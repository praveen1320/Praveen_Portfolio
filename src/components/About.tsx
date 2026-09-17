import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Plane,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    value: "4+",
    label: "Years of Experience",
    icon: Code2,
  },
  {
    value: "3+",
    label: "Airline & Airport Products",
    icon: Plane,
  },
  {
    value: "50+",
    label: "Engineers Served by Dashboard",
    icon: BriefcaseBusiness,
  },
];

const capabilities = [
  "Frontend Architecture",
  "Web & Mobile Development",
  "Performance Optimization",
  "Testing & Quality",
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-6 pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

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
              About Me
            </p>
          </div>

          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Turning ideas into{" "}
            <span className="text-slate-400">
              reliable experiences
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
            A frontend engineering journey focused on scalable applications,
            thoughtful architecture, and dependable user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl sm:p-9"
          >
            {/* Top highlight */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Card Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                <Sparkles
                  size={21}
                  className="text-cyan-400"
                />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Profile
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Who I am
                </h3>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 space-y-5">
              <p className="text-lg leading-8 text-slate-300">
                I'm a Frontend Developer with 4+ years of experience designing
                and developing scalable, high-performance web and mobile
                applications using React.js, React Native, TypeScript, and
                modern frontend technologies.
              </p>

              <p className="leading-7 text-slate-400">
                My experience spans enterprise airline and airport solutions,
                reusable component architectures, REST API integrations, state
                management, application performance optimization, and
                automated testing.
              </p>

              <p className="leading-7 text-slate-400">
                I enjoy working closely with UI/UX designers, backend
                developers, and cross-functional teams to turn requirements
                into reliable and user-focused applications.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mt-8 flex flex-wrap gap-2">
              {capabilities.map((capability, index) => (
                <motion.span
                  key={capability}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-400"
                >
                  {capability}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(34,211,238,0.25)",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/[0.08] blur-2xl transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                        <Icon
                          size={21}
                          className="text-cyan-400"
                        />
                      </div>

                      <span className="text-xs text-slate-600">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-5 text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;