'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'starter' | 'professional' | 'enterprise'>('professional');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Navigation */}
      <nav className="border-b border-muted/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">BT</span>
            </div>
            <span className="font-bold text-lg">BulliaTrix</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
            <a href="#pricing" className="hover:text-primary transition">Pricing</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-40 text-center">
        <div className="space-y-8 mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
            ✨ Transforming African Commerce
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            Empowering African
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
              Businesses
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            BulliaTrix-Bizz-Africa delivers cutting-edge digital solutions to help businesses across Africa scale, grow, and thrive in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 text-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 border-2 border-primary text-white font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 text-lg">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🚀',
              title: 'Lightning Fast',
              description: 'Optimize your business with high-performance digital infrastructure.',
            },
            {
              icon: '🌍',
              title: 'Global Reach',
              description: 'Connect with customers across Africa and beyond with our platform.',
            },
            {
              icon: '🔒',
              title: 'Secure & Reliable',
              description: 'Enterprise-grade security to protect your business data.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-muted/30 bg-muted/5 hover:bg-muted/10 transition hover:border-primary/50"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">About BulliaTrix</h2>
            <p className="text-muted leading-relaxed">
              We&apos;re dedicated to transforming how African businesses operate in the digital world. Our platform combines innovative technology with deep market understanding to deliver solutions that actually work.
            </p>
            <ul className="space-y-3 text-muted">
              {['Founded with a mission', 'Trusted by 1000+ businesses', 'Continuous innovation'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 border border-muted/20 h-64 flex items-center justify-center">
            <p className="text-center text-muted">Product showcase coming soon</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Amara Okonkwo',
              role: 'CEO, TechHub Lagos',
              text: 'BulliaTrix transformed how we manage our operations. The results have been incredible.',
            },
            {
              name: 'Kofi Mensah',
              role: 'Founder, E-Commerce Plus',
              text: 'Amazing support and features. They truly understand African market needs.',
            },
            {
              name: 'Zainab Hassan',
              role: 'Director, Digital Solutions',
              text: 'The platform is intuitive and has helped us scale 3x in just one year.',
            },
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-muted/30 bg-muted/5 hover:border-primary/50 transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-muted mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-muted mb-16 max-w-2xl mx-auto">Choose the plan that fits your business needs. All plans include 14-day free trial.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              id: 'starter',
              name: 'Starter',
              price: '$29',
              description: 'Perfect for small businesses',
              features: ['Up to 5 users', '10 GB storage', 'Email support', 'Basic analytics'],
            },
            {
              id: 'professional',
              name: 'Professional',
              price: '$99',
              description: 'Best for growing companies',
              features: ['Up to 50 users', '500 GB storage', 'Priority support', 'Advanced analytics', 'Custom integrations', 'API access'],
              popular: true,
            },
            {
              id: 'enterprise',
              name: 'Enterprise',
              price: 'Custom',
              description: 'For large organizations',
              features: ['Unlimited users', 'Unlimited storage', '24/7 dedicated support', 'Custom features', 'SLA guarantee', 'On-premise option'],
            },
          ].map((plan: any) => (
            <div
              key={plan.id}
              className={`rounded-xl border transition p-8 ${
                plan.popular
                  ? 'border-primary bg-gradient-to-b from-primary/10 to-transparent scale-105'
                  : 'border-muted/30 bg-muted/5 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-muted">/month</span>}
              </div>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/40'
                    : 'border border-primary text-white hover:bg-primary/10'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature: string, fidx: number) => (
                  <li key={fidx} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="max-w-2xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-muted/30 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted mb-8">Get the latest updates about our new features and services.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-background border border-muted/30 rounded-lg focus:outline-none focus:border-primary transition text-foreground"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-primary text-sm mt-4">Thanks for subscribing!</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-muted/20 bg-muted/5 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted">
          <p>&copy; 2026 BulliaTrix-Bizz-Africa. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
