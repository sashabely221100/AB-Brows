const cases = [
  {
    caption: 'Слабые брови, редкие участки',
    subcaption: 'Курс восстановления, 1 процедура',
  },
  {
    caption: 'Неравномерный рост',
    subcaption: 'Курс восстановления, 2 процедуры',
  },
  {
    caption: 'Повреждение после окрашивания',
    subcaption: 'Курс восстановления, 3 процедуры',
  },
]

function BeforeAfterPlaceholder({ label }: { label: 'До' | 'После' }) {
  return (
    <div
      className="relative flex min-h-52 items-end overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(145deg,#fff8ef,#ead9c8)] p-4"
      aria-label={`${label}, временный placeholder результата`}
    >
      <div className="absolute left-1/2 top-1/2 h-28 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(122,62,55,0.18)] bg-[rgba(255,251,245,0.42)]" />
      <span className="relative rounded-full bg-[rgba(255,251,245,0.76)] px-4 py-2 text-sm text-[var(--muted)]">
        {label}
      </span>
    </div>
  )
}

export function Results() {
  return (
    <section
      id="results"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Кейсы
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Результаты процедуры
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.caption}
              className="hover-lift rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)]"
            >
              <div className="grid grid-cols-2 gap-3">
                <BeforeAfterPlaceholder label="До" />
                <BeforeAfterPlaceholder label="После" />
              </div>
              <div className="p-3 pt-6">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">
                  {item.caption}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{item.subcaption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
