"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useReducedMotion, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

// Nav link with animated underline
function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm transition-colors py-2 group",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded",
        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}

      {/* Active indicator */}
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: shouldReduceMotion ? 0 : 0.5,
          }}
        />
      )}

      {/* Hover underline (only for non-active) */}
      {!isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      )}
    </Link>
  )
}

// CTA button with glow effect
function CTAButton({ href, label }: { href: string; label: string }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
    >
      <Link
        href={href}
        className={cn(
          "relative px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg",
          "transition-all duration-300",
          "hover:shadow-[0_0_20px_oklch(0.45_0.12_155_/_0.35)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        )}
      >
        {label}
      </Link>
    </motion.div>
  )
}

export function Header() {
  const { locale, setLocale, t } = useLanguage()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    // Check immediately on mount
    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [shouldReduceMotion])

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/about", label: t.nav.about },
    { href: "/process", label: t.nav.process },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="mx-auto max-w-6xl px-4"
        layout
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 28,
        }}
      >
        <motion.div
          className={cn(
            "glass-panel border border-border/30 flex items-center justify-between",
            "transition-[background-color,box-shadow,backdrop-filter] duration-300",
            isScrolled
              ? "bg-background/80 backdrop-blur-md shadow-lg"
              : "bg-background/50 backdrop-blur-sm shadow-none border-transparent"
          )}
          animate={{
            marginTop: isScrolled ? 12 : 0,
            borderRadius: isScrolled ? "9999px" : "0px",
            padding: isScrolled ? "12px 24px" : "20px 32px",
            width: "100%",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            mass: 0.8
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            )}
          >
            Ateş Altınkaynak
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle with pill animation */}
            <div className="relative flex items-center gap-1 bg-secondary/50 rounded-full p-1">
              {/* Animated background pill */}
              <motion.div
                className="absolute top-1 bottom-1 bg-primary rounded-full"
                layoutId="lang-toggle"
                initial={false}
                animate={{
                  left: locale === "tr" ? 4 : "calc(50% + 2px)",
                  width: "calc(50% - 6px)",
                }}
                transition={{
                  type: "spring",
                  bounce: 0.2,
                  duration: shouldReduceMotion ? 0 : 0.4,
                }}
              />

              <button
                onClick={() => setLocale("tr")}
                className={cn(
                  "relative z-10 px-3 py-1 text-xs font-medium rounded-full transition-colors",
                  locale === "tr" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                TR
              </button>
              <button
                onClick={() => setLocale("en")}
                className={cn(
                  "relative z-10 px-3 py-1 text-xs font-medium rounded-full transition-colors",
                  locale === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <CTAButton href="/start-project" label={t.nav.startProject} />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            aria-label="Toggle menu"
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden glass-panel border-b border-border/30 overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block text-base py-3 transition-colors",
                      pathname === item.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <motion.div
                className="flex items-center gap-2 py-3"
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <button
                  onClick={() => setLocale("tr")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
                    locale === "tr"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  Türkçe
                </button>
                <button
                  onClick={() => setLocale("en")}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-lg transition-all",
                    locale === "en"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  English
                </button>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.05 }}
              >
                <Link
                  href="/start-project"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 bg-primary text-primary-foreground font-medium rounded-lg mt-2"
                >
                  {t.nav.startProject}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
