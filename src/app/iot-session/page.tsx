import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal, RevealItem } from "@/components/ui/ScrollReveal";
import { ExpandableTaskCard } from "@/components/ui/ExpandableTaskCard";

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
              <ExpandableTaskCard
                taskNumber="TASK 01"
                colorVar="var(--accent)"
                title="HTTP LED Control"
                description="We wrote code to connect the ESP32 to a local Wi-Fi network and spun up a basic web server. By sending HTTP GET requests from a web browser, we were able to remotely toggle the ESP32's onboard LED on and off."
                videoSrc="/media/iot/videos/task1_demo.mp4"
                imageFolder="/media/iot/photos/task1_web_interface"
                imageCount={7}
              />
            </RevealItem>

            <RevealItem>
              <ExpandableTaskCard
                taskNumber="TASK 02"
                colorVar="var(--foreground)"
                title="MQTT Relay Switch"
                description="Moving from simple HTTP to a publish-subscribe model, we implemented an MQTT client on the ESP32. It subscribed to a specific topic, and upon receiving a trigger message, activated a relay module connected to a 230W incandescent bulb."
                videoSrc="/media/iot/videos/task2_demo.mp4"
                imageFolder="/media/iot/photos/task2_mqtt_relay"
                imageCount={8}
              />
            </RevealItem>

            <RevealItem>
              <ExpandableTaskCard
                taskNumber="TASK 03"
                colorVar="var(--steel)"
                title="IFTTT Voice Activation"
                description="To add a layer of user interaction, we integrated IFTTT (If This Then That). We linked Google Assistant to Webhooks, allowing us to send an MQTT message by speaking a trigger phrase, which seamlessly turned the 230W bulb on and off."
                videoSrc="/media/iot/videos/task3_demo.mp4"
                imageFolder="/media/iot/photos/task3_voice_control"
                imageCount={7}
              />
            </RevealItem>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

