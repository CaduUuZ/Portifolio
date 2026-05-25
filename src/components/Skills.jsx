import { useEffect, useRef } from "react";
import { SectionTitle } from "./About";
import { skillsData } from "../data/skills";

export default function Skills({ t }) {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const cats = [
    { key: "frontend", label: t.skills.categories.frontend, items: skillsData.frontend },
    { key: "backend", label: t.skills.categories.backend, items: skillsData.backend },
    { key: "database", label: t.skills.categories.database, items: skillsData.database },
    { key: "tools", label: t.skills.categories.tools, items: skillsData.tools },
  ];

  return (
    <section id="skills" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div ref={ref} className="section-animate" style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionTitle>{t.skills.title}</SectionTitle>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
          {cats.map((cat) => (
            <div key={cat.key} style={{
              background: "var(--card-bg)", border: "1px solid var(--border)",
              borderRadius: 12, padding: 24,
              transition: "border-color 0.3s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(208,30,95,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <p className="mono" style={{ color: "var(--pink)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
                {cat.label}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {cat.items.map((skill) => (
                  <div key={skill.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 16 }}>{skill.icon}</span>
                    <span style={{ color: "var(--gray)", fontSize: 14, fontWeight: 600 }}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
