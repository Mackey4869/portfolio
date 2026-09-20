import type { PortfolioContent } from "@/data/portfolio"

type Props = { navigation: PortfolioContent["navigation"]; activeSection: string; label: string }

export function StickyToc({ navigation, activeSection, label }: Props) {
  return (
    <aside className="sticky-toc" aria-label={label}>
      <p>{label}</p>
      <nav>{navigation.map((item, index) => (
        <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? "is-active" : ""} aria-current={activeSection === item.id ? "location" : undefined}>
          <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
        </a>
      ))}</nav>
    </aside>
  )
}
