"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground"
            >
              Ateş Altınkaynak
            </Link>
            <p className="text-sm text-muted-foreground">
              AI Developer & Web Designer
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <Link href="/work" className="hover:text-foreground transition-colors">
              {t.nav.work}
            </Link>
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/process" className="hover:text-foreground transition-colors">
              {t.nav.process}
            </Link>
            <Link href="/start-project" className="hover:text-primary transition-colors">
              {t.nav.startProject}
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            ©{" "}
            <span suppressHydrationWarning>{new Date().getFullYear()}</span> Ateş Altınkaynak.{" "}
            {t.footer.copyright}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
