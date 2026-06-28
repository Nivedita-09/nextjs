/* "never miss out again" — 6 feature cards matching PDF layout */

function LeaderboardCard() {
  const traders = [
    { name: "change", handle: "@change", pnl: "+$1,726,513.19", color: "bg-purple-500" },
    { name: "frank", handle: "@thefoklegoda", pnl: "+$1,206,082.49", color: "bg-blue-500" },
    { name: "joggam", handle: "@joggam", pnl: "+$870,605.83", color: "bg-pink-500" },
    { name: "mulak", handle: "", pnl: "+$...", color: "bg-yellow-500" },
  ];
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">Leaderboard</div>
      <h3 className="mb-4 text-xl font-black leading-tight text-white md:text-2xl">
        become a legend, top the leaderboard
      </h3>
      <div className="space-y-2">
        {traders.map((t, i) => (
          <div key={t.name} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
            <span className="w-4 text-xs text-white/30">{i + 1}</span>
            <div className={`h-7 w-7 flex-shrink-0 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white`}>
              {t.name[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-xs font-semibold text-white">{t.name}</div>
              {t.handle && <div className="text-[9px] text-white/30">{t.handle}</div>}
            </div>
            <span className="text-[10px] font-bold text-accent-green">{t.pnl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedCard() {
  const posts = [
    { user: "simonfroex", badge: "Today 🔥", content: "$42K", sub: "profit this week" },
    { user: "gtiocole", badge: "", content: "PENGU $134.2K → $642.3M ↑C", sub: "" },
    { user: "keabw", badge: "", content: "♣ 90L → $45K → $415K ↑C", sub: "" },
  ];
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">Feed</div>
      <h3 className="mb-4 text-xl font-black leading-tight text-white md:text-2xl">
        discover and follow top traders
      </h3>
      <div className="space-y-2">
        {posts.map((p) => (
          <div key={p.user} className="flex items-start gap-2 rounded-xl bg-white/5 px-3 py-2">
            <div className="mt-0.5 h-7 w-7 flex-shrink-0 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-white">{p.user}</span>
                {p.badge && <span className="rounded-full bg-accent-purple/20 px-1.5 py-0.5 text-[9px] text-accent-purple">{p.badge}</span>}
              </div>
              <div className="truncate text-[10px] text-white/50">{p.content}</div>
            </div>
            <button className="flex-shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[9px] text-white/50 hover:border-accent-purple/40 hover:text-accent-purple">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsCard() {
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">Alerts</div>
      <h3 className="mb-6 text-xl font-black leading-tight text-white md:text-2xl">
        real time notifications for what the best are buying
      </h3>
      {/* Notification bubble */}
      <div className="rounded-2xl bg-white/90 px-4 py-3 shadow-lg shadow-black/40">
        <div className="mb-1 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue" />
            <span className="text-[10px] font-bold text-gray-800">fomo</span>
          </div>
          <span className="text-[9px] text-gray-400">2:41 AM</span>
        </div>
        <p className="text-xs font-semibold text-gray-800">
          DOGE is up 6.98% 🚀
        </p>
        <p className="text-[10px] text-gray-500">
          50 top traders bought $88,203.12
        </p>
      </div>
    </div>
  );
}

function OnboardingCard() {
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">Easy Onboarding</div>
      <h3 className="mb-6 text-xl font-black leading-tight text-white md:text-2xl">
        create an account in an instant
      </h3>
      <div className="space-y-2.5">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-black">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Sign in with Apple
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

function MultichainCard() {
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">Zero Complexity</div>
      <h3 className="mb-6 text-xl font-black leading-tight text-white md:text-2xl">
        multichain &amp; gasless
      </h3>
      {/* 3D-ish abstract chain objects */}
      <div className="flex items-end justify-center gap-4">
        {/* Object 1 – flat card */}
        <div className="animate-float h-16 w-24 rounded-2xl bg-gradient-to-br from-indigo-400/80 to-purple-600/80 shadow-lg shadow-purple-900/50" style={{ transform: "perspective(200px) rotateX(15deg) rotateY(-15deg)" }} />
        {/* Object 2 – tall card */}
        <div className="animate-float2 h-20 w-16 rounded-2xl bg-gradient-to-br from-purple-300/70 to-indigo-500/70 shadow-lg shadow-indigo-900/50" style={{ transform: "perspective(200px) rotateX(10deg) rotateY(10deg)" }} />
        {/* Object 3 – small circle */}
        <div className="animate-float3 mb-2 h-12 w-12 rounded-full bg-gradient-to-br from-violet-400/80 to-fuchsia-600/80 shadow-lg shadow-violet-900/50" />
      </div>
    </div>
  );
}

function ApplePayCard() {
  return (
    <div className="h-full">
      <div className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/30">One Click to Buy</div>
      <h3 className="mb-5 text-xl font-black leading-tight text-white md:text-2xl">
        fund with apple pay
      </h3>
      {/* Amount UI */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 text-center text-2xl font-black text-white">$100</div>
        <div className="mb-3 flex gap-2 text-center">
          {["$25", "$50", "$100", "$250"].map((v) => (
            <button
              key={v}
              className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition ${
                v === "$100"
                  ? "bg-white/20 text-white"
                  : "bg-white/5 text-white/40 hover:bg-white/10"
              }`}
            >
              {v}
            </button>
          ))}
          <button className="flex-1 rounded-lg bg-white/5 py-1.5 text-xs text-white/40 hover:bg-white/10">
            ⊕
          </button>
        </div>
        <p className="mb-3 text-center text-[10px] text-white/30">$0 fees on fomo&apos;s us</p>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-2.5 text-sm font-semibold text-white border border-white/20">
          <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Buy with Apple Pay
        </button>
      </div>
    </div>
  );
}

export default function Features() {
  const cards = [
    { id: "leaderboard", content: <LeaderboardCard /> },
    { id: "feed",        content: <FeedCard /> },
    { id: "alerts",      content: <AlertsCard /> },
    { id: "onboarding",  content: <OnboardingCard /> },
    { id: "multichain",  content: <MultichainCard /> },
    { id: "applepay",    content: <ApplePayCard /> },
  ];

  return (
    <section id="features" className="bg-space-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="mb-2 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            never miss out again
          </h2>
          <p className="text-base text-white/40">the only social-first trading app</p>
        </div>

        {/* 3×2 grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="feature-card glass-card rounded-2xl p-5 transition-all duration-300 md:p-6"
            >
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
