"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function ComparisonMatrix() {
  const tableData = [
    { aspect: "Range", task1: "Local WiFi", task2: "Internet", task3: "Anywhere" },
    { aspect: "Control", task1: "Browser", task2: "Dashboard", task3: "Voice" },
    { aspect: "Protocol", task1: "HTTP", task2: "MQTT", task3: "Voice API" },
    { aspect: "Latency", task1: "<150ms", task2: "<1s", task3: "2-3s" },
    { aspect: "Scalability", task1: "Limited", task2: "100+ devs", task3: "Unlimited" },
    { aspect: "Cost", task1: "Free", task2: "Free", task3: "Free" },
    { aspect: "Complexity", task1: "Low", task2: "Medium", task3: "High" },
  ];

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
            <tbody className="divide-y divide-white/5">
              {tableData.map((row, idx) => (
                <motion.tr 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="p-6 text-gray-300 font-medium group-hover:text-white transition-colors">{row.aspect}</td>
                  <td className="p-6 text-gray-400 font-mono text-sm">{row.task1}</td>
                  <td className="p-6 text-gray-400 font-mono text-sm">{row.task2}</td>
                  <td className="p-6 text-gray-400 font-mono text-sm">{row.task3}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
