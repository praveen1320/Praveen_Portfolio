import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            What I've worked on
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of web and mobile solutions I've contributed to across
            airline, airport, and frontend modernization initiatives.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between border-b border-white/10 p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl">
                  {project.icon}
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-slate-600 transition group-hover:text-cyan-400"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-200">
                    Highlights
                  </p>

                  <ul className="mt-3 space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-xs leading-5 text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Confidentiality Note */}
        <p className="mt-8 text-center text-xs text-slate-600">
          Project descriptions are presented at a high level to respect
          client and employer confidentiality.
        </p>
      </div>
    </section>
  );
};

export default Projects;