export const metadata = {
  title: "Solar Detach & Reinstall for Roofing Contractors | Sharing Sun, Inc.",
  description:
    "Denver metro roofing contractors: one call handles the solar. Scheduled detach & reinstall, homeowner coordination, permits, and photo-documented jobs. We never touch your customer relationship.",
};

export default function Roofers() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">For Roofing Contractors</p>
          <h1>One call handles the solar. Your crew roofs.</h1>
          <p className="lede">
            Panels on the roof shouldn&apos;t slow down your re-roof — or put
            your crew&apos;s hands on live electrical equipment. Sharing Sun
            is a NABCEP-certified, Class A licensed solar contractor built
            around detach &amp; reinstall. Give us the address and the roof
            date, and the array stops being your problem.
          </p>
          <div className="hero-ctas" style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">Send us a roof date</a>
            <a href="tel:+17204435534" className="btn-ghost">Call (720) 443-5534</a>
          </div>
        </div>
      </section>

      <section className="section section-cloud" data-animate>
        <div className="container">
          <p className="eyebrow">Why roofers work with us</p>
          <h2>Built to keep your job on schedule</h2>
          <div className="card-grid" style={{ marginTop: "40px" }}>
            <div className="card-static">
              <h3>Your customer stays your customer</h3>
              <p>
                We work as your solar trade partner, full stop. We don&apos;t
                market to your homeowners, we don&apos;t upsell behind your
                back, and we hand the relationship right back to you when the
                panels are on. Your name stays on the job.
              </p>
            </div>
            <div className="card-static">
              <h3>Scheduling that matches your crew</h3>
              <p>
                Detach the day before tear-off, reinstall as soon as the roof
                is dried in. We coordinate the timing with your production
                team so your crew never stands around waiting on panels.
              </p>
            </div>
            <div className="card-static">
              <h3>Licensed for the part you can&apos;t touch</h3>
              <p>
                De-energizing, disconnecting, and recommissioning a solar
                system is electrical work. We&apos;re NABCEP-certified and
                Class A licensed, with certificates of insurance available on
                request — so the liability for the array never lands on your
                policy.
              </p>
            </div>
            <div className="card-static">
              <h3>Photo-documented, start to finish</h3>
              <p>
                Every job gets photographed before detach and after reinstall
                — array layout, attachment points, and final condition. You
                and the homeowner get a clean record, which makes insurance
                supplements and final invoicing painless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2>Four steps, zero babysitting</h2>
          <div className="steps" style={{ marginTop: "40px" }}>
            <div className="step">
              <h3>Send the job</h3>
              <p>
                Address, panel count, and your target roof date. We&apos;ll
                confirm pricing and lock the schedule — usually same day.
              </p>
            </div>
            <div className="step">
              <h3>We detach</h3>
              <p>
                We coordinate access with the homeowner, safely de-energize
                the system, remove the array, and stage or store the panels.
              </p>
            </div>
            <div className="step">
              <h3>You roof</h3>
              <p>
                Clean deck, no obstacles. Your crew does what it does. If the
                roof date slips, we slide with you — weather happens.
              </p>
            </div>
            <div className="step">
              <h3>We reinstall</h3>
              <p>
                New flashing and hardware as needed, panels back on, system
                tested and recommissioned, photo report delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" data-animate>
        <div className="container band-inner">
          <div>
            <p className="eyebrow">Hail season</p>
            <h2>Storm volume? We scale with you.</h2>
            <p>
              When a hail event drops fifty re-roofs on your board at once,
              the solar jobs don&apos;t have to be the bottleneck. Get us the
              list early and we&apos;ll build the D&amp;R schedule around your
              production calendar.
            </p>
          </div>
          <a href="tel:+17204435534" className="btn-amber">
            Call (720) 443-5534
          </a>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Add us to your sub list</h2>
          <p className="lede" style={{ margin: "0 auto 32px" }}>
            Send one job and see how it runs. Certificates of insurance,
            W-9, and references available on request.
          </p>
          <a href="/contact" className="btn-amber">Send us a roof date</a>
        </div>
      </section>
    </>
  );
}
