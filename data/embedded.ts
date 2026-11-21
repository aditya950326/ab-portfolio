// ============================================================
// data/embedded.ts – All content for the Embedded/Hardware space
// Source: embedded-resume.pdf only. Do NOT mix with software data.
// ============================================================

export const embeddedData = {
  hero: {
    headline: "Embedded Systems",
    subtitle: "Embedded Systems Engineer | Firmware Engineer | Hardware Systems Engineer",
    description:
      "Electronics & Computer Engineering undergraduate specialising in ARM Cortex-M microcontrollers (STM32) and bare-metal C firmware. Hands-on with register-level peripheral configuration, 12-bit ADC data acquisition, SysTick timing, SPI/UART telemetry and H-bridge motor driver circuits.",
  },

  about: {
    title: "About — Embedded Focus",
    paragraphs: [
      "My embedded journey started with an Arduino and a curiosity about what happens below the operating system. It grew into serious firmware work: 12-bit ADC sampling, UART telemetry, H-bridge motor drivers, and schematic-to-breadboard hardware validation.",
      "I'm currently deepening my knowledge of FreeRTOS, communication protocols (I2C, SPI, CAN), hardware interrupts, and Linux-based embedded environments. My goal is to contribute to EV firmware and IoT hardware teams.",
    ],
  },

  skills: {
    languages: ["C", "C++ (Arduino framework)", "Python", "MATLAB", "Verilog", "VHDL"],
    microcontrollers: ["STM32 NUCLEO-L031K6 (ARM Cortex-M0+)", "Arduino Uno", "AVR (ATmega)"],
    protocols: ["UART", "I2C (learning)", "SPI (learning)", "CAN (learning)"],
    tools: ["Keil µVision", "Arduino IDE", "Proteus (simulation)", "ST-LINK / VCP", "Xilinx Vivado", "Git", "Jira"],
    concepts: ["12-bit ADC", "H-bridge motor driving", "IR sensor interfacing", "Analog & digital I/O", "Fault detection", "FreeRTOS (learning)", "Interrupts & hardware timers"],
    core: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },

  projects: [
    {
      id: "soil-moisture-stm32",
      title: "Soil Moisture Monitoring – STM32",
      description:
        "Built a bare-metal firmware system on the STM32 NUCLEO-L031K6 (ARM Cortex-M0+) that samples an analog soil moisture sensor via the 12-bit ADC every second, converts the raw count to voltage, and streams real-time telemetry over UART at 115 200 baud through ST-LINK VCP.",
      highlights: [
        "12-bit ADC with formula: V = ADC × 3.3 V / 4095",
        "Fault detection: readings < 100 counts flagged as sensor error",
        "Dry-to-wet calibration range: 4044 → 2149 counts",
        "6 modular code files; loop runs at ~1 Hz via SysTick",
      ],
      hardware: ["STM32 NUCLEO-L031K6", "Capacitive soil moisture sensor", "ST-LINK"],
      tags: ["STM32", "ARM Cortex-M0+", "ADC", "UART", "Bare-Metal C", "Proteus"],
      image: "/images/hardware_073f0098f21bbcf0af6f21d68056ec0885b8d4e9.png",
    },
    {
      id: "paper-shredder-arduino",
      title: "Automated Paper Shredder – Arduino",
      description:
        "Designed and built an Arduino-based paper shredder that uses an IR obstacle sensor to detect paper insertion and automatically drives an H-bridge motor circuit, eliminating the need for a manual switch.",
      highlights: [
        "IR sensor triggers motor start / stop automatically",
        "H-bridge driver for bidirectional motor control",
        "Schematic designed and simulated in Proteus before hardware assembly",
        "Eliminates manual intervention in the shredding cycle",
      ],
      hardware: ["Arduino Uno", "IR obstacle sensor", "H-bridge motor driver", "DC motor"],
      tags: ["Arduino", "IR Sensor", "H-bridge", "Proteus", "C++"],
      image: "/images/hardware_f81327bf185b1d576c4c086d6b684d56d3d57180.png",
    },
    {
      id: "snake-game-stm32-tft",
      title: "Snake Game on STM32 TFT Display",
      description:
        "Implemented the classic Snake game on an STM32 microcontroller driving a 2.8\" TFT colour display (ILI9341 via SPI), using hardware timers for game-tick control and GPIO push-buttons for directional control.",
      highlights: [
        "2.8\" ILI9341 TFT display driven via high-speed SPI",
        "Hardware timer controls frame rate and snake speed",
        "4-direction tactile button inputs debounced via SysTick",
        "Modular game state machine engineered in bare-metal C",
      ],
      hardware: ["STM32 NUCLEO", "2.8\" TFT SPI Display", "Tactile Buttons", "Breadboard"],
      tags: ["STM32", "TFT Display", "SPI", "GPIO", "Bare-Metal C", "Game Dev"],
      image: "/images/stm32_snake_2.png",
    },
  ],

  whatIBuild: [
    {
      number: "01",
      title: "Microcontroller Firmware",
      description:
        "Modular bare-metal and Arduino-core C/C++ firmware with clean state machines, SysTick timing, and minimal footprint.",
    },
    {
      number: "02",
      title: "Sensor Interfacing & ADC",
      description:
        "12-bit analog-to-digital acquisition with voltage conversion, calibration curves, and real-time UART telemetry streaming.",
    },
    {
      number: "03",
      title: "Motor & Actuator Control",
      description:
        "H-bridge motor drivers, automated IR and capacitive sensor feedback loops, and bidirectional actuator control.",
    },
    {
      number: "04",
      title: "Circuit Simulation & Prototyping",
      description:
        "Proteus schematic modelling, ST-LINK JTAG/SWD debugging, dry-run simulation before breadboard and PCB assembly.",
    },
  ],

  experience: [
    {
      role: "Software Developer Intern",
      company: "JBB Technologies Pvt. Ltd.",
      period: "June 2026 – July 2026",
      description:
        "Contributed to embedded-adjacent software and firmware tooling. Worked across the full development cycle in an agile team.",
      tags: ["Embedded", "Software", "Agile"],
    },
    {
      role: "UI/UX Designer (Freelance)",
      company: "Namoyatri App, via Under25",
      period: "2024",
      description:
        "Designed hardware-aware UX flows for an IoT-connected app. Collaborated remotely with the product team.",
      tags: ["Design", "IoT UX"],
    },
    {
      role: "Digital Marketing Associate (Intern)",
      company: "Forever Living Products",
      period: "June 2024 – August 2024",
      description:
        "Managed digital campaigns and analytics. Developed campaign tracking dashboards.",
      tags: ["Marketing", "Analytics"],
    },
  ],

  resumeFile: "/resumes/embedded-resume.pdf",
};
