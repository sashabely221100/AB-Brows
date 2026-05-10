const telegramBotUrl = 'https://t.me/ab_browws_booking_bot?start=landing'

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="reveal hover-lift mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fffbf5_0%,#f1e2d3_58%,#dfc4b4_100%)] p-8 shadow-[var(--shadow-soft)] sm:p-12 lg:p-16">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Следующий шаг
          </p>
          <h2 className="text-4xl font-medium leading-tight tracking-[-0.05em] text-[var(--text)] sm:text-5xl lg:text-6xl">
            Готовы добавить в прайс редкую услугу?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Стоимость обучения: 9 500 ₽ / 110 € / 130 $. Перейдите в
            Telegram-бота, чтобы посмотреть свободные даты и выбрать удобный
            способ оплаты.
          </p>
          <a
            href={telegramBotUrl}
            className="hover-lift mt-9 inline-flex rounded-full bg-[var(--accent)] px-8 py-4 text-center font-medium text-[var(--surface)] shadow-[0_18px_42px_rgba(122,62,55,0.24)] hover:bg-[#69342f]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть Telegram-бота
          </a>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)]">
            Оплата проходит вне сайта: через Tribute или банковский перевод.
            Детали записи и подтверждение оплаты — в Telegram-боте.
          </p>
        </div>
      </div>
    </section>
  )
}
