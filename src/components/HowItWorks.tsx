const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up in under 60 seconds with your email or Apple/Google account. Verify your identity and you're ready to go.",
    detail: "KYC in under 2 minutes",
  },
  {
    step: "02",
    title: "Fund your wallet",
    description:
      "Deposit with Apple Pay, bank transfer, or transfer existing crypto. Instant deposits available with zero hidden fees.",
    detail: "Apple Pay & bank supported",
  },
  {
    step: "03",
    title: "Follow top traders",
    description:
      "Browse the leaderboard, explore trader profiles with verified P&L history, and follow the ones that match your risk appetite.",
    detail: "Verified performance data",
  },
  {
    step: "04",
    title: "Copy & profit",
    description:
      "Enable copy trading with one tap. Set your position size limits, and let the algorithm mirror their trades automatically.",
    detail: "Auto-sync or manual approval",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand-purple/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-purple">
            How it works
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Up and running in{" "}
            <span className="gradient-text">minutes</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-400">
            No complicated setup. No confusing interfaces. Just follow these four steps and
            start trading smarter today.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-brand-green/40 via-brand-purple/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col items-center gap-8 lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:text-right" style={{ textAlign: index % 2 === 1 ? "left" : undefined }}>
                  <div
                    className={`glass-card rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                      index % 2 === 0 ? "hover:shadow-brand-green/10" : "hover:shadow-brand-purple/10"
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className={`text-5xl font-black ${
                          index % 2 === 0 ? "text-brand-green/20" : "text-brand-purple/20"
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{step.title}</h3>
                    <p className="mb-4 leading-relaxed text-gray-400">{step.description}</p>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        index % 2 === 0
                          ? "bg-brand-green/10 text-brand-green"
                          : "bg-brand-purple/10 text-brand-purple"
                      }`}
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {step.detail}
                    </span>
                  </div>
                </div>

                {/* Step number circle (center) */}
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-border bg-brand-dark text-sm font-bold text-white lg:z-10">
                  {step.step}
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden flex-1 lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
