import { ArrowUpRight, Award, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function ProjectsSection({ content }: { content: PortfolioContent }) {
  const projects = content.projects
  return (
    <section id="projects" className="content-section observed-section">
      <SectionHeading kicker={projects.kicker} title={projects.title} intro={projects.intro} />
      <div className="project-list">{projects.items.map((project, index) => (
        <article className="project-item" key={project.title}>
          <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
          <div className="project-body"><p className="mini-label">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-facts">{project.facts.map((fact) => <span key={fact}><Users aria-hidden="true" />{fact}</span>)}</div><p className="project-contribution">{project.contribution}</p><div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>{project.links ? <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</div> : null}</div>
          {project.result ? <div className="project-result"><Award aria-hidden="true" /><span>{project.result}</span></div> : null}
        </article>
      ))}</div>
    </section>
  )
}
