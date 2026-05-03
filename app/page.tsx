export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop losing form work to{" "}
          <span className="text-[#58a6ff]">session timeouts</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          FormGuard monitors your web forms, auto-refreshes sessions before they expire,
          and saves every keystroke to local storage — so a timeout never costs you work again.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get FormGuard — $9/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works on Chrome &amp; Firefox.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⏱", title: "Timeout Detection", body: "Content scripts watch for session-expiry warnings and act before the page dies." },
            { icon: "💾", title: "Auto-Save", body: "Every field is mirrored to local storage in real time. Reload and your data is still there." },
            { icon: "🔄", title: "Silent Refresh", body: "Sessions are silently renewed in the background — no interruption to your workflow." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited form monitoring",
              "Auto session refresh",
              "Local storage backup",
              "Chrome + Firefox support",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">7-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which browsers are supported?",
              a: "FormGuard works on Chrome (v88+) and Firefox (v90+). Edge support via the Chrome Web Store."
            },
            {
              q: "Is my form data sent to your servers?",
              a: "Never. All data is stored exclusively in your browser's local storage. Nothing leaves your device."
            },
            {
              q: "What happens when I cancel?",
              a: "You keep access until the end of your billing period. After that the extension stops refreshing sessions but your saved data remains."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-1">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} FormGuard. All rights reserved.
      </footer>
    </main>
  );
}
