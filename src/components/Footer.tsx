import logo from '../assets/logo-ab-browws.svg'

const channels = [
  { label: 'Telegram' },
  { label: 'Instagram', href: 'https://www.instagram.com/ab.browws/' },
  { label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="mx-auto flex h-9 items-center justify-center md:mx-0 md:justify-start">
            <img
              src={logo}
              width="150"
              height="39"
              alt="AB Brows"
              className="block h-[30px] w-auto max-w-[150px] object-contain"
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          </div>
          <p className="leading-none text-center md:text-left">
            © 2026 AB Brows. Все права защищены.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 md:justify-end"
          aria-label="Контактные каналы"
        >
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
