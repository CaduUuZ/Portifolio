import { TypeAnimation } from "react-type-animation";

export default function Hero({ t }) {
  const roles = t.hero.roles;
  const sequence = roles.flatMap((r) => [r, 2000, ""]).concat(1000);

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px 40px",
      }}
    >
      {/* Orbs */}
      <div style={{ position: "absolute", top: "15%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(208,30,95,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(208,30,95,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, width: "100%", zIndex: 1 }}>
        {/* Greeting badge */}
        <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(208,30,95,0.1)", border: "1px solid rgba(208,30,95,0.3)", borderRadius: 100, padding: "6px 16px", marginBottom: 28, fontSize: 12, color: "var(--pink)", letterSpacing: 2, textTransform: "uppercase" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--pink)", display: "inline-block", animation: "pulse 2s infinite" }} />
          {t.hero.greeting}
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", fontWeight: 800, lineHeight: 1.05, marginBottom: 16, letterSpacing: -2 }}>
          {t.hero.name}
        </h1>

        {/* Typing role */}
        <div style={{ fontSize: "clamp(22px, 4vw, 42px)", fontWeight: 700, marginBottom: 32, height: "1.4em", display: "flex", alignItems: "center", gap: 12 }}>
          <TypeAnimation
            key={roles.join(",")}
            sequence={sequence}
            wrapper="span"
            speed={50}
            deletionSpeed={70}
            repeat={Infinity}
            style={{ color: "var(--pink)", display: "inline-block" }}
          />
        </div>

        {/* Languages badge */}
        <p className="mono" style={{ color: "var(--gray)", fontSize: 13, marginBottom: 44, letterSpacing: 2 }}>
          🌎 {t.hero.languages}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects"
            style={{
              background: "var(--pink)", color: "#fff", padding: "14px 32px", borderRadius: 6,
              textDecoration: "none", fontWeight: 700, fontSize: 14, letterSpacing: 1,
              textTransform: "uppercase", transition: "all 0.2s", display: "inline-block",
              boxShadow: "0 0 24px rgba(208,30,95,0.4)",
            }}
            onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 32px rgba(208,30,95,0.6)"; }}
            onMouseLeave={(e) => { e.target.style.transform = ""; e.target.style.boxShadow = "0 0 24px rgba(208,30,95,0.4)"; }}
          >
            {t.hero.cta_projects}
          </a>
          <a href="#contact"
            style={{
              background: "transparent", color: "var(--white)", padding: "14px 32px", borderRadius: 6,
              textDecoration: "none", fontWeight: 700, fontSize: 14, letterSpacing: 1,
              textTransform: "uppercase", transition: "all 0.2s", display: "inline-block",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = "var(--pink)"; e.target.style.color = "var(--pink)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.color = "var(--white)"; }}
          >
            {t.hero.cta_contact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, var(--pink))", animation: "scrollLine 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top;} 50%{transform:scaleY(1);transform-origin:top;} 51%{transform:scaleY(1);transform-origin:bottom;} 100%{transform:scaleY(0);transform-origin:bottom;} }
      `}</style>
    </section>
  );
}
