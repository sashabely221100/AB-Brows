const navLinks = [
  { href: '#about', label: 'Обо мне' },
  { href: '#training', label: 'Обучение' },
  { href: '#results', label: 'Результаты' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(247,241,232,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a
          href="#"
          className="font-serif text-2xl tracking-[-0.04em] text-[var(--text)] sm:text-3xl"
          aria-label="Anya Brows, перейти в начало"
        >
          Anya Brows
        </a>

        <nav
          className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex"
          aria-label="Основная навигация"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[var(--accent)] px-4 py-3 text-center text-xs font-medium text-[var(--surface)] shadow-[0_10px_30px_rgba(122,62,55,0.22)] transition hover:-translate-y-0.5 hover:bg-[#69342f] sm:px-5 sm:text-sm"
        >
          Узнать свободные даты
        </a>
      </div>
    </header>
  )
}
