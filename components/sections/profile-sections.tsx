import { BookOpen, CheckCircle2, GraduationCap, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function QualificationsSection({ content }: { content: PortfolioContent }) {
  const section = content.qualifications
  return <section id="qualifications" className="content-section observed-section"><SectionHeading kicker={section.kicker} title={section.title} /><div className="qualification-grid">
    <div><h3><CheckCircle2 aria-hidden="true" />{section.achieved}</h3>{section.items.filter((item) => item.type === "achieved").map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.detail}</p></article>)}</div>
    <div><h3><BookOpen aria-hidden="true" />{section.learning}</h3>{section.items.filter((item) => item.type === "learning").map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.detail}</p></article>)}</div>
  </div></section>
}

export function LeadershipSection({ content }: { content: PortfolioContent }) {
  const section = content.leadership
  return <section id="leadership" className="content-section observed-section"><SectionHeading kicker={section.kicker} title={section.title} intro={section.intro} /><div className="leadership-list">{section.items.map((item, index) => (
    <article key={item.title}><div className="leadership-icon">{index === 0 ? <Users aria-hidden="true" /> : <GraduationCap aria-hidden="true" />}</div><div><p className="mini-label">{item.meta}</p><h3>{item.title}</h3><p>{item.description}</p></div></article>
  ))}</div></section>
}
