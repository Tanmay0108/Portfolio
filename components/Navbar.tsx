"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // If visitor is near the top (in Hero section), no navigation link should appear active
      if (window.scrollY < 260) {
        setActive("");
        // Clean up hash if user scrolled back to top
        if (window.location.hash) {
          window.history.replaceState(null, "", window.location.pathname);
        }
        return;
      }

      // If scrolled near bottom of page, activate Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        setActive("contact");
        return;
      }

      // Check section bounding rects
      let current = "";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if the top of section is within upper viewport area
          if (rect.top <= 200 && rect.bottom >= 120) {
            current = id;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Cleanly update history state without jarring jumps
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const renderNavLink = (id: string, label: string, mobile = false) => {
    const isActive = active === id;
    return (
      <a
        className={`${mobile ? "mobile-nav-link" : "nav-link"} ${isActive ? "is-active" : ""}`}
        href={`#${id}`}
        onClick={(e) => handleNavClick(e, id)}
      >
        {label}
      </a>
    );
  };

  return (
    <header
      className="w-full border-b transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg)",
        borderColor: "var(--line)",
      }}
    >
      <div className="shell flex items-center justify-between py-4 sm:py-4.5">
        <a href="#top" className="font-bold tracking-tight text-xl group" aria-label="Tanmay home">
          Tanmay<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-6">
            {links.map(({ id, label }) => (
              <span key={id}>{renderNavLink(id, label)}</span>
            ))}
          </nav>
          <div className="flex items-center gap-3 pl-2 border-l" style={{ borderColor: "var(--line)" }}>
            <a
              href="/resume/tanmay-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !min-h-[38px] !py-2 !px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:brightness-110"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2.5 md:hidden">
          <ThemeToggle />
          <button
            className="icon-button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mobile-nav md:hidden border-b pb-6 pt-3"
          style={{
            borderColor: "var(--line)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="shell flex flex-col gap-3">
            {links.map(({ id, label }) => (
              <span key={id}>{renderNavLink(id, label, true)}</span>
            ))}
            <div className="mt-3 pt-4 border-t flex flex-col gap-3" style={{ borderColor: "var(--line)" }}>
              <a
                className="btn btn-primary w-full text-center text-sm font-semibold py-2.5"
                href="/resume/tanmay-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
