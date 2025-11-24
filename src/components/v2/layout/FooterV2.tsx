import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

export default function FooterV2() {
  return (
    <footer className="mt-20 p-4 flex justify-center">
      <div className="card-ground w-full max-w-5xl !py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column - 2 rows */}
          <div className="flex flex-col gap-4 items-center md:items-start">
            {/* Row 1: Logo + Name in same card */}
            <div className="flex items-center gap-3 bg-[var(--color-bg-upper)] rounded-[var(--radius-sm)] shadow-[var(--shadow-md)] p-[var(--spacing-1)] w-fit">
              <Image
                src="/TCL-favicon.svg"
                alt="The Crystal Lad"
                width={32}
                height={32}
              />
              <h3
                className="text-lg font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-chivo-mono)' }}
              >
                The Crystal Lad
              </h3>
            </div>

            {/* Row 2: Copyright */}
            <p className="text-sm text-center text-[var(--color-muted)]">
              © 2025 Thomas Giberné. Tous droits réservés.
            </p>
          </div>

          {/* Right Column - 2 rows */}
          <div className="flex flex-col gap-4 items-center md:items-end">
            {/* Row 1: Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/giberne.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-bg-upper)] rounded-[var(--radius-sm)] shadow-[var(--shadow-md)] p-[var(--spacing-1)] hover:shadow-[var(--shadow-primary)] transition-shadow"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/giberne-thomas/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-bg-upper)] rounded-[var(--radius-sm)] shadow-[var(--shadow-md)] p-[var(--spacing-1)] hover:shadow-[var(--shadow-primary)] transition-shadow"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* Row 2: Legal Links */}
            <div className="flex items-center gap-6">
              <Link
                href="/cgv"
                className="text-sm hover:text-[var(--color-primary)] transition-colors"
              >
                CGV
              </Link>
              <Link
                href="/mentions-legales"
                className="text-sm hover:text-[var(--color-primary)] transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
