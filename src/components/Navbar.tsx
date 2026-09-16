import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const current = sections.find((section) => {
        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group text-left"
        >
          <div className="text-lg font-bold tracking-tight text-white">
            Praveen<span className="text-cyan-400">.</span>
          </div>

          <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Frontend Developer
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative py-2 text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}

              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-cyan-400" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://linkedin.com/in/praveenarulmozhi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
          >
            <BsLinkedin size={16} />
          </a>

          <a
            href="/Praveen_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/20"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 px-6 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-cyan-400/10 text-cyan-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-4 flex gap-3 border-t border-slate-800 pt-4">
              <a
                href="https://linkedin.com/in/praveenarulmozhi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-800 py-2.5 text-sm text-slate-300"
              >
                <BsLinkedin size={15} />
                LinkedIn
              </a>

              <a
                href="/Praveen_Resume.pdf"
                download
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
              >
                <Download size={15} />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;