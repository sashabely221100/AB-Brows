const steps = [
  'Нажимаете «Узнать свободные даты»',
  'Выбираете удобную дату онлайн-встречи',
  'Выбираете способ оплаты',
  'После внешней оплаты получаете подтверждение и ссылку на онлайн-встречу',
]

export function HowItWorks() {
  return (
    <section
      id="process"
      className="content-section scroll-mt-28 px-4 py-10 sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="reveal hover-lift mx-auto w-full max-w-7xl rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:rounded-[2.5rem] sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Процесс
          </p>
          <h2 className="text-[2.15rem] font-medium leading-tight tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Как проходит обучение
          </h2>
        </div>

        <ol className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 lg:mt-10 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="hover-lift relative flex items-start gap-3 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(247,241,232,0.58)] p-5 sm:block sm:rounded-[1.75rem] sm:p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-medium text-[var(--accent)] sm:hidden"
              >
                {index + 1}
              </span>
              <span className="hidden text-sm text-[var(--accent)] sm:inline">
                Шаг {index + 1}
              </span>
              <p className="text-base font-medium leading-snug tracking-[-0.03em] text-[var(--text)] min-[390px]:text-lg sm:mt-8 sm:text-xl">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,251,245,0.76)] p-5 text-sm leading-6 text-[var(--muted)] sm:mt-8 sm:text-base sm:leading-7">
          <p className="font-medium text-[var(--text)]">
            Перед оплатой вы подтверждаете, что ознакомились с условиями
            обучения, политикой конфиденциальности и правилами отмены записи.
          </p>
          <p className="mt-3">
            Оплата проходит внешне: для учениц из СНГ доступны инструкции для
            Telegram/Tribute, для учениц из Европы — банковский перевод.
          </p>
          <p>
            Сайт и бот не обрабатывают платежи, не запрашивают номера карт,
            CVV, банковские логины, паспортные или медицинские данные.
            Для записи используется только минимальная информация, необходимая
            для связи и подтверждения онлайн-встречи.
          </p>
          <p className="mt-3">
            Встреча проходит в удобном для вас формате: Telegram, Zoom или
            другая платформа по договорённости.
          </p>
        </div>
      </div>
    </section>
  )
}
