import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Plane } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building experiences with{" "}
            <span className="text-slate-400">React</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-slate-400"
          >
            <p className="text-lg leading-8">
              I'm a Frontend Developer with 4+ years of experience designing
              and developing scalable, high-performance web and mobile
              applications using React.js, React Native, TypeScript, and modern
              frontend technologies.
            </p>

            <p className="leading-7">
              My experience spans enterprise airline and airport solutions,
              reusable component architectures, REST API integrations, state
              management, application performance optimization, and automated
              testing.
            </p>

            <p className="leading-7">
              I enjoy working closely with UI/UX designers, backend developers,
              and cross-functional teams to turn requirements into reliable
              and user-focused applications.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Code2 className="mb-4 text-cyan-400" size={28} />

              <p className="text-3xl font-bold text-white">4+</p>

              <p className="mt-1 text-sm text-slate-400">
                Years of Experience
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Plane className="mb-4 text-cyan-400" size={28} />

              <p className="text-3xl font-bold text-white">3+</p>

              <p className="mt-1 text-sm text-slate-400">
                Airline & Airport Products
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <BriefcaseBusiness
                className="mb-4 text-cyan-400"
                size={28}
              />

              <p className="text-3xl font-bold text-white">50+</p>

              <p className="mt-1 text-sm text-slate-400">
                Engineers Served by Dashboard
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;