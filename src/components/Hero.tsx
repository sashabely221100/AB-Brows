const trustBadges = [
  '2,5+ года практики',
  'Онлайн для Европы и СНГ',
  'Практическое видео после Zoom',
  'Редкая услуга с низкой конкуренцией',
]

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:py-28">
        <div className="reveal max-w-3xl">
          <p className="hover-lift mb-6 inline-flex rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.72)] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-card)]">
            Онлайн-обучение аппаратному восстановлению бровей
          </p>

          <h1 className="text-balance text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-[var(--text)] sm:text-6xl lg:text-7xl">
            Пока другие маскируют брови — мы возвращаем им рост
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            Онлайн-обучение аппаратному восстановлению бровей для мастеров,
            которые хотят работать с причиной проблемы, повысить чек и добавить
            редкую услугу в свой прайс.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="hover-lift rounded-full bg-[var(--accent)] px-7 py-4 text-center font-medium text-[var(--surface)] shadow-[0_18px_42px_rgba(122,62,55,0.24)] hover:bg-[#69342f]"
            >
              Узнать свободные даты
            </a>
            <a
              href="#process"
              className="hover-lift rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.72)] px-7 py-4 text-center font-medium text-[var(--text)]"
            >
              Как проходит обучение
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="hover-lift flex items-center gap-3 rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.62)] px-4 py-3"
              >
                <span
                  className="h-2 w-2 rounded-full bg-[var(--accent)]"
                  aria-hidden="true"
                />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <figure
          className="reveal reveal-delay-1 hover-lift relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)] sm:min-h-[560px] sm:p-7"
          aria-label="Фото процедуры, временный декоративный placeholder"
        >
          <div className="ambient-drift absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ead5c1] blur-3xl" />
          <div className="ambient-drift absolute -bottom-28 left-8 h-80 w-80 rounded-full bg-[#d7b4a2] opacity-60 blur-3xl" />

          <div className="relative flex h-full min-h-[380px] flex-col justify-between rounded-[2rem] border border-[rgba(229,216,202,0.8)] bg-[linear-gradient(145deg,#fff9ef_0%,#eadccd_58%,#d0a994_100%)] p-6 sm:min-h-[500px] sm:p-8">
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>Vienna brow recovery</span>
              <span className="rounded-full bg-[rgba(255,251,245,0.68)] px-3 py-1">
                20–25 минут
              </span>
            </div>

            <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-[rgba(122,62,55,0.18)] bg-[rgba(255,251,245,0.28)] shadow-[inset_0_0_80px_rgba(255,251,245,0.46)] sm:h-72 sm:w-72">
              <div className="h-32 w-32 rounded-full border border-[rgba(122,62,55,0.22)] sm:h-44 sm:w-44" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[var(--accent)]">
                Фото процедуры
              </p>
              <figcaption className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-[-0.04em] text-[var(--text)] sm:text-3xl">
                Мягкий, аппаратный подход к восстановлению редких и
                повреждённых бровей
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
