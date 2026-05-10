export function About() {
  return (
    <section
      id="about"
      className="content-section scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10"
    >
      <div className="reveal hover-lift mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] border border-[var(--border)] bg-[rgba(255,251,245,0.72)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:p-10">
        <div>
          <figure
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(150deg,#f7efe4,#e3cdb9_60%,#cda38e)] p-6"
            aria-label="Блок специалиста Anya Brows"
          >
            <div className="absolute left-1/2 top-20 h-44 w-44 -translate-x-1/2 rounded-full border border-[rgba(122,62,55,0.18)] bg-[rgba(255,251,245,0.36)]" />
            <div className="absolute bottom-0 left-1/2 h-56 w-64 -translate-x-1/2 rounded-t-full border border-[rgba(122,62,55,0.18)] bg-[rgba(255,251,245,0.28)]" />
            <figcaption className="relative z-10 mt-auto inline-flex rounded-full bg-[rgba(255,251,245,0.72)] px-4 py-2 text-sm text-[var(--muted)]">
              Специалист по восстановлению бровей
            </figcaption>
          </figure>
          <p className="mt-6 pl-2 font-serif text-[40px] leading-none tracking-[-0.08em] text-[#7A3E37] italic md:text-[56px] lg:pl-4">
            Anya
          </p>
        </div>

        <div className="max-w-3xl lg:pl-6">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Обо мне
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            О специалисте и подходе
          </h2>
          <div className="mt-7 space-y-5 text-[1.04rem] leading-8 text-[var(--muted)] sm:text-lg">
            <p>
              Меня зовут Аня. Я специалист в Вене, который работает с
              аппаратными методиками для деликатного ухода и визуальной работы
              с бровями.
            </p>
            <p>
              За более чем 2,5 года ко мне обращались десятки девушек с разным
              исходным состоянием бровей: после перещипа, татуажа и неудачных
              процедур.
            </p>
            <p>
              В работе я не обещаю одинаковый или постоянный результат для
              всех. Мой подход — не маскировать запрос временными решениями, а
              аккуратно разбирать исходное состояние и подбирать понятную
              тактику ухода.
            </p>
          </div>
          <p className="mt-8 border-l border-[rgba(122,62,55,0.36)] pl-5 text-[1.04rem] leading-8 text-[var(--text)] sm:text-lg">
            Если ты мастер и тоже хочешь помогать клиентам работать с такими
            запросами аккуратно, структурно и без обещаний гарантированного
            эффекта — ты сможешь этому научиться.
          </p>
        </div>
      </div>
    </section>
  )
}
