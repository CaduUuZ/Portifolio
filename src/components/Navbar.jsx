import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LANGS = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.3s",
        background: scrolled ? "rgba(13, 8, 32, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(208,30,95,0.15)" : "none",
        padding: "0 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" className="mono" style={{ color: "var(--pink)", fontWeight: 700, fontSize: 18, textDecoration: "none", letterSpacing: 1 }}>
          &lt;CE /&gt;
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: 14, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "var(--pink)")}
              onMouseLeave={(e) => (e.target.style.color = "var(--gray)")}
            >{l.label}</a>
          ))}
          <div style={{ display: "flex", gap: 6 }}>
            {LANGS.map((lg) => (
              <button key={lg.code} onClick={() => setLang(lg.code)} className="mono"
                style={{
                  background: lang === lg.code ? "var(--pink)" : "transparent",
                  color: lang === lg.code ? "#fff" : "var(--gray)",
                  border: `1px solid ${lang === lg.code ? "var(--pink)" : "rgba(184,184,199,0.3)"}`,
                  borderRadius: 4, padding: "3px 9px", fontSize: 11, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", letterSpacing: 1,
                }}
              >{lg.label}</button>
            ))}
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="mobile-menu-btn"
          style={{ background: "none", border: "none", color: "var(--white)", cursor: "pointer", display: "none" }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(13, 8, 32, 0.98)", borderTop: "1px solid rgba(208,30,95,0.2)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ color: "var(--gray)", textDecoration: "none", fontSize: 16, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}
            >{l.label}</a>
          ))}
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {LANGS.map((lg) => (
              <button key={lg.code} onClick={() => { setLang(lg.code); setOpen(false); }} className="mono"
                style={{
                  background: lang === lg.code ? "var(--pink)" : "transparent",
                  color: lang === lg.code ? "#fff" : "var(--gray)",
                  border: `1px solid ${lang === lg.code ? "var(--pink)" : "rgba(184,184,199,0.3)"}`,
                  borderRadius: 4, padding: "5px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer",
                }}
              >{lg.label}</button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
