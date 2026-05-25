import { useEffect, useRef } from "react";
import { Link2, ExternalLink } from "lucide-react";
import { SectionTitle } from "./About";

export default function Projects({ t }) {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const projects = t.projects.items;

  /* 
   * ============================================================
   * COMO ADICIONAR PROJETOS:
   * 
   * 1. Vá em src/data/translations.js
   * 2. Dentro de cada idioma (pt, en, es), encontre "projects.items"
   * 3. Edite os campos:
   *    - title: nome do projeto
   *    - description: descrição curta
   *    - stack: array com tecnologias ["React", "Node.js", ...]
   *    - github: link do repositório
   *    - demo: link do deploy/demo
   * 4. Para adicionar imagem ao card, adicione o campo:
   *    - image: "/images/nome-do-projeto.png"
   *    (coloque a imagem na pasta public/images/)
   * ============================================================
   */

  return (
    <section id="projects" style={{ padding: "100px 24px", background: "var(--bg2)" }}>
      <div ref={ref} className="section-animate" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionTitle>{t.projects.title}</SectionTitle>
        <p style={{ color: "var(--gray)", marginBottom: 48, fontSize: 15, marginTop: -32 }}>
          {t.projects.subtitle}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 24 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} t={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #projects > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, t, index }) {
  /* 
   * =====================================================
   * COMO ADICIONAR SCREENSHOT AO CARD:
   * 
   * 1. Coloque sua imagem em: public/images/
   * 2. No arquivo translations.js, adicione ao projeto:
   *    image: "/images/nome-da-imagem.png"
   * 3. O card irá exibir automaticamente a imagem
   * =====================================================
   */

  const colors = ["#D01E5F", "#8B2FC9", "#1E7FD0", "#1ED05F"];
  const accent = colors[index % colors.length];

  return (
    <div style={{
      background: "var(--card-bg)",
      border: "1px solid var(--border)",
      borderRadius: 12,
      overflow: "hidden",
      transition: "all 0.3s",
      cursor: "default",
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Image area */}
      {project.image ? (
        <img src={project.image} alt={project.title}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
        />
      ) : (
        /* Placeholder quando não há screenshot */
        <div style={{
          height: 180,
          background: `linear-gradient(135deg, ${accent}15, ${accent}05)`,
          borderBottom: `1px solid ${accent}30`,
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          {/* Grid decorativo */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `linear-gradient(${accent}10 1px, transparent 1px), linear-gradient(90deg, ${accent}10 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />
          <div style={{ position: "relative", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>
              {index === 0 ? "🖥️" : index === 1 ? "💰" : index === 2 ? "🔬" : "📱"}
            </div>
            <p className="mono" style={{ color: accent, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", opacity: 0.7 }}>
              screenshot soon
            </p>
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: 24 }}>
        {/* Number + Title */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <span className="mono" style={{ color: accent, fontSize: 11, fontWeight: 700, opacity: 0.6, minWidth: 24, paddingTop: 4 }}>
            0{index + 1}
          </span>
          <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.2 }}>
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ color: "var(--gray)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
          {project.description}
        </p>

        {/* Stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {project.stack.map((tech) => (
            <span key={tech} className="mono" style={{
              background: `${accent}15`, color: accent,
              border: `1px solid ${accent}30`,
              borderRadius: 4, padding: "3px 10px",
              fontSize: 11, fontWeight: 700, letterSpacing: 1,
            }}>
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "transparent", color: "var(--gray)",
              border: "1px solid rgba(184,184,199,0.3)", borderRadius: 6,
              padding: "8px 16px", textDecoration: "none",
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
              transition: "all 0.2s", flex: 1, justifyContent: "center",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray)"; e.currentTarget.style.borderColor = "rgba(184,184,199,0.3)"; }}
          >
            <Link2 size={14} />
            {t.projects.github}
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: accent, color: "#fff",
              borderRadius: 6, padding: "8px 16px", textDecoration: "none",
              fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
              transition: "all 0.2s", flex: 1, justifyContent: "center",
              border: `1px solid ${accent}`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
          >
            <ExternalLink size={14} />
            {t.projects.demo}
          </a>
        </div>
      </div>
    </div>
  );
}
