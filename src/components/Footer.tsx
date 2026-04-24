const channels = ['Telegram', 'Instagram', 'WhatsApp']

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[-0.04em] text-[var(--text)]">
            Anya Brows
          </p>
          <p className="mt-2">© 2026 Anya Brows. Все права защищены.</p>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Контактные каналы">
          {channels.map((channel) => (
            <span
              key={channel}
              className="rounded-full border border-[var(--border)] bg-[rgba(255,251,245,0.56)] px-4 py-2"
            >
              {channel}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
