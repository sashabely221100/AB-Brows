const benefits = [
  {
    title: 'Редкая услуга с низкой конкуренцией',
    text: 'Помогает выделиться среди классических brow-услуг.',
    className: 'md:col-span-2 lg:col-span-6',
  },
  {
    title: 'Процедура занимает 20–25 минут',
    text: 'Компактный формат легко встроить в рабочий день мастера.',
    className: 'lg:col-span-3',
  },
  {
    title: 'Можно повысить средний чек',
    text: 'Услуга закрывает более глубокий запрос клиента.',
    className: 'lg:col-span-3',
  },
  {
    title: 'Клиенты приходят за результатом',
    text: 'Фокус на восстановлении, а не на временной маскировке.',
    className: 'lg:col-span-4',
  },
  {
    title: 'Подходит мастерам из Европы и СНГ',
    text: 'Онлайн-формат без привязки к городу.',
    className: 'lg:col-span-4',
  },
  {
    title: 'Практическое видео после обучения',
    text: 'После Zoom остаётся понятный визуальный ориентир.',
    className: 'md:col-span-2 lg:col-span-4',
  },
]

export function BenefitsBento() {
  return (
    <section
      id="training"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Обучение
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Почему это обучение выбирают мастера
          </h2>
        </div>

        <div className="mt-10 grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-12">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`reveal reveal-delay-${Math.min(index, 3)} hover-lift flex min-h-56 flex-col rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-card)] sm:p-7 ${benefit.className}`}
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(247,241,232,0.42)] text-sm text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mt-auto">
                <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.04em] text-[var(--text)]">
                  {benefit.title}
                </h3>
                <p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">
                  {benefit.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
