import React from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  description: string;
}

interface StatProps {
  value: string;
  label: string;
  sublabel?: string;
}

interface ValueCardProps {
  number: string;
  title: string;
  description: string;
  accent: string;
}

// Custom Hero Section — unchanged
function HeroSection({ title, description }: HeroSectionProps) {
  return (
    <div className="relative h-[40vh] min-h-65 w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/slide-03.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bail text-white mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-up">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased">
      <HeroSection
        title="Bangladesh Auto Industries Ltd"
        description="Pioneering the nation's transition to sustainable mobility with Bangladesh's first homegrown electric vehicles."
      />

      {/* ── Mission & Impact ── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600 mb-6">
          Our Mission
        </p>

        {/* Editorial headline + body split */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start mb-20">
          <h2 className="text-4xl md:text-5xl font-bail font-semibold leading-[1.1] text-slate-900">
            Empowering<br />
            <span className="text-emerald-500">a Greener</span><br />
            Nation.
          </h2>
          <div className="flex flex-col justify-center gap-5 pt-2">
            <p className="text-slate-500 leading-relaxed text-base">
              Founded with a vision to revolutionize the automotive landscape,{' '}
              <strong className="text-slate-800 font-semibold">BAIL</strong> stands at
              the forefront of the green revolution in Bangladesh. We aren't just
              assembling vehicles; we are building an entire ecosystem — from lithium-ion
              battery plants to a nationwide smart charging network.
            </p>
            <p className="text-slate-500 leading-relaxed text-base">
              By leveraging cutting-edge electric vehicle technology, our mission is to
              reduce carbon emissions, decrease reliance on fossil fuel imports, and
              provide affordable, eco-friendly transit solutions for every citizen.
            </p>
          </div>
        </div>

        {/* Stats row — bold editorial numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          <StatItem value="0%" label="Tailpipe Emissions" sublabel="Zero direct pollution" />
          <StatItem value="100%" label="Eco-Engineered" sublabel="Every component" />
          <StatItem value="20k+" label="Annual Capacity" sublabel="Vehicles planned" />
          <StatItem value="⚡" label="Smart Grid" sublabel="EV-ready infrastructure" />
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-slate-950 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400 mb-3">
                Our Pillars
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Driven by Purpose
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed md:text-right">
              Our roadmap is guided by strict pillars of innovation,
              sustainability, and national pride.
            </p>
          </div>

          {/* Asymmetric card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-800 rounded-2xl overflow-hidden">
            <ValueCard
              number="01"
              title="Eco-Sustainability"
              description="Every weld, battery cell, and software line is optimized to preserve Bangladesh's rich, natural environment for generations to come."
              accent="border-l-emerald-500"
            />
            <ValueCard
              number="02"
              title="Indigenous Innovation"
              description="Tailoring world-class EV technology to withstand local terrain, climate, and urban density demands unique to Bangladesh."
              accent="border-l-teal-400"
            />
            <ValueCard
              number="03"
              title="Economic Impact"
              description="Creating thousands of high-tech engineering and manufacturing jobs, fostering a resilient, localized supply chain."
              accent="border-l-sky-400"
            />
          </div>
        </div>
      </section>

      {/* ── CTA / Vision ── */}
      <section className="relative overflow-hidden bg-slate-900 py-28 px-6">
        {/* Decorative rings */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full border border-white/10" />

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-200 mb-4">
              The Road Ahead
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-5">
              The Future is Electric.<br />
              <span className="text-emerald-100">Made in Bangladesh.</span>
            </h3>
            <p className="text-emerald-100/80 text-base leading-relaxed max-w-xl">
              Join us as we accelerate toward a cleaner, quieter, and more
              sustainable tomorrow. Explore our upcoming fleet of electric
              two-wheelers, commercial vehicles, and passenger cars.
            </p>
          </div>

          <div className="flex-shrink-0 flex flex-col gap-3">
            <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3.5 rounded-xl transition duration-200 text-sm shadow-lg shadow-emerald-900/20 whitespace-nowrap">
              Discover Our Fleet →
            </button>
            <button className="bg-transparent border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-3.5 rounded-xl transition duration-200 text-sm whitespace-nowrap">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Sub-components ──

function StatItem({ value, label, sublabel }: StatProps) {
  return (
    <div className="flex flex-col gap-1 px-8 py-10 bg-white hover:bg-slate-50 transition-colors duration-200">
      <div className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-none mb-2">
        {value}
      </div>
      <div className="text-sm font-semibold text-slate-700">{label}</div>
      {sublabel && (
        <div className="text-xs text-slate-400 mt-0.5">{sublabel}</div>
      )}
    </div>
  );
}

function ValueCard({ number, title, description, accent }: ValueCardProps) {
  return (
    <div
      className={`bg-slate-900 p-10 border-l-2 ${accent} flex flex-col gap-6 group hover:bg-slate-800 transition-colors duration-300`}
    >
      <span className="text-xs font-bold tracking-[0.2em] text-slate-600 uppercase">
        {number}
      </span>
      <div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
