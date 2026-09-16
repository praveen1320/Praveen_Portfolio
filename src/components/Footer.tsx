import { BsLinkedin } from "react-icons/bs";
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-white"
            >
              Praveen<span className="text-cyan-400">.</span>
            </a>

            <p className="mt-1 text-sm text-slate-500">
              Frontend Developer · React.js · React Native
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/praveenarulmozhi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <BsLinkedin size={15} />
            </a>

            <a
              href="mailto:praveencb1320@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-cyan-400/30 hover:text-cyan-400"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className=" flex flex-col gap-3  pt-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Praveen Arulmozhi. All rights reserved.
          </p>

          <p>
            Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;