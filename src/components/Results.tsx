import caseOneAfterImage from '../assets/results/result-case-1-after.jpg'
import caseOneBeforeImage from '../assets/results/result-case-1-before.jpg'
import caseTwoAfterImage from '../assets/results/result-case-2-after.jpg'
import caseTwoBeforeImage from '../assets/results/result-case-2-before.jpg'
import caseThreeAfterImage from '../assets/results/result-case-3-after-v2.jpg'
import caseThreeBeforeImage from '../assets/results/result-case-3-before.jpg'

const cases = [
  {
    caption: 'Редкие участки',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: caseOneBeforeImage,
    afterImage: caseOneAfterImage,
  },
  {
    caption: 'Неравномерная плотность',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: caseTwoBeforeImage,
    afterImage: caseTwoAfterImage,
  },
  {
    caption: 'Ослабленные после окрашивания',
    subcaption: 'Реальный пример после 4 процедур',
    beforeImage: caseThreeBeforeImage,
    afterImage: caseThreeAfterImage,
  },
]

function BeforeAfterImage({
  image,
  label,
}: {
  image: string
  label: 'До' | 'После'
}) {
  return (
    <div
      className="relative aspect-[9/8] overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-[linear-gradient(145deg,#fff8ef,#ead9c8)]"
      aria-label={`${label}, фото примера процедуры`}
    >
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
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
