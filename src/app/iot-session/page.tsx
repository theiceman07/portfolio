import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";

export default function IoTSessionPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 section-padding relative z-10">
      <div className="mx-auto max-w-4xl px-4 md:px-0">
        <ScrollReveal stagger={0.1}>
          <RevealItem>
            <Link 
              href="/#protosem" 
              className="inline-flex items-center gap-2 text-sm font-mono text-steel hover:text-white transition-colors group mb-12"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Portfolio
            </Link>
          </RevealItem>
          
          <RevealItem>
            <SectionHeading
              number="07"
              label="IoT & Connectivity"
              title="Hands-on ESP32 & Arduino IDE"
              className="mb-12"
            />
          </RevealItem>

          <div className="grid gap-6">
            <RevealItem>
              <div className="glass-panel rounded-sm p-8 shadow-xl border border-glass-border bg-glass-bg transition-colors hover:border-accent/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: "var(--accent)", backgroundColor: "var(--accent)" }} />
                  <span className="inline-flex shrink-0 items-center justify-center font-mono text-[10px] tracking-widest text-steel w-max">
                    TASK 01
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white mb-3">HTTP LED Control</h3>
                <p className="font-mono text-sm text-[rgba(220,218,240,0.8)] leading-relaxed">
                  We wrote code to connect the ESP32 to a local Wi-Fi network and spun up a basic web server. By sending HTTP GET requests from a web browser, we were able to remotely toggle the ESP32&apos;s onboard LED on and off.
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="glass-panel rounded-sm p-8 shadow-xl border border-glass-border bg-glass-bg transition-colors hover:border-accent/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: "var(--foreground)", backgroundColor: "var(--foreground)" }} />
                  <span className="inline-flex shrink-0 items-center justify-center font-mono text-[10px] tracking-widest text-steel w-max">
                    TASK 02
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white mb-3">MQTT Relay Switch</h3>
                <p className="font-mono text-sm text-[rgba(220,218,240,0.8)] leading-relaxed">
                  Moving from simple HTTP to a publish-subscribe model, we implemented an MQTT client on the ESP32. It subscribed to a specific topic, and upon receiving a trigger message, activated a relay module connected to a 230W incandescent bulb.
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="glass-panel rounded-sm p-8 shadow-xl border border-glass-border bg-glass-bg transition-colors hover:border-accent/15">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color: "var(--steel)", backgroundColor: "var(--steel)" }} />
                  <span className="inline-flex shrink-0 items-center justify-center font-mono text-[10px] tracking-widest text-steel w-max">
                    TASK 03
                  </span>
                </div>
                <h3 className="text-2xl font-light text-white mb-3">IFTTT Voice Activation</h3>
                <p className="font-mono text-sm text-[rgba(220,218,240,0.8)] leading-relaxed">
                  To add a layer of user interaction, we integrated IFTTT (If This Then That). We linked Google Assistant to Webhooks, allowing us to send an MQTT message by speaking a trigger phrase, which seamlessly turned the 230W bulb on and off.
                </p>
              </div>
            </RevealItem>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
