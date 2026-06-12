export const metadata = {
  title: "Request Received | Sharing Sun, Inc.",
};

export default function Thanks() {
  return (
    <section className="section" style={{ minHeight: "55vh" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: "640px" }}>
        <p className="eyebrow">Request received</p>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "16px" }}>
          Got it — we&apos;re on it.
        </h2>
        <p style={{ color: "var(--ink-soft)", marginBottom: "32px" }}>
          Your quote request is in. We&apos;ll review the details and get back
          to you, usually within one business day. If it&apos;s urgent, call us
          directly and we&apos;ll talk it through.
        </p>
        <a href="/" className="btn-ghost">
          Back to home
        </a>
      </div>
    </section>
  );
}
