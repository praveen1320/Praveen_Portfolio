import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8 text-center sm:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            I'm open to opportunities involving React.js, React Native and
            frontend development. Feel free to connect with me.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:praveencb1320@gmail.com"
              className="flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              <Mail size={18} />
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/praveenarulmozhi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <BsLinkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;