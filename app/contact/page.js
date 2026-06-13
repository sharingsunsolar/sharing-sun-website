export const metadata = {
  title: "Get a Quote | Sharing Sun, Inc.",
  description:
    "Request a quote for solar detach & reinstall, system upgrades, battery storage, critter guard, or commercial solar in the Denver metro area.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Tell us about the job.</h1>
          <p className="lede">
            Send the details below and we&apos;ll get back to you with a
            straight answer — usually within one business day. Prefer the
            phone? Call us directly.
          </p>
        </div>
      </section>

      <section className="section" data-animate>
        <div className="container contact-grid">
          <form
            className="quote-form"
            action="https://formsubmit.co/REPLACE-WITH-YOUR-EMAIL"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New quote request — sharingsuninc.com"
            />
            <input
              type="hidden"
              name="_next"
              value="https://REPLACE-WITH-YOUR-VERCEL-URL/thanks"
            />

            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="city">Property city</label>
                <input id="city" name="city" type="text" placeholder="e.g. Brighton, Thornton, Denver" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="service">What do you need help with?</label>
              <select id="service" name="service" required defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option>Detach &amp; reinstall (re-roof)</option>
                <option>New solar installation</option>
                <option>System upgrade — add panels</option>
                <option>Inverter / microinverter replacement</option>
                <option>Battery storage</option>
                <option>Critter guard / maintenance</option>
                <option>Commercial project</option>
                <option>I&apos;m a roofing contractor</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Tell us about the project</label>
              <textarea
                id="message"
                name="message"
                placeholder="Roof timeline, system size, what's going on with your current setup — whatever you know."
              ></textarea>
            </div>

            <div>
              <button type="submit" className="btn-amber">
                Send quote request
              </button>
            </div>
          </form>

          <aside className="contact-aside">
            <h2>Reach us directly</h2>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+13035550123">(303) 555-0123</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@sharingsuninc.com">info@sharingsuninc.com</a>
            </p>
            <p>
              <strong>Based in:</strong> Brighton, Colorado — serving the
              Denver metro and Front Range.
            </p>
            <p className="mono-line" style={{ marginTop: "22px" }}>
              NABCEP CERTIFIED
              <br />
              CO CLASS A GENERAL CONTRACTOR
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
