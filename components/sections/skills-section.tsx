"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function SkillsSection({ content }: { content: PortfolioContent }) {
  const [openSkill, setOpenSkill] = useState<string | null>(null)
  const skills = content.skills
  return (
    <section id="skills" className="content-section observed-section">
      <SectionHeading kicker={skills.kicker} title={skills.title} intro={skills.intro} />
      <div className="skill-groups">{skills.groups.map((group) => (
        <article className="skill-group" key={group.title}>
          <header><h3>{group.title}</h3><p>{group.description}</p></header>
          <div className="skill-items">{group.items.map((skill) => { const key = `${group.title}-${skill.name}`; const isOpen = openSkill === key; return (
            <button key={skill.name} type="button" className={isOpen ? "skill-item is-open" : "skill-item"} onClick={() => setOpenSkill(isOpen ? null : key)} aria-expanded={isOpen}>
              <span className="skill-main"><strong>{skill.name}</strong><small>{content.skillLevelLabels[skill.level]}</small></span><span className="skill-detail">{skill.detail}</span><ChevronDown aria-hidden="true" />
            </button>
          ) })}</div>
        </article>
      ))}</div>
      <div className="engineering-experience"><h3>{skills.engineeringTitle}</h3><div>{skills.engineering.map((item) => <span key={item}>{item}</span>)}</div></div>
    </section>
  )
}
