import { Project, SkillItem, SensorNode, ExperienceItem, AchievementItem, HackathonItem, EducationItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Divyansh Bhargava",
  displayName: "Divyansh Bhargava",
  title: "IoT Enthusiast | Aspiring Software Engineer",
  tagline: "Exploring the intersection of IoT, software development, and intelligent technology to build meaningful solutions.",
  college: "Madhav Institute of Technology and Science, Gwalior",
  collegeShort: "MITS Gwalior",
  degree: "B.Tech in Internet of Things (IoT)",
  currentYear: "Second Year",
  expectedGraduation: "2029",
  city: "Gwalior, Madhya Pradesh, India",
  timezone: "Asia/Kolkata",
  email: "divyanshbhargava350@gmail.com",
  linkedin: "https://www.linkedin.com/in/divyansh-bhargava-7b43403a5",
  github: "https://github.com/divyanshbhargava350",
  availabilityStatus: "OPEN TO LEARNING & COLLABORATION",
  
  aboutBio: [
    "I am a second-year B.Tech student specializing in IoT at Madhav Institute of Technology and Science, Gwalior.",
    "I am interested in technology because it allows me to turn creative ideas into practical solutions. I enjoy exploring new technologies, solving real-world problems, and learning how things work.",
    "Technology gives me opportunities to innovate, build useful projects, and continuously improve my skills. I am especially interested in discovering how AI and software development can make people's lives easier.",
    "Alongside technology, I have an interest in civil services and enjoy participating in collaborative and creative activities."
  ],

  careerInterests: [
    { title: "Civil Services", desc: "Governance, public policy, and leveraging technological frameworks for citizen impact." },
    { title: "Software Engineering", desc: "Clean architecture, backend logic, and scalable web applications." },
    { title: "Internet of Things", desc: "Embedded firmware, microcontroller pipelines, and connected sensor systems." },
    { title: "Artificial Intelligence", desc: "Edge inference, data intelligence, and smart decision automation." },
    { title: "Technology & Innovation", desc: "Turning novel hardware-software prototypes into real-world tools." }
  ],

  corePillars: [
    {
      number: "01",
      title: "LEARN",
      description: "Continuously exploring new technologies, hardware architectures, and software paradigms."
    },
    {
      number: "02",
      title: "BUILD",
      description: "Turning ideas into practical projects, writing clean firmware, and testing circuit prototypes."
    },
    {
      number: "03",
      title: "COLLABORATE",
      description: "Learning through teamwork, college clubs, hackathons, and open technical exchange."
    },
    {
      number: "04",
      title: "INNOVATE",
      description: "Exploring creative, resourceful approaches to solve everyday challenges with smart hardware."
    }
  ],

  personality: [
    "Friendly and approachable",
    "Good sense of humor",
    "Curious learner",
    "Interested in exploring new ideas"
  ],

  hobbies: [
    { name: "Walking outdoors", icon: "Footprints" },
    { name: "Cycling", icon: "Bike" },
    { name: "Exploring technology", icon: "Cpu" }
  ]
};

export const SENSOR_NODES: SensorNode[] = [
  {
    id: "temp-humidity",
    name: "Temperature & Humidity Sensor",
    model: "DHT22 / BME280 Module",
    category: "Environmental",
    icon: "Thermometer",
    interfaceType: "Digital 1-Wire",
    voltage: "3.3V – 5V DC",
    readingUnit: "°C / % RH",
    nominalRange: "-40°C to 80°C | 0–100% RH",
    simulatedValue: 24.8,
    purpose: "Continuously monitors thermal gradients and relative air humidity to prevent heat anomalies and evaluate microclimate stability.",
    pinout: [
      { pin: "Pin 1 (VCC)", function: "3.3V Power Supply" },
      { pin: "Pin 2 (DATA)", function: "GPIO Input with 10kΩ Pull-up" },
      { pin: "Pin 4 (GND)", function: "Common System Ground" }
    ],
    application: "Deployed in indoor plant systems, ambient room monitoring, and automated irrigation threshold computations."
  },
  {
    id: "soil-moisture",
    name: "Capacitive Soil Moisture Sensor",
    model: "Capacitive v1.2 Corrosion-Resistant",
    category: "Agricultural",
    icon: "Droplets",
    interfaceType: "Analog ADC",
    voltage: "3.3V DC (ESP32 ADC Friendly)",
    readingUnit: "% Saturation",
    nominalRange: "0% (Air Dry) to 100% (Submerged)",
    simulatedValue: 42.0,
    purpose: "Measures soil capacitance variation as water content shifts, preventing soil probe electrolysis and galvanic oxidation.",
    pinout: [
      { pin: "VCC", function: "Regulated 3.3V Rail" },
      { pin: "AOUT", function: "ESP32 ADC1 (GPIO 34 / 35)" },
      { pin: "GND", function: "Shared Ground" }
    ],
    application: "Core sensing element in smart automated irrigation rigs to prevent both water waste and root suffocation."
  },
  {
    id: "smoke-gas",
    name: "Fire & Gas Detection Sensor",
    model: "MQ-2 / MQ-135 Gas Sensor",
    category: "Safety",
    icon: "Flame",
    interfaceType: "Analog ADC",
    voltage: "5.0V Heater / 3.3V Logic",
    readingUnit: "PPM (Parts Per Million)",
    nominalRange: "200 – 10,000 ppm (Combustible Gas/Smoke)",
    simulatedValue: 64.0,
    purpose: "Detects elevated concentrations of smoke particles, combustible hydrocarbon gases (LPG, Propane), and carbon monoxide.",
    pinout: [
      { pin: "VCC", function: "5V Heater Power" },
      { pin: "AOUT", function: "Analog Density Signal -> Voltage Divider" },
      { pin: "DOUT", function: "Digital Threshold Trigger to Interrupt GPIO" },
      { pin: "GND", function: "Ground" }
    ],
    application: "Primary early-warning transducer for enclosed labs, kitchens, and workshop safety alarm nodes."
  },
  {
    id: "ambient-light",
    name: "Ambient Light Sensor",
    model: "LDR / BH1750 Photodiode",
    category: "Environmental",
    icon: "Sun",
    interfaceType: "I2C",
    voltage: "3.3V DC",
    readingUnit: "Lux",
    nominalRange: "1 – 65,535 Lux",
    simulatedValue: 380,
    purpose: "Samples ambient daylight illumination levels to coordinate intelligent home lighting schedules and solar tracking.",
    pinout: [
      { pin: "VCC", function: "3.3V DC" },
      { pin: "SDA", function: "I2C Data (ESP32 GPIO 21)" },
      { pin: "SCL", function: "I2C Clock (ESP32 GPIO 22)" },
      { pin: "GND", function: "Ground" }
    ],
    application: "Automated dusk/dawn triggers for home automation relays and diurnal tracking for plant growth experiments."
  },
  {
    id: "esp32-controller",
    name: "ESP32 Dual-Core Dev Board",
    model: "ESP-WROOM-32 (Xtensa LX6 @ 240MHz)",
    category: "Controller",
    icon: "Cpu",
    interfaceType: "GPIO Relay",
    voltage: "3.3V Logic / 5V USB Input",
    readingUnit: "Core Frequency 240MHz",
    nominalRange: "Wi-Fi 802.11 b/g/n + BLE 4.2",
    simulatedValue: 240,
    purpose: "Serves as the edge computing heart: ingests multi-channel sensor signals, applies filtering, and transmits JSON telemetry.",
    pinout: [
      { pin: "Core 0", function: "Dedicated to Wi-Fi/TCP/MQTT Network Stack" },
      { pin: "Core 1", function: "Deterministic Sensor Polling & Relay State Machine" },
      { pin: "ADC1", function: "Low-noise Analog Readings (Sensors)" },
      { pin: "I2C/SPI", function: "High-speed Peripheral Bus" }
    ],
    application: "Central edge processor across all IoT prototypes, running real-time firmware loops and telemetry serialization."
  }
];

export const TECHNICAL_SKILLS: SkillItem[] = [
  // Programming
  {
    name: "C",
    category: "Programming",
    level: "Active Practice",
    description: "Structured procedural programming, memory pointers, and foundational computer science logic.",
    verified: true
  },
  {
    name: "C++",
    category: "Programming",
    level: "Active Practice",
    description: "Object-oriented structures, embedded firmware development, and memory-efficient algorithms.",
    verified: true
  },
  {
    name: "Python",
    category: "Programming",
    level: "Active Practice",
    description: "Scripting, rapid data prototyping, sensor simulation, and foundational automation workflows.",
    verified: true
  },

  // IoT & Hardware
  {
    name: "ESP32",
    category: "IoT & Hardware",
    level: "Active Practice",
    description: "Dual-core firmware, integrated Wi-Fi/BLE communication, ADC sampling, and interrupt handlers.",
    verified: true
  },
  {
    name: "Arduino",
    category: "IoT & Hardware",
    level: "Project-Tested",
    description: "Prototyping boards, peripheral breakout shields, pulse-width modulation (PWM), and serial debugging.",
    verified: true
  },
  {
    name: "Sensors & Actuators",
    category: "IoT & Hardware",
    level: "Active Practice",
    description: "Analog/digital transducers (moisture, thermal, gas, optical) and 5V/12V optocoupled relays.",
    verified: true
  },
  {
    name: "IoT Architecture",
    category: "IoT & Hardware",
    level: "Active Practice",
    description: "Multi-tier telemetry flows: Sensors -> Edge Controller -> Gateway -> MQTT Broker -> Application.",
    verified: true
  },

  // Software & Tools
  {
    name: "Git",
    category: "Software & Tools",
    level: "Active Practice",
    description: "Version control workflows, branching, commits, and collaborative repository maintenance.",
    verified: true
  },
  {
    name: "GitHub",
    category: "Software & Tools",
    level: "Active Practice",
    description: "Remote code repositories, project tracking, issue discussions, and open-source documentation.",
    verified: true
  },
  {
    name: "HTML5",
    category: "Software & Tools",
    level: "Active Practice",
    description: "Semantic web structuring, accessible layouts, and embedded web UI interfaces.",
    verified: true
  },
  {
    name: "CSS3",
    category: "Software & Tools",
    level: "Active Practice",
    description: "Modern responsive styling, flexbox, CSS grid, dark/light themes, and glassmorphism.",
    verified: true
  },
  {
    name: "JavaScript",
    category: "Software & Tools",
    level: "Active Practice",
    description: "Asynchronous DOM manipulation, event handling, and interactive frontend data presentation.",
    verified: true
  }
];

export const PROJECTS: Project[] = [
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    tagline: "Automated moisture-based precision watering for conservation",
    problem: "Conventional agricultural and garden watering relies on arbitrary timers or manual guessing, leading to excessive water consumption, mineral depletion, and root rot.",
    solution: "An automated edge system that measures soil moisture using capacitive sensing. When moisture dips below calibrated physiological thresholds, the microcontroller trips an optocoupled relay to engage the pump until optimum saturation is restored.",
    technologies: ["Capacitive Soil Sensor", "ESP32 / Arduino", "5V Relay Module", "Submersible DC Pump", "C++ Firmware"],
    contribution: "Circuit schematic development, calibration curves for varied soil textures, and hysteresis control logic to prevent rapid relay chattering.",
    status: "Prototype",
    category: "Agricultural" as any,
    diagramType: "irrigation",
    keyFeatures: [
      "Corrosion-resistant capacitive dielectric probe",
      "Hysteresis algorithm preventing motor short-cycling",
      "Manual override switch with fail-safe automatic shutoff",
      "Low standby current drain between sample intervals"
    ]
  },
  {
    id: "fire-smoke-monitoring",
    title: "ESP32-Based Fire & Smoke Monitoring",
    tagline: "Low-latency hazardous gas and thermal detection safety node",
    problem: "Late fire detection in closed rooms or electronics workshops results in rapid asset damage and asphyxiation risks before conventional smoke alarms react.",
    solution: "A compact IoT safety node utilizing the ESP32 coupled with high-sensitivity gas/smoke transducers. Detects particulate buildup and abnormal thermal gradients to trigger both a local high-decibel piezobuzzer and a local network alert payload.",
    technologies: ["ESP32 Dev Module", "MQ-2 Gas / Smoke Sensor", "Active Buzzer", "Status LEDs", "Embedded C++"],
    contribution: "Sensor preheating calibration, interrupt-driven ADC sampling to minimize latency, and schematic isolation for reliable power delivery.",
    status: "Prototype",
    category: "Smart Systems",
    diagramType: "fire-smoke",
    keyFeatures: [
      "Hardware interrupt trigger for sub-50ms alarm response",
      "Multi-level alert stages: Normal, Caution, Critical Alarm",
      "Audible acoustic warning coupled with high-visibility strobe",
      "Telemetry packaging ready for local Wi-Fi broadcast"
    ]
  },
  {
    id: "smart-plant-monitoring",
    title: "Smart Plant Monitoring System",
    tagline: "Comprehensive environmental telemetry for indoor botanical health",
    problem: "Houseplants and laboratory specimens suffer due to invisible stress factors: improper light exposure, dry soil, and abrupt temperature swings that go unnoticed.",
    solution: "An integrated multi-sensor telemetry cluster monitoring ambient temperature, relative air humidity, ambient lux levels, and soil moisture simultaneously, outputting holistic botanical vitals.",
    technologies: ["Capacitive Soil Sensor", "DHT22 / BME280", "LDR / BH1750", "Microcontroller", "I2C Bus"],
    contribution: "Multi-peripheral bus wiring, unified sensor data packaging structure, and environmental balance scoring logic.",
    status: "Planned",
    category: "IoT & Embedded",
    diagramType: "plant",
    keyFeatures: [
      "Tri-parameter environment tracking (Soil + Atmosphere + Light)",
      "Standardized I2C and 1-Wire communication lines",
      "Calibrated botanical profile thresholds",
      "Designed for low-power battery-operated deployments"
    ]
  },
  {
    id: "smart-home-automation",
    title: "Smart Home Automation Hub",
    tagline: "Local network appliance control with edge safety relays",
    problem: "Commercial smart home products often mandate proprietary cloud servers, causing lag, subscription walls, and complete failure whenever internet outages occur.",
    solution: "A self-contained home automation controller hosting a lightweight local web server on the ESP32. Allows authorized devices on the local Wi-Fi network to switch domestic lighting and appliances safely via isolated relays.",
    technologies: ["ESP32 Microcontroller", "Optocoupled 4-Channel Relay", "Local HTTP Server", "HTML/CSS UI", "Wi-Fi AP/STA"],
    contribution: "Firmware state engine for relay persistence across reboots, clean responsive local web interface, and electrical isolation safeguards.",
    status: "In Progress",
    category: "Automation",
    diagramType: "home-auto",
    keyFeatures: [
      "Zero cloud reliance: operates fully offline within LAN",
      "Optically isolated relay channels for mains AC safety",
      "Real-time state broadcast to connected web browsers",
      "Persistent state memory across power cycles"
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: "skillsphere-valor",
    organization: "Skillsphere Club",
    event: "Legacy of Valor",
    role: "Core Team Member & Event Coordinator",
    timeline: "College Event",
    tag: "Event Leadership & Teamwork",
    responsibilities: [
      "Participated actively in logistical planning and stage orchestration for the flagship event.",
      "Collaborated with cross-functional student teams to manage participant registrations and schedules.",
      "Assisted in coordinating audiovisual equipment, live transitions, and venue logistics."
    ],
    contribution: "Maintained clear team communication under high-activity conditions, ensured prompt technical support for presenters, and helped deliver a seamless event experience.",
    results: "Event concluded with positive reception across student participants and faculty mentors, strengthening collaborative problem-solving skills."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "raabta",
    title: "Lafz-e-Bayaan — Raabta",
    subtitle: "Creative Expression & Elocution Showcase",
    category: "Communication & Articulation",
    description: "An expressive elocution and literary event celebrating poetic storytelling, narrative depth, and interpersonal connections ('Raabta'). Demonstrated strong verbal articulation, public presence, and creative thinking outside engineering coursework.",
    highlight: "Emphasized the vital synergy between technical problem-solving and emotional, human-centered communication."
  }
];

export const HACKATHONS: HackathonItem[] = [
  {
    id: "ai-synergy-2026",
    name: "AI Synergy Hackathon 2026",
    year: "2026",
    team: "Collaborative Innovation Group",
    problemStatement: "How can resource-constrained IoT edge devices deliver meaningful environmental alerts without overburdening network bandwidth?",
    proposedSolution: "Synthesizing ESP32 local sensor telemetry with lightweight predictive heuristics to identify environmental anomalies before transmitting high-priority payloads to central dashboards.",
    technologies: ["ESP32", "MicroPython / C++", "Edge Heuristics", "JSON Serialization", "REST/MQTT"],
    contribution: "Hardware schematic design, multi-sensor sampling loop, and edge data aggregation.",
    status: "Prototype Stage / Ideation Sprint"
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  institution: "Madhav Institute of Technology and Science (MITS)",
  location: "Gwalior, Madhya Pradesh, India",
  expectedGraduation: "2029",
  status: "Second Year (Enrolled)",
  coursework: [
    "Internet of Things Architecture & Protocols",
    "Microprocessors & Microcontroller Interfacing",
    "Programming in C and Object-Oriented C++",
    "Basic Electrical & Electronic Engineering",
    "Data Structures & Algorithmic Thinking",
    "Sensor Networks & Wireless Communication"
  ],
  milestones: [
    "Specializing in Internet of Things (IoT) curriculum",
    "Active participation in campus technology clubs & hackathon sprints",
    "Hands-on lab prototyping with ESP32, Arduino, and embedded sensors",
    "Exploring software engineering frameworks and public administration interfaces"
  ]
};
