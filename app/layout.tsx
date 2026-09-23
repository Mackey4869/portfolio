import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google"
import "./globals.css"

const displayFont = Noto_Serif_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
})

const storyFont = Cormorant_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-story",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "Mackey Tomy | Software Engineer",
  description: "AI・Webプロダクトの実務開発とコンピュータサイエンス研究に取り組む学生エンジニアのポートフォリオ。",
  keywords: ["Software Engineer", "AI", "LLM", "Web Development", "TypeScript", "React"],
  authors: [{ name: "Mackey Tomy" }],
  icons: { icon: "/images/icon.png" },
  openGraph: { type: "website", locale: "ja_JP", alternateLocale: "en_US", title: "Mackey Tomy | Software Engineer", description: "Production AI / Web Development & Computer Science Research" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${displayFont.variable} ${storyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
