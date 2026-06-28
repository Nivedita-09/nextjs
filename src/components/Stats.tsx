const stats = [
  { value: "50K+", label: "Active Traders", sublabel: "and growing fast" },
  { value: "$2.4B", label: "Total Volume", sublabel: "traded on platform" },
  { value: "98.7%", label: "Uptime", sublabel: "enterprise reliability" },
  { value: "4.8★", label: "App Rating", sublabel: "on App Store" },
];

export default function Stats() {
  return (
    <section className="border-y border-brand-border/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-1 text-4xl font-black text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="text-base font-semibold text-white">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
