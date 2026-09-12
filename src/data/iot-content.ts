import { IoTContent } from '../types/iot';

export const iotContent: IoTContent = {
  tasks: [
    {
      id: "task1",
      number: "TASK 01",
      title: "HTTP LED Control",
      description: "We wrote code to connect the ESP32 to a local Wi-Fi network and spun up a basic web server. By sending HTTP GET requests from a web browser, we were able to remotely toggle the ESP32's onboard LED on and off.",
      colorVar: "var(--accent)",
      learningObjectives: [
        "Understand HTTP protocol and REST API design",
        "Create responsive web interfaces for IoT devices",
        "Implement real-time AJAX updates",
        "Master GPIO control on microcontrollers",
        "Design beautiful UI/UX for embedded systems"
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
        code: `┌──────────────────────────────────┐
│         ESP32-DevKitC            │
│                                  │
│      GPIO 2 (LED)                │
│           ↓                      │
│      [Blue LED]                  │
│   (Built-in on board)            │
│           ↓                      │
│          GND                     │
│                                  │
│  (No external wiring needed)     │
│  (Complete LED circuit on board) │
└──────────────────────────────────┘`,
        caption: "Built-in LED circuit - GPIO 2 is internally connected to the LED. No external components needed for this task."
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
      description: "Moving from simple HTTP to a publish-subscribe model, we implemented an MQTT client on the ESP32. It subscribed to a specific topic, and upon receiving a trigger message, activated a relay module connected to a 230W incandescent bulb.",
      colorVar: "var(--foreground)",
      learningObjectives: [
        "Remote access (anywhere on internet)",
        "MQTT publish-subscribe architecture",
        "High-voltage relay switching",
        "Cloud data logging",
        "Real-time dashboard updates",
        "Scalable to hundreds of devices"
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
        code: `Wall Outlet (230V)
    ↓
Relay COM terminal
    ↓
Relay NO terminal (when activated)
    ↓
Bulb Live wire
    ↓
Bulb Filament
    ↓
Bulb Neutral wire
    ↓
Wall Neutral (direct, no relay)`,
        caption: "High-Voltage Safety Wiring Diagram"
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
      description: "To add a layer of user interaction, we integrated IFTTT (If This Then That). We linked Google Assistant to Webhooks, allowing us to send an MQTT message by speaking a trigger phrase, which seamlessly turned the 230W bulb on and off.",
      colorVar: "var(--steel)",
      learningObjectives: [
        "IFTTT automation workflows and applet creation",
        "Google Assistant integration patterns",
        "Webhook technology and HTTP callbacks",
        "Multi-protocol IoT system design",
        "Natural language processing for smart home control",
        "End-to-end voice-controlled automation"
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
      title: "LED Web Control Interface",
      tech: "HTTP, HTML/CSS/JS, WiFi",
      duration: "Week 1",
      color: "var(--accent)"
    },
    {
      task: "Task 2",
      title: "MQTT Cloud Dashboard",
      tech: "MQTT, Adafruit IO, Relay",
      duration: "Week 2",
      color: "var(--foreground)"
    },
    {
      task: "Task 3",
      title: "Google Assistant Voice",
      tech: "IFTTT, Webhooks, Voice API",
      duration: "Week 3",
      color: "var(--steel)"
    }
  ],
  comparison: {
    aspectsTable: [
      { aspect: "Range", task1: "Local WiFi", task2: "Internet", task3: "Anywhere" },
      { aspect: "Control", task1: "Browser", task2: "Dashboard", task3: "Voice" },
      { aspect: "Protocol", task1: "HTTP", task2: "MQTT", task3: "Voice API" },
      { aspect: "Latency", task1: "<150ms", task2: "<1s", task3: "2-3s" },
      { aspect: "Scalability", task1: "Limited", task2: "100+ devs", task3: "Unlimited" },
      { aspect: "Cost", task1: "Free", task2: "Free", task3: "Free" },
      { aspect: "Complexity", task1: "Low", task2: "Medium", task3: "High" },
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
