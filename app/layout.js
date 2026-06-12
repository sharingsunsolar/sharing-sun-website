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
                <a href="tel:+1720-443-5543">(720) 443-5543</a>
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
      </body>
    </html>
  );
}
