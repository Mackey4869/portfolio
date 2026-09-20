import { ArrowUpRight, BriefcaseBusiness, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function ExperienceSection({ content }: { content: PortfolioContent }) {
  const experience = content.experience
  return (
    <section id="experience" className="content-section observed-section">
      <SectionHeading kicker={experience.kicker} title={experience.title} intro={experience.intro} />
      <article className="experience-feature">
        <div className="experience-topline">
          <div className="experience-company"><span className="icon-box"><BriefcaseBusiness aria-hidden="true" /></span><div><p>{experience.company}</p><h3>{experience.service}</h3></div></div>
          <div className="experience-meta"><span>{experience.role}</span><span>{experience.period}</span></div>
        </div>
        <p className="experience-description">{experience.serviceDescription}</p>
        <div className="outcome-grid">
          <div><p className="mini-label">{content.labels.companyOutcome}</p><p>{experience.outcome}</p></div>
          <div><p className="mini-label">{content.labels.contribution}</p><ul className="check-list">{experience.contribution.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
        </div>
        <Accordion type="single" collapsible className="experience-accordion">
          <AccordionItem value="details"><AccordionTrigger>{content.labels.details}</AccordionTrigger><AccordionContent>
            <div className="engineering-grid">{experience.engineering.map((item) => <div key={item.title}><h4>{item.title}</h4><p>{item.description}</p></div>)}</div>
            <div className="technology-list" aria-label={content.labels.technologies}>{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </AccordionContent></AccordionItem>
        </Accordion>
        <footer className="experience-footer">
          <div className="external-links">{experience.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</div>
          <p>{experience.note}</p>
        </footer>
      </article>
    </section>
  )
}
