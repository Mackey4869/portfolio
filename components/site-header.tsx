"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import type { Locale, PortfolioContent } from "@/data/portfolio"

type Props = { locale: Locale; onLocaleChange: (locale: Locale) => void; navigation: PortfolioContent["navigation"]; labels: PortfolioContent["labels"] }

export function SiteHeader({ locale, onLocaleChange, navigation, labels }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#about" className="wordmark" aria-label="tomy — top">tomy<span aria-hidden="true">.</span></a>
        <div className="header-actions">
          <button
            type="button"
            className="language-switch"
            onClick={() => onLocaleChange(locale === "ja" ? "en" : "ja")}
            aria-label={labels.language}
          >
            {(["ja", "en"] as const).map((item) => (
              <span key={item} className={locale === item ? "is-active" : ""} aria-hidden="true">{item.toUpperCase()}</span>
            ))}
          </button>
          <button type="button" className="menu-button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? labels.close : labels.menu}>
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label={labels.contents}>
          {navigation.map((item, index) => <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}
        </nav>
      ) : null}
    </header>
  )
}
