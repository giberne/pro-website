'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ButtonV2 from '../ui/ButtonV2'

export default function HeaderV2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 100 // Offset pour le header sticky
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: +20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-4 z-50 mx-auto max-w-6xl px-4"
    >
      <motion.nav
        animate={{
          paddingTop: isScrolled ? '0.35rem' : '0.5rem',
          paddingBottom: isScrolled ? '0.35rem' : '0.5rem',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="card-upper flex items-center justify-between backdrop-blur-md !px-4"
      >
        {/* Logo */}
        <Link href="/v2" className="flex items-center gap-3">
          <Image
            src="/TCL-favicon.svg"
            alt="The Crystal Lad"
            width={40}
            height={40}
            className={isScrolled ? 'w-8 h-8' : 'w-12 h-12'}
            style={{ transition: 'width 0.3s, height 0.3s' }}
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
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-[var(--color-primary)] transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <ButtonV2
            variant="secondary"
            href="#contact"
            className={
              isScrolled
                ? '!px-3 !py-1 text-sm transition-all duration-300'
                : '!px-4 !py-2 transition-all duration-300'
            }
          >
            Réserver
          </ButtonV2>
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
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block py-2 hover:text-[var(--color-primary)] transition-colors font-medium cursor-pointer text-lg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <ButtonV2 variant="secondary" href="#contact" className="w-full">
                  Réserver
                </ButtonV2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
