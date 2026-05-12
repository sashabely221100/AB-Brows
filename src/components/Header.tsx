import { useState } from 'react'
import logoMark from '../assets/logo-ab-mark.svg'
import logo from '../assets/logo-ab-browws.svg'

const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#training', label: 'Обучение' },
  { href: '#results', label: 'Результаты' },
  { href: '#faq', label: 'FAQ' },
]

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <svg
        viewBox="0 0 48 48"
        className="h-7 w-7"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M15 15L33 33" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" />
        <path d="M33 15L15 33" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.8" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 48 48"
      className="eyebrow-menu-icon h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 20.5C17.5 11.5 31.5 11.5 39 20"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.6"
      />
      <path
        d="M11.5 27.5C18.5 34 29.5 34 36.5 27.5C29.5 22 18.5 22 11.5 27.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
      <path
        d="M24 25.4C25.65 25.4 27 26.75 27 28.4C27 30.05 25.65 31.4 24 31.4C22.35 31.4 21 30.05 21 28.4C21 26.75 22.35 25.4 24 25.4Z"
        fill="currentColor"
      />
      <path
        d="M15 30.2L13.2 33.1M19.5 32L18.8 35.2M24 32.5V35.9M28.5 32L29.2 35.2M33 30.2L34.8 33.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
        opacity="0.72"
      />
    </svg>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,241,232,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-10">
        <a
          href="#"
          className="flex items-center rounded-full"
          aria-label="AB Brows, перейти в начало"
          onClick={closeMenu}
        >
          <img
            src={logoMark}
            width="40"
            height="40"
            alt="AB Brows"
            className="pointer-events-none block h-10 w-10 select-none min-[521px]:hidden"
            decoding="async"
            draggable="false"
          />
          <img
            src={logo}
            width="176"
            height="46"
            alt="AB Brows"
            className="pointer-events-none hidden h-10 w-auto select-none min-[521px]:block sm:h-11"
            decoding="async"
            draggable="false"
          />
        </a>

        <nav
          className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform hover:text-[var(--text)] hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hover-lift hidden rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-medium text-[var(--surface)] shadow-[0_10px_30px_rgba(122,62,55,0.22)] hover:bg-[#69342f] md:inline-flex"
        >
          Узнать свободные даты
        </a>

        <button
          type="button"
          className="hover-lift inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.76)] text-[var(--accent)] md:hidden"
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${
          isMenuOpen
            ? 'grid grid-rows-[1fr] border-t border-[var(--border)]'
            : 'grid grid-rows-[0fr]'
        } overflow-hidden bg-[rgba(247,241,232,0.94)] transition-[grid-template-rows] duration-300 ease-out`}
      >
        <nav className="min-h-0 overflow-hidden" aria-label="Мобильная навигация">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-[var(--border)] bg-[rgba(255,251,245,0.68)] px-5 py-4 text-[var(--text)] transition hover:border-[var(--accent)] hover:shadow-[var(--shadow-card)]"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-full bg-[var(--accent)] px-5 py-4 text-center font-medium text-[var(--surface)] shadow-[0_12px_34px_rgba(122,62,55,0.22)]"
              onClick={closeMenu}
            >
              Узнать свободные даты
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
