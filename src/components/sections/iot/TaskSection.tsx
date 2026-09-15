"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TaskData } from '../../../types/iot';
import { Tabs, Accordion, CodeBlock } from './InteractiveElements';
import { MediaGallery } from './MediaGallery';
import { HardwareGallery } from './HardwareGallery';
import { FeatureGrid } from './FeatureGrid';
import { CheckCircle2, Activity, Terminal } from 'lucide-react';

interface TaskSectionProps {
  task: TaskData;
}

export default function TaskSection({ task }: TaskSectionProps) {
  return (
    <section id={task.id} className="pt-24 pb-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Task Header & Intro */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: task.colorVar, backgroundColor: task.colorVar }} />
            <span className="inline-flex shrink-0 items-center justify-center font-mono text-xs tracking-widest text-steel font-medium">
              {task.number}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">{task.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert prose-lg text-gray-300">
              <p>{task.description}</p>
              <h3 className="text-white mt-8 mb-4 font-medium text-xl">Learning Objectives</h3>
              <ul className="space-y-2">
                {task.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" style={{ color: task.colorVar }} />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-black/40"
            >
              <Image 
                src={task.introImage.src} 
                alt={task.introImage.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-sm text-gray-300">{task.introImage.caption}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hardware & Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Components & Hardware</h3>
          <Tabs 
            tabs={task.hardwareSpecs.map((spec, i) => ({
              id: `spec-${i}`,
              label: spec.title,
              content: (
                <div className="p-6 rounded-xl border border-white/10 bg-black/20 mt-4">
                  <h4 className="text-lg font-medium text-white mb-4">{spec.description}</h4>
                  <div className="prose prose-invert max-w-none text-gray-300">
                    <div dangerouslySetInnerHTML={{ __html: spec.content.replace(/\n/g, '<br/>') }} />
                  </div>
                </div>
              )
            }))}
          />
        </div>

        {/* Hardware Gallery: real photos + pinouts */}
        {task.componentsGallery && task.componentsGallery.length > 0 && (
          <HardwareGallery components={task.componentsGallery} taskTitle={task.title} />
        )}

        {/* Wiring Diagram */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Wiring Architecture</h3>
          {task.wiringDiagram.image ? (
            <div className="rounded-xl border border-white/10 bg-black/30 overflow-hidden">
              <img
                src={task.wiringDiagram.image}
                alt={task.wiringDiagram.caption}
                className="w-full h-auto"
                loading="lazy"
              />
              <p className="px-6 py-4 text-sm text-gray-400 border-t border-white/10">
                {task.wiringDiagram.caption}
              </p>
              {task.wiringDiagram.code && (
                <details className="border-t border-white/10">
                  <summary className="px-6 py-3 text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors select-none">
                    View raw ASCII schematic
                  </summary>
                  <pre className="px-6 pb-6 text-xs font-mono text-emerald-400 overflow-x-auto">
                    <code>{task.wiringDiagram.code}</code>
                  </pre>
                </details>
              )}
            </div>
          ) : (
            <div className="p-6 rounded-xl border border-white/10 bg-[#0d1117] overflow-x-auto">
              <pre className="text-sm font-mono text-emerald-400">
                <code>{task.wiringDiagram.code}</code>
              </pre>
              <p className="mt-4 text-sm text-gray-400 border-t border-white/10 pt-4">
                {task.wiringDiagram.caption}
              </p>
            </div>
          )}
        </div>

        {/* Media Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Implementation Details</h3>
          <div className="prose prose-invert mb-8 text-gray-300 max-w-none">
            <div dangerouslySetInnerHTML={{ __html: task.galleryExplanation.replace(/\n/g, '<br/>') }} />
          </div>
          <MediaGallery 
            images={task.gallery} 
            videoSrc={task.testingResults.videoSrc}
            videoCaption={task.testingResults.videoCaption}
          />
        </div>

        {/* Code Explanation */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Source Code</h3>
          <CodeBlock code={task.codeBlock.code} language={task.codeBlock.language} />
          
          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4">Code Breakdown</h4>
            <Accordion items={task.codeBlock.collapsibleSections} />
          </div>
        </div>

        {/* Testing Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Testing & Results</h3>
          <Tabs 
            tabs={[
              {
                id: 'serial',
                label: 'Serial Monitor',
                content: (
                  <div className="mt-4 p-4 rounded-xl border border-white/10 bg-[#0d1117]">
                    <div className="flex items-center gap-2 text-gray-400 mb-4 border-b border-white/10 pb-2">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-mono">COM3 - 115200 baud</span>
                    </div>
                    <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                      <code>{task.testingResults.serialOutput}</code>
                    </pre>
                  </div>
                )
              },
              {
                id: 'metrics',
                label: 'Performance Metrics',
                content: (
                  <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                    <table className="w-full text-left text-sm text-gray-300">
                      <thead className="bg-white/5 text-gray-200">
                        <tr>
                          <th className="px-6 py-4 font-medium">Metric</th>
                          <th className="px-6 py-4 font-medium">Value</th>
                          <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {task.testingResults.metrics.map((m, i) => (
                          <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium flex items-center gap-2">
                              <Activity className="w-4 h-4 text-gray-400" />
                              {m.metric}
                            </td>
                            <td className="px-6 py-4 font-mono">{m.value}</td>
                            <td className="px-6 py-4">{m.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
            ]}
          />
        </div>

        {/* Key Learnings */}
        <div className="mb-16">
          <h3 className="text-2xl font-light text-white mb-6">Key Learnings</h3>
          <FeatureGrid 
            items={task.keyLearnings.map(k => ({
              title: k.title,
              description: k.points.map(p => `• ${p}`).join('\n'),
              icon: 'Lightbulb'
            }))}
            columns={3}
          />
        </div>
        
      </div>
    </section>
  );
}
