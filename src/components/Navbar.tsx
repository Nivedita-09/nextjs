"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function AppStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path fill="#00d4ff" d="M3.6 1.8 13 11.2l-9.4 9.4A2 2 0 0 1 3 19V3a2 2 0 0 1 .6-1.2z" />
      <path fill="#00f076" d="M13 11.2 3.6 1.8c.3-.2.7-.2 1.1 0l11.1 6.4-2.8 3z" />
      <path fill="#ffd500" d="M13 11.2l2.8-3 3.9 2.3c.9.5.9 1.9 0 2.4l-3.9 2.3-2.8-4z" />
      <path fill="#ff3a44" d="M13 11.2l2.8 4-11.1 6.4c-.4.2-.8.2-1.1 0L13 11.2z" />
    </svg>
  );
}

function StoreBadge({ icon, top, bottom, href }: { icon: React.ReactNode; top: string; bottom: string, href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-white transition-all hover:border-white/20 hover:bg-white/10"
    >
      {icon}
      <span className="flex flex-col text-left leading-none">
        <span className="text-[9px] font-medium text-white/60">{top}</span>
        <span className="text-sm font-semibold">{bottom}</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">

        {/* Logo */}
        <Link href="/" className="select-none text-2xl font-bold tracking-tight text-white">
          <Image src="/images/dark.png" alt="fomo logo" width={100} height={100} className="inline-block h-14 w-14" />
        </Link>

        {/* Desktop right side */}
        <div className="hidden items-center gap-2 md:flex">
          <StoreBadge icon={<AppStoreIcon />} top="Download on the" bottom="App Store" href="https://apps.apple.com/us/app/chadwallet/id6757367474" />
          <StoreBadge icon={<GooglePlayIcon />} top="GET IT ON" bottom="Google Play" href="https://play.google.com/store/apps/details?id=com.chadwallet" />
          <Link
            href="#"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-white/10"
          >
            Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition-all duration-200 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-space-dark px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            <StoreBadge icon={<AppStoreIcon />} top="Download on the" bottom="App Store" href="https://apps.apple.com/us/app/chadwallet/id6757367474" />
            <StoreBadge icon={<GooglePlayIcon />} top="GET IT ON" bottom="Google Play" href="https://play.google.com/store/apps/details?id=com.chadwallet" />
            <Link href="#" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}