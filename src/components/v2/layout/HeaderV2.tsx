'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollToSection } from '@/hooks/useScrollToSection'

export default function HeaderV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollTo = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Processus', href: '#processus' },
    { label: 'Réalisations', href: '#portfolio' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    e.stopPropagation()
    setIsMenuOpen(false)
    scrollTo(href)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 left-0 right-0 z-[100] w-full"
    >
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div>
          <motion.nav
          animate={{
            paddingTop: isScrolled ? '0.35rem' : '0.7rem',
            paddingBottom: isScrolled ? '0.35rem' : '0.7rem',
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="card-upper flex items-center justify-between backdrop-blur-md !px-4 !rounded-md "
        >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={isScrolled ? 'w-8 h-8' : 'w-12 h-12'}
            style={{
              transition: 'width 0.3s, height 0.3s',
              background: 'var(--color-primary-gradient)',
              WebkitMask: 'url(/TCL-favicon.svg) no-repeat center',
              WebkitMaskSize: 'contain',
              mask: 'url(/TCL-favicon.svg) no-repeat center',
              maskSize: 'contain',
            }}
          />
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              width: isScrolled ? 0 : 'auto',
              height: isScrolled ? 0 : 'auto',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
            style={{ fontFamily: 'var(--font-chivo-mono-v2)' }}
          >
            <div className="text-lg font-bold leading-none whitespace-nowrap">
              <div>THE</div>
              <div>CRYSTAL</div>
              <div>LAD</div>
            </div>
          </motion.div>
        </Link>

        {/* Navigation - Desktop */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="hover:text-[var(--color-primary)] transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, '#contact')}
            className={`inline-block cursor-pointer bg-[var(--color-foreground)] text-white rounded-[var(--radius-full)] font-medium hover:bg-white hover:text-[var(--color-foreground)] hover:border-[3px] hover:border-[var(--color-foreground)] transition-all ${
              isScrolled
                ? 'px-3 py-1 text-sm'
                : 'px-4 py-2'
            }`}
          >
            Réserver
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-[var(--color-bg-ground)] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden mt-2"
          >
            <div className="card-upper backdrop-blur-md bg-white/90 !p-6">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className="block py-2 hover:text-[var(--color-primary)] transition-colors font-medium cursor-pointer text-lg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, '#contact')}
                  className="block w-full text-center cursor-pointer bg-[var(--color-foreground)] text-white rounded-[var(--radius-full)] font-medium hover:bg-white hover:text-[var(--color-foreground)] hover:border-[3px] hover:border-[var(--color-foreground)] transition-all px-4 py-2"
                >
                  Réserver
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}
