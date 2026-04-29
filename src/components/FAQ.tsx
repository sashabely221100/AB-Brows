import { useState } from 'react'

const faqs = [
  {
    question: 'Это курс или консультация?',
    answer:
      'Это онлайн-консультация / обучение в формате Zoom. Мы встречаемся онлайн, разбираем технику и рекомендации. После встречи вы получаете практическое видео с отработкой на модели.',
  },
  {
    question: 'Что я получу после Zoom?',
    answer:
      'После Zoom вы получаете рекомендации, разбор техники и практическое видео, чтобы было проще внедрить услугу в работу.',
  },
  {
    question: 'Какие материалы нужны?',
    answer:
      'На встрече разбираем материалы, закупку и базовую логику выбора средств для процедуры.',
  },
  {
    question: 'Можно ли обучаться из СНГ?',
    answer:
      'Да. Обучение проходит онлайн, поэтому подходит мастерицам из Европы и СНГ.',
  },
  {
    question: 'Как проходит оплата?',
    answer:
      'Перед инструкциями по оплате вы подтверждаете, что ознакомились с условиями, политикой конфиденциальности и правилами отмены. Оплата проходит внешне: через Telegram/Tribute для учениц из СНГ или банковский перевод для учениц из Европы. Сайт и бот не обрабатывают платежи, не запрашивают данные банковских карт и используют только минимальную информацию для записи.',
  },
  {
    question: 'Нужен ли опыт в бровях?',
    answer:
      'Базовый опыт в бровях будет плюсом. Формат рассчитан на мастеров, которые уже понимают основы работы с клиентами.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      id="faq"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <div className="reveal max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            FAQ
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Частые вопросы
          </h2>
        </div>

        <div className="mt-9 w-full space-y-3 sm:mt-10">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            const buttonId = `faq-button-${index}`
            const contentId = `faq-content-${index}`

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]"
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium tracking-[-0.02em] text-[var(--text)] transition-colors hover:bg-[rgba(247,241,232,0.42)] sm:gap-5 sm:px-6 sm:text-lg"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)]"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-5 text-[var(--muted)] sm:px-6 ${
                    isOpen ? 'pb-6' : 'hidden'
                  }`}
                >
                  <p className="max-w-3xl leading-7">{item.answer}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
