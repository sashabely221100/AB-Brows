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
            Хотите добавить в прайс редкую услугу и работать с запросами, от
            которых раньше приходилось отказываться?
          </h2>
          <a
            href="#contact"
            className="hover-lift mt-9 inline-flex rounded-full bg-[var(--accent)] px-8 py-4 text-center font-medium text-[var(--surface)] shadow-[0_18px_42px_rgba(122,62,55,0.24)] hover:bg-[#69342f]"
          >
            Узнать свободные даты
          </a>
          <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted)]">
            MVP-страница: кнопка пока ведёт к этому блоку, без формы,
            календаря и платёжных интеграций.
          </p>
        </div>
      </div>
    </section>
  )
}
