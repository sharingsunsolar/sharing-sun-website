export default function Home() {
  // 6 columns x 4 rows of panels for the hero array graphic
  const cols = 6;
  const rows = 4;
  const cellW = 64;
  const cellH = 42;
  const gap = 8;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      cells.push({
        x: 20 + c * (cellW + gap),
        y: 60 + r * (cellH + gap),
        delay: (r * cols + c) * 0.07,
      });
    }
  }
  const svgW = 20 * 2 + cols * cellW + (cols - 1) * gap;
  const svgH = 60 + rows * cellH + (rows - 1) * gap + 20;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Brighton, Colorado &middot; NABCEP Certified &middot; Class A GC</p>
            <h1>
              The solar crew Colorado roofers <span className="accent">call first.</span>
            </h1>
            <p>
              Sharing Sun is a NABCEP-certified, Class A licensed solar contractor.
              We install new solar, detach and reinstall panels for re-roofs,
              integrate battery storage, upgrade systems that no longer cover the
              bill, and build commercial solar — from the first permit to the
              final inspection.
            </p>
            <div className="hero-ctas">
              <a href="/contact" className="btn-amber">Get a quote</a>
              <a href="/roofers" className="btn-ghost">Partner with us</a>
            </div>
          </div>

          <figure className="array-figure" aria-label="Illustration of a solar array energizing panel by panel">
            <svg viewBox={`0 0 ${svgW} ${svgH}`} xmlns="http://www.w3.org/2000/svg" role="img">
              <path
                className="sun-arc"
                d={`M 20 50 Q ${svgW / 2} -20 ${svgW - 20} 50`}
              />
              {cells.map((cell, i) => (
                <rect
                  key={i}
                  className="cell"
                  x={cell.x}
                  y={cell.y}
                  width={cellW}
                  height={cellH}
                  rx="4"
                  style={{ "--d": `${cell.delay}s` }}
                />
              ))}
            </svg>
          </figure>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="trust-strip">
        <div className="container">
          <span>NABCEP PV INSTALLATION PROFESSIONAL</span>
          <span>CO CLASS A GENERAL CONTRACTOR</span>
          <span>LICENSED &middot; INSURED</span>
        </div>
      </div>

      {/* ============ SERVICES ============ */}
      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>From new installs to reinstalls, one certified crew</h2>
          <p className="lede">
            From a single re-roof to a full commercial array, every job runs
            through the same licensed, certified crew.
          </p>
          <div className="card-grid">
            <a href="/detach-reinstall" className="card">
              <h3>Detach &amp; Reinstall</h3>
              <p>
                Re-roofing under an array? We remove, store, and reinstall panels
                on your schedule — so the roofing crew never waits and the system
                comes back online tested and inspected.
              </p>
              <span className="card-link">Learn more &rarr;</span>
            </a>
            <a href="/new-installs" className="card">
              <h3>New Solar Installation</h3>
              <p>
                New residential solar, sized honestly to your actual usage and
                your actual roof — designed, permitted, and installed by the
                same NABCEP-certified crew that quoted it.
              </p>
              <span className="card-link">Learn more &rarr;</span>
            </a>
            <a href="/upgrades" className="card">
              <h3>System Upgrades</h3>
              <p>
                Inverter and microinverter replacements, battery storage
                retrofits, and added panels when your current system no longer
                offsets the whole bill.
              </p>
              <span className="card-link">Learn more &rarr;</span>
            </a>
            <a href="/maintenance" className="card">
              <h3>Critter Guard &amp; Maintenance</h3>
              <p>
                Keep birds and squirrels out from under the array, and keep
                production where it should be with inspections and service.
              </p>
              <span className="card-link">Learn more &rarr;</span>
            </a>
            <a href="/commercial" className="card">
              <h3>Commercial Solar</h3>
              <p>
                Class A licensed for commercial work — sub-to-GC installation,
                detach &amp; reinstall for commercial re-roofs, and
                C-PACE-eligible projects.
              </p>
              <span className="card-link">Learn more &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ CREDENTIALS ============ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Certifications &amp; credentials</p>
          <h2>Trained, certified, and accountable</h2>
          <p className="lede">
            Certifications aren&apos;t wall decorations — they&apos;re why your
            equipment warranties hold and your inspections pass the first time.
          </p>
          <div className="cred-grid">
            <span className="cred-chip">NABCEP PV INSTALLATION PROFESSIONAL</span>
            <span className="cred-chip">CO CLASS A GENERAL CONTRACTOR</span>
            <span className="cred-chip">TESLA CERTIFIED</span>
            <span className="cred-chip">ENPHASE CERTIFIED</span>
            <span className="cred-chip">SOLAREDGE CERTIFIED</span>
            <span className="cred-chip">UNIRAC CERTIFIED</span>
            <span className="cred-chip">OSHA 30 TRAINED</span>
            <span className="cred-chip">NFPA TRAINED</span>
            <span className="cred-chip">BBB ACCREDITED</span>
            <span className="cred-chip">LICENSED &middot; INSURED</span>
          </div>
        </div>
      </section>

      {/* ============ ROOFER BAND ============ */}
      <section className="band">
        <div className="container band-inner">
          <div>
            <p className="eyebrow">For roofing contractors</p>
            <h2>Make solar the easiest line on your scope sheet.</h2>
            <p>
              One call handles the panels: scheduling, homeowner coordination,
              permits, and re-energizing. Your crew roofs. We never touch your
              customer relationship.
            </p>
          </div>
          <a href="/roofers" className="btn-amber">See how partnership works</a>
        </div>
      </section>

      {/* ============ FINANCING TEASER ============ */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Financing</p>
          <h2>Financing that fits the project</h2>
          <p className="lede">
            Solar shouldn&apos;t wait on cash flow. We work with programs built
            for both sides of our business.
          </p>
          <div className="fin-grid">
            <div className="fin-card">
              <h3>Homeowners — RENU Loan</h3>
              <p>
                Colorado&apos;s low-cost, fixed-rate loan program for home energy
                upgrades, including solar additions, inverter replacements, and
                battery storage.
              </p>
            </div>
            <div className="fin-card">
              <h3>Commercial — C-PACE</h3>
              <p>
                Long-term, fixed-rate financing for commercial properties that
                lets building owners fund solar with no money down, repaid
                through the property assessment.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "28px" }}>
            <a href="/financing" className="btn-ghost">Explore financing options</a>
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="section section-cloud">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Tell us about the job</h2>
          <p className="lede" style={{ margin: "0 auto 32px" }}>
            Re-roof coming up? System underperforming? Commercial project on the
            board? Send the details and we&apos;ll get you a straight answer fast.
          </p>
          <a href="/contact" className="btn-amber">Get a quote</a>
        </div>
      </section>
    </>
  );
}
