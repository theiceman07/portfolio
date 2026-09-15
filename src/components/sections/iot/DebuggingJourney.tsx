"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { DebugProblemData } from '@/types/iot';

interface DebuggingJourneyProps {
  problems: DebugProblemData[];
}

const severityStyle: Record<DebugProblemData['severity'], string> = {
  HIGH: 'text-red-400 bg-red-400/10 border-red-400/20',
  MEDIUM: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  LOW: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
};

export function DebuggingJourney({ problems }: DebuggingJourneyProps) {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">The Real Learning: Debugging Production Systems</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The code looks clean now. The actual journey was messier — and that&apos;s where the learning happened.
          </p>
        </div>

        <div className="space-y-6">
          {problems.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-black/30"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xl">{p.emoji}</span>
                <h3 className="text-lg md:text-xl font-medium text-white flex-1 min-w-[200px]">{p.title}</h3>
                <span className={`text-xs font-mono px-2 py-1 rounded-md border ${severityStyle[p.severity]}`}>
                  {p.severity}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                  <Clock className="w-3.5 h-3.5" /> {p.timeSpent}
                </span>
              </div>

              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                <span className="text-gray-300 font-medium">What happened: </span>{p.whatHappened}
              </p>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                <span className="text-gray-300 font-medium">How I fixed it: </span>{p.howFixed}
              </p>

              {p.code && (
                <pre className="text-xs font-mono text-emerald-400 bg-[#0d1117] border border-white/10 rounded-lg p-4 overflow-x-auto mb-4">
                  <code>{p.code}</code>
                </pre>
              )}

              <p className="text-sm text-accent/90 border-t border-white/5 pt-3">
                → {p.learning}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
