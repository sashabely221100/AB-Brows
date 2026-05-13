import type { MouseEvent } from 'react'

export const FINAL_CTA_ID = 'final-cta'

type FinalCtaClickEvent = MouseEvent<HTMLAnchorElement | HTMLButtonElement>

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function scrollToFinalCta(event?: FinalCtaClickEvent) {
  event?.preventDefault()

  const target = document.getElementById(FINAL_CTA_ID)

  if (!target) {
    return
  }

  const firstScrollBehavior: ScrollBehavior = prefersReducedMotion()
    ? 'auto'
    : 'smooth'

  requestAnimationFrame(() => {
    target.scrollIntoView({
      behavior: firstScrollBehavior,
      block: 'start',
    })
  })

  window.setTimeout(() => {
    target.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }, 350)

  if (window.history.pushState && window.location.hash !== `#${FINAL_CTA_ID}`) {
    window.history.pushState(null, '', `#${FINAL_CTA_ID}`)
  }
}
