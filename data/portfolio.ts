export type Locale = "ja" | "en"

export type NavItem = { id: string; label: string }
export type SkillItem = { name: string; level: "Professional" | "Project" | "Academic" | "Learning"; detail: string }
export type SkillGroup = { title: string; description: string; items: SkillItem[] }

export type PortfolioContent = {
  meta: { title: string; description: string; updated: string }
  navigation: NavItem[]
  labels: Record<"skip" | "menu" | "contents" | "close" | "language" | "github" | "companyOutcome" | "contribution", string>
  skillLevelLabels: Record<SkillItem["level"], string>
  hero: { eyebrow: string; name: string; role: string; lead: string; summary: string; profileLabel: string; facts: Array<{ label: string; value: string }>; experienceLabel: string; emailLabel: string }
  experience: {
    kicker: string; title: string; intro: string; company: string; role: string; period: string; service: string
    serviceDescription: string; outcome: string; contribution: string[]
    links: Array<{ label: string; href: string }>; note: string
  }
  research: { kicker: string; title: string; status: string; description: string; background: string; approach: string; fields: string[]; activitiesTitle: string; activities: string[]; note: string }
  projects: { kicker: string; title: string; intro: string; items: Array<{ title: string; category: string; description: string; facts: string[]; contribution: string; technologies: string[]; result?: string; links?: Array<{ label: string; href: string }> }> }
  skills: { kicker: string; title: string; intro: string; groups: SkillGroup[]; engineeringTitle: string; engineering: string[] }
  qualifications: { kicker: string; title: string; achieved: string; learning: string; items: Array<{ title: string; detail: string; type: "achieved" | "learning" }> }
  leadership: { kicker: string; title: string; intro: string; items: Array<{ title: string; meta: string; description: string; link?: { label: string; href: string } }> }
  photography: { kicker: string; title: string; intro: string; images: Array<{ src: string; alt: string; caption: string }> }
  contact: { kicker: string; title: string; description: string; githubLabel: string; githubHandle: string; emailLabel: string; email: string; note: string }
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
    meta: { title: "Mackey Tomy | Software Engineer", description: "AI・Webプロダクトの実務開発とコンピュータサイエンス研究に取り組む学生エンジニアのポートフォリオ。", updated: "2026.09.23" },
    navigation: navigation.map((id) => ({ id, label: ({ about: "自己紹介", experience: "実務経験", research: "研究", projects: "プロジェクト", skills: "スキル", qualifications: "資格・学習", leadership: "リーダーシップ", photography: "写真", contact: "連絡先" } as Record<string, string>)[id] })),
    labels: { skip: "本文へスキップ", menu: "メニューを開く", contents: "目次", close: "メニューを閉じる", language: "表示言語を切り替える", github: "GitHubを見る", companyOutcome: "公開されている導入実績", contribution: "担当" },
    skillLevelLabels: { Professional: "実務", Project: "開発経験", Academic: "研究・授業", Learning: "学習中" },
    hero: {
      eyebrow: "ポートフォリオ / 2026", name: "Mackey Tomy", role: "ソフトウェアエンジニア / 情報系学生",
      lead: "教育分野のWebサービス開発に携わりながら、大学で機械学習を用いた研究に取り組んでいます。",
      summary: "フロントエンドを中心に、バックエンドの一部開発、インフラ更新、不具合修正を経験しています。",
      profileLabel: "プロフィール概要", facts: [{ label: "実務", value: "教育分野のWebサービス開発" }, { label: "研究", value: "写真公開前の確認作業を支援する仕組み" }, { label: "現在", value: "学生エンジニア / 日本" }], experienceLabel: "実務経験", emailLabel: "メール",
    },
    experience: {
      kicker: "01 / 実務経験", title: "Webサービスの開発と、\n継続的な改善。",
      intro: "NITI Technologyで、教育分野のWebサービス開発に携わっています。担当範囲と公開済みの概要のみを掲載しています。",
      company: "NITI Technology", role: "ソフトウェアエンジニア", period: "継続中", service: "ブレストAIアカデミー",
      serviceDescription: "学習塾向けAI学習Webアプリの開発・改善に携わっています。",
      outcome: "ブレストグループ全14校舎の中学3年生約400名に本番導入されています。",
      contribution: ["フロントエンド全般の開発・改善", "バックエンドの一部機能の実装・修正", "インフラ環境の更新・保守", "不具合の調査・修正と継続的な改善"],
      links: sharedLinks, note: "個別機能、内部構成、使用技術の詳細は掲載していません。",
    },
    research: {
      kicker: "02 / 研究", title: "一人ひとりの感覚に合わせた\n写真確認支援の研究", status: "研究中",
      description: "人物写真を公開するとき、「この写真は人に見られたくない」と感じる基準は人によって異なります。",
      background: "少ない回答や写真例から本人の判断傾向を捉え、公開前の写真確認を支援する方法を研究しています。",
      approach: "本人の判断を機械に置き換えるのではなく、多数の写真から確認が必要な候補を絞り込み、確認作業の負担を減らすことを目指しています。",
      fields: ["画像分析", "機械学習", "個人に合わせた支援"], activitiesTitle: "研究でやっていること", activities: ["研究課題の整理と関連研究の調査", "写真に対する回答を収集する画面の設計", "プライバシーに配慮した画像データの管理", "少量のデータを利用する判定方法の実装", "データの分け方や評価方法の設計", "実験結果の分析と改善点の整理"], note: "本研究は現在進行中のため、実験データ、具体的な手法および結果の詳細は公開していません。",
    },
    projects: {
      kicker: "03 / プロジェクト", title: "課題を見つけ、\nチームで形にする。", intro: "数を並べるのではなく、役割と工夫を説明できるプロジェクトを選んでいます。",
      items: [{ title: "ガバイソン2025春", category: "ハッカソン / チーム開発", description: "5名のチームでWebアプリケーションを開発したハッカソンプロジェクトです。", facts: ["2025年2月", "5名チーム", "短期開発"], contribution: "チームメンバーとして、企画から実装・発表までの開発に参加しました。", technologies: ["Webアプリケーション", "チーム開発"], result: "特別賞", links: [{ label: "GitHub", href: "https://github.com/sgupge2545/gabaithon202502saga2" }] }],
    },
    skills: {
      kicker: "04 / スキル", title: "経験の文脈が伝わる、\n技術スタック。", intro: "自己評価の点数ではなく、どの環境で使ったかを基準に整理しています。",
      groups: [
        { title: "フロントエンド", description: "ユーザーが迷わず使える、レスポンシブなWeb UI。", items: [
          { name: "TypeScript", level: "Professional", detail: "1年以上。Reactを用いたWeb開発とAPI連携。" }, { name: "React", level: "Professional", detail: "本番Webサービスの機能開発・改善。" }, { name: "Vite / Tailwind CSS", level: "Professional", detail: "1年以上。開発環境とUI実装で使用。" }, { name: "Next.js / Vue.js", level: "Project", detail: "個人・チーム開発で使用。" },
        ] },
        { title: "バックエンド・データ", description: "画面の先にある、保守しやすいAPIとデータ設計。", items: [
          { name: "Node.js / Hono", level: "Professional", detail: "API開発、外部サービスとの連携。" }, { name: "REST API", level: "Professional", detail: "半年以上。設計・実装・デバッグを経験。" }, { name: "PostgreSQL / Drizzle", level: "Professional", detail: "本番・個人開発でのデータ管理。" }, { name: "Python / SQL", level: "Academic", detail: "研究、データ処理、授業で使用。" },
        ] },
        { title: "AI・LLM", description: "モデル単体ではなく、プロダクトとして成立させるための実装。", items: [
          { name: "Prompt Engineering", level: "Professional", detail: "1年以上。用途に応じた応答設計と改善。" }, { name: "LLM Application", level: "Professional", detail: "OpenAI API・Gemini APIを使った機能開発。" }, { name: "RAG / Embedding", level: "Professional", detail: "検索と生成を組み合わせた機能開発。" }, { name: "Multimodal AI", level: "Professional", detail: "画像を扱うAI機能の開発。" },
        ] },
        { title: "クラウド・品質", description: "開発して終わらせず、チームで安全に運用するための技術。", items: [
          { name: "AWS", level: "Professional", detail: "S3、Lambda、RDS、CloudWatchなどを利用。" }, { name: "Git / GitHub", level: "Professional", detail: "ブランチ・PRベースのチーム開発。" }, { name: "Vitest / Playwright", level: "Professional", detail: "自動テストと品質確認。" }, { name: "Docker / CI", level: "Project", detail: "環境構築と継続的インテグレーション。" },
        ] },
      ], engineeringTitle: "開発経験", engineering: ["REST API設計", "外部API連携", "LLM連携", "テスト・デバッグ", "アジャイル・スクラム", "本番環境の保守"],
    },
    qualifications: { kicker: "05 / 資格・学習", title: "基礎を固めながら、\n学び続ける。", achieved: "取得済み", learning: "学習中", items: [
      { title: "G検定", detail: "日本ディープラーニング協会", type: "achieved" }, { title: "TOEIC L&R 760", detail: "英語での技術情報収集にも活用", type: "achieved" }, { title: "応用情報技術者試験", detail: "体系的なCS・IT知識を学習中", type: "learning" }, { title: "AtCoder Beginner Contest", detail: "アルゴリズムとデータ構造の学習を継続", type: "learning" },
    ] },
    leadership: { kicker: "06 / リーダーシップ・指導", title: "人を支え、\nチームを前へ進める。", intro: "開発以外でも、異なる立場の人と合意をつくり、分かりやすく伝える経験を重ねています。", items: [
      { title: "写真部 部長", meta: "約100名規模", description: "イベントの企画・運営、メンバー管理、企業との調整を担当。参加しやすい活動づくりに取り組みました。", link: { label: "写真部の活動を見る（Instagram）", href: "https://www.instagram.com/sagauni_photo/" } }, { title: "Teaching Assistant", meta: "University", description: "演習を支援し、学生からの質問に対応。相手の理解度に合わせて技術的な内容を説明しています。" },
    ] },
    photography: { kicker: "07 / 写真", title: "観察して、\n一瞬を切り取る。", intro: "写真は、技術とは別の角度から培ってきた観察力と表現の手段です。掲載写真は本人が撮影しています。", images: photosJa },
    contact: { kicker: "08 / 連絡先", title: "制作物の確認と、\nお問い合わせ。", description: "制作物や開発の記録はGitHubで公開しています。お問い合わせはメールでも受け付けています。", githubLabel: "GitHub", githubHandle: "@Mackey4869", emailLabel: "メール", email: "tomytech626@gmail.com", note: "返信には数日いただく場合があります。" },
    footer: { updated: "最終更新", copyright: "Mackey Tomy. All rights reserved." },
  },
  en: {
    meta: { title: "Mackey Tomy | Software Engineer", description: "Portfolio of a student engineer building production AI and web products while researching computer science.", updated: "2026.09.23" },
    navigation: navigation.map((id) => ({ id, label: id.charAt(0).toUpperCase() + id.slice(1) })),
    labels: { skip: "Skip to content", menu: "Open menu", contents: "Contents", close: "Close menu", language: "Switch display language", github: "View GitHub", companyOutcome: "Public product outcome", contribution: "My responsibilities" },
    skillLevelLabels: { Professional: "Professional", Project: "Project", Academic: "Academic", Learning: "Learning" },
    hero: { eyebrow: "PORTFOLIO / 2026", name: "Mackey Tomy", role: "Software Engineer / Computer Science Student", lead: "I contribute to web service development in education while pursuing machine learning research at university.", summary: "My experience centers on frontend development, with selected backend work, infrastructure updates, and bug fixes.", profileLabel: "Profile summary", facts: [{ label: "Work", value: "Web service development in education" }, { label: "Research", value: "Supporting photo review before publication" }, { label: "Current", value: "Student Engineer / Japan" }], experienceLabel: "Experience", emailLabel: "Email" },
    experience: {
      kicker: "01 / PROFESSIONAL EXPERIENCE", title: "Developing and continuously\nimproving a web service.", intro: "At NITI Technology, I contribute to a web service in education. Only my broad responsibilities and publicly available information are shown.", company: "NITI Technology", role: "Software Engineer", period: "Ongoing", service: "Brest AI Academy", serviceDescription: "I contribute to the development and improvement of an AI learning web app for tutoring schools.", outcome: "The service is in production for around 400 ninth-grade students across all 14 Brest Group locations.",
      contribution: ["Frontend development and improvement", "Implementation and maintenance of selected backend features", "Infrastructure updates and maintenance", "Bug investigation, fixes, and continuous improvement"],
      links: sharedLinks, note: "Details of individual features, internal architecture, and technologies are not disclosed.",
    },
    research: { kicker: "02 / RESEARCH", title: "Photo review support tailored\nto individual preferences", status: "Ongoing Research", description: "When publishing photos of people, what feels uncomfortable to share can differ from person to person.", background: "I research methods that learn an individual's preferences from a small number of responses or photo examples and support review before publication.", approach: "Rather than replacing a person's decision, the goal is to narrow down photos that may need attention and reduce the burden of reviewing a large collection.", fields: ["Image Analysis", "Machine Learning", "Personalized Support"], activitiesTitle: "What I do in this research", activities: ["Defining the research question and reviewing related work", "Designing an interface for collecting responses to photos", "Managing image data with privacy in mind", "Implementing methods that work with limited data", "Designing data splits and evaluation methods", "Analyzing results and identifying improvements"], note: "As this research is ongoing, experimental data, specific methods, and detailed results are not publicly disclosed." },
    projects: { kicker: "03 / SELECTED PROJECT", title: "Find the problem.\nBuild the answer together.", intro: "A focused selection where I can clearly explain the problem, my role, and the engineering decisions.", items: [{ title: "Gabaithon Spring 2025", category: "Hackathon / Team Development", description: "A hackathon project where a five-person team developed a web application.", facts: ["February 2025", "Five-person team", "Rapid development"], contribution: "I participated in the project as a team member, from planning through implementation and presentation.", technologies: ["Web Application", "Team Development"], result: "Special Prize", links: [{ label: "GitHub", href: "https://github.com/sgupge2545/gabaithon202502saga2" }] }] },
    skills: { kicker: "04 / SKILLS", title: "A stack grounded\nin real experience.", intro: "Skills are organized by where I have used them, rather than by subjective percentages.", groups: [
      { title: "Frontend", description: "Responsive interfaces that help users act without hesitation.", items: [{ name: "TypeScript", level: "Professional", detail: "1+ year in React development and API integration." }, { name: "React", level: "Professional", detail: "Production feature development and improvement." }, { name: "Vite / Tailwind CSS", level: "Professional", detail: "1+ year in tooling and UI implementation." }, { name: "Next.js / Vue.js", level: "Project", detail: "Personal and team projects." }] },
      { title: "Backend & Data", description: "Maintainable APIs and data models behind the interface.", items: [{ name: "Node.js / Hono", level: "Professional", detail: "API development and external integrations." }, { name: "REST API", level: "Professional", detail: "6+ months of design and implementation." }, { name: "PostgreSQL / Drizzle", level: "Professional", detail: "Production and personal project data." }, { name: "Python / SQL", level: "Academic", detail: "Research, data processing, and coursework." }] },
      { title: "AI / LLM", description: "Product engineering around the model, not just model usage.", items: [{ name: "Prompt Engineering", level: "Professional", detail: "1+ year designing task-specific responses." }, { name: "LLM Application", level: "Professional", detail: "OpenAI and Gemini API features." }, { name: "RAG / Embedding", level: "Professional", detail: "Retrieval combined with generation." }, { name: "Multimodal AI", level: "Professional", detail: "AI features that process images." }] },
      { title: "Cloud & Quality", description: "Practices for safely shipping and operating software.", items: [{ name: "AWS", level: "Professional", detail: "S3, Lambda, RDS, CloudWatch, and more." }, { name: "Git / GitHub", level: "Professional", detail: "Branch- and PR-based teamwork." }, { name: "Vitest / Playwright", level: "Professional", detail: "Automated quality checks." }, { name: "Docker / CI", level: "Project", detail: "Environment setup and integration." }] },
    ], engineeringTitle: "Engineering Experience", engineering: ["REST API Design", "External API Integration", "LLM Integration", "Testing & Debugging", "Agile / Scrum", "Production Maintenance"] },
    qualifications: { kicker: "05 / QUALIFICATIONS & LEARNING", title: "Strong foundations,\ncontinuous learning.", achieved: "Qualifications", learning: "Currently Learning", items: [{ title: "JDLA Deep Learning for GENERAL", detail: "Japan Deep Learning Association", type: "achieved" }, { title: "TOEIC L&R 760", detail: "Also used for technical information", type: "achieved" }, { title: "Applied Information Technology Engineer", detail: "Studying structured CS and IT knowledge", type: "learning" }, { title: "AtCoder Beginner Contest", detail: "Algorithms and data structures", type: "learning" }] },
    leadership: { kicker: "06 / LEADERSHIP & TEACHING", title: "Supporting people,\nmoving teams forward.", intro: "Beyond engineering, I have learned to align different perspectives and explain technical ideas clearly.", items: [{ title: "Photography Club President", meta: "Around 100 members", description: "Led event planning, operations, member coordination, and communication with partner companies.", link: { label: "View club activities on Instagram", href: "https://www.instagram.com/sagauni_photo/" } }, { title: "Teaching Assistant", meta: "University", description: "Support exercises and student questions, adapting explanations to each learner." }] },
    photography: { kicker: "07 / PHOTOGRAPHY", title: "Observe, then frame\nthe right moment.", intro: "Photography is another way I have developed observation and communication. Every photograph shown here is my own work.", images: photosEn },
    contact: { kicker: "08 / CONTACT", title: "Projects, code,\nand contact.", description: "My projects and development history are available on GitHub. You can also contact me by email.", githubLabel: "GitHub", githubHandle: "@Mackey4869", emailLabel: "Email", email: "tomytech626@gmail.com", note: "Please allow a few days for a reply." },
    footer: { updated: "Last updated", copyright: "Mackey Tomy. All rights reserved." },
  },
}
