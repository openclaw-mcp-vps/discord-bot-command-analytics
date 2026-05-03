export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Discord Bot Analytics
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Know exactly how your{' '}
          <span className="text-[#58a6ff]">Discord bot</span>{' '}performs
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track command usage, response times, and user engagement across all your Discord servers. Get actionable insights to improve your bot and grow your community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Tracking — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[['10ms', 'Avg Response Track'], ['99.9%', 'Uptime SLA'], ['∞', 'Commands Logged']].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-wide mb-2">Pro Plan</div>
            <div className="text-5xl font-bold text-white">$15<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
            <div className="text-[#8b949e] text-sm mt-2">Everything you need to monitor your bot</div>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited command tracking',
              'Real-time response time metrics',
              'Per-server engagement analytics',
              'Webhook SDK for easy integration',
              'Daily & weekly digest emails',
              'API access for custom dashboards',
              'Priority support'
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg text-center transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How do I integrate the analytics into my bot?',
              a: 'After subscribing, you receive an API key and a lightweight SDK. Add a single function call after each command handler and data starts flowing immediately — works with Discord.js, Pycord, and any other framework.'
            },
            {
              q: 'What data is collected and stored?',
              a: 'We collect command names, execution timestamps, response latency, server IDs, and anonymized user counts. No message content or personal data is ever stored.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Discord Bot Command Analytics. All rights reserved.
      </footer>
    </main>
  )
}
