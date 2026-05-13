import heroProcedureImage from '../assets/images/hero-procedure-v1.jpg'
import heroProcedureAvif480 from '../assets/optimized/hero-procedure-v1-480.avif'
import heroProcedureAvif768 from '../assets/optimized/hero-procedure-v1-768.avif'
import heroProcedureAvif1122 from '../assets/optimized/hero-procedure-v1-1122.avif'
import heroProcedure480 from '../assets/optimized/hero-procedure-v1-480.webp'
import heroProcedure768 from '../assets/optimized/hero-procedure-v1-768.webp'
import heroProcedure1122 from '../assets/optimized/hero-procedure-v1-1122.webp'
import { FINAL_CTA_ID, handleFinalCtaScroll } from '../utils/finalCtaScroll'

const heroProcedureAvifSrcSet = `${heroProcedureAvif480} 480w, ${heroProcedureAvif768} 768w, ${heroProcedureAvif1122} 1122w`
const heroProcedureSrcSet = `${heroProcedure480} 480w, ${heroProcedure768} 768w, ${heroProcedure1122} 1122w`

const trustBadges = [
  '2,5+ года практики',
  'Онлайн для Европы и СНГ',
  'Практическое видео после обучения',
  'Редкая услуга с низкой конкуренцией',
]

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:pb-28 lg:pt-14">
        <div className="reveal max-w-3xl">
          <p className="hover-lift mb-6 inline-flex rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.72)] px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-card)]">
            Онлайн-обучение аппаратной работе с бровями
          </p>

          <h1 className="text-balance text-5xl font-medium leading-[0.98] tracking-[-0.06em] text-[var(--text)] sm:text-6xl lg:text-7xl">
            Другие маскируют брови — мы работаем с причиной
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            Онлайн-обучение аппаратному восстановлению бровей для мастеров и
            начинающих специалистов. Подходит и тем, кто хочет разобраться в
            процедуре для самостоятельного ухода дома.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={`#${FINAL_CTA_ID}`}
              className="hover-lift rounded-full bg-[var(--accent)] px-7 py-4 text-center font-medium text-[var(--surface)] shadow-[0_18px_42px_rgba(122,62,55,0.24)] hover:bg-[#69342f]"
              onClick={handleFinalCtaScroll}
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
          className="reveal reveal-delay-1 hover-lift relative min-h-[390px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[var(--shadow-soft)] sm:min-h-[560px] sm:rounded-[2.5rem] sm:p-7"
        >
          <div className="ambient-drift absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ead5c1] blur-3xl" />
          <div className="ambient-drift absolute -bottom-28 left-8 h-80 w-80 rounded-full bg-[#d7b4a2] opacity-60 blur-3xl" />

          <div className="relative h-full min-h-[364px] overflow-hidden rounded-[1.65rem] border border-[rgba(229,216,202,0.8)] bg-[var(--cream-deep)] sm:min-h-[500px] sm:rounded-[2rem]">
            <picture>
              <source
                type="image/avif"
                srcSet={heroProcedureAvifSrcSet}
                sizes="(min-width: 1024px) 44vw, calc(100vw - 40px)"
              />
              <source
                type="image/webp"
                srcSet={heroProcedureSrcSet}
                sizes="(min-width: 1024px) 44vw, calc(100vw - 40px)"
              />
              <img
                src={heroProcedureImage}
                alt="Аппаратное восстановление бровей в процессе процедуры"
                width="1122"
                height="1402"
                className="h-full min-h-[364px] w-full object-cover object-center sm:min-h-[500px]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,20,17,0.18)_0%,rgba(24,20,17,0.02)_34%,rgba(24,20,17,0.16)_100%)]" />

            <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2 text-xs leading-snug text-[var(--text)] min-[390px]:text-[13px] sm:left-6 sm:right-6 sm:top-6 sm:items-center sm:gap-3 sm:text-sm">
              <span className="max-w-[58%] rounded-2xl bg-[rgba(255,251,245,0.74)] px-3 py-1.5 shadow-[0_10px_24px_rgba(24,20,17,0.08)] sm:max-w-none sm:rounded-full sm:px-3 sm:py-1">
                Восстановление бровей
              </span>
              <span className="max-w-[34%] whitespace-nowrap rounded-2xl bg-[rgba(255,251,245,0.74)] px-3 py-1.5 text-center shadow-[0_10px_24px_rgba(24,20,17,0.08)] sm:max-w-none sm:rounded-full sm:px-3 sm:py-1">
                20–25 минут
              </span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
