"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import { staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { whyUs, stats } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  compass: <path d="M12 22a10 10 0 100-20 10 10 0 000 20zM16 8l-2 6-6 2 2-6 6-2z" />,
  map: <path d="M9 4l6 2 5-2v14l-5 2-6-2-5 2V6l5-2zm0 0v14m6-12v14" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />,
  headset: <path d="M4 13v-1a8 8 0 0116 0v1m0 0v3a2 2 0 01-2 2h-1m-13-5a2 2 0 012-2h1v6H6a2 2 0 01-2-2v-2zm16 0a2 2 0 00-2-2h-1v6" />,
};

export default function WhyUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-[1260px] mx-auto px-4 md:px-6">
        <SectionHeading
          eyebrow="Why FurahaYao"
          title="Travel with people who know this land by heart"
          subtitle="We obsess over the details so you can be fully present for the moments that matter."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {whyUs.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="group rounded-3xl border border-safari-black/8 bg-safari-cream/40 p-7 hover:bg-white hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300"
            >
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-safari-terracotta/10 text-safari-terracotta group-hover:bg-safari-terracotta group-hover:text-white transition-colors">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {icons[v.icon]}
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-safari-black">{v.title}</h3>
              <p className="mt-2 text-sm text-safari-black/60 leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats band */}
        <div className="mt-16 rounded-[2rem] bg-ink text-white px-6 py-12 md:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold text-safari-gold leading-none">
                  <StatCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="mt-2 text-sm text-white/65 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
