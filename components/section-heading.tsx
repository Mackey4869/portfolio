type Props = { kicker: string; title: string; intro?: string }

export function SectionHeading({ kicker, title, intro }: Props) {
  return (
    <header className="section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  )
}
