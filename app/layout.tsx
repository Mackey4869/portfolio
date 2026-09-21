import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP } from "next/font/google"
import "./globals.css"

const displayFont = Noto_Serif_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700"],
})

export const metadata: Metadata = {
  title: "tomy | Software Engineer",
  description: "AI・Webプロダクトの実務開発とコンピュータサイエンス研究に取り組む学生エンジニアのポートフォリオ。",
  keywords: ["Software Engineer", "AI", "LLM", "Web Development", "TypeScript", "React"],
  authors: [{ name: "tomy" }],
  icons: { icon: "/images/icon.png" },
  openGraph: { type: "website", locale: "ja_JP", alternateLocale: "en_US", title: "tomy | Software Engineer", description: "Production AI / Web Development & Computer Science Research" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`scroll-smooth ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
