"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = ["About", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = ["top", ...links.map((link) => link.toLowerCase())]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const navLink = (label: string, mobile = false) => {
    const id = label.toLowerCase();
    const isActive = active === id;
    return (
      <a
        className={`${mobile ? "mobile-nav-link" : "nav-link"} ${isActive ? "is-active" : ""}`}
        href={`#${id}`}
        onClick={() => setOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md transition-colors duration-200"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="shell flex items-center justify-between py-3.5 sm:py-4">
        <a href="#top" className="font-bold tracking-tight text-xl group" aria-label="Tanmay home">
          Tanmay<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <nav aria-label="Primary navigation" className="flex items-center gap-6">
            {links.map((link) => (
              <span key={link}>{navLink(link)}</span>
            ))}
          </nav>
          <div className="flex items-center gap-3 pl-2 border-l" style={{ borderColor: "var(--line)" }}>
            <a
              href="/resume/tanmay-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !min-h-[38px] !py-2 !px-4 text-xs font-semibold uppercase tracking-wider"
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
            {links.map((link) => (
              <span key={link}>{navLink(link, true)}</span>
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

