const benefits = [
  {
    title: 'Редкая услуга с низкой конкуренцией',
    text: 'Помогает выделиться среди классических brow-услуг.',
    className: 'lg:col-span-4',
  },
  {
    title: 'Подходит для себя',
    text: 'Технику можно использовать как для работы с клиентами, так и для самостоятельного восстановления бровей дома.',
    className: 'lg:col-span-4',
  },
  {
    title: 'Процедура занимает 20–25 минут',
    text: 'Компактный формат легко встроить в рабочий день мастера.',
    className: 'lg:col-span-4',
  },
  {
    title: 'Можно повысить средний чек',
    text: 'Услуга закрывает более глубокий запрос клиента.',
    className: 'lg:col-span-3',
  },
  {
    title: 'Клиенты приходят с понятным запросом',
    text: 'Фокус на аккуратной работе с причиной, а не на поверхностной маскировке.',
    className: 'lg:col-span-3',
  },
  {
    title: 'Подходит мастерам из Европы и СНГ',
    text: 'Онлайн-формат без привязки к городу.',
    className: 'lg:col-span-3',
  },
  {
    title: 'Практическое видео после обучения',
    text: 'После Zoom остаётся понятный визуальный ориентир.',
    className: 'lg:col-span-3',
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

        <div className="mt-8 grid auto-rows-fr gap-4 md:grid-cols-2 lg:mt-10 lg:grid-cols-12">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className={`reveal reveal-delay-${Math.min(index, 3)} hover-lift min-h-[165px] rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:min-h-[178px] md:min-h-[188px] md:p-6 lg:min-h-[190px] lg:rounded-[2rem] lg:p-7 ${benefit.className}`}
            >
              <div className="flex h-full flex-col items-start text-left">
                <div className="mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(247,241,232,0.42)] text-xs text-[var(--accent)] sm:text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="max-w-xl text-[21px] font-medium leading-snug tracking-[-0.04em] text-[var(--text)] lg:text-[22px]">
                  {benefit.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-[var(--muted)] lg:leading-7">
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
