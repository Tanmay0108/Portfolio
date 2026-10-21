"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
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
      const navOffset = 92;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, elementPosition - navOffset),
        behavior: "smooth",
      });
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
      className="fixed top-0 left-0 right-0 z-50 w-full border-b transition-colors duration-200"
      style={{
        backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderColor: "var(--line)",
      }}
    >
      <div className="shell grid grid-cols-[auto_1fr_auto] items-center py-3.5 sm:py-4">
        {/* Left: Brand Logo */}
        <div className="flex items-center">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.replaceState(null, "", window.location.pathname);
            }}
            className="font-bold tracking-tight text-xl group select-none"
            aria-label="Tanmay - back to top"
          >
            Tanmay<span style={{ color: "var(--accent)" }}>.</span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links visually centered within shell */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center justify-center gap-6 lg:gap-8"
        >
          {links.map(({ id, label }) => (
            <span key={id}>{renderNavLink(id, label)}</span>
          ))}
        </nav>

        {/* Right: Actions (Resume + ThemeToggle + Mobile Hamburger) */}
        <div className="flex items-center justify-end gap-3">
          <a
            href="/resume/tanmay-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !min-h-[38px] !py-1.5 !px-4 text-xs font-semibold uppercase tracking-wider transition-transform duration-200 hidden sm:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            className="icon-button md:hidden"
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
          className="mobile-nav md:hidden border-b pb-6 pt-3 shadow-lg"
          style={{
            borderColor: "var(--line)",
            backgroundColor: "var(--surface)",
          }}
        >
          <div className="shell flex flex-col gap-1.5">
            {links.map(({ id, label }) => (
              <span key={id}>{renderNavLink(id, label, true)}</span>
            ))}
            <div
              className="mt-3 pt-4 border-t flex flex-col gap-3 sm:hidden"
              style={{ borderColor: "var(--line)" }}
            >
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
