export type Locale = "ja" | "en"

export type NavItem = { id: string; label: string }
export type SkillItem = { name: string; level: "Professional" | "Project" | "Academic" | "Learning"; detail: string }
export type SkillGroup = { title: string; description: string; items: SkillItem[] }

export type PortfolioContent = {
  meta: { title: string; description: string; updated: string }
  navigation: NavItem[]
  labels: Record<"skip" | "menu" | "contents" | "close" | "language" | "github" | "details" | "companyOutcome" | "contribution" | "technologies", string>
  hero: { eyebrow: string; title: string; lead: string; summary: string; focus: string[]; availability: string }
  experience: {
    kicker: string; title: string; intro: string; company: string; role: string; period: string; service: string
    serviceDescription: string; outcome: string; contribution: string[]
    engineering: Array<{ title: string; description: string }>; technologies: string[]
    links: Array<{ label: string; href: string }>; note: string
  }
  research: { kicker: string; title: string; status: string; description: string; background: string; approach: string; fields: string[]; note: string }
  projects: { kicker: string; title: string; intro: string; items: Array<{ title: string; category: string; description: string; facts: string[]; contribution: string; technologies: string[]; result?: string; links?: Array<{ label: string; href: string }> }> }
  skills: { kicker: string; title: string; intro: string; groups: SkillGroup[]; engineeringTitle: string; engineering: string[] }
  qualifications: { kicker: string; title: string; achieved: string; learning: string; items: Array<{ title: string; detail: string; type: "achieved" | "learning" }> }
  leadership: { kicker: string; title: string; intro: string; items: Array<{ title: string; meta: string; description: string }> }
  photography: { kicker: string; title: string; intro: string; images: Array<{ src: string; alt: string; caption: string }> }
  contact: { kicker: string; title: string; description: string; githubLabel: string; githubHandle: string; note: string }
  footer: { updated: string; copyright: string }
}

const navigation = ["about", "experience", "research", "projects", "skills", "qualifications", "leadership", "photography", "contact"]
const sharedLinks = [
  { label: "Product", href: "https://nititech.jp/lp/brest-ai-academy/" },
  { label: "Press release", href: "https://prtimes.jp/main/html/rd/p/000000015.000151759.html" },
]
const photosJa = [
  { src: "/images/portfolio-rainbow.jpg", alt: "虹を背景にした電柱と電線", caption: "After the rain" },
  { src: "/images/portfolio-airplane.jpg", alt: "着陸する飛行機の流し撮り", caption: "In motion" },
  { src: "/images/portfolio-blossoms.jpg", alt: "満開の桜と道路標識", caption: "Spring signs" },
]
const photosEn = [
  { src: "/images/portfolio-rainbow.jpg", alt: "Power lines against a rainbow", caption: "After the rain" },
  { src: "/images/portfolio-airplane.jpg", alt: "A panning shot of a landing airplane", caption: "In motion" },
  { src: "/images/portfolio-blossoms.jpg", alt: "Cherry blossoms around Japanese road signs", caption: "Spring signs" },
]

export const githubUrl = "https://github.com/Mackey4869"

export const portfolioContent: Record<Locale, PortfolioContent> = {
  ja: {
    meta: { title: "tomy | Software Engineer", description: "AI・Webプロダクトの実務開発とコンピュータサイエンス研究に取り組む学生エンジニアのポートフォリオ。", updated: "2026.09.20" },
    navigation: navigation.map((id) => ({ id, label: ({ about: "About", experience: "Experience", research: "Research", projects: "Projects", skills: "Skills", qualifications: "Qualifications", leadership: "Leadership", photography: "Photography", contact: "Contact" } as Record<string, string>)[id] })),
    labels: { skip: "本文へスキップ", menu: "メニューを開く", contents: "目次", close: "メニューを閉じる", language: "表示言語を切り替える", github: "GitHubを見る", details: "担当と技術の詳細", companyOutcome: "プロダクトの公開実績", contribution: "担当領域", technologies: "主な技術" },
    hero: {
      eyebrow: "SOFTWARE ENGINEER / COMPUTER SCIENCE STUDENT",
      title: "AIを、実際に使われる\nWebプロダクトへ。",
      lead: "実務でAI・Webサービスの開発に参画し、大学では画像とAIに関する研究に取り組んでいます。",
      summary: "フロントエンドからAPI、LLM連携までを横断し、ユーザーの声をもとに本番プロダクトを改善してきました。",
      focus: ["Web Application", "AI / LLM", "Production Development"], availability: "Student Engineer · Japan",
    },
    experience: {
      kicker: "01 / PROFESSIONAL EXPERIENCE", title: "検証で終わらせず、\n使われ続けるところまで。",
      intro: "NITI Technologyで、教育領域のAI/Webプロダクト開発に参画しています。会社・チームの成果と、自分が担った開発領域を分けて掲載しています。",
      company: "NITI Technology", role: "Software Engineer", period: "Ongoing", service: "ブレストAIアカデミー",
      serviceDescription: "生徒が24時間質問でき、理解度の確認や学習記録までを支援する、学習塾向けAI学習Webアプリです。",
      outcome: "NITI Technologyが企画・開発し、ブレストグループ全14校舎の中学3年生約400名に本番導入されています。",
      contribution: ["React / TypeScriptを用いたWeb UIの開発・改善", "Node.js / HonoによるAPI設計・外部API連携", "LLM連携、プロンプト設計、RAG・マルチモーダルAIの活用", "ユーザーフィードバックを受けた改善、テスト、保守"],
      engineering: [
        { title: "Production", description: "実際の利用環境を前提に、不具合修正と継続的な改善に取り組んでいます。" },
        { title: "AI Integration", description: "回答品質と体験の両面を意識し、LLMや外部APIをプロダクトへ組み込んでいます。" },
        { title: "Team Development", description: "ブランチ運用、Pull Request、レビューを含むチーム開発を経験しています。" },
      ],
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Hono", "PostgreSQL", "OpenAI API", "Gemini API", "AWS", "Vitest", "Playwright"],
      links: sharedLinks, note: "公開済み情報のみを掲載しています。個別機能や内部構成の詳細は非公開です。",
    },
    research: {
      kicker: "02 / RESEARCH", title: "一人ひとりに合うAIで、\n日常と業務をより効率的に。", status: "Ongoing Research",
      description: "日常生活や業務の効率化を目的に、利用者に合わせて支援するAIについて卒業研究を進めています。",
      background: "必要な支援の内容やタイミングは、人や状況によって異なります。画一的ではなく、一人ひとりに適応するAIのあり方に関心を持っています。",
      approach: "PythonやAIモデルを用いて、利用者に合わせた支援の設計と評価に取り組んでいます。具体的な対象、データ、手法は未公開です。",
      fields: ["Personalized AI", "Human-centered AI", "Efficiency", "Python"], note: "研究成果の公開状況に合わせて、今後内容を更新します。",
    },
    projects: {
      kicker: "03 / SELECTED PROJECT", title: "課題を見つけ、\nチームで形にする。", intro: "数を並べるのではなく、役割と工夫を説明できるプロジェクトを選んでいます。",
      items: [{ title: "ガバイソン2025春", category: "Hackathon / Team Development", description: "5名のチームでWebアプリケーションを開発したハッカソンプロジェクトです。", facts: ["2025年2月", "5名チーム", "短期開発"], contribution: "チームメンバーとして、企画から実装・発表までの開発に参加しました。", technologies: ["Web Application", "Team Development"], result: "特別賞", links: [{ label: "GitHub", href: "https://github.com/sgupge2545/gabaithon202502saga2" }] }],
    },
    skills: {
      kicker: "04 / SKILLS", title: "経験の文脈が伝わる、\n技術スタック。", intro: "自己評価の点数ではなく、どの環境で使ったかを基準に整理しています。",
      groups: [
        { title: "Frontend", description: "ユーザーが迷わず使える、レスポンシブなWeb UI。", items: [
          { name: "TypeScript", level: "Professional", detail: "1年以上。Reactを用いたWeb開発とAPI連携。" }, { name: "React", level: "Professional", detail: "本番Webサービスの機能開発・改善。" }, { name: "Vite / Tailwind CSS", level: "Professional", detail: "1年以上。開発環境とUI実装で使用。" }, { name: "Next.js / Vue.js", level: "Project", detail: "個人・チーム開発で使用。" },
        ] },
        { title: "Backend & Data", description: "画面の先にある、保守しやすいAPIとデータ設計。", items: [
          { name: "Node.js / Hono", level: "Professional", detail: "API開発、外部サービスとの連携。" }, { name: "REST API", level: "Professional", detail: "半年以上。設計・実装・デバッグを経験。" }, { name: "PostgreSQL / Drizzle", level: "Professional", detail: "本番・個人開発でのデータ管理。" }, { name: "Python / SQL", level: "Academic", detail: "研究、データ処理、授業で使用。" },
        ] },
        { title: "AI / LLM", description: "モデル単体ではなく、プロダクトとして成立させるための実装。", items: [
          { name: "Prompt Engineering", level: "Professional", detail: "1年以上。用途に応じた応答設計と改善。" }, { name: "LLM Application", level: "Professional", detail: "OpenAI API・Gemini APIを使った機能開発。" }, { name: "RAG / Embedding", level: "Professional", detail: "検索と生成を組み合わせた機能開発。" }, { name: "Multimodal AI", level: "Professional", detail: "画像を扱うAI機能の開発。" },
        ] },
        { title: "Cloud & Quality", description: "開発して終わらせず、チームで安全に運用するための技術。", items: [
          { name: "AWS", level: "Professional", detail: "S3、Lambda、RDS、CloudWatchなどを利用。" }, { name: "Git / GitHub", level: "Professional", detail: "ブランチ・PRベースのチーム開発。" }, { name: "Vitest / Playwright", level: "Professional", detail: "自動テストと品質確認。" }, { name: "Docker / CI", level: "Project", detail: "環境構築と継続的インテグレーション。" },
        ] },
      ], engineeringTitle: "Engineering Experience", engineering: ["REST API Design", "External API Integration", "LLM Integration", "Testing & Debugging", "Agile / Scrum", "Production Maintenance"],
    },
    qualifications: { kicker: "05 / QUALIFICATIONS & LEARNING", title: "基礎を固めながら、\n学び続ける。", achieved: "Qualifications", learning: "Currently Learning", items: [
      { title: "G検定", detail: "日本ディープラーニング協会", type: "achieved" }, { title: "TOEIC L&R 760", detail: "英語での技術情報収集にも活用", type: "achieved" }, { title: "応用情報技術者試験", detail: "体系的なCS・IT知識を学習中", type: "learning" }, { title: "AtCoder Beginner Contest", detail: "アルゴリズムとデータ構造の学習を継続", type: "learning" },
    ] },
    leadership: { kicker: "06 / LEADERSHIP & TEACHING", title: "人を支え、\nチームを前へ進める。", intro: "開発以外でも、異なる立場の人と合意をつくり、分かりやすく伝える経験を重ねています。", items: [
      { title: "写真部 部長", meta: "約100名規模", description: "イベントの企画・運営、メンバー管理、企業との調整を担当。参加しやすい活動づくりに取り組みました。" }, { title: "Teaching Assistant", meta: "University", description: "演習を支援し、学生からの質問に対応。相手の理解度に合わせて技術的な内容を説明しています。" },
    ] },
    photography: { kicker: "07 / PHOTOGRAPHY", title: "観察して、\n一瞬を切り取る。", intro: "写真は、技術とは別の角度から培ってきた観察力と表現の手段です。すべて本人が撮影しています。", images: photosJa },
    contact: { kicker: "08 / CONTACT", title: "コードと活動は、\nGitHubで公開しています。", description: "制作物や開発の記録はGitHubから確認できます。就職活動用の連絡先は、必要に応じて後から追加できる構成にしています。", githubLabel: "GitHub profile", githubHandle: "@Mackey4869", note: "現在、連絡窓口はGitHubに集約しています。" },
    footer: { updated: "最終更新", copyright: "tomy. All rights reserved." },
  },
  en: {
    meta: { title: "tomy | Software Engineer", description: "Portfolio of a student engineer building production AI and web products while researching computer science.", updated: "2026.09.20" },
    navigation: navigation.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) })),
    labels: { skip: "Skip to content", menu: "Open menu", contents: "Contents", close: "Close menu", language: "Switch display language", github: "View GitHub", details: "Role and technical details", companyOutcome: "Public product outcome", contribution: "My contribution", technologies: "Core technologies" },
    hero: { eyebrow: "SOFTWARE ENGINEER / COMPUTER SCIENCE STUDENT", title: "Turning AI into web products\npeople actually use.", lead: "I develop production AI and web services while researching image-related AI at university.", summary: "I work across frontend, APIs, and LLM integrations, improving real products through user feedback.", focus: ["Web Application", "AI / LLM", "Production Development"], availability: "Student Engineer · Japan" },
    experience: {
      kicker: "01 / PROFESSIONAL EXPERIENCE", title: "Beyond prototypes,\ninto everyday use.", intro: "At NITI Technology, I contribute to an AI-powered education product. Company outcomes and my own engineering scope are presented separately.", company: "NITI Technology", role: "Software Engineer", period: "Ongoing", service: "Brest AI Academy", serviceDescription: "An AI learning web app for tutoring schools, supporting 24/7 questions, comprehension checks, and learning records.", outcome: "Planned and developed by NITI Technology, the product is in production for around 400 ninth-grade students across all 14 Brest Group locations.",
      contribution: ["Web UI development and improvement with React and TypeScript", "API design and external integrations with Node.js and Hono", "LLM integration, prompt design, RAG, and multimodal AI", "Feedback-driven iteration, testing, debugging, and maintenance"],
      engineering: [{ title: "Production", description: "Continuous improvements and fixes with real users and operating conditions in mind." }, { title: "AI Integration", description: "LLM and external API integration balancing answer quality with product experience." }, { title: "Team Development", description: "Branch-based development, pull requests, and code reviews." }],
      technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Hono", "PostgreSQL", "OpenAI API", "Gemini API", "AWS", "Vitest", "Playwright"], links: sharedLinks, note: "Only publicly available information is shown. Internal architecture and unreleased features are omitted.",
    },
    research: { kicker: "02 / RESEARCH", title: "Personalized AI for\nmore efficient work and life.", status: "Ongoing Research", description: "My undergraduate research explores AI that adapts to individual users to improve efficiency in everyday life and work.", background: "The right kind and timing of support differ between people and situations. I am interested in AI that adapts to each individual rather than providing uniform assistance.", approach: "Using Python and AI models, I am working on the design and evaluation of personalized support. Specific domains, data, and methods remain unpublished.", fields: ["Personalized AI", "Human-centered AI", "Efficiency", "Python"], note: "This section will be updated as research outcomes become public." },
    projects: { kicker: "03 / SELECTED PROJECT", title: "Find the problem.\nBuild the answer together.", intro: "A focused selection where I can clearly explain the problem, my role, and the engineering decisions.", items: [{ title: "Gabaithon Spring 2025", category: "Hackathon / Team Development", description: "A hackathon project where a five-person team developed a web application.", facts: ["February 2025", "Five-person team", "Rapid development"], contribution: "I participated in the project as a team member, from planning through implementation and presentation.", technologies: ["Web Application", "Team Development"], result: "Special Prize", links: [{ label: "GitHub", href: "https://github.com/sgupge2545/gabaithon202502saga2" }] }] },
    skills: { kicker: "04 / SKILLS", title: "A stack grounded\nin real experience.", intro: "Skills are organized by where I have used them, rather than by subjective percentages.", groups: [
      { title: "Frontend", description: "Responsive interfaces that help users act without hesitation.", items: [{ name: "TypeScript", level: "Professional", detail: "1+ year in React development and API integration." }, { name: "React", level: "Professional", detail: "Production feature development and improvement." }, { name: "Vite / Tailwind CSS", level: "Professional", detail: "1+ year in tooling and UI implementation." }, { name: "Next.js / Vue.js", level: "Project", detail: "Personal and team projects." }] },
      { title: "Backend & Data", description: "Maintainable APIs and data models behind the interface.", items: [{ name: "Node.js / Hono", level: "Professional", detail: "API development and external integrations." }, { name: "REST API", level: "Professional", detail: "6+ months of design and implementation." }, { name: "PostgreSQL / Drizzle", level: "Professional", detail: "Production and personal project data." }, { name: "Python / SQL", level: "Academic", detail: "Research, data processing, and coursework." }] },
      { title: "AI / LLM", description: "Product engineering around the model, not just model usage.", items: [{ name: "Prompt Engineering", level: "Professional", detail: "1+ year designing task-specific responses." }, { name: "LLM Application", level: "Professional", detail: "OpenAI and Gemini API features." }, { name: "RAG / Embedding", level: "Professional", detail: "Retrieval combined with generation." }, { name: "Multimodal AI", level: "Professional", detail: "AI features that process images." }] },
      { title: "Cloud & Quality", description: "Practices for safely shipping and operating software.", items: [{ name: "AWS", level: "Professional", detail: "S3, Lambda, RDS, CloudWatch, and more." }, { name: "Git / GitHub", level: "Professional", detail: "Branch- and PR-based teamwork." }, { name: "Vitest / Playwright", level: "Professional", detail: "Automated quality checks." }, { name: "Docker / CI", level: "Project", detail: "Environment setup and integration." }] },
    ], engineeringTitle: "Engineering Experience", engineering: ["REST API Design", "External API Integration", "LLM Integration", "Testing & Debugging", "Agile / Scrum", "Production Maintenance"] },
    qualifications: { kicker: "05 / QUALIFICATIONS & LEARNING", title: "Strong foundations,\ncontinuous learning.", achieved: "Qualifications", learning: "Currently Learning", items: [{ title: "JDLA Deep Learning for GENERAL", detail: "Japan Deep Learning Association", type: "achieved" }, { title: "TOEIC L&R 760", detail: "Also used for technical information", type: "achieved" }, { title: "Applied Information Technology Engineer", detail: "Studying structured CS and IT knowledge", type: "learning" }, { title: "AtCoder Beginner Contest", detail: "Algorithms and data structures", type: "learning" }] },
    leadership: { kicker: "06 / LEADERSHIP & TEACHING", title: "Supporting people,\nmoving teams forward.", intro: "Beyond engineering, I have learned to align different perspectives and explain technical ideas clearly.", items: [{ title: "Photography Club President", meta: "Around 100 members", description: "Led event planning, operations, member coordination, and communication with partner companies." }, { title: "Teaching Assistant", meta: "University", description: "Support exercises and student questions, adapting explanations to each learner." }] },
    photography: { kicker: "07 / PHOTOGRAPHY", title: "Observe, then frame\nthe right moment.", intro: "Photography is another way I have developed observation and communication. Every photograph is my own work.", images: photosEn },
    contact: { kicker: "08 / CONTACT", title: "Code and activity,\navailable on GitHub.", description: "Explore my projects and development history on GitHub. A recruiting email can be added later if needed.", githubLabel: "GitHub profile", githubHandle: "@Mackey4869", note: "GitHub is currently my primary public contact point." },
    footer: { updated: "Last updated", copyright: "tomy. All rights reserved." },
  },
}
