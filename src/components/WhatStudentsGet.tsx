import {
  IndicationsIcon,
  MaterialsSourcingIcon,
  OnlineMeetingIcon,
  PracticeVideoIcon,
  ServiceSystemIcon,
  TechniqueReviewIcon,
} from './StudentValueIcons'

const items = [
  { title: 'Онлайн-встреча в удобном формате', Icon: OnlineMeetingIcon },
  { title: 'Разбор техники', Icon: TechniqueReviewIcon },
  { title: 'Материалы и закупка', Icon: MaterialsSourcingIcon },
  { title: 'Показания и противопоказания', Icon: IndicationsIcon },
  { title: 'Видео с отработкой на модели', Icon: PracticeVideoIcon },
  { title: 'Понятная система внедрения услуги', Icon: ServiceSystemIcon },
]

export function WhatStudentsGet() {
  return (
    <section className="content-section px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Что получает ученица
          </h2>
          <p className="max-w-md leading-7 text-[var(--muted)]">
            Без лишней теории и громких обещаний: только структура, техника и
            практический ориентир для внедрения услуги.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, Icon }) => (
            <article
              key={title}
              className="hover-lift flex min-h-48 flex-col items-center justify-center rounded-[1.75rem] border border-[var(--border)] bg-[rgba(255,251,245,0.78)] p-6 text-center shadow-[var(--shadow-card)] sm:min-h-56"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(239,225,215,0.58)] text-[var(--accent)] sm:h-16 sm:w-16">
                <Icon className="h-9 w-9 sm:h-10 sm:w-10" />
              </div>
              <span
                className="mb-5 block h-px w-14 bg-[var(--accent)] opacity-70"
                aria-hidden="true"
              />
              <h3 className="max-w-64 text-xl font-medium tracking-[-0.03em] text-[var(--text)]">
                {title}
              </h3>
            </article>
          ))}
        </div>

        <article className="reveal hover-lift mt-5 rounded-[1.75rem] border border-[var(--border)] bg-[rgba(255,251,245,0.78)] p-6 shadow-[var(--shadow-card)] sm:p-7 lg:rounded-[2rem] lg:p-8">
          <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Дополнительно
          </p>
          <h3 className="text-2xl font-medium tracking-[-0.04em] text-[var(--text)]">
            Дополнительное направление
          </h3>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
            Методика может быть адаптирована для работы с волосами по
            отдельному протоколу. Если вам интересен комплекс «брови + волосы»,
            это можно обсудить индивидуально перед записью.
          </p>
        </article>
      </div>
    </section>
  )
}
