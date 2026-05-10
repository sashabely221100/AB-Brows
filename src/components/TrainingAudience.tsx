const audienceCards = [
  {
    title: 'Мастерам',
    text: 'Если вы уже работаете с бровями и хотите добавить редкую услугу с высоким доверием и понятным результатом.',
  },
  {
    title: 'Начинающим',
    text: 'Если вы хотите освоить востребованное направление с нуля: от материалов и протокола до безопасной техники.',
  },
  {
    title: 'Для себя',
    text: 'Если вы хотите восстановить свои брови в домашних условиях и делать процедуру себе после понятного обучения, разбора материалов и противопоказаний.',
  },
]

export function TrainingAudience() {
  return (
    <section className="content-section px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
              Аудитория
            </p>
            <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
              Кому подойдёт обучение
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[var(--muted)]">
            Основной фокус остаётся на восстановлении бровей: для работы с
            клиентами, старта в профессии или аккуратного самостоятельного
            ухода после обучения.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {audienceCards.map((card, index) => (
            <article
              key={card.title}
              className={`reveal reveal-delay-${Math.min(index, 3)} hover-lift rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-7 lg:rounded-[2rem] lg:p-8`}
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(247,241,232,0.42)] text-sm text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[22px] font-medium leading-snug tracking-[-0.04em] text-[var(--text)]">
                {card.title}
              </h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
