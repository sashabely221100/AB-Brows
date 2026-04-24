import { useState } from 'react'
import logoMark from '../assets/logo-ab-mark.svg'
import logo from '../assets/logo-ab-brows.svg'

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
        <path
          d="M9 27.5C16 18 31 15.7 39 24.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2.2"
        />
        <path
          d="M14 19.5C22 15 32 15.4 38 21"
          fill="none"
          opacity="0.48"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path
          d="M31 11L17 38"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <path
          d="M28.6 10.2L33.4 12.6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 48 48"
      className="h-7 w-7"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M10 19C17.5 12.5 30.5 12.5 38 19"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
      <path
        d="M12 29C19 23 29 23 36 29"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.4"
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
          className="hover-lift flex items-center rounded-full"
          aria-label="AB Brows, перейти в начало"
          onClick={closeMenu}
        >
          <picture>
            <source srcSet={logoMark} media="(max-width: 520px)" />
            <img
              src={logo}
              width="176"
              height="46"
              alt="AB Brows"
              className="h-10 w-auto sm:h-11"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
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
