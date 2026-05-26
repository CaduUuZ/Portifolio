import { useState } from "react";
import { translations } from "./data/translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Heart } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState("pt");
  const t = translations[lang];

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <About t={t} language={lang} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} />
      </main>
      <footer style={{
        background: "var(--bg2)", borderTop: "1px solid rgba(208,30,95,0.1)",
        padding: "24px", textAlign: "center",
        color: "var(--gray)", fontSize: 13,
      }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          {t.footer.made} <Heart size={13} fill="var(--pink)" stroke="var(--pink)" /> {t.footer.by}
        </span>
      </footer>
    </>
  );
}
