export const metadata = {
  title: "Solar Financing Options | RENU Loan & C-PACE | Sharing Sun, Inc.",
  description:
    "Financing for solar in Colorado: the RENU Loan for homeowners, C-PACE for commercial properties, and insurance-funded detach & reinstall. Straight answers, no pressure.",
};

export default function Financing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Financing</p>
          <h1>Good projects shouldn&apos;t wait on cash flow.</h1>
          <p className="lede">
            Solar is a long-term asset, and Colorado has financing programs
            built specifically for it — one for homeowners, one for commercial
            properties. Here&apos;s how each works, in plain English, plus the
            payment path most of our re-roof customers don&apos;t realize they
            already have.
          </p>
        </div>
      </section>

      <section className="section section-cloud" data-animate>
        <div className="container">
          <p className="eyebrow">For homeowners</p>
          <h2>The RENU Loan</h2>
          <p className="lede">
            RENU is Colorado&apos;s statewide home energy loan program,
            offered through the Colorado Clean Energy Fund and participating
            credit unions. It&apos;s built for exactly the work we do:
          </p>
          <div className="card-grid">
            <div className="card-static">
              <h3>What it covers</h3>
              <p>
                Solar installations, panel additions, inverter replacements,
                and battery storage — the full menu of residential work,
                including the upgrade bundles that make the most financial
                sense.
              </p>
            </div>
            <div className="card-static">
              <h3>How it works</h3>
              <p>
                Fixed-rate, longer-term financing with no money down, applied
                for through a participating credit union. You own the system
                from day one — this is a loan, not a lease, so there&apos;s no
                third party on your roof or your title.
              </p>
            </div>
          </div>
          <p style={{ marginTop: "28px", color: "var(--ink-soft)", maxWidth: "640px" }}>
            Rates and terms are set by the lenders and subject to credit
            approval — we&apos;ll point you to the current program details
            when we quote your project, and you decide what works for your
            budget. We&apos;re solar contractors, not loan officers, and
            we&apos;ll never pressure a financing decision.
          </p>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container">
          <p className="eyebrow">For commercial properties</p>
          <h2>C-PACE</h2>
          <p className="lede">
            Colorado Commercial Property Assessed Clean Energy (C-PACE) is a
            financing tool for commercial building owners that works unlike
            anything on the residential side:
          </p>
          <div className="card-grid">
            <div className="card-static">
              <h3>Repaid through the property, not the person</h3>
              <p>
                C-PACE financing attaches to the property as a special
                assessment, repaid alongside property taxes over a long term —
                often 20 years or more. Sell the building, and the assessment
                can transfer with it.
              </p>
            </div>
            <div className="card-static">
              <h3>Up to 100% financed</h3>
              <p>
                Eligible projects can be financed with no money down, and on
                many buildings the energy savings outpace the assessment
                payment — meaning the project can be cash-flow positive from
                early on.
              </p>
            </div>
            <div className="card-static">
              <h3>Pairs with federal tax credits</h3>
              <p>
                Unlike residential purchases, commercial solar remains
                eligible for federal investment tax credits — which stack with
                C-PACE financing. Your tax advisor confirms what applies; we
                design the project to qualify.
              </p>
            </div>
            <div className="card-static">
              <h3>We handle the project side</h3>
              <p>
                C-PACE projects require proper engineering, documentation, and
                a qualified contractor. That&apos;s our lane: we design,
                document, and build the project so the financing side has what
                it needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cloud" data-animate>
        <div className="container">
          <p className="eyebrow">For re-roof customers</p>
          <h2>Detach &amp; reinstall is often insurance-funded</h2>
          <p className="lede">
            If your re-roof is part of a hail or storm claim, solar detach
            &amp; reinstall is commonly part of the insurance scope — which
            means for many of our customers, this work isn&apos;t a financing
            question at all. We provide line-item documentation your roofer or
            adjuster can use, and we coordinate directly with your roofing
            contractor on the claim paperwork.
          </p>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Not sure which path fits?</h2>
          <p className="lede" style={{ margin: "0 auto 32px" }}>
            Tell us about the project and we&apos;ll lay out the options that
            actually apply — including, honestly, whether the project is
            worth doing at all.
          </p>
          <a href="/contact" className="btn-amber">Get a quote</a>
        </div>
      </section>
    </>
  );
}
