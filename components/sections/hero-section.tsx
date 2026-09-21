import { ArrowDownRight, Code2, Mail } from "lucide-react"
import { githubUrl, type PortfolioContent } from "@/data/portfolio"

export function HeroSection({ content }: { content: PortfolioContent }) {
  return (
    <section id="about" className="hero-section observed-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.name}</h1>
          <p className="hero-role">{content.hero.role}</p>
          <p className="hero-lead">{content.hero.lead}</p>
          <p className="hero-summary">{content.hero.summary}</p>
          <div className="hero-links">
            <a className="hero-action" href="#experience">{content.hero.experienceLabel}<ArrowDownRight aria-hidden="true" /></a>
            <a className="hero-action" href={githubUrl} target="_blank" rel="noreferrer"><Code2 aria-hidden="true" />GitHub</a>
            <a className="hero-action" href={`mailto:${content.contact.email}`}><Mail aria-hidden="true" />{content.hero.emailLabel}</a>
          </div>
        </div>
        <aside className="profile-panel" aria-label={content.hero.profileLabel}>
          <p className="profile-heading">{content.hero.profileLabel}</p>
          <dl>{content.hero.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </aside>
      </div>
    </section>
  )
}
