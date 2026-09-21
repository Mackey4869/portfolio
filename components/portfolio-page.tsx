"use client"

import { useEffect, useState } from "react"
import { portfolioContent, type Locale } from "@/data/portfolio"
import { SiteHeader } from "@/components/site-header"
import { StickyToc } from "@/components/sticky-toc"
import { HeroSection } from "@/components/sections/hero-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ResearchSection } from "@/components/sections/research-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { LeadershipSection, QualificationsSection } from "@/components/sections/profile-sections"
import { PhotographySection } from "@/components/sections/photography-section"
import { ContactSection } from "@/components/sections/contact-section"

export function PortfolioPage() {
  const [locale, setLocale] = useState<Locale>("ja")
  const [activeSection, setActiveSection] = useState("about")
  const content = portfolioContent[locale]

  useEffect(() => { const stored = window.localStorage.getItem("portfolio-locale"); if (stored === "ja" || stored === "en") setLocale(stored) }, [])
  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.meta.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", content.meta.description)
    window.localStorage.setItem("portfolio-locale", locale)
  }, [content.meta.description, content.meta.title, locale])
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".observed-section")
    const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible?.target.id) setActiveSection(visible.target.id) }, { rootMargin: "-18% 0px -62%", threshold: [0, .2, .5] })
    sections.forEach((section) => observer.observe(section)); return () => observer.disconnect()
  }, [])

  return <><a className="skip-link" href="#main-content">{content.labels.skip}</a><SiteHeader locale={locale} onLocaleChange={setLocale} navigation={content.navigation} labels={content.labels} /><main id="main-content"><HeroSection content={content} /><div className="page-shell"><div className="page-content"><ExperienceSection content={content} /><ResearchSection content={content} /><ProjectsSection content={content} /><SkillsSection content={content} /><QualificationsSection content={content} /><LeadershipSection content={content} /><PhotographySection content={content} /><ContactSection content={content} /></div><StickyToc navigation={content.navigation} activeSection={activeSection} label={content.labels.contents} /></div></main><footer className="site-footer"><a href="#about" className="wordmark">Mackey Tomy<span>.</span></a><p>{content.footer.updated}: {content.meta.updated}</p><p>© 2026 {content.footer.copyright}</p></footer></>
}
