import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-12 md:py-16">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-navy font-black text-xs">S</span>
              </div>
              <span className="text-white font-black text-base tracking-tight">
                Synkra
              </span>
            </div>
            <p className="text-slate-500 text-xs text-center md:text-left">
              Built for Toronto homemade chefs. 🍁
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6" role="list">
              {[
                { label: "Solutions", href: "#solution" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-slate-600 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Synkra.ca · Toronto, ON
          </p>
        </div>
      </Container>
    </footer>
  );
}
