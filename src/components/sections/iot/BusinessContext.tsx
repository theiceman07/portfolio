"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target } from 'lucide-react';
import { CompetitorData, CTAAudienceData } from '@/types/iot';

interface BusinessContextProps {
  competitors: CompetitorData[];
  ctas: CTAAudienceData[];
}

export function BusinessContext({ competitors, ctas }: BusinessContextProps) {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent uppercase mb-4">
            <Target className="w-4 h-4" /> Market Gap
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Why Environmental Data Export Matters</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Smart home platforms are great at automation. Most stop short of giving users their own historical data back.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {competitors.map((c, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-5 rounded-xl border border-white/10 bg-black/30"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-white font-medium">{c.name}</h4>
                <span className="text-xs font-mono text-gray-500">{c.price}</span>
              </div>
              <p className="text-sm text-gray-400">{c.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-2xl border border-accent/20 bg-accent/5 mb-14">
          <div className="flex items-center gap-2 mb-3 text-accent">
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-medium">What Forge delivers for $0</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            24/7 environmental logging, a 50-row historical table, and one-click CSV export on Firebase&apos;s free tier —
            the same insight a facilities manager would otherwise pay $500–2,000/month for across separate monitoring
            and analytics tools. This isn&apos;t just a feature list; it&apos;s identifying what a market leaves out
            and building the missing piece.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ctas.map((cta, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-white/10 bg-black/30"
            >
              <h4 className="text-white font-medium mb-3">{cta.audience}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{cta.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
