const posts = [
  {
    user: "alex_moon",
    handle: "@alex_moon",
    avatar: "AM",
    avatarColor: "from-purple-500 to-pink-500",
    time: "3h ago",
    content:
      "Just called the SOL bottom at $92 — up 14% since. The key was watching the on-chain accumulation pattern on the 4H. Thread below 🧵",
    token: "SOL",
    pnl: "+$4,200",
    positive: true,
    likes: 847,
    replies: 63,
    copies: 212,
  },
  {
    user: "crypto_fam",
    handle: "@crypto_fam",
    avatar: "CF",
    avatarColor: "from-green-500 to-teal-500",
    time: "5h ago",
    content:
      "BTC weekly close looking incredibly bullish. $95K is just the next stop. My family portfolio is 60% BTC right now — here's why I'm not touching it.",
    token: "BTC",
    pnl: "+$18,500",
    positive: true,
    likes: 1203,
    replies: 89,
    copies: 534,
  },
  {
    user: "defi_dad",
    handle: "@defi_dad",
    avatar: "DD",
    avatarColor: "from-blue-500 to-indigo-500",
    time: "8h ago",
    content:
      "Took profit on PEPE at 2x. Risk management > FOMO. Rotating into ETH staking for steady yield. Sometimes boring is the best trade.",
    token: "ETH",
    pnl: "+$3,600",
    positive: true,
    likes: 632,
    replies: 41,
    copies: 178,
  },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-brand-green/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-green">
            Community
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Real traders.{" "}
            <span className="gradient-text">Real results.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-400">
            Join thousands of traders sharing their thesis, strategies, and wins in the most
            transparent trading community in crypto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.user}
              className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-green/10"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${post.avatarColor} text-sm font-bold text-white`}
                  >
                    {post.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{post.user}</p>
                    <p className="text-xs text-gray-500">
                      {post.handle} · {post.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                    post.positive
                      ? "bg-brand-green/10 text-brand-green"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {post.pnl}
                </span>
              </div>

              {/* Content */}
              <p className="mb-4 text-sm leading-relaxed text-gray-300">{post.content}</p>

              {/* Token tag */}
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full border border-brand-border bg-brand-dark px-2.5 py-0.5 text-xs font-medium text-gray-400">
                  #{post.token}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 border-t border-brand-border/50 pt-4">
                <button className="flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {post.likes}
                </button>
                <button className="flex items-center gap-1.5 text-xs text-gray-500 transition-colors hover:text-white">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.replies}
                </button>
                <button className="ml-auto flex items-center gap-1.5 rounded-lg border border-brand-green/30 bg-brand-green/10 px-3 py-1.5 text-xs font-semibold text-brand-green transition-all hover:bg-brand-green/20">
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy · {post.copies}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
