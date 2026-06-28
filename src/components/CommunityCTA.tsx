import Image from "next/image";
import Link from "next/link";

export default function CommunityCTA() {
  return (
    <section className="stars-bg relative overflow-hidden  py-32 md:py-60">

      {/* Background image — legends.webp */}
      <Image
        src="/images/legends.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center "
        priority
      />

      {/* Dark overlay so text stays readable over the bg image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-space-dark/60 via-space-dark/30 to-space-dark/70" />

      {/* Deep space glow behind circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(40,30,140,0.45)_0%,transparent_70%)]" />
      </div>

      {/* ── Rotating circles ───────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        {/* Outer circle — rotates clockwise, slow */}
        <div className="animate-spin-slow absolute flex items-center justify-center
          h-[420px] w-[420px] sm:h-[560px] sm:w-[560px] md:h-[700px] md:w-[700px]
          rounded-full border border-dashed border-white/30">
          <Image
            src="/images/outer-circle.webp"
            alt=""
            width={700}
            height={700}
            className="h-full w-full object-contain opacity-60"
            priority
          />
        </div>

        {/* Inner circle — rotates counter-clockwise, slightly faster */}
        <div className="animate-spin-slow-reverse absolute flex items-center justify-center
          h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]
          rounded-full border border-dashed border-white/30">
          <Image
            src="/images/inner-circle.webp"
            alt=""
            width={460}
            height={460}
            className="h-full w-full object-contain opacity-70"
            priority
          />
        </div>
      </div>

      {/* ── Center text & CTA (above circles) ─────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-5 text-center">
        <h2 className="mb-3 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          a trading app
          <br />
          for the rest of us
        </h2>
        <p className="mb-10 text-sm text-white/50 md:text-base">
          Join 500,000 traders making their name on fomo
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="w-44 rounded-xl bg-white px-8 py-3 text-sm font-bold text-space-dark transition-all hover:bg-white/90 hover:shadow-lg hover:shadow-white/10 sm:w-auto"
          >
            Start trading
          </Link>
          <Link
            href="#"
            className="w-44 rounded-xl bg-accent-purple px-8 py-3 text-sm font-bold text-white transition-all hover:bg-[#7d5aff] hover:shadow-lg hover:shadow-accent-purple/30 sm:w-auto"
          >
            Download app
          </Link>
        </div>
      </div>

    </section>
  );
}
