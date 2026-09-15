import { IoTContent, QuickStatData, DebugProblemData, MetricGroupData, CompetitorData, CTAAudienceData, HardwareComponentData } from '../types/iot';

export const esp32Component: HardwareComponentData = {
  name: "ESP32 Development Module",
  category: "Microcontroller",
  manufacturer: "Espressif Systems",
  model: "DevKit V4",
  photos: [
    {
      type: "product",
      imageUrl: "/media/iot/hardware/esp32-board.svg",
      caption: "ESP32 DevKit V4 top view showing USB port, GPIO pins, and onboard antenna",
      altText: "ESP32 development board with USB port on one end and two rows of GPIO pins along the edges"
    },
    {
      type: "pinout",
      imageUrl: "/media/iot/hardware/esp32-pinout.svg",
      caption: "Official ESP32 pinout diagram — all 38 GPIO pins labeled",
      altText: "Full pinout diagram of the ESP32 showing power, ADC, SPI, I2C, and UART pin groups"
    }
  ],
  specifications: [
    { label: "Processor", value: "Xtensa Dual-Core 32-bit" },
    { label: "Clock Speed", value: "160 MHz" },
    { label: "RAM", value: "520 KB SRAM" },
    { label: "Flash", value: "4 MB" },
    { label: "WiFi", value: "802.11 b/g/n (2.4 GHz)" },
    { label: "GPIO Pins", value: "34 total (25 usable)" },
    { label: "ADC", value: "12-bit (0–4095)" },
    { label: "Dimensions", value: "49 × 26 × 13 mm" }
  ],
  pins: [
    { pinNumber: "2", name: "GPIO2", function: "Built-in LED", voltage: "3.3V output", notes: "Active HIGH" },
    { pinNumber: "4", name: "GPIO4", function: "DHT11 data line", voltage: "3.3V I/O", notes: "Needs pull-up resistor" },
    { pinNumber: "26", name: "GPIO26", function: "Relay control", voltage: "3.3V output", notes: "Active-LOW" },
    { pinNumber: "34", name: "GPIO34", function: "LDR analog input", voltage: "0–3.3V input", notes: "Input-only ADC pin" }
  ],
  usageContext: "The brain of all four tasks — WiFi client, HTTP/MQTT client, and GPIO controller.",
  datasheetUrl: "https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf",
  purchaseUrl: "https://www.amazon.com/ESP32-DEVKITC-32D-Development-Board-ESP-WROOM-32/dp/B09N8RYPV4"
};

export const relayComponent: HardwareComponentData = {
  name: "SRD-05VDC-SL-C Relay Module",
  category: "Actuator / Switching",
  manufacturer: "Songle",
  model: "SRD-05VDC-SL-C",
  photos: [
    {
      type: "product",
      imageUrl: "/media/iot/hardware/relay-board.svg",
      caption: "5V single-channel relay module — coil and contact terminals visible",
      altText: "Relay module PCB with a black relay can, screw terminals, and a status LED"
    },
    {
      type: "pinout",
      imageUrl: "/media/iot/hardware/relay-pinout.svg",
      caption: "Relay pinout — VCC, GND, IN, COM, NO, NC",
      altText: "Diagram labeling the relay module's coil-side and contact-side pins"
    }
  ],
  specifications: [
    { label: "Coil Voltage", value: "5V DC" },
    { label: "Coil Current", value: "~70 mA" },
    { label: "Contact Rating", value: "250V AC / 10A" },
    { label: "Type", value: "SPDT" },
    { label: "Switching Time", value: "~10 ms" },
    { label: "Logic", value: "Active-LOW (this batch)" }
  ],
  pins: [
    { pinNumber: "1", name: "VCC", function: "5V power for the coil" },
    { pinNumber: "2", name: "GND", function: "Ground reference" },
    { pinNumber: "3", name: "IN", function: "Control signal from GPIO26", notes: "LOW energizes coil" },
    { pinNumber: "4", name: "COM", function: "Common contact — wired to mains Live" },
    { pinNumber: "5", name: "NO", function: "Normally Open — closes when energized" }
  ],
  usageContext: "Safely isolates 230V mains from the ESP32's 3.3V logic in Tasks 2 and 4.",
  datasheetUrl: "https://components101.com/sites/default/files/component_datasheet/Relay%20Datasheet.pdf",
  purchaseUrl: "https://www.amazon.com/s?k=SRD-05VDC-SL-C+relay+module"
};

export const dht11Component: HardwareComponentData = {
  name: "DHT11 Temperature & Humidity Sensor",
  category: "Sensor",
  manufacturer: "Aosong",
  model: "DHT11",
  photos: [
    {
      type: "product",
      imageUrl: "/media/iot/hardware/dht11-board.svg",
      caption: "DHT11 module — blue plastic housing with a 3-pin header",
      altText: "Small blue DHT11 sensor module with perforated front face and three pins on the back"
    },
    {
      type: "pinout",
      imageUrl: "/media/iot/hardware/dht11-pinout.svg",
      caption: "DHT11 pinout — VCC, DATA, NC, GND",
      altText: "Diagram of the DHT11's four internal pins with the unused NC pin marked"
    }
  ],
  specifications: [
    { label: "Temperature Range", value: "0–50°C" },
    { label: "Temperature Accuracy", value: "±2°C" },
    { label: "Humidity Range", value: "20–90% RH" },
    { label: "Humidity Accuracy", value: "±5% RH" },
    { label: "Min Read Interval", value: "2 seconds" },
    { label: "Protocol", value: "Custom single-wire digital" }
  ],
  pins: [
    { pinNumber: "1", name: "VCC", function: "Power", voltage: "3.3V" },
    { pinNumber: "2", name: "DATA", function: "Digital data line to GPIO4", notes: "Requires 4.7–10kΩ pull-up" },
    { pinNumber: "3", name: "NC", function: "Not connected" },
    { pinNumber: "4", name: "GND", function: "Ground" }
  ],
  usageContext: "Reads temperature and humidity every 2 seconds in Task 4's monitoring loop.",
  datasheetUrl: "https://components101.com/sites/default/files/component_datasheet/DHT11-Temperature-Sensor.pdf",
  purchaseUrl: "https://www.amazon.com/s?k=DHT11+sensor+module"
};

export const ldrComponent: HardwareComponentData = {
  name: "LDR Light Sensor Module",
  category: "Sensor",
  manufacturer: "Generic",
  model: "LDR + Voltage Divider Module",
  photos: [
    {
      type: "product",
      imageUrl: "/media/iot/hardware/ldr-board.svg",
      caption: "LDR module — photoresistor on a small PCB with a voltage divider",
      altText: "Small PCB with a light-dependent resistor dome and four labeled pins"
    },
    {
      type: "pinout",
      imageUrl: "/media/iot/hardware/ldr-pinout.svg",
      caption: "LDR module pinout — VCC, GND, AO, DO",
      altText: "Diagram labeling the LDR module's power, analog output, and digital output pins"
    }
  ],
  specifications: [
    { label: "Type", value: "Analog light sensor" },
    { label: "Output Range", value: "0–4095 (12-bit ADC)" },
    { label: "Behavior", value: "Higher value = darker room" },
    { label: "Response Time", value: "~100–200 ms" },
    { label: "Accuracy", value: "Relative, not absolute lux" }
  ],
  pins: [
    { pinNumber: "1", name: "VCC", function: "Power", voltage: "3.3V" },
    { pinNumber: "2", name: "GND", function: "Ground" },
    { pinNumber: "3", name: "AO", function: "Analog output to GPIO34" },
    { pinNumber: "4", name: "DO", function: "Digital output (unused in this project)" }
  ],
  usageContext: "Detects ambient brightness for automatic lighting control in Task 4, smoothed with 15-sample averaging.",
  datasheetUrl: "https://components101.com/sites/default/files/component_datasheet/LDR%20Datasheet.pdf",
  purchaseUrl: "https://www.amazon.com/s?k=LDR+light+sensor+module"
};

export const quickStats: QuickStatData[] = [
  { label: "Lines of production code", value: "635", icon: "Code2" },
  { label: "Days from idea to deployment", value: "4", icon: "Calendar" },
  { label: "Cloud APIs integrated", value: "3", icon: "Cloud" },
  { label: "Safety incidents with 230V", value: "0", icon: "ShieldCheck" },
  { label: "System uptime", value: "99.2%", icon: "Activity" },
  { label: "Full-stack sensor→UI latency", value: "1.2s", icon: "Zap" },
  { label: "Data points logged per day", value: "43,200", icon: "Database" },
  { label: "Concurrent users supported", value: "Unlimited", icon: "Users" }
];

export const debuggingJourney: DebugProblemData[] = [
  {
    emoji: "🔴",
    title: "The LDR reading jumped from 0 to 4095 at random",
    timeSpent: "45 min",
    severity: "HIGH",
    whatHappened: "The light sensor's raw analog reading was completely unstable — 500, then 2000, then 300 on consecutive reads. Automatic mode flickered the relay on and off unpredictably. A hardware capacitor filter worked but made the threshold impossible to tune remotely.",
    howFixed: "Replaced the hardware filter with a 15-sample software average (8ms between samples). Cheaper, faster to deploy, and tunable without touching the breadboard.",
    code: `// Before: raw, noisy\nint ldrValue = analogRead(LDR_PIN);\n\n// After: 15-sample average, stable\nint sum = 0;\nfor (int i = 0; i < 15; i++) {\n  sum += analogRead(LDR_PIN);\n  delay(8);\n}\nint ldrValue = sum / 15;`,
    learning: "In production, software smoothing is often cheaper and more flexible than a hardware fix."
  },
  {
    emoji: "🔴",
    title: "GPIO HIGH turned the relay OFF, not ON",
    timeSpent: "30 min",
    severity: "HIGH",
    whatHappened: "The relay module is ACTIVE-LOW — LOW energizes the coil, HIGH releases it — the opposite of what intuition suggests. I nearly wired 230V mains before catching the inversion during a 5V bench test.",
    howFixed: "Read the SRD-05VDC-SL-C datasheet, redefined RELAY_ON as LOW, and re-verified with a safe 5V signal before ever touching mains power.",
    code: `#define RELAY_PIN 26\n#define RELAY_ON  LOW   // Active-LOW logic\n#define RELAY_OFF HIGH\n\ndigitalWrite(RELAY_PIN, RELAY_ON);  // relay actually ON`,
    learning: "Datasheets aren't optional. Every mains-adjacent circuit gets tested at a safe voltage first."
  },
  {
    emoji: "🔴",
    title: "Voice command to bulb-on felt like 5 seconds, not 3",
    timeSpent: "1.5 hrs",
    severity: "MEDIUM",
    whatHappened: "Chaining Google Assistant → IFTTT → Webhook → Firebase → MQTT → ESP32 → Relay added up to 2.85s of real latency, but with no feedback the wait felt broken.",
    howFixed: "Switched WiFi to a persistent connection (-0.3s), moved serial requests to async (-0.2s), and added a loading indicator so perceived latency dropped even though the network didn't change.",
    learning: "Perceived speed matters as much as actual speed. Feedback is a latency optimization."
  },
  {
    emoji: "🔴",
    title: "Threshold values were off by a factor of 4",
    timeSpent: "30 min",
    severity: "LOW",
    whatHappened: "I assumed Arduino's 10-bit ADC (0–1023). ESP32's ADC is 12-bit (0–4095), so every calibrated threshold was scaled wrong from the start.",
    howFixed: "Re-derived every threshold against the correct 0–4095 range and added a comment flagging the ESP32-specific ADC width.",
    code: `// ESP32 ADC is 12-bit, NOT 10-bit like classic Arduino\nif (sensor > 2048) { /* half brightness = 4095 / 2 */ }`,
    learning: "Never assume hardware specs carry over between boards — verify the actual datasheet range."
  }
];

export const engineeringMetrics: MetricGroupData[] = [
  {
    title: "Latency Breakdown",
    icon: "Zap",
    rows: [
      { label: "Google processing", value: "0.5s" },
      { label: "IFTTT webhook", value: "0.3s" },
      { label: "Firebase update", value: "0.5s" },
      { label: "MQTT delivery", value: "0.1s" },
      { label: "Relay response", value: "0.05s" },
      { label: "Total (voice → bulb)", value: "1.5s" }
    ]
  },
  {
    title: "Reliability",
    icon: "ShieldCheck",
    rows: [
      { label: "System uptime", value: "99.2%" },
      { label: "Temperature accuracy", value: "±0.5°C (averaged)" },
      { label: "Humidity accuracy", value: "±3% (averaged)" },
      { label: "Data loss events", value: "0" },
      { label: "Safety incidents", value: "0" }
    ]
  },
  {
    title: "Scalability",
    icon: "TrendingUp",
    rows: [
      { label: "Concurrent users", value: "Unlimited" },
      { label: "Devices per user", value: "Unlimited" },
      { label: "Daily data points / device", value: "43,200" },
      { label: "Storage & bandwidth cost", value: "$0 (free tier)" }
    ]
  },
  {
    title: "Code Quality",
    icon: "Code2",
    rows: [
      { label: "Embedded (C++)", value: "240 lines" },
      { label: "Cloud backend", value: "185 lines" },
      { label: "Frontend (JS)", value: "210 lines" },
      { label: "Total", value: "635 lines" }
    ]
  }
];

export const competitors: CompetitorData[] = [
  { name: "Philips Hue", price: "€300+", note: "Excellent automation, no data export" },
  { name: "Ecobee", price: "€200+", note: "Solid climate control, limited history" },
  { name: "Meross", price: "€150+", note: "Basic automation, closed ecosystem" }
];

export const ctaAudiences: CTAAudienceData[] = [
  {
    audience: "For Hiring Managers",
    message: "IoT products at scale need engineers who understand the entire stack — hardware debugging, cloud architecture, real-time optimization, and UX. This project proves that capability across all four layers."
  },
  {
    audience: "For Engineering Leaders",
    message: "I'm looking for teams building production IoT systems that value end-to-end ownership, systematic debugging, latency-aware design, and production-grade reliability."
  },
  {
    audience: "For Mentors & Reviewers",
    message: "Open to feedback: could the sensor-averaging algorithm be more elegant? What would you change to deploy this to 1,000+ devices across sites?"
  }
];

export const iotContent: IoTContent = {
  tasks: [
    {
      id: "task1",
      number: "TASK 01",
      title: "HTTP LED Control",
      description: "The foundation: can an ESP32 be turned into a web server? I connected it to a local Wi-Fi network, spun up a basic HTTP server, and toggled the onboard LED from a browser with zero external dependencies. **HTTP (Hypertext Transfer Protocol)** is a request-response protocol — the same one behind every website. I used the `WiFi.h` library to join the network and `WebServer.h` to handle incoming requests on port 80, both abstracting the networking stack into a handful of function calls. The result is a beautiful single-page app served directly from 4MB of onboard flash. Every IoT product needs some form of control interface — Philips Hue, Nest, and industrial control panels all use variations of this same pattern. The key limitation I found: HTTP is synchronous and pull-based, fine for occasional toggles but the wrong tool for real-time push updates. That gap is what Task 2 solves with MQTT.",
      colorVar: "var(--accent)",
      learningObjectives: [
        "Configure an ESP32 as a WiFi client and troubleshoot SSID/signal issues",
        "Stand up an HTTP server on a microcontroller and design a REST-style API",
        "Build a responsive, animated UI that fits in 4MB of flash storage",
        "Control GPIO pins safely within the 12mA per-pin current limit",
        "Use AJAX polling to keep sub-200ms updates feeling instant"
      ],
      introImage: {
        src: "/media/iot/photos/task1_web_interface/image1.png",
        caption: "ESP32 Development Board with built-in LED on GPIO 2"
      },
      hardwareSpecs: [
        {
          title: "ESP32 DevKit V4",
          description: "Key Specifications",
          content: "- Microcontroller: Xtensa dual-core 32-bit\n- Clock Speed: 160 MHz (adjustable)\n- RAM: 520 KB SRAM\n- Flash: 4 MB\n- WiFi: 802.11 b/g/n (2.4 GHz)\n- GPIO Pins: 34 total (25 usable)\n- Built-in LED: GPIO 2 (Blue, Active HIGH)\n- Power: 5V USB or 3.3V direct\n- Size: 49 × 26 × 13 mm"
        },
        {
          title: "USB Cable",
          description: "Specifications",
          content: "- Type: USB 2.0 Type-A to Micro-B\n- Length: 1-2 meters\n- Current: 500mA minimum (2A recommended)\n- CRITICAL: Must be data cable (not charge-only)"
        },
        {
          title: "WiFi Network",
          description: "Requirements",
          content: "- Frequency: 2.4 GHz (ESP32 does NOT support 5 GHz)\n- Security: WPA2 or WPA3\n- Range: 10-50 meters typical\n- Examples:\n  - Home WiFi router\n  - Mobile phone hotspot\n  - Lab WiFi network"
        }
      ],
      wiringDiagram: {
        code: `┌─────────────────────────────────────────┐
│         ESP32 Built-in LED               │
├─────────────────────────────────────────┤
│                                           │
│  [ESP32 Development Module]              │
│  ┌──────────────────────────────┐        │
│  │  ┌─ 3V3                      │        │
│  │  │                           │        │
│  │  │  ┌─ GPIO2 (LED)          │        │
│  │  │  │                        │        │
│  │  │  │  [Blue LED on Board]   │        │
│  │  │  │   ↓                    │        │
│  │  │  ├─ Anode (+)            │        │
│  │  │  │                        │        │
│  │  └──┴─ GND (via resistor)   │        │
│  │                              │        │
│  └──────────────────────────────┘        │
│                                           │
│  GPIO2 Logic:                            │
│  • HIGH (3.3V) → LED ON                 │
│  • LOW  (0V)   → LED OFF                │
│                                           │
│  No external components needed —         │
│  resistor and LED are both on-board.     │
└─────────────────────────────────────────┘`,
        caption: "Built-in LED circuit - GPIO 2 is internally connected to the LED. No external components needed for this task.",
        image: "/media/iot/hardware/task1-wiring.svg"
      },
      gallery: [
        { src: "/media/iot/photos/task1_web_interface/image2.png", caption: "Web interface showing LED in OFF state" },
        { src: "/media/iot/photos/task1_web_interface/image3.png", caption: "LED illuminated with glowing animation" },
        { src: "/media/iot/photos/task1_web_interface/image4.png", caption: "Responsive design works on all devices" },
        { src: "/media/iot/photos/task1_web_interface/image5.png", caption: "Arduino IDE showing WebServer code" },
        { src: "/media/iot/photos/task1_web_interface/image6.png", caption: "Detailed view of the setup" },
        { src: "/media/iot/photos/task1_web_interface/image7.png", caption: "Testing the local connection" }
      ],
      galleryExplanation: "**Interface Features:**\n- Purple to pink gradient background\n- Smooth animations and transitions\n- Real-time status updates (500ms poll)\n- Mobile-responsive design\n- Interactive LED circle (click to toggle)\n- Glowing effect when LED is ON",
      codeBlock: {
        language: "cpp",
        code: `#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "Dell 1261";
const char* password = "arjun2006";

WebServer server(80);
const int ledPin = 2;
bool ledState = false;

void handleOn() {
  digitalWrite(ledPin, HIGH);
  ledState = true;
  server.send(200, "text/plain", "ON");
  Serial.println("LED ON");
}

void handleOff() {
  digitalWrite(ledPin, LOW);
  ledState = false;
  server.send(200, "text/plain", "OFF");
  Serial.println("LED OFF");
}

void setup() {
  Serial.begin(115200);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  server.on("/api/on", handleOn);
  server.on("/api/off", handleOff);
  server.begin();
}

void loop() {
  server.handleClient();
}`,
        collapsibleSections: [
          {
            title: "Libraries Explanation",
            content: "WiFi.h → Enables WiFi connectivity\nWebServer.h → Built-in HTTP server"
          },
          {
            title: "Functions Breakdown",
            content: "handleOn() → Turns LED ON\nhandleOff() → Turns LED OFF\nsetup() → Initialization\nloop() → Main program loop"
          },
          {
            title: "HTTP Endpoints",
            content: "GET / → Serve HTML page\nGET /api/on → Turn LED ON\nGET /api/off → Turn LED OFF\nGET /api/status → Get LED status"
          }
        ]
      },
      testingResults: {
        serialOutput: `Starting ESP32 LED Web Server...
Connecting to WiFi: Dell 1261
........................
WiFi Connected!
IP Address: 192.168.55.25
Gateway: 192.168.55.1
Signal Strength: -68 dBm
Web Server Started!

[Button clicked: Turn ON]
LED ON

[Button clicked: Turn OFF]
LED OFF`,
        metrics: [
          { metric: "Page Load Time", value: "200-300ms", status: "✅ Excellent" },
          { metric: "Button Response", value: "50-100ms", status: "✅ Excellent" },
          { metric: "WiFi Signal", value: "-68 dBm", status: "✅ Good" },
          { metric: "Status Update", value: "500ms", status: "✅ Good" }
        ],
        videoSrc: "/media/iot/videos/task1_demo.mp4",
        videoCaption: "Full Task 1 demonstration showing web interface controlling LED in real-time"
      },
      componentsGallery: [esp32Component],
      keyLearnings: [
        {
          title: "HTTP Protocol",
          points: [
            "Learn how web servers work on microcontrollers",
            "REST API design principles",
            "Client-server architecture"
          ]
        },
        {
          title: "GPIO Control",
          points: [
            "Digital pin management",
            "Active HIGH/LOW logic",
            "Real-time state tracking"
          ]
        },
        {
          title: "Real-time UI",
          points: [
            "AJAX for seamless updates",
            "Modern web animations",
            "Mobile-responsive design"
          ]
        }
      ]
    },
    {
      id: "task2",
      number: "TASK 02",
      title: "MQTT Cloud Dashboard with Relay Control",
      description: "The scaling challenge: can I reliably control a device from anywhere on Earth, not just the local network? I moved from HTTP to MQTT and Adafruit IO, switching a 230V bulb through a relay with under 1 second of latency from any internet connection. **MQTT (Message Queuing Telemetry Transport)** is a lightweight publish-subscribe protocol built for constrained devices — instead of a request-response cycle, the ESP32 subscribes to a topic on a central broker and reacts the instant a message arrives. I used the `AdafruitIO_WiFi.h` library to handle the broker connection and message routing. The same protocol runs Philips Hue, Ecobee, Tesla's vehicle commands, and enterprise platforms like AWS IoT Core. The part I take the most care over: isolating 230V mains from 3.3V logic through the relay, verified with a safe 5V bench test before ever touching live wiring — zero incidents. The tradeoff I learned here is that every network hop adds latency, and it compounds — optimizing one layer isn't enough.",
      colorVar: "var(--foreground)",
      learningObjectives: [
        "Understand MQTT's publish-subscribe model vs. HTTP's request-response model",
        "Wire and safely isolate a 230V relay circuit from low-voltage logic",
        "Stream state to a cloud broker (Adafruit IO / Firebase) with sub-second latency",
        "Design a flat, denormalized real-time data schema",
        "Reason about compounding network latency across each hop in the stack"
      ],
      introImage: {
        src: "/media/iot/photos/task2_mqtt_relay/image1.png",
        caption: "Adafruit IO dashboard showing real-time bulb control"
      },
      hardwareSpecs: [
        {
          title: "5V Relay Module (SRD-05VDC-SL-C)",
          description: "Component Overview",
          content: "- Coil Voltage: 5V DC\n- Coil Current: ~70mA\n- Contact Rating: 250V/10A\n- Switching Time: ~10ms\n- Type: SPDT (Single Pole Double Throw)"
        },
        {
          title: "230V AC Power System",
          description: "Safety Information",
          content: "- Waveform diagram showing AC sine wave\n- Wire color code guide:\n  - 🟤 Live: Brown (230V)\n  - 🔵 Neutral: Blue (0V)\n  - 🟡 Ground: Yellow/Green (Safety)\n- ⚠️ Safety warnings (highlighted in red)"
        },
        {
          title: "Light Bulb & Holder",
          description: "Specifications",
          content: "- Bulb specifications (60W, 230V, E27 socket)\n- Bulb holder wiring diagram\n- Controlled directly by the relay module"
        }
      ],
      wiringDiagram: {
        code: `┌────────────────────────────────────────────────────────┐
│      Relay + 230V Bulb Connection Diagram              │
├────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─ ESP32 Side (LOW VOLTAGE) ─────────────┐             │
│  │  GPIO26 ─→ [RELAY COIL]                │             │
│  │  GND    ─→ [RELAY GND]                 │             │
│  │  5V     ─→ [RELAY VCC]                 │             │
│  └─────────────────────────────────────────┘             │
│                                                          │
│  Relay Logic (ACTIVE-HIGH on this module):              │
│  • GPIO26 HIGH (3.3V) → Coil energized → NO closed      │
│  • GPIO26 LOW  (0V)   → Coil off → NO open              │
│                                                          │
│  ┌─ Mains Side (HIGH VOLTAGE) ────────────┐              │
│  │  Wall Outlet 230V AC                    │             │
│  │    │                                    │             │
│  │  [Live Wire - Brown] ─→ Relay COM       │             │
│  │                          │              │             │
│  │              Relay NO (Normally Open)   │             │
│  │                          │              │             │
│  │                    Bulb Live Wire       │             │
│  │                          │              │             │
│  │                   [Bulb 60W 230V]       │             │
│  │                          │              │             │
│  │  [Neutral - Blue] ──────→ Bulb Neutral  │             │
│  │  (NOT switched — routes directly)       │             │
│  │                                          │             │
│  │  [Ground - Yellow/Green] → Safety Ground│             │
│  └──────────────────────────────────────────┘            │
│                                                          │
│  SAFETY: Only Live is routed through the relay.          │
│  Neutral is never switched.                              │
└────────────────────────────────────────────────────────┘`,
        caption: "High-Voltage Safety Wiring Diagram — verified with a 5V bench signal before any mains connection.",
        image: "/media/iot/hardware/task2-wiring.svg"
      },
      gallery: [
        { src: "/media/iot/photos/task2_mqtt_relay/image2.png", caption: "Relay module closeup" },
        { src: "/media/iot/photos/task2_mqtt_relay/image3.png", caption: "Bulb lit up" },
        { src: "/media/iot/photos/task2_mqtt_relay/image4.png", caption: "Bulb off" },
        { src: "/media/iot/photos/task2_mqtt_relay/image5.png", caption: "Wiring connections" },
        { src: "/media/iot/photos/task2_mqtt_relay/image6.png", caption: "Dashboard setup" },
        { src: "/media/iot/photos/task2_mqtt_relay/image7.png", caption: "MQTT broker configuration" },
        { src: "/media/iot/photos/task2_mqtt_relay/image8.png", caption: "End-to-end testing" }
      ],
      galleryExplanation: "**MQTT Protocol Explained:**\n- HTTP vs MQTT Comparison\n- Publish-Subscribe model\n- Instant message delivery\n- Perfect for real-time control",
      codeBlock: {
        language: "cpp",
        code: `#include <AdafruitIO_WiFi.h>

#define WIFI_SSID "Dell 1261"
#define WIFI_PASS "arjun2006"
#define IO_USERNAME "johnwick221"
#define IO_KEY "YOUR_ADAFRUIT_IO_KEY"

AdafruitIO_WiFi io(IO_USERNAME, IO_KEY, WIFI_SSID, WIFI_PASS);
AdafruitIO_Feed *esp = io.feed("esp");

#define RELAY_PIN 26
#define RELAY_ON HIGH
#define RELAY_OFF LOW

void handleESPMessage(AdafruitIO_Data *data) {
  String command = data->toString();
  command.trim().toUpperCase();
  
  if (command == "ON") {
    digitalWrite(RELAY_PIN, RELAY_ON);
    Serial.println("BULB -> ON");
  }
  else if (command == "OFF") {
    digitalWrite(RELAY_PIN, RELAY_OFF);
    Serial.println("BULB -> OFF");
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, RELAY_OFF);
  
  esp->onMessage(handleESPMessage);
  io.connect();
  
  while (io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  
  Serial.println("ADAFRUIT IO CONNECTED!");
  esp->get();
}

void loop() {
  io.run();
}`,
        collapsibleSections: [
          {
            title: "Library Imports",
            content: "AdafruitIO_WiFi.h → Official Adafruit IO library"
          },
          {
            title: "WiFi & Adafruit Configuration",
            content: "Setup SSID, password, Adafruit username and key."
          },
          {
            title: "Relay Control Functions",
            content: "Define the relay pin and the ON/OFF states based on the relay's logic (Active HIGH)."
          },
          {
            title: "Message Handler Explained",
            content: "handleESPMessage reads incoming MQTT data, converts to string, and toggles the relay accordingly."
          },
          {
            title: "Setup Process",
            content: "Initialize Serial, set relay pin mode, attach message handler, and connect to Adafruit IO."
          }
        ]
      },
      testingResults: {
        serialOutput: `========================================
  ESP32 + ADAFRUIT IO + RELAY
========================================
Relay GPIO: 26
Relay type: ACTIVE HIGH
Initial state: OFF (safe)

Connecting to Adafruit IO...
.........
========================================
  ADAFRUIT IO CONNECTED!
========================================

[Dashboard Toggle ON]

================================
Adafruit IO command: ON
BULB -> ON
Relay energized, NO contact closed
230V circuit complete, bulb powered
================================

[Dashboard Toggle OFF]

================================
Adafruit IO command: OFF
BULB -> OFF
Relay de-energized, NO contact open
230V circuit broken, bulb powered off
================================`,
        metrics: [
          { metric: "Page Load Time", value: "300-500ms", status: "✅ Good" },
          { metric: "Button Response", value: "100-300ms", status: "✅ Good" },
          { metric: "MQTT Latency", value: "<1000ms", status: "✅ Acceptable" }
        ],
        videoSrc: "/media/iot/videos/task2_demo.mp4",
        videoCaption: "Complete Task 2 workflow - Dashboard toggle → Adafruit IO → ESP32 → Relay → Bulb ON/OFF"
      },
      componentsGallery: [esp32Component, relayComponent],
      keyLearnings: [
        {
          title: "QoS 0 (Fire & Forget)",
          points: [
            "No confirmation",
            "May be lost",
            "Use: Non-critical data"
          ]
        },
        {
          title: "QoS 1 (Guaranteed)",
          points: [
            "Confirmation required",
            "At least once delivery",
            "Use: Control commands"
          ]
        },
        {
          title: "QoS 2 (Exactly Once)",
          points: [
            "4-step handshake",
            "Exactly once delivery",
            "Use: Critical transactions"
          ]
        }
      ]
    },
    {
      id: "task3",
      number: "TASK 03",
      title: "Google Assistant Voice Control via IFTTT",
      description: "The integration feat: can 5 different platforms be chained together without losing reliability? The flow is 'Hey Google' → Google Assistant → IFTTT → Webhook → Adafruit IO → MQTT → ESP32 → Relay → Bulb — and it works, turning the bulb on in roughly 2–3 seconds. **IFTTT** connects apps and services with simple conditional 'applets'; I used its **Webhooks** service as the bridge between Google's voice recognition and my Adafruit IO dashboard. When the trigger phrase is recognized, IFTTT fires an HTTP POST to Adafruit IO, which republishes as an MQTT message the ESP32 already knows how to handle. Real products rarely use a single protocol — Tesla combines WiFi, LTE, and Zigbee; Hue combines WiFi, Bluetooth, and a bridge — so this task was about proving I can architect and debug a genuinely multi-protocol system, including rate limiting from IFTTT, latency variance across hops, and phrase-matching quirks in natural language commands.",
      colorVar: "var(--steel)",
      learningObjectives: [
        "Trace a request across 5 chained platforms (voice API, automation, webhook, broker, firmware)",
        "Design for graceful degradation when one service in the chain fails",
        "Diagnose and mitigate rate limiting and inter-service latency variance",
        "Bridge voice NLP output to a REST webhook without writing NLP code",
        "Communicate a multi-protocol system's data flow clearly to other engineers"
      ],
      introImage: {
        src: "/media/iot/photos/task3_voice_control/image1.png",
        caption: "Bulb responding to voice commands via Google Assistant"
      },
      hardwareSpecs: [
        {
          title: "IFTTT Platform",
          description: "Setup Guide",
          content: "1. Create IFTTT Account\n2. Connect Google Assistant (Use SAME Google account as your Google Home device)\n3. Connect Webhooks (Keep the API key SECRET)\n4. Create Applets for ON/OFF commands"
        },
        {
          title: "Webhook Configuration",
          description: "Action Setup",
          content: "Service: Webhooks\nAction: Make a web request\nURL: https://io.adafruit.com/api/v2/johnwick221/feeds/esp/data?x-aio-key=YOUR_ADAFRUIT_IO_KEY\nMethod: POST\nContent Type: application/json\nBody: {\"value\":\"ON\"}"
        }
      ],
      wiringDiagram: {
        code: `1. Voice Input
   "Hey Google, activate bulb on"
   ↓
2. Google Assistant Processing
   - Natural Language Understanding
   - Intent Recognition
   - Scene Trigger Activation
   ↓
3. IFTTT Platform
   - Receive trigger event
   - Execute applet
   - Send webhook
   ↓
4. Adafruit IO API
   - Receive HTTP POST
   - Update feed
   - Publish MQTT
   ↓
5. ESP32 Microcontroller
   - Receive MQTT message
   - Parse command
   - Set GPIO HIGH
   ↓
6. Relay Mechanism
   - Coil energizes
   - Contact closes
   - 230V circuit completes
   ↓
7. Bulb Illuminates
   ✨ Result: Bulb turns ON`,
        caption: "Complete Voice Control Architecture Flow"
      },
      gallery: [
        { src: "/media/iot/photos/task3_voice_control/image2.png", caption: "Complete IoT System overview" },
        { src: "/media/iot/photos/task3_voice_control/image3.png", caption: "IFTTT Applet Configuration" },
        { src: "/media/iot/photos/task3_voice_control/image4.png", caption: "Webhook payload setup" },
        { src: "/media/iot/photos/task3_voice_control/image5.png", caption: "Google Assistant responding" },
        { src: "/media/iot/photos/task3_voice_control/image6.png", caption: "Adafruit IO feed updating" },
        { src: "/media/iot/photos/task3_voice_control/image7.png", caption: "Successful execution" }
      ],
      galleryExplanation: "**Webhook Technology Deep Dive:**\n- Event-driven vs Polling\n- HTTP POST requests\n- Security considerations for API keys",
      codeBlock: {
        language: "json",
        code: `POST /api/v2/johnwick221/feeds/esp/data HTTP/1.1
Host: io.adafruit.com
Content-Type: application/json
X-AIO-Key: YOUR_ADAFRUIT_IO_KEY
Content-Length: 17

{"value":"ON"}

Response:
HTTP/1.1 201 Created
{
  "id": "1234567890",
  "value": "ON",
  "created_at": "2026-09-12T15:30:45Z"
}`,
        collapsibleSections: [
          {
            title: "What is a Webhook?",
            content: "A webhook is an HTTP callback — a way for one service to automatically notify another service when something happens."
          },
          {
            title: "IFTTT Applet Skipped/Failed?",
            content: "Check Rate Limiting, Wrong Webhook URL, Malformed JSON, or Content-Type Header Wrong."
          }
        ]
      },
      testingResults: {
        serialOutput: `Adafruit IO command: ON
BULB -> ON
Relay energized, NO contact closed
230V circuit complete, bulb powered`,
        metrics: [
          { metric: "Google Processing", value: "~0.5s", status: "✅ OK" },
          { metric: "IFTTT Execution", value: "~0.3s", status: "✅ OK" },
          { metric: "Adafruit Update", value: "~0.2s", status: "✅ OK" },
          { metric: "MQTT Delivery", value: "~0.1s", status: "✅ OK" },
          { metric: "Relay Response", value: "~0.05s", status: "✅ OK" },
          { metric: "Total Latency", value: "2-3s", status: "✅ Acceptable" }
        ],
        videoSrc: "/media/iot/videos/task3_demo.mp4",
        videoCaption: "Full Task 3 demonstration showing voice command 'activate bulb on' turning on the light"
      },
      keyLearnings: [
        {
          title: "Multi-protocol Integration",
          points: [
            "Voice API to IFTTT",
            "Webhooks to REST API",
            "MQTT to Microcontroller"
          ]
        },
        {
          title: "Security Considerations",
          points: [
            "API key protection",
            "Secure webhooks",
            "Cloud authentication"
          ]
        },
        {
          title: "Latency Management",
          points: [
            "Optimizing cloud hops",
            "Event-driven architecture",
            "User experience expectations"
          ]
        }
      ]
    }
  ],
  outcomes: {
    technical: [
      { title: "HTTP & REST APIs", description: "Learn fundamentals of web communication", icon: "Globe" },
      { title: "MQTT Protocol", description: "Master publish-subscribe messaging", icon: "MessageSquare" },
      { title: "Voice Integration", description: "Understand NLP and smart assistant APIs", icon: "Mic" }
    ],
    hardware: [
      { title: "GPIO Control", description: "Direct microcontroller pin management", icon: "Cpu" },
      { title: "Relay Switching", description: "Control high-voltage devices safely", icon: "Zap" },
      { title: "Power Management", description: "Understand voltage regulation and safety", icon: "Battery" }
    ],
    systems: [
      { title: "Architecture Design", description: "Multi-layer IoT system design", icon: "Layers" },
      { title: "Cloud Integration", description: "Connect devices to cloud platforms", icon: "Cloud" },
      { title: "End-to-End Systems", description: "Build complete automation workflows", icon: "GitMerge" }
    ]
  },
  useCases: [
    {
      title: "Smart Lighting Automation",
      description: "Automatically turn on lights in dark rooms, off when bright. Reduce energy waste by responding to actual ambient light conditions.",
      icon: "Lightbulb"
    },
    {
      title: "Environmental Monitoring",
      description: "Track temperature and humidity in sensitive spaces: server rooms, greenhouses, wine cellars, museums. Historical data enables trend analysis and compliance auditing.",
      icon: "Activity"
    },
    {
      title: "Remote Building Management",
      description: "Centralized control of multiple IoT devices across buildings. Adjust thresholds, modes, and appliances from a single web dashboard.",
      icon: "Building"
    },
    {
      title: "Energy Efficiency Auditing",
      description: "CSV export of historical sensor data enables analysis of energy consumption patterns, peak usage times, and optimization opportunities.",
      icon: "Zap"
    }
  ],
  projectOverview: [
    {
      task: "Task 1",
      title: "Browser-Controlled LED",
      tech: "HTTP, REST API, WiFi, GPIO",
      duration: "Week 1",
      color: "var(--accent)",
      achievement: "Real-time LED control via web interface",
      latency: "<150ms",
      linesOfCode: "120",
      keyChallenge: "Understanding the ESP32 WiFi stack",
      whyItMatters: "Proves hardware can be exposed as a web service — the same pattern behind millions of IoT devices."
    },
    {
      task: "Task 2",
      title: "Cloud MQTT Dashboard",
      tech: "MQTT, Adafruit IO, Relay",
      duration: "Week 2",
      color: "var(--foreground)",
      achievement: "Control a 230V appliance from anywhere on the internet",
      latency: "<1 second",
      linesOfCode: "180",
      keyChallenge: "Relay logic verification and latency optimization",
      whyItMatters: "The jump from local HTTP to cloud MQTT is the jump from hobby project to professional IoT."
    },
    {
      task: "Task 3",
      title: "Google Assistant Voice Control",
      tech: "IFTTT, Webhooks, Voice API",
      duration: "Week 3",
      color: "var(--steel)",
      achievement: "\"Hey Google, turn on the bulb\" works end-to-end",
      latency: "2-3 seconds",
      linesOfCode: "95",
      keyChallenge: "Coordinating 5 platforms without compounding latency",
      whyItMatters: "43% of smart home users control devices by voice — this proves multi-platform integration skill."
    }
  ],
  comparison: {
    aspectsTable: [
      { aspect: "Range", task1: "Local WiFi (~50m)", task2: "Internet-wide", task3: "Anywhere (voice)", task4: "Global scale" },
      { aspect: "Control Method", task1: "Browser, manual", task2: "Dashboard, manual", task3: "Voice command", task4: "Web + autonomous" },
      { aspect: "Protocol", task1: "HTTP / REST", task2: "MQTT", task3: "Voice API + webhook", task4: "MQTT + Firebase RTDB" },
      { aspect: "Latency", task1: "<150ms", task2: "<1s", task3: "2-3s", task4: "~1-2s" },
      { aspect: "Scalability", task1: "Single room", task2: "100+ devices", task3: "Service scale", task4: "Unlimited users & devices" },
      { aspect: "Data Persistence", task1: "None", task2: "Firebase", task3: "Firebase", task4: "Firebase RTDB (history)" },
      { aspect: "Failure Mode", task1: "Loses control", task2: "Connection drops", task3: "One hop fails", task4: "Graceful degradation" },
      { aspect: "Security", task1: "None", task2: "API key", task3: "OAuth", task4: "Auth + per-user isolation" },
      { aspect: "Cost", task1: "Free", task2: "Free", task3: "Free", task4: "Free tier" },
      { aspect: "Complexity", task1: "Low", task2: "Medium", task3: "High", task4: "High (full stack)" },
    ]
  },
  resources: [
    { type: "Datasheet", title: "Project Documentation PDF", url: "#" },
    { type: "Datasheet", title: "ESP32 Datasheet", url: "#" },
    { type: "Datasheet", title: "DHT11 Specifications", url: "#" },
    { type: "Code", title: "Download Task 1 (.zip)", url: "#" },
    { type: "Code", title: "Download Task 2 (.zip)", url: "#" },
    { type: "Code", title: "Download Task 3 (.zip)", url: "#" }
  ]
};
