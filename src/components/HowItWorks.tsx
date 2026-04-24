const steps = [
  'Нажимаете «Узнать свободные даты»',
  'Выбираете удобную дату онлайн-встречи',
  'Выбираете способ оплаты',
  'После оплаты получаете подтверждение и ссылку на Zoom',
]

export function HowItWorks() {
  return (
    <section
      id="process"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="reveal hover-lift mx-auto max-w-7xl rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Процесс
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Как проходит обучение
          </h2>
        </div>

        <ol className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="hover-lift relative rounded-[1.75rem] border border-[var(--border)] bg-[rgba(247,241,232,0.58)] p-6"
            >
              <span className="text-sm text-[var(--accent)]">
                Шаг {index + 1}
              </span>
              <p className="mt-8 text-xl font-medium leading-snug tracking-[-0.03em] text-[var(--text)]">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,251,245,0.76)] p-5 leading-7 text-[var(--muted)]">
          <p>
            Для учениц из СНГ доступна оплата через Telegram/Tribute. Для
            учениц из Европы — перевод на банковские реквизиты.
          </p>
        </div>
      </div>
    </section>
  )
}
