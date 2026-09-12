import React from 'react';
import Link from 'next/link';
import { Download, ExternalLink, Mail, FileText, Code2, Database } from 'lucide-react';
import { ResourceLinkData } from '@/types/iot';

interface ResourcesFooterProps {
  resources: ResourceLinkData[];
}

export function ResourcesFooter({ resources }: ResourcesFooterProps) {
  return (
    <footer className="pt-16 pb-8 border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Quick Stats */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <Database className="w-5 h-5 text-accent" />
              Project Stats
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400">Total Duration</span>
                <span className="text-white font-mono">3 Weeks</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400">Lines of Code</span>
                <span className="text-white font-mono">~450</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-gray-400">Cloud Integrations</span>
                <span className="text-white font-mono">3 APIs</span>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <Download className="w-5 h-5 text-accent" />
              Downloads
            </h4>
            <div className="flex flex-col gap-2">
              <ul className="space-y-2">
                {resources.map((resource, idx) => (
                  <li key={idx}>
                    <Link href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-left text-gray-300 hover:text-white group">
                      {resource.type === 'Datasheet' ? <FileText className="w-4 h-4 group-hover:text-accent transition-colors" /> :
                       resource.type === 'Documentation' ? <ExternalLink className="w-4 h-4 group-hover:text-accent transition-colors" /> :
                       resource.type === 'Tool' ? <Database className="w-4 h-4 group-hover:text-accent transition-colors" /> :
                       <Code2 className="w-4 h-4 group-hover:text-accent transition-colors" />}
                      <span>{resource.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* External Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-accent" />
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Adafruit IO Docs', url: '#' },
                { name: 'MQTT Specification', url: '#' },
                { name: 'IFTTT Developer Portal', url: '#' },
                { name: 'Arduino Reference', url: '#' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Contact */}
          <div className="space-y-6">
            <h4 className="text-xl font-medium text-white mb-6">Let&apos;s Connect</h4>
            <p className="text-sm text-gray-400 mb-6">
              Looking to build your own IoT project? Feel free to reach out with questions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all hover:scale-110">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:your.email@example.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arjun. All rights reserved.
          </p>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            Back to Main Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
