import { ScanFace } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import type { PortfolioContent } from "@/data/portfolio"

export function ResearchSection({ content }: { content: PortfolioContent }) {
  const research = content.research
  return (
    <section id="research" className="content-section observed-section">
      <SectionHeading kicker={research.kicker} title={research.title} />
      <div className="research-layout">
        <div className="research-visual" aria-hidden="true"><ScanFace /><span>{research.status}</span></div>
        <div className="research-copy"><p className="large-copy">{research.description}</p><div className="research-notes"><p>{research.background}</p><p>{research.approach}</p></div><div className="tag-list">{research.fields.map((field) => <span key={field}>{field}</span>)}</div><p className="quiet-note">{research.note}</p></div>
      </div>
    </section>
  )
}
