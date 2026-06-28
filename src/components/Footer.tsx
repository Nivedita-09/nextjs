import Link from "next/link";

const links = {
  col1: [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Affiliates", href: "#" },
  ],
  col2: [
    { label: "Discord", href: "#" },
    { label: "X/Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  col3: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-space-dark px-5 py-10 md:px-8 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-1 block text-2xl font-black  text-white">
              ChadWallet
            </Link>
            <p className="text-xs text-white/30">where traders become legends.</p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-10 sm:gap-16">
            <ul className="space-y-2.5">
              {links.col1.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {links.col2.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2.5">
              {links.col3.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/40 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-white/5 pt-6">
          <p className="text-xs text-white/20">© 2025 FOMO Labs Inc.</p>
        </div>
      </div>
    </footer>
  );
}
