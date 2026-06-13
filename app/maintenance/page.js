export const metadata = {
  title: "Solar Critter Guard, Repairs & Maintenance | Denver Metro | Sharing Sun, Inc.",
  description:
    "Critter guard installation, squirrel and pigeon damage repair, system inspections, and troubleshooting for underproducing solar in the Denver metro area.",
};

export default function Maintenance() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Critter Guard &amp; Maintenance</p>
          <h1>The space under your panels is prime real estate — for squirrels.</h1>
          <p className="lede">
            A solar array is warm, shaded, and protected from hawks — which
            makes the gap underneath it the best nesting spot on your block.
            Squirrels and pigeons move in, chew wiring, and pile nesting
            debris against your roof. We keep them out, repair what they&apos;ve
            done, and keep your system producing what it should.
          </p>
          <p style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">Get it looked at</a>
          </p>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Protection, repair, and a straight diagnosis</h2>
          <div className="card-grid" style={{ marginTop: "40px" }}>
            <div className="card-static">
              <h3>Critter guard installation</h3>
              <p>
                A low-profile mesh barrier around the perimeter of your array
                that seals the gap between the panels and the roof. Nearly
                invisible from the ground, and it ends the nesting problem for
                good — the best money you&apos;ll spend on a system in squirrel
                country.
              </p>
            </div>
            <div className="card-static">
              <h3>Animal damage repair</h3>
              <p>
                Already have tenants? We clear nests and debris from under the
                array, inspect the wiring for chew damage, repair what we
                find, and seal the array so they can&apos;t move back in.
              </p>
            </div>
            <div className="card-static">
              <h3>System inspection &amp; health check</h3>
              <p>
                A top-to-bottom look at your array: panel condition, wiring,
                connections, mounting hardware, and production data — with a
                plain-English report of what&apos;s fine, what&apos;s wearing,
                and what actually needs attention.
              </p>
            </div>
            <div className="card-static">
              <h3>Underproduction troubleshooting</h3>
              <p>
                Bill creeping up? Monitoring app showing less than it used to?
                We diagnose why — failed optimizers, a struggling inverter,
                shading, soiling, or critter damage — and tell you what the
                fix costs before we do anything.
              </p>
            </div>
          </div>

          <div className="photo-pair">
            <figure className="site-photo">
              <img
                src="/pigeon-nesting-under-panels.jpg"
                alt="Pigeon nesting underneath solar panels on a Colorado roof before critter guard"
              />
              <figcaption>Before: the tenant we found under the array</figcaption>
            </figure>
            <figure className="site-photo">
              <img
                src="/critter-guard-installed.jpg"
                alt="Critter guard mesh installed around the edge of a rooftop solar array"
              />
              <figcaption>After: critter guard sealed and secured</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">When to call</p>
          <h2>Signs your system needs attention</h2>
          <p className="lede">
            You see birds or squirrels going under the panels. There&apos;s
            nesting debris on the roof or in the gutters below the array. Your
            monitoring app shows a panel or a whole string flat-lined. The
            electric bill is creeping back up for no reason you can name. An
            inverter light is blinking a color it didn&apos;t used to. Any one
            of these is worth a phone call — most of them are cheap to fix
            early and expensive to ignore.
          </p>
          <div className="hero-ctas">
            <a href="/contact" className="btn-amber">Request an inspection</a>
            <a href="tel:+17204435534" className="btn-ghost">Call (720) 443-5534</a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <div>
            <p className="eyebrow">Worth bundling</p>
            <h2>Getting a new roof? Add critter guard while the panels are off.</h2>
            <p>
              If we&apos;re already detaching your array for a re-roof, adding
              critter guard during reinstall is the cheapest it will ever be —
              no separate trip, no separate setup.
            </p>
          </div>
          <a href="/detach-reinstall" className="btn-amber">
            See detach &amp; reinstall
          </a>
        </div>
      </section>
    </>
  );
}
