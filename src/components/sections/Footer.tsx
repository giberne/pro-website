import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 px-4 py-8 dark:border-white/10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Contenu du footer */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Copyright et liens légaux */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-xs text-muted sm:text-sm">
              © {currentYear} Thomas Giberné. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link
                href="/mentions-legales"
                className="text-xs transition-colors hover:text-black dark:hover:text-white sm:text-sm"
              >
                Mentions légales
              </Link>
              <Link
                href="/cgv"
                className="text-xs transition-colors hover:text-black dark:hover:text-white sm:text-sm"
              >
                CGV
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/giberne-thomas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-black dark:hover:text-white sm:text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gibernethomas@gmail.com"
              className="text-xs transition-colors hover:text-black dark:hover:text-white sm:text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
