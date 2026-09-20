import { ArrowDownRight, Github } from "lucide-react"
import { githubUrl, type PortfolioContent } from "@/data/portfolio"

export function HeroSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="about" className="hero-section observed-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero-lead">{content.hero.lead}</p>
          <p className="hero-summary">{content.hero.summary}</p>
          <div className="hero-links">
            <a className="primary-link" href="#experience">Experience <ArrowDownRight aria-hidden="true" /></a>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" />{content.labels.github}</a>
          </div>
        </div>
        <div className="hero-aside" aria-label="Engineering focus">
          <p className="availability">{content.hero.availability}</p>
          <div className="focus-list">{content.hero.focus.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        </div>
      </div>
      <p className="scroll-cue" aria-hidden="true">SCROLL <span /></p>
    </section>
  )
}
