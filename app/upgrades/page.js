export const metadata = {
  title: "Solar System Upgrades | Add Panels, Inverter Replacement, Battery Storage | Sharing Sun, Inc.",
  description:
    "Solar no longer covering your whole bill? We add panels, replace aging string inverters and microinverters, and retrofit battery storage across the Denver metro.",
};

export default function Upgrades() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">System Upgrades</p>
          <h1>
            Solar that no longer covers the bill? Let&apos;s fix that.
          </h1>
          <p className="lede">
            Homes change — EVs, hot tubs, a finished basement, a growing
            family. A system sized for your 2015 bill can fall behind your
            2026 one. We upgrade existing solar the right way: panel
            additions, inverter replacements, and battery storage, engineered
            to work with what&apos;s already on your roof.
          </p>
          <p style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">
              Get an upgrade assessment
            </a>
          </p>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">What we upgrade</p>
          <h2>Three upgrades, one crew</h2>
          <p className="lede">
            Most upgrade projects combine two of these — and bundling them is
            usually the smartest money, because the permit, engineering, and
            utility paperwork happen once instead of twice.
          </p>
          <div className="card-grid">
            <div className="card-static">
              <h3>Add panels to your existing system</h3>
              <p>
                When your array no longer offsets the full bill, we add
                capacity the right way — new panels on their own dedicated
                equipment, engineered to coexist with your original system
                without touching its warranty or performance. We handle the
                utility interconnection amendment, the permit, and the
                electrical engineering, including checking whether your main
                panel can take the added capacity.
              </p>
            </div>
            <div className="card-static">
              <h3>Inverter &amp; microinverter replacement</h3>
              <p>
                String inverters typically last 10&ndash;15 years — often half
                the life of the panels above them. Whether yours has failed,
                is throwing error codes, or is simply nearing end of life, we
                replace string inverters, convert systems to microinverters,
                and bring older systems up to current code while we&apos;re at
                it. If you&apos;re also adding panels, this is the moment to do
                both.
              </p>
            </div>
            <div className="card-static">
              <h3>Battery storage retrofit</h3>
              <p>
                Add backup power and store your daytime production for evening
                use. We retrofit battery storage to existing solar systems —
                sizing the battery to what your array actually produces and
                what you actually need to keep running when the grid
                doesn&apos;t.
              </p>
            </div>
            <div className="card-static">
              <h3>Critter guard &amp; squirrel damage repair</h3>
              <p>
                Nesting animals under an array chew wiring and pile debris
                against your roof. We install critter guard on existing
                systems and repair the damage they leave behind — often
                discovered during an upgrade assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Straight talk</p>
          <h2>When is an upgrade worth it?</h2>
          <p className="lede">
            Honest answer: a two-panel addition by itself rarely makes
            financial sense, because the permit, utility application, and
            engineering cost the same whether you add two panels or ten.
            Upgrades pencil out when they&apos;re bundled — panels plus a
            battery, or panels plus an inverter that was due for replacement
            anyway. That&apos;s exactly what we&apos;ll tell you in the
            assessment: what&apos;s worth doing, what isn&apos;t, and what to
            wait on. No pressure, no padding.
          </p>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2>From assessment to switch-on</h2>
          <div className="steps" style={{ marginTop: "40px" }}>
            <div className="step">
              <h3>Assessment</h3>
              <p>
                We review your production history, your bill, your existing
                equipment, and your roof — then tell you what upgrade actually
                solves the problem.
              </p>
            </div>
            <div className="step">
              <h3>Design &amp; paperwork</h3>
              <p>
                We engineer the addition, pull the permit, and file the
                utility interconnection application. You sign — we handle the
                rest.
              </p>
            </div>
            <div className="step">
              <h3>Installation</h3>
              <p>
                Our NABCEP-certified crew installs the upgrade, typically in a
                single day for most residential projects.
              </p>
            </div>
            <div className="step">
              <h3>Inspection &amp; switch-on</h3>
              <p>
                We walk the inspection, secure permission to operate from the
                utility, and confirm the system is producing before we call it
                done.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "40px" }}>
            <a href="/contact" className="btn-amber">
              Start with an assessment
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
