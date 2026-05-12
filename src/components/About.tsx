import anyaProfileImage from '../assets/images/anya-profile-v1.jpg'
import anyaProfileAvif480 from '../assets/optimized/anya-profile-v1-480.avif'
import anyaProfileAvif768 from '../assets/optimized/anya-profile-v1-768.avif'
import anyaProfileAvif1200 from '../assets/optimized/anya-profile-v1-1200.avif'
import anyaProfile480 from '../assets/optimized/anya-profile-v1-480.webp'
import anyaProfile768 from '../assets/optimized/anya-profile-v1-768.webp'
import anyaProfile1200 from '../assets/optimized/anya-profile-v1-1200.webp'

const anyaProfileAvifSrcSet = `${anyaProfileAvif480} 480w, ${anyaProfileAvif768} 768w, ${anyaProfileAvif1200} 1200w`
const anyaProfileSrcSet = `${anyaProfile480} 480w, ${anyaProfile768} 768w, ${anyaProfile1200} 1200w`

export function About() {
  return (
    <section
      id="about"
      className="content-section scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="reveal hover-lift mx-auto grid max-w-7xl items-center gap-10 rounded-[2.5rem] border border-[var(--border)] bg-[rgba(255,251,245,0.72)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[0.86fr_1.14fr] lg:p-10">
        <div>
          <figure
            className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(150deg,#f7efe4,#e3cdb9_60%,#cda38e)] p-6"
          >
            <picture>
              <source
                type="image/avif"
                srcSet={anyaProfileAvifSrcSet}
                sizes="(min-width: 1024px) 36vw, calc(100vw - 88px)"
              />
              <source
                type="image/webp"
                srcSet={anyaProfileSrcSet}
                sizes="(min-width: 1024px) 36vw, calc(100vw - 88px)"
              />
              <img
                src={anyaProfileImage}
                alt="Аня, специалист Anya Brows по аппаратному восстановлению бровей"
                width="1448"
                height="1086"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </picture>
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
            Если вы уже работаете с бровями, только начинаете путь в профессии
            или хотите освоить процедуру для себя, на обучении вы разберёте
            технику с опытным мастером: от материалов и противопоказаний до
            аккуратного выполнения процедуры с доказанным эффектом.
          </p>
        </div>
      </div>
    </section>
  )
}
