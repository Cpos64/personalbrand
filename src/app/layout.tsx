import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conner Poslajko",
  description:
    "Field notes on software, markets, and the long run — from Conner Poslajko.",
  metadataBase: new URL("https://connerposlajko.com"),
};

const NAV_LINKS = [
  { href: "/blog", label: "Field Notes" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <header className="border-b hairline">
          <div className="mx-auto max-w-3xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-display text-lg tracking-tight hover:text-brass transition-colors"
            >
              Conner Poslajko
            </Link>
            <nav className="flex gap-5 font-mono text-[13px] uppercase tracking-wide text-slate">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-brass transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t hairline mt-24">
          <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-mono text-xs text-slate">
              © {new Date().getFullYear()} Conner Poslajko. Huntsville, AL.
            </p>
            <div className="flex gap-5 font-mono text-xs text-slate">
              <a
                href="https://github.com/Cpos64"
                className="hover:text-brass transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:hello@connerposlajko.com"
                className="hover:text-brass transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
