"use client";

import { MotionDiv } from "./Motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#campus", label: "Campus" },
  { href: "#results", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cls = useMemo(
    () =>
      [
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled ? "bg-zinc-950/70 backdrop-blur border-b border-white/10" : "bg-transparent",
      ].join(" "),
    [scrolled]
  );

  return (
    <header className={cls}>
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 border border-white/10">
            <GraduationCap className="h-5 w-5 text-cyan-300" />
          </span>
          <span className="tracking-tight">Groupe Scolaire Bennis et Terrab</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-200 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            Book a Visit
          </a>
        </nav>

        <button
          className="md:hidden btn-ghost"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <MotionDiv
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden border-t border-white/10 bg-zinc-950/80 backdrop-blur"
        >
          <div className="container-x py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-zinc-200 hover:bg-white/5 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Book a Visit
            </a>
          </div>
        </MotionDiv>
      )}
    </header>
  );
}
