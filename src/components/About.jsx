import { useEffect, useRef } from "react";
import { Download } from "lucide-react";

export default function About({ t, language }) {
  const ref = useRef(null);
  const x = console.log(language);
  const cvFile =
    language === "pt"
      ? "/cv/cv-pt.pdf"
      : "/cv/cv-en.pdf";

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div ref={ref} className="section-animate" style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionTitle>{t.about.title}</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Avatar placeholder */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 260, height: 260, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(208,30,95,0.2), rgba(208,30,95,0.05))",
              border: "2px solid rgba(208,30,95,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 72, position: "relative",
            }}>
              <div style={{
                width: 260,
                height: 260,
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(208,30,95,0.2), rgba(208,30,95,0.05))",
                border: "2px solid rgba(208,30,95,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden"
              }}>
                
                <img 
                  src="/images/avatar.jpg"
                  alt="Carlos"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <div style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: "1px solid rgba(208,30,95,0.15)",
                  animation: "spin 20s linear infinite",
                }} />

                <div style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "var(--pink)",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  border: "3px solid var(--bg2)",
                }} />
              </div>
              <div style={{
                position: "absolute", inset: -8, borderRadius: "50%",
                border: "1px solid rgba(208,30,95,0.15)",
                animation: "spin 20s linear infinite",
              }} />
              <div style={{
                position: "absolute", top: 10, right: 10,
                background: "var(--pink)", borderRadius: "50%", width: 20, height: 20,
                border: "3px solid var(--bg2)",
              }} />
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>{t.about.p1}</p>
            <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: 16, fontSize: 15 }}>{t.about.p2}</p>
            <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: 32, fontSize: 15 }}>{t.about.p3}</p>

            <a
              href={cvFile}
              download
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "transparent",
                color: "var(--pink)",
                border: "1px solid var(--pink)",
                borderRadius: 6,
                padding: "11px 24px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--pink)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--pink)";
              }}
            >
              <Download size={15} />
              {t.about.download_cv}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
        @media (max-width: 640px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

export function SectionTitle({ children }) {
  return (
    <div style={{ marginBottom: 56 }}>
      <p className="mono" style={{ color: "var(--pink)", fontSize: 12, letterSpacing: 4, textTransform: "uppercase", marginBottom: 8 }}>
        // section
      </p>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: -1, position: "relative", display: "inline-block" }}>
        {children}
        <span style={{ position: "absolute", bottom: -6, left: 0, width: "40%", height: 3, background: "var(--pink)", borderRadius: 2 }} />
      </h2>
    </div>
  );
}
