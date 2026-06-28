import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-card via-brand-card to-brand-dark p-12 text-center md:p-20">
          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-brand-green/10 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-brand-purple/10 blur-[80px]" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            <span className="mb-6 inline-block rounded-full border border-brand-green/30 bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
              Limited time — free forever plan available
            </span>

            <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Stop missing out.
              <br />
              <span className="gradient-text">Join FOMO Family.</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">
              The next bull run is already starting. Your future self will thank you for
              getting in now — not when everyone else does.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#"
                className="group relative w-full overflow-hidden rounded-xl bg-brand-green px-10 py-4 text-base font-bold text-black transition-all hover:shadow-2xl hover:shadow-brand-green/30 sm:w-auto"
              >
                <span className="relative z-10">Create free account</span>
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0" />
              </Link>
              <Link
                href="#"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-brand-border px-10 py-4 text-base font-medium text-white transition-all hover:border-white/30 hover:bg-white/5 sm:w-auto"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on iOS
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              No credit card required · Free forever plan · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
