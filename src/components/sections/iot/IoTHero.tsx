"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export function IoTHero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 min-h-[70vh] flex flex-col justify-center border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <Link 
          href="/#protosem" 
          className="inline-flex items-center gap-2 text-sm font-mono text-steel hover:text-white transition-colors group mb-12 bg-white/5 px-4 py-2 rounded-full border border-white/10"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-mono tracking-widest mb-6">
            EMBEDDED SYSTEMS
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
            IoT & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Connectivity</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
            Complete smart home automation system — From local web control to cloud MQTT to voice commands.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('task1')} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium">
              Task 1: Web Control
            </button>
            <button onClick={() => scrollTo('task2')} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium">
              Task 2: Cloud Dashboard
            </button>
            <button onClick={() => scrollTo('task3')} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium">
              Task 3: Voice Control
            </button>
            <button onClick={() => scrollTo('4')} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-medium">
              Task 4: Forge Smart Home
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
