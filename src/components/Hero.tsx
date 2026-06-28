import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-space-dark px-5 pt-28 text-center md:pt-32">

      {/* ---- Background layer: space + earth photo ---- */}
      {/* Put a wide space/earth photo (NO astronaut baked in) at /public/space-bg.jpg */}
      <Image
        src="/images/space-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      {/* Dark overlay so the text stays readable over the photo */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-space-dark/50 via-space-dark/10 to-space-dark/80" />

      {/* ---- Floating astronaut (separate transparent PNG) ---- */}
      {/* Cut-out astronaut at /public/astronaut.png — this is the part that bounces */}
      {/* ---- Floating astronaut (separate transparent PNG) ---- */}
      {/* ---- Floating astronaut (separate transparent PNG) ---- */}
<div className="animate-float pointer-events-none absolute bottom-0 left-0 right-0 z-[2] flex justify-center">
  <Image
    src="/images/astronaut.webp"
    alt="Astronaut floating in space"
    width={600}
    height={600}
    priority
    className="h-auto w-[clamp(160px,28vw,340px)] drop-shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
  />
</div>

      {/* ---- Foreground content ---- */}
      <div className="relative z-10 flex flex-col items-center">

        {/* "fomo" wordmark */}
        <h1 className="mb-3 text-[clamp(4rem,15vw,9rem)] font-bold leading-none tracking-tight text-[#a8aaf5]">
          ChadWallet
        </h1>

        {/* Tagline */}
        <p className="mb-2 text-2xl font-semibold text-white md:text-3xl">
          where traders become legends.
        </p>

        {/* Subtitle */}
        <p className="mb-8 max-w-sm text-sm text-[#9a9db5] md:max-w-md md:text-base">
          From memecoins to viral tokens, trade any crypto in seconds.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="w-44 rounded-xl bg-accent-purple px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[#7d5aff] hover:shadow-lg hover:shadow-accent-purple/30 sm:w-auto"
          >
            Start trading
          </Link>
          <Link
            href="#"
            className="w-44 rounded-xl border border-white/10 bg-white/5 px-7 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 sm:w-auto"
          >
            Download app
          </Link>
        </div>
      </div>
    </section>
  );
}