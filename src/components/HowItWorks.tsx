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
      className="content-section scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-10"
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
