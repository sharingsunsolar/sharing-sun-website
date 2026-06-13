export const metadata = {
  title: "Commercial Solar Installation & Detach/Reinstall | Class A GC | Sharing Sun, Inc.",
  description:
    "Class A licensed, NABCEP-certified commercial solar contractor in the Denver metro. Sub-to-GC installation, commercial re-roof detach & reinstall, and C-PACE-eligible projects.",
};

export default function Commercial() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Commercial</p>
          <h1>Commercial solar, built to slot into your project.</h1>
          <p className="lede">
            Sharing Sun is a Class A licensed general contractor and
            NABCEP-certified solar installer. For GCs, that means a solar sub
            who speaks your language — submittals, schedules, inspections.
            For building owners, it means one accountable contractor from
            first permit to final inspection.
          </p>
          <div className="hero-ctas" style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">Discuss a project</a>
            <a href="tel:+17204435534" className="btn-ghost">Call (720) 443-5534</a>
          </div>
        </div>
      </section>

      <section className="section section-cloud" data-animate>
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Three ways to put us on your project</h2>
          <div className="card-grid" style={{ marginTop: "40px" }}>
            <div className="card-static">
              <h3>Solar subcontractor to your GC team</h3>
              <p>
                You stay prime; we own the solar scope — design coordination,
                permitting, installation, interconnection, and inspection.
                Clean submittals, predictable schedule, and a sub that
                understands GC paperwork because we hold the same license you
                do.
              </p>
            </div>
            <div className="card-static">
              <h3>Commercial detach &amp; reinstall</h3>
              <p>
                Re-roofing a commercial building with solar on it — including
                ballasted flat-roof arrays? We de-energize, remove, stage, and
                reinstall around your roofing schedule, the same disciplined
                process we run on residential re-roofs all hail season.
              </p>
            </div>
            <div className="card-static">
              <h3>Direct projects for building owners</h3>
              <p>
                Own a small commercial property and want solar on it? We
                handle the whole project — assessment, design, financing
                guidance, installation, and utility interconnection — sized
                honestly to your load and your roof.
              </p>
            </div>
            <div className="card-static">
              <h3>Built for C-PACE-eligible work</h3>
              <p>
                Colorado&apos;s C-PACE program lets commercial property owners
                finance solar through their property assessment — often with
                no money down. We design and document projects to meet C-PACE
                requirements. More on the financing page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" data-animate>
        <div className="container band-inner">
          <div>
            <p className="eyebrow">Worth knowing</p>
            <h2>Commercial solar still gets federal tax credits.</h2>
            <p>
              The residential tax credit ended in 2025 — but commercial
              projects remain eligible for federal investment tax credits.
              Combined with C-PACE financing, the numbers on a commercial
              building can work better today than most owners assume. We&apos;ll
              walk you through what applies to your property; your tax advisor
              confirms the details.
            </p>
          </div>
          <a href="/financing" className="btn-amber">See financing options</a>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container">
          <p className="eyebrow">Credentials</p>
          <h2>The paperwork GCs ask for, ready to go</h2>
          <p className="lede">
            Class A General Contractor license. NABCEP PV Installation
            Professional certification. Certificates of insurance, W-9, and
            references available on request. If your prequalification process
            needs something else, ask — we&apos;d rather fill out your form
            than miss your project.
          </p>
          <a href="/contact" className="btn-amber">Start the conversation</a>
        </div>
      </section>
    </>
  );
}
