"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ComparisonAspectData } from '@/types/iot';

interface ComparisonMatrixProps {
  data: ComparisonAspectData[];
}

export function ComparisonMatrix({ data }: ComparisonMatrixProps) {
  return (
    <section className="py-24 border-y border-white/5 bg-black/20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-12">System Comparison</h2>
        
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0d1117] shadow-2xl">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-gray-400 font-medium">ASPECT</th>
                <th className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" style={{ backgroundColor: 'var(--accent)' }} />
                    <span className="text-white font-mono tracking-widest text-sm">TASK 1</span>
                  </div>
                </th>
                <th className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--foreground)' }} />
                    <span className="text-white font-mono tracking-widest text-sm">TASK 2</span>
                  </div>
                </th>
                <th className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--steel)' }} />
                    <span className="text-white font-mono tracking-widest text-sm">TASK 3</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-6 text-left font-medium text-gray-300">
                    {row.aspect}
                  </td>
                  <td className="py-4 px-6 text-accent">
                    {row.task1 || row.section1}
                  </td>
                  <td className="py-4 px-6 text-foreground">
                    {row.task2 || row.section2}
                  </td>
                  <td className="py-4 px-6 text-steel">
                    {row.task3 || row.section3}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
