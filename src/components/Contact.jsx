import { useEffect, useRef, useState } from "react";
import { Mail, Link, Link2, Send } from "lucide-react";
import { SectionTitle } from "./About";

export default function Contact({ t }) {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  /* 
   * =============================================
   * COMO CONFIGURAR O FORMULÁRIO:
   * 
   * Opção 1 — Formspree (gratuito, fácil):
   *   1. Crie conta em https://formspree.io
   *   2. Crie um form e copie o endpoint
   *   3. Substitua "YOUR_FORM_ID" abaixo pelo seu ID
   *   4. O handleSubmit já está preparado para isso
   * 
   * Opção 2 — EmailJS:
   *   1. Crie conta em https://emailjs.com
   *   2. Configure service + template
   *   3. Use o SDK do EmailJS no handleSubmit
   * =============================================
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // Descomente e substitua YOUR_FORM_ID para ativar:
    // await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   body: new FormData(form),
    //   headers: { Accept: "application/json" },
    // });
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%", background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(184,184,199,0.15)", borderRadius: 8,
    padding: "13px 16px", color: "var(--white)", fontSize: 14,
    outline: "none", transition: "border-color 0.2s", fontFamily: "inherit",
  };

  /* 
   * =============================================
   * COMO PERSONALIZAR LINKS DE CONTATO:
   * Substitua os valores de href abaixo pelos seus:
   * - email: mailto:seuemail@gmail.com
   * - linkedin: https://linkedin.com/in/seu-perfil
   * - github: https://github.com/seu-usuario
   * =============================================
   */
  const socials = [
    { icon: <Mail size={18} />, label: t.contact.email_label, value: "seu@email.com", href: "mailto:seu@email.com" },
    { icon: <Link size={18} />, label: t.contact.linkedin_label, value: "linkedin.com/in/cadu", href: "https://linkedin.com" },
    { icon: <Link2 size={18} />, label: t.contact.github_label, value: "github.com/cadu", href: "https://github.com" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div ref={ref} className="section-animate" style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionTitle>{t.contact.title}</SectionTitle>
        <p style={{ color: "var(--gray)", marginBottom: 48, fontSize: 15, marginTop: -32 }}>
          {t.contact.subtitle}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "var(--card-bg)", border: "1px solid var(--border)",
                  borderRadius: 10, padding: "16px 20px", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(208,30,95,0.5)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
              >
                <span style={{ color: "var(--pink)" }}>{s.icon}</span>
                <div>
                  <p className="mono" style={{ color: "var(--gray)", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>{s.label}</p>
                  <p style={{ color: "var(--white)", fontSize: 13, fontWeight: 600 }}>{s.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <input name="name" required placeholder={t.contact.name_placeholder} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(208,30,95,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(184,184,199,0.15)")}
            />
            <input name="email" type="email" required placeholder={t.contact.email_placeholder} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "rgba(208,30,95,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(184,184,199,0.15)")}
            />
            <textarea name="message" required rows={5} placeholder={t.contact.message_placeholder}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(208,30,95,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(184,184,199,0.15)")}
            />
            <button type="submit"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: sent ? "#1a7a3f" : "var(--pink)", color: "#fff",
                border: "none", borderRadius: 8, padding: "13px 24px",
                fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.3s",
              }}
            >
              <Send size={15} />
              {sent ? "✓ Enviado!" : t.contact.send}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #contact > div > div { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: rgba(184,184,199,0.4); }
      `}</style>
    </section>
  );
}
