import caseOneAfterImage from '../assets/results/result-case-1-after.jpg'
import caseOneBeforeImage from '../assets/results/result-case-1-before.jpg'
import caseTwoAfterImage from '../assets/results/result-case-2-after.jpg'
import caseTwoBeforeImage from '../assets/results/result-case-2-before.jpg'
import caseThreeAfterImage from '../assets/results/result-case-3-after-v2.jpg'
import caseThreeBeforeImage from '../assets/results/result-case-3-before.jpg'
import caseOneAfter480 from '../assets/optimized/result-case-1-after-480.webp'
import caseOneAfter768 from '../assets/optimized/result-case-1-after-768.webp'
import caseOneBefore480 from '../assets/optimized/result-case-1-before-480.webp'
import caseOneBefore768 from '../assets/optimized/result-case-1-before-768.webp'
import caseTwoAfter480 from '../assets/optimized/result-case-2-after-480.webp'
import caseTwoAfter768 from '../assets/optimized/result-case-2-after-768.webp'
import caseTwoBefore480 from '../assets/optimized/result-case-2-before-480.webp'
import caseTwoBefore768 from '../assets/optimized/result-case-2-before-768.webp'
import caseThreeAfter480 from '../assets/optimized/result-case-3-after-v2-480.webp'
import caseThreeAfter768 from '../assets/optimized/result-case-3-after-v2-768.webp'
import caseThreeAfter1200 from '../assets/optimized/result-case-3-after-v2-1200.webp'
import caseThreeBefore480 from '../assets/optimized/result-case-3-before-480.webp'
import caseThreeBefore768 from '../assets/optimized/result-case-3-before-768.webp'

type ResultImage = {
  src: string
  srcSet: string
  width: number
  height: number
}

const cases = [
  {
    caption: 'Редкие участки',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: {
      src: caseOneBeforeImage,
      srcSet: `${caseOneBefore480} 480w, ${caseOneBefore768} 768w`,
      width: 900,
      height: 800,
    },
    afterImage: {
      src: caseOneAfterImage,
      srcSet: `${caseOneAfter480} 480w, ${caseOneAfter768} 768w`,
      width: 900,
      height: 800,
    },
  },
  {
    caption: 'Неравномерная плотность',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: {
      src: caseTwoBeforeImage,
      srcSet: `${caseTwoBefore480} 480w, ${caseTwoBefore768} 768w`,
      width: 900,
      height: 800,
    },
    afterImage: {
      src: caseTwoAfterImage,
      srcSet: `${caseTwoAfter480} 480w, ${caseTwoAfter768} 768w`,
      width: 900,
      height: 800,
    },
  },
  {
    caption: 'Ослабленные после окрашивания',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: {
      src: caseThreeBeforeImage,
      srcSet: `${caseThreeBefore480} 480w, ${caseThreeBefore768} 768w`,
      width: 900,
      height: 800,
    },
    afterImage: {
      src: caseThreeAfterImage,
      srcSet: `${caseThreeAfter480} 480w, ${caseThreeAfter768} 768w, ${caseThreeAfter1200} 1200w`,
      width: 2759,
      height: 2069,
    },
  },
]

function BeforeAfterImage({
  image,
  label,
}: {
  image: ResultImage
  label: 'До' | 'После'
}) {
  return (
    <div
      className="relative aspect-[9/8] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(145deg,#fff8ef,#ead9c8)]"
      aria-label={`${label}, фото примера процедуры`}
    >
      <picture>
        <source
          type="image/webp"
          srcSet={image.srcSet}
          sizes="(min-width: 1024px) 14vw, 44vw"
        />
        <img
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </picture>
      <span className="absolute bottom-4 left-4 rounded-full bg-[rgba(255,251,245,0.82)] px-4 py-2 text-sm text-[var(--muted)] shadow-[0_10px_24px_rgba(24,20,17,0.08)]">
        {label}
      </span>
    </div>
  )
}

export function Results() {
  return (
    <section
      id="results"
      className="content-section scroll-mt-28 px-5 py-12 sm:px-8 sm:py-16 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
            Кейсы
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
            Результаты процедуры
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-[var(--muted)]">
            Реальные примеры после 4 процедур: новые волоски в зонах с
            длительным отсутствием роста. Динамика индивидуальна и не является
            гарантией одинакового результата.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.caption}
              className="hover-lift rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)]"
            >
              <div className="grid grid-cols-2 gap-3">
                <BeforeAfterImage image={item.beforeImage} label="До" />
                <BeforeAfterImage image={item.afterImage} label="После" />
              </div>
              <div className="p-3 pt-6">
                <h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--text)]">
                  {item.caption}
                </h3>
                <p className="mt-2 text-[var(--muted)]">{item.subcaption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
