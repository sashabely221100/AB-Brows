import logo from '../assets/logo-ab-brows.svg'

const channels = [
  { label: 'Telegram' },
  { label: 'Instagram', href: 'https://www.instagram.com/ab.browws/' },
  { label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <img
            src={logo}
            width="150"
            height="39"
            alt="AB Brows"
            className="h-9 w-auto"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-2">© 2026 AB Brows. Все права защищены.</p>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Контактные каналы">
          {channels.map((channel) =>
            channel.href ? (
              <a
                key={channel.label}
                href={channel.href}
                className="hover-lift rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.56)] px-4 py-2"
                target="_blank"
                rel="noreferrer"
              >
                {channel.label}
              </a>
            ) : (
              <span
                key={channel.label}
                className="hover-lift rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.56)] px-4 py-2"
              >
                {channel.label}
              </span>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
