import { useEffect, useState } from 'react'

const scrollThreshold = 400

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > scrollThreshold)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Вернуться наверх"
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#E5D8CA] bg-[#FFFBF5]/90 text-[#7A3E37] shadow-sm backdrop-blur transition hover:bg-[#F7F1E8] focus:outline-none focus:ring-2 focus:ring-[#7A3E37]/30 md:bottom-6 md:right-6 lg:hidden"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-5 w-5"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M8.5 18.5L16 11L23.5 18.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M16 11.8V23"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    </button>
  )
}
