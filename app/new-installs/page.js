export const metadata = {
  title: "New Solar Installation | NABCEP-Certified Installer | Denver Metro | Sharing Sun, Inc.",
  description:
    "New residential solar installation in the Denver metro, sized honestly to your actual usage. NABCEP-certified, Class A licensed, battery-ready design, permits to final inspection.",
};

export default function NewInstalls() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">New Solar Installation</p>
          <h1>Solar sized to your house, not to a sales quota.</h1>
          <p className="lede">
            We&apos;re a small, NABCEP-certified crew — not a call center with
            a sales team. We look at your actual usage, your actual roof, and
            your actual utility rates, and we design a system around them.
            Then the people who quoted it are the people who install it, from
            the first permit to the final inspection.
          </p>
          <p style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">Get an honest quote</a>
          </p>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">Straight talk</p>
          <h2>Yes, the federal tax credit ended. Here&apos;s the honest math now.</h2>
          <p className="lede">
            The 30% federal credit for homeowner-purchased solar went away at
            the end of 2025 — and any installer who doesn&apos;t mention that
            is hoping you don&apos;t know. What hasn&apos;t changed: electric
            rates keep climbing, your roof keeps getting Colorado&apos;s 300
            days of sun, and a well-sized system still pays for itself through
            decades of bills you don&apos;t get. The difference is that sizing
            and pricing matter more than ever — which favors a contractor who
            quotes lean and installs it themselves. We&apos;ll run your real
            numbers and tell you honestly whether solar makes sense for your
            house right now. Sometimes the answer is &quot;not yet&quot; — and
            we&apos;ll tell you that too.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What you get</p>
          <h2>Designed and built like we own it</h2>
          <div className="card-grid" style={{ marginTop: "40px" }}>
            <div className="card-static">
              <h3>Sized to your real usage</h3>
              <p>
                We design from your actual utility bills and how you live —
                EV in the garage, plans for a hot tub, work-from-home loads —
                not a one-size template. Right-sized means you pay for
                production you&apos;ll actually use.
              </p>
            </div>
            <div className="card-static">
              <h3>Certified across the major equipment</h3>
              <p>
                NABCEP-certified installation with manufacturer training
                across the leading panel, inverter, and racking systems —
                installed to spec so your equipment warranties mean what they
                say.
              </p>
            </div>
            <div className="card-static">
              <h3>Battery-ready by design</h3>
              <p>
                Even if storage isn&apos;t in the budget today, we design the
                system so a battery drops in cleanly later — no rework, no
                surprise upgrade costs when you&apos;re ready.
              </p>
            </div>
            <div className="card-static">
              <h3>Permits to permission-to-operate</h3>
              <p>
                We handle the engineering, the permit, the utility
                interconnection application, the inspection, and the final
                switch-on. You sign documents and watch your meter slow down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2>From first call to first kilowatt</h2>
          <div className="steps" style={{ marginTop: "40px" }}>
            <div className="step">
              <h3>Usage review</h3>
              <p>
                Send us a recent utility bill and we&apos;ll look at your
                roof. We&apos;ll tell you what size system fits — and whether
                solar pencils for your house at all.
              </p>
            </div>
            <div className="step">
              <h3>Design &amp; proposal</h3>
              <p>
                A clear proposal: equipment, layout, expected production, and
                price. No 90-minute kitchen-table pitch, no tonight-only
                discount.
              </p>
            </div>
            <div className="step">
              <h3>Permits &amp; paperwork</h3>
              <p>
                We engineer the system, pull the permit, and file your utility
                interconnection application while you go about your life.
              </p>
            </div>
            <div className="step">
              <h3>Install &amp; switch-on</h3>
              <p>
                We build in stages — racking, panels, and the electrical — and
                pass every inspection your jurisdiction requires along the way.
                Then utility permission to operate, and you&apos;re producing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div>
            <p className="eyebrow">Paying for it</p>
            <h2>Own it from day one.</h2>
            <p>
              We quote systems you own — no leases, no third party on your
              roof or your title. Colorado&apos;s RENU loan program offers
              fixed-rate financing built for exactly this kind of project.
            </p>
          </div>
          <a href="/financing" className="btn-amber">See financing options</a>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Start with a utility bill</h2>
          <p className="lede" style={{ margin: "0 auto 32px" }}>
            That&apos;s genuinely all we need to tell you whether solar makes
            sense for your house — and what it would take to zero out the
            bill.
          </p>
          <a href="/contact" className="btn-amber">Get an honest quote</a>
        </div>
      </section>
    </>
  );
}
