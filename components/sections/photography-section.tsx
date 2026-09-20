import Image from "next/image"
import { ArrowUpRight, Camera } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function PhotographySection({ content }: { content: PortfolioContent }) {
  const section = content.photography
  return <section id="photography" className="content-section observed-section"><SectionHeading kicker={section.kicker} title={section.title} intro={section.intro} /><div className="photo-grid">{section.images.map((photo, index) => (
    <figure key={photo.src} className={index === 0 ? "photo-wide" : ""}><Image src={photo.src} alt={photo.alt} fill sizes={index === 0 ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 900px) 100vw, 28vw"} /><figcaption>{photo.caption}</figcaption></figure>
  ))}</div><div className="photo-links">{section.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><Camera aria-hidden="true" />{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</div></section>
}
