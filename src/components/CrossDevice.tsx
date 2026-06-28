"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/memecoin-4.png", label: "Trends", alt: "Catch early trends on X" },
  { src: "/images/launch-4.png", label: "Launch", alt: "Launch a memecoin from a tweet" },
  { src: "/images/kol-4.png", label: "KOLs", alt: "Follow KOL traders" },
  { src: "/images/buy-sell-4.png", label: "Buy & sell", alt: "Buy & sell trending tokens" },
  { src: "/images/relaunch-4.png", label: "Relaunch", alt: "Relaunch a memecoin" },
  { src: "/images/portfolio-4.png", label: "Wallet", alt: "Manage your assets" },
];

export default function AppShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);

  const n = slides.length;
  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n]);
  const next = useCallback(() => setActive((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setActive((i) => (i - 1 + n) % n), [n]);

  // autoplay (pauses on hover)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [paused, next]);

  // keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      className="relative overflow-hidden bg-space-dark py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent-purple/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-10 h-[300px] w-[300px] rounded-full bg-accent-green/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* header */}
      <div className="relative mx-auto mb-10 max-w-7xl px-5 text-center md:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-purple">
          everything in one app
        </p>
        <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          your whole trading world,
          <br className="hidden sm:block" /> one swipe away.
        </h2>
      </div>

      {/* pill nav */}
      <div className="relative mb-10 flex flex-wrap items-center justify-center gap-2 px-5">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all ${
              i === active
                ? "border-accent-purple/50 bg-accent-purple/20 text-white"
                : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* coverflow stage */}
      <div
        className="relative mx-auto flex h-[clamp(220px,42vw,520px)] max-w-7xl items-center justify-center px-4"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 50) prev();
          else if (dx < -50) next();
          touchX.current = null;
        }}
      >
        {slides.map((s, i) => {
          let o = i - active;
          if (o > n / 2) o -= n;
          if (o < -n / 2) o += n;
          const abs = Math.abs(o);
          const isActive = o === 0;
          return (
            <div
              key={s.src}
              className="absolute w-[82%] max-w-3xl transition-all duration-500 ease-out md:w-[68%]"
              style={{
                transform: `translateX(${o * 44}%) scale(${isActive ? 1 : 0.82})`,
                opacity: abs > 1.5 ? 0 : isActive ? 1 : 0.35,
                zIndex: 10 - abs,
                pointerEvents: isActive ? "auto" : "none",
              }}
              aria-hidden={!isActive}
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/60">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 82vw, 820px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          );
        })}

        {/* arrows */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 md:left-6"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-black/60 md:right-6"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* dots */}
      <div className="relative mt-8 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.label}
            onClick={() => go(i)}
            aria-label={`Go to ${s.label}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-7 bg-accent-purple" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}