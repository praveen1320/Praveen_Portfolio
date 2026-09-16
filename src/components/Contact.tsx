import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.05] blur-[140px]" />

      <div className="mx-auto max-w-5xl">
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/60 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-12 lg:p-16"
        >
          {/* Top Highlight */}
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />

          <div className="relative">
            {/* Icon */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10"
            >
              <Sparkles
                size={21}
                className="text-cyan-400"
              />
            </motion.div>

            {/* Heading */}
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's build something{" "}
              <span className="text-slate-400">
                together.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              I'm open to opportunities involving React.js, React Native and
              frontend development. Feel free to connect with me.
            </p>

            {/* Contact Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:praveencb1320@gmail.com"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail size={18} />
                Email Me
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/praveenarulmozhi"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <BsLinkedin size={18} />
                LinkedIn
                <ArrowUpRight size={16} />
              </motion.a>
            </div>

            {/* Contact Details */}
            <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 border-t border-white/10 pt-7 sm:flex-row sm:gap-6">
              <a
                href="mailto:praveencb1320@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                <Mail size={15} />
                praveencb1320@gmail.com
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

              <a
                href="https://linkedin.com/in/praveenarulmozhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                <BsLinkedin size={14} />
                /praveenarulmozhi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;