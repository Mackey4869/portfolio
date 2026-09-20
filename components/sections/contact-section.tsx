import { ArrowUpRight, Github } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { githubUrl, type PortfolioContent } from "@/data/portfolio"

export function ContactSection({ content }: { content: PortfolioContent }) {
  const section = content.contact
  return <section id="contact" className="content-section contact-section observed-section"><SectionHeading kicker={section.kicker} title={section.title} /><div className="contact-layout"><p>{section.description}</p><a href={githubUrl} target="_blank" rel="noreferrer" className="github-card"><Github aria-hidden="true" /><span><small>{section.githubLabel}</small><strong>{section.githubHandle}</strong></span><ArrowUpRight aria-hidden="true" /></a></div><p className="quiet-note">{section.note}</p></section>
}
