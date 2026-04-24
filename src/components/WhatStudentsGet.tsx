const items = [
  'Zoom-встреча',
  'Разбор техники',
  'Материалы и закупка',
  'Показания и противопоказания',
  'Видео с отработкой на модели',
  'Понятная система внедрения услуги',
]

export function WhatStudentsGet() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Что получает ученица
          </h2>
          <p className="max-w-md leading-7 text-[var(--muted)]">
            Без лишней теории и громких обещаний: только структура, техника и
            практический ориентир для внедрения услуги.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item}
              className="rounded-[1.75rem] border border-[var(--border)] bg-[rgba(255,251,245,0.78)] p-6 shadow-[var(--shadow-card)]"
            >
              <span
                className="mb-7 block h-px w-14 bg-[var(--accent)]"
                aria-hidden="true"
              />
              <h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
