import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
          PRAVEEN ARULMOZHI<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/Praveen_Resume.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-slate-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Praveen_Resume.pdf"
              download
              className="flex w-fit items-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-400"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;