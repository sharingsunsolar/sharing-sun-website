export const metadata = {
  title: "Solar Panel Detach & Reinstall for Re-Roofs | Denver Metro | Sharing Sun, Inc.",
  description:
    "Re-roofing a home with solar after hail? Sharing Sun safely de-energizes, removes, and reinstalls your panels around your roofer's schedule — NABCEP-certified, sealed, bonded correctly, and tested back on.",
};

export default function DetachReinstall() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Detach &amp; Reinstall</p>
          <h1>Re-roofing under solar? We make the panels the easy part.</h1>
          <p className="lede">
            If you&apos;ve been through a hail season in the Denver metro, you
            know what it does to a roof. When the storm finally wins and
            it&apos;s time for a new one, we safely de-energize your solar
            system and remove every solar component from the roof so your
            roofer can do their work — then we put it all back, seal every
            penetration, and verify the system is producing before we leave.
          </p>
          <p style={{ marginTop: "28px" }}>
            <a href="/contact" className="btn-amber">Get a D&amp;R quote</a>
          </p>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">Why it matters who does this</p>
          <h2>This is electrical work, not just lifting panels</h2>
          <p className="lede">
            Your solar array is a live electrical system bolted into your
            roof. Detaching and reinstalling it the wrong way can void
            equipment warranties, create roof leaks at the attachment points,
            or leave the system silently underproducing. Here&apos;s what a
            certified solar contractor brings that a general laborer
            can&apos;t:
          </p>
          <div className="card-grid">
            <div className="card-static">
              <h3>Safe shutdown &amp; disconnect</h3>
              <p>
                We de-energize the system properly — DC and AC sides — before
                anyone touches a panel, and we handle the utility coordination
                if the job requires it.
              </p>
            </div>
            <div className="card-static">
              <h3>Warranty-conscious handling</h3>
              <p>
                Panels, optimizers, and microinverters are removed, labeled,
                and stored so the system goes back exactly as it was designed
                — protecting your manufacturer warranties.
              </p>
            </div>
            <div className="card-static">
              <h3>Flashing &amp; mounting hardware</h3>
              <p>
                Reinstalling on a new roof means new penetrations done right.
                We flash and seal every penetration, and we make sure all
                electrical bonding on the system is done correctly.
              </p>
            </div>
            <div className="card-static">
              <h3>Tested &amp; inspected before we leave</h3>
              <p>
                We recommission the system and verify it&apos;s producing the
                way it was before the roof work — tested and inspected before
                we call the job done.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The process</p>
          <h2>What to expect, start to finish</h2>
          <div className="steps" style={{ marginTop: "40px" }}>
            <div className="step">
              <h3>Quote &amp; schedule</h3>
              <p>
                Send us your panel count and your roofer&apos;s timeline. We
                price per panel and coordinate dates directly with your
                roofing contractor.
              </p>
            </div>
            <div className="step">
              <h3>Detach day</h3>
              <p>
                Usually one day. We shut the system down, remove the array and
                racking, and stage or store everything safely.
              </p>
            </div>
            <div className="step">
              <h3>Your new roof goes on</h3>
              <p>
                The roofing crew works with nothing in their way — no panels,
                no racking. If weather slides their schedule, ours slides with
                it — no re-booking hassle.
              </p>
            </div>
            <div className="step">
              <h3>Reinstall &amp; switch-on</h3>
              <p>
                Panels back on, system recommissioned and verified producing.
                You get photo documentation of the finished work.
              </p>
            </div>
          </div>

          <div className="photo-pair">
            <figure className="site-photo">
              <img
                src="/install-in-progress.jpg"
                alt="Sharing Sun crew detaching solar panels on a commercial re-roof project"
              />
              <figcaption>Detach day — crew tied off, panels coming down in order</figcaption>
            </figure>
            <figure className="site-photo">
              <img
                src="/reinstall-in-progress.jpg"
                alt="Solar detach in progress with every panel position numbered before removal"
              />
              <figcaption>Every panel position numbered before it comes off</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-cloud">
        <div className="container">
          <p className="eyebrow">Good to know</p>
          <h2>Common questions</h2>
          <div className="card-grid" style={{ marginTop: "40px" }}>
            <div className="card-static">
              <h3>Does insurance cover this?</h3>
              <p>
                If your re-roof is part of a hail or storm claim, solar detach
                &amp; reinstall is commonly included in the insurance scope.
                We provide line-item documentation your roofer or adjuster can
                drop straight into the claim.
              </p>
            </div>
            <div className="card-static">
              <h3>How long is my system offline?</h3>
              <p>
                Only as long as the roof takes. Detach is typically a day,
                reinstall is typically a day, and we schedule both as tight to
                the roofing work as possible.
              </p>
            </div>
            <div className="card-static">
              <h3>My roofer offered to move the panels. Should they?</h3>
              <p>
                Ask them one question: who handles the electrical disconnect
                and recommissioning? Most roofers prefer to hand the array to
                a licensed solar contractor — many of the roofers we work
                with send us their solar jobs for exactly that reason.
              </p>
            </div>
            <div className="card-static">
              <h3>Is this a good time to upgrade?</h3>
              <p>
                Honestly — yes. With the array already off the roof,
                it&apos;s the cheapest moment you&apos;ll ever have to add
                panels, replace an aging inverter, or add critter guard. Ask
                us during the quote and we&apos;ll tell you honestly whether
                it&apos;s worth the money.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "40px" }}>
            <a href="/contact" className="btn-amber">Get a D&amp;R quote</a>
            <a href="/upgrades" className="btn-ghost" style={{ marginLeft: "14px" }}>
              See upgrade options
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
