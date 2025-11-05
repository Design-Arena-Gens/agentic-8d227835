import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-50 to-white" />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l3.09 6.26L22 10.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 15.14l-5-4.87 6.91-1.01L12 3z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
                200 Canva templates included
              </span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Real Estate Instagram Bundle
              </h1>
              <p className="mt-5 text-lg leading-8 text-zinc-600 md:max-w-xl">
                A conversion?focused set of 200 editable Canva templates for realtors. Post daily, grow your brand, and book more showings?no design skills required.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800">
                  Buy the Bundle
                </a>
                <a href="https://www.canva.com/templates" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3 text-zinc-900 transition-colors hover:bg-zinc-50">
                  Preview in Canva
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-zinc-600">
                <div className="flex items-center gap-2"><CheckIcon /> Easy to edit</div>
                <div className="flex items-center gap-2"><CheckIcon /> Reels + Posts</div>
                <div className="flex items-center gap-2"><CheckIcon /> Brandable colors & fonts</div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-pink-100 blur-3xl" />
              <div className="absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl" />
              <div className="relative mx-auto max-w-md rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt="Real estate Instagram templates preview"
                  width={900}
                  height={700}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <Feature
            title="200 ready-to-post designs"
            desc="Carousels, Reels covers, Stories, and single posts crafted for real estate."
          />
          <Feature
            title="Edit in Canva in minutes"
            desc="Swap photos, change colors, update text?brand it your way without a designer."
          />
          <Feature
            title="Grow leads and engagement"
            desc="Hooks, CTAs, and layouts tuned for local market trust and conversion."
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">What?s inside</h2>
          <p className="mt-3 max-w-2xl text-zinc-600">A balanced mix to cover your feed for months.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "Market updates",
              "New listings",
              "Open houses",
              "Just sold",
              "Tips & guides",
              "Neighborhood spotlights",
              "Client testimonials",
              "Lead magnets",
            ].map((label, idx) => (
              <div key={idx} className="rounded-xl border border-zinc-100 bg-white p-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=800&auto=format&fit=crop`}
                    alt={label}
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-zinc-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-semibold md:text-4xl">Loved by busy realtors</h2>
            <p className="mt-3 max-w-md text-zinc-600">Save hours each week and keep your feed consistent without hiring a designer.</p>
          </div>
          <div className="md:col-span-2 grid gap-4">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl border border-zinc-100 bg-white p-6">
                <p className="text-zinc-800">?{t.quote}?</p>
                <div className="mt-3 text-sm text-zinc-600">? {t.author}, {t.role}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="text-3xl font-semibold md:text-4xl">FAQs</h2>
          <dl className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-zinc-100 bg-white p-6">
                <dt className="font-medium">{f.q}</dt>
                <dd className="mt-2 text-zinc-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Get the full bundle</h2>
            <p className="mt-3 max-w-lg text-zinc-600">Instant access to 200 Canva templates. One?time purchase with lifetime updates.</p>
            <ul className="mt-6 grid gap-2 text-sm text-zinc-700">
              <li className="flex items-center gap-2"><CheckIcon /> 200 editable Canva templates</li>
              <li className="flex items-center gap-2"><CheckIcon /> Posts, Stories, Reels covers, Carousels</li>
              <li className="flex items-center gap-2"><CheckIcon /> Free fonts and stock placeholders</li>
              <li className="flex items-center gap-2"><CheckIcon /> Commercial use license</li>
              <li className="flex items-center gap-2"><CheckIcon /> Lifetime updates</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm">
            <div className="flex items-end gap-2">
              <div className="text-5xl font-bold tracking-tight">$39</div>
              <div className="text-sm text-zinc-500 line-through">$99</div>
            </div>
            <p className="mt-2 text-sm text-zinc-600">Launch promo. Price increases soon.</p>
            <a
              href="https://www.canva.com/templates"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-white transition-colors hover:bg-zinc-800"
            >
              Buy Now ? Instant Access
            </a>
            <p className="mt-3 text-center text-xs text-zinc-500">Secure checkout. You?ll receive a Canva link after purchase.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-zinc-600 md:flex-row">
          <div>? {new Date().getFullYear()} Real Estate IG Bundle</div>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#" className="hover:text-zinc-900">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-9 9-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-600">{desc}</p>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 7l-9 9-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

const testimonials = [
  {
    quote: "I scheduled a month of posts in one afternoon. Engagement up 3x.",
    author: "Mia S.",
    role: "Broker Associate",
  },
  {
    quote: "The designs look premium and on-brand after 5 minutes in Canva.",
    author: "Daniel R.",
    role: "Realtor?",
  },
  {
    quote: "I finally post consistently without overthinking every graphic.",
    author: "Alicia T.",
    role: "Listing Agent",
  },
];

const faqs = [
  {
    q: "Do I need Canva Pro?",
    a: "No. All templates use free elements. Canva Free works great.",
  },
  {
    q: "Can I change colors and fonts?",
    a: "Yes. You can fully customize brand colors, fonts, photos, and text.",
  },
  {
    q: "How do I get the files?",
    a: "After purchase you?ll get a link that opens the entire bundle inside Canva.",
  },
  {
    q: "What?s the license?",
    a: "For your personal business social accounts. Resale or redistribution is not allowed.",
  },
];

