import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  FolderCode,
  LockKeyhole,
} from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-400" />

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Projects
            </p>
          </div>

          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                What I've worked on
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                A selection of web and mobile solutions I've contributed to
                across airline, airport, and frontend modernization
                initiatives.
              </p>
            </div>

            {/* Project Count */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
              <FolderCode
                size={15}
                className="text-cyan-400"
              />

              <span className="text-xs font-medium text-slate-400">
                {projects.length} Featured Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -7,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/25"
            >
              {/* Top Accent */}
              <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Header */}
              <div className="relative border-b border-white/10 p-6">
                <div className="flex items-start justify-between">
                  {/* Project Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.07] text-3xl"
                  >
                    {project.icon}
                  </motion.div>

                  {/* Project Number */}
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </p>

                  <ArrowUpRight
                    size={19}
                    className="text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Title */}
                <h3 className="text-xl font-bold leading-snug text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Key Contributions
                  </p>

                  <ul className="mt-4 space-y-3">
                    {project.highlights.map(
                      (highlight, highlightIndex) => (
                        <motion.li
                          key={highlight}
                          initial={{
                            opacity: 0,
                            x: -8,
                          }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.3,
                            delay:
                              index * 0.1 +
                              highlightIndex * 0.05,
                          }}
                          className="flex gap-2.5 text-xs leading-5 text-slate-400"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-cyan-400"
                          />

                          <span>{highlight}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto pt-8">
                  <div className="border-t border-white/10 pt-5">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors group-hover:border-white/15 group-hover:text-slate-300"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Confidentiality Note */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
        >
          <LockKeyhole
            size={17}
            className="mt-0.5 shrink-0 text-slate-500"
          />

          <p className="text-xs leading-6 text-slate-500">
            Project descriptions are presented at a high level to respect
            client and employer confidentiality.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;