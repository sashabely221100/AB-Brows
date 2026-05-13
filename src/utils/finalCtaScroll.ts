import type { MouseEvent } from 'react'

export const FINAL_CTA_ID = 'final-cta'

type FinalCtaClickEvent = MouseEvent<HTMLAnchorElement | HTMLButtonElement>

export function handleFinalCtaScroll(event?: FinalCtaClickEvent) {
  event?.preventDefault()

  const target = document.getElementById(FINAL_CTA_ID)

  if (!target) {
    return
  }

  requestAnimationFrame(() => {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })

  window.setTimeout(() => {
    target.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    })
  }, 350)

  if (window.history?.pushState) {
    window.history.pushState(null, '', `#${FINAL_CTA_ID}`)
  }
}
