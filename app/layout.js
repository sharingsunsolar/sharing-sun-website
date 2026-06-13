import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Sharing Sun, Inc. | Solar Detach & Reinstall, Upgrades & Commercial Solar | Brighton, CO",
  description:
    "Denver metro's solar detach & reinstall specialists. NABCEP-certified, Class A licensed. System upgrades, battery retrofits, critter guard, and commercial solar installation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="wordmark">
              <span className="wordmark-sun" aria-hidden="true"></span>
              SHARING&nbsp;SUN
            </a>
            <nav className="main-nav" aria-label="Main">
                <a href="/new-installs">New Installs</a>
              <a href="/detach-reinstall">Detach &amp; Reinstall</a>
              <a href="/upgrades">Upgrades</a>
              <a href="/commercial">Commercial</a>
              <a href="/roofers">For Roofers</a>
              <a href="/financing">Financing</a>
              <a href="/contact" className="nav-cta">Get a Quote</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <section className="logo-marquee" aria-label="Certifications and manufacturer partners">
          <p className="logo-marquee-label">Certified &amp; trained with</p>
          <div className="logo-marquee-track">
            {[0, 1].map((dup) => (
              <div className="logo-marquee-group" key={dup} aria-hidden={dup === 1}>
                <img src="/logo-nabcep.png" alt="NABCEP Registered Provider — Photovoltaic Associate" />
                <img src="/logo-tesla.png" alt="Tesla Energy Certified" />
                <img src="/logo-solaredge.png" alt="SolarEdge Certified" />
                <img src="/logo-unirac.png" alt="UniRac Certified" />
                <img src="/logo-snapnrack.png" alt="SnapNrack Certified" />
                <img src="/logo-sei.png" alt="Solar Energy International trained" />
                <img src="/logo-osha30.png" alt="OSHA 30 trained" />
                <a
                  href="https://www.bbb.org/us/co/brighton/profile/solar-panel-removal/sharing-sun-inc--1296-1000186197"
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={dup === 1 ? -1 : 0}
                >
                  <img src="/logo-bbb.png" alt="BBB Accredited Business — view our profile" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-name">Sharing Sun, Inc.</p>
              <p>Brighton, Colorado</p>
              <p>Serving the Denver metro &amp; Front Range</p>
            </div>
            <div>
              <p className="footer-label">Contact</p>
              <p>
                <a href="tel:+13035550123">(303) 555-0123</a>
              </p>
              <p>
                <a href="mailto:info@sharingsuninc.com">info@sharingsuninc.com</a>
              </p>
            </div>
            <div>
              <p className="footer-label">Credentials</p>
              <p className="mono-line">NABCEP PV INSTALLATION PROFESSIONAL</p>
              <p className="mono-line">CO CLASS A GENERAL CONTRACTOR</p>
              <p className="mono-line">LICENSED &middot; BONDED &middot; INSURED</p>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>&copy; {new Date().getFullYear()} Sharing Sun, Inc. All rights reserved.</p>
          </div>
        </footer>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                if (typeof window === "undefined") return;
                var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                function reveal() {
                  var els = document.querySelectorAll("[data-animate]");
                  if (reduce || !("IntersectionObserver" in window)) {
                    els.forEach(function (el) { el.classList.add("is-visible"); });
                    return;
                  }
                  var obs = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        obs.unobserve(entry.target);
                      }
                    });
                  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
                  els.forEach(function (el) { obs.observe(el); });
                }
                if (document.readyState === "loading") {
                  document.addEventListener("DOMContentLoaded", reveal);
                } else {
                  reveal();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
