import React, { useState } from 'react';
import { 
  Thermometer, 
  Droplets, 
  Flame, 
  Sun, 
  Cpu, 
  Radio, 
  Cloud, 
  CheckCircle, 
  Sliders, 
  Layers, 
  ArrowRight,
  Info,
  Terminal,
  Activity,
  Zap
} from 'lucide-react';
import { SENSOR_NODES } from '../data/portfolioData';
import { SensorNode } from '../types/portfolio';

interface ConnectedSystemsProps {
  playClick: () => void;
  playPulse: () => void;
}

export const ConnectedSystems: React.FC<ConnectedSystemsProps> = ({ playClick, playPulse }) => {
  const [selectedSensor, setSelectedSensor] = useState<SensorNode>(SENSOR_NODES[0]);
  const [simulationValue, setSimulationValue] = useState<number>(SENSOR_NODES[0].simulatedValue);
  const [activeStage, setActiveStage] = useState<number>(0);
  const [packetTransmitting, setPacketTransmitting] = useState<boolean>(false);

  // Architecture Pipeline Stages
  const pipelineStages = [
    {
      step: '01',
      title: 'SENSORS',
      subtitle: 'Physical Acquisition',
      icon: Thermometer,
      desc: 'Transducers convert physical phenomena (heat, moisture, light, gas) into calibrated electrical signals.'
    },
    {
      step: '02',
      title: 'IoT GATEWAY',
      subtitle: 'Bus & Ingestion',
      icon: Radio,
      desc: 'ESP32 multiplexes I2C, SPI, and ADC interfaces, aggregating multi-node data streams without collision.'
    },
    {
      step: '03',
      title: 'EDGE PROCESSING',
      subtitle: 'Local Intelligence',
      icon: Cpu,
      desc: 'Firmware applies noise filtering, calibration curves, hysteresis loops, and immediate safety trip logic.'
    },
    {
      step: '04',
      title: 'CLOUD / BROKER',
      subtitle: 'MQTT & REST',
      icon: Cloud,
      desc: 'Packets serialized into structured JSON and dispatched via Wi-Fi/MQTT broker with QoS delivery guarantees.'
    },
    {
      step: '05',
      title: 'INSIGHTS & ACTIONS',
      subtitle: 'Actuators & Relays',
      icon: Zap,
      desc: 'Automated relay triggers switch pumps or alarms, and live dashboards visualize telemetry trends.'
    }
  ];

  const handleSelectSensor = (sensor: SensorNode) => {
    playClick();
    setSelectedSensor(sensor);
    setSimulationValue(sensor.simulatedValue);
  };

  const handleTriggerTelemetry = () => {
    playPulse();
    setPacketTransmitting(true);
    setTimeout(() => setPacketTransmitting(false), 1600);
  };

  const getSensorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Thermometer': return <Thermometer className="w-5 h-5" />;
      case 'Droplets': return <Droplets className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Sun': return <Sun className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <section id="connected-systems" className="relative py-24 bg-[#090912]/80 border-t border-b border-purple-500/15 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>SIGNATURE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            CONNECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">SYSTEMS</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A comprehensive, interactive exploration of how physical hardware sensors communicate through edge microcontrollers to drive intelligent decisions.
          </p>
        </div>

        {/* 1. Futuristic IoT Architecture Pipeline Flow */}
        <div className="mb-16">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>END-TO-END TELEMETRY PIPELINE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {pipelineStages.map((stage, idx) => {
              const StageIcon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.step}
                  onClick={() => {
                    playClick();
                    setActiveStage(idx);
                  }}
                  className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'glass-panel-elevated border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)] -translate-y-1'
                      : 'glass-panel border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-purple-400 group-hover:text-cyan-400 transition-colors">
                      {stage.step}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-purple-600 text-white' : 'bg-purple-950/40 text-purple-300'}`}>
                      <StageIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 mb-1 group-hover:text-purple-300 transition-colors">
                    {stage.title}
                  </h3>
                  <div className="text-[11px] font-mono text-cyan-400/90 mb-2">
                    {stage.subtitle}
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {stage.desc}
                  </p>

                  {/* Connecting Arrow for desktop */}
                  {idx < pipelineStages.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-purple-500/40">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Interactive Sensor Gateway Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sub-column: Sensor Node Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center justify-between mb-2">
              <span>ACTIVE HARDWARE NODES</span>
              <span className="text-cyan-400">5 INTERFACES</span>
            </div>

            <div className="space-y-2.5">
              {SENSOR_NODES.map((sensor) => {
                const isCurrent = selectedSensor.id === sensor.id;
                return (
                  <button
                    key={sensor.id}
                    onClick={() => handleSelectSensor(sensor)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isCurrent
                        ? 'bg-purple-900/30 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                        : 'glass-panel border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-950/20'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-lg border transition-colors ${
                        isCurrent 
                          ? 'bg-purple-600 border-purple-300 text-white shadow-[0_0_10px_#a855f7]' 
                          : 'bg-purple-950/40 border-purple-500/25 text-purple-300 group-hover:text-white'
                      }`}>
                        {getSensorIcon(sensor.icon)}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-purple-200 transition-colors">
                          {sensor.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {sensor.model} • <span className="text-cyan-400">{sensor.interfaceType}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-mono ${
                        isCurrent
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                          : 'bg-purple-950/30 text-purple-400'
                      }`}>
                        {sensor.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Sub-column: Detailed Node Telemetry & Pinout Inspector */}
          <div className="lg:col-span-7 glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative">
            
            {/* Header with real-time state badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-purple-500/20 mb-6">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
                    MODULE SPECIFICATION
                  </span>
                  <span className="text-slate-600 dark:text-slate-500">•</span>
                  <span className="font-mono text-xs text-cyan-400">{selectedSensor.model}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mt-0.5">
                  {selectedSensor.name}
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>CALIBRATED</span>
                </span>
              </div>
            </div>

            {/* Purpose & Application */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-mono text-purple-300 uppercase tracking-wider mb-1 flex items-center space-x-1.5">
                  <Info className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TRANSDUCER PRINCIPLE & ROLE</span>
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedSensor.purpose}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/20">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  PRACTICAL IMPLEMENTATION IN MY WORK
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {selectedSensor.application}
                </p>
              </div>
            </div>

            {/* Hardware Pinout & Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Hardware Electricals */}
              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20">
                <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  <span>ELECTRICAL CHARACTERISTICS</span>
                </div>
                <ul className="space-y-1.5 text-xs font-mono">
                  <li className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Logic Voltage:</span>
                    <span className="text-white font-medium">{selectedSensor.voltage}</span>
                  </li>
                  <li className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Signal Interface:</span>
                    <span className="text-cyan-400 font-medium">{selectedSensor.interfaceType}</span>
                  </li>
                  <li className="flex justify-between text-slate-300">
                    <span className="text-slate-400">Dynamic Range:</span>
                    <span className="text-purple-300 font-medium">{selectedSensor.nominalRange}</span>
                  </li>
                </ul>
              </div>

              {/* Pinout Mapping */}
              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/20">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PINOUT INTERFACE MAP</span>
                </div>
                <div className="space-y-1 text-xs font-mono">
                  {selectedSensor.pinout.map((pin, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px]">
                      <span className="text-purple-300 font-semibold">{pin.pin}:</span>
                      <span className="text-slate-300 truncate max-w-[160px] text-right" title={pin.function}>
                        {pin.function}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Interactive Telemetry Simulator Slider */}
            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-mono text-purple-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SIMULATED SIGNAL LEVEL</span>
                </div>
                <span className="font-mono text-sm font-bold text-cyan-300">
                  {simulationValue} {selectedSensor.readingUnit}
                </span>
              </div>

              <input
                type="range"
                min="0"
                max={selectedSensor.id === 'ambient-light' ? 2000 : 100}
                value={simulationValue}
                onChange={(e) => setSimulationValue(Number(e.target.value))}
                className="w-full h-2 bg-purple-950 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />

              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2">
                <span>ADC Low: 0.0V</span>
                <span className="text-purple-400">Live Simulation Slider</span>
                <span>ADC Max: 3.3V</span>
              </div>

              <div className="mt-4 flex items-center justify-between pt-3 border-t border-purple-500/20">
                <span className="text-[11px] font-mono text-slate-400">
                  JSON payload generated on event loop
                </span>
                <button
                  onClick={handleTriggerTelemetry}
                  disabled={packetTransmitting}
                  className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium shadow-md shadow-purple-950/60 transition-all active:scale-95 disabled:opacity-50"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{packetTransmitting ? 'Transmitting MQTT...' : 'Dispatch Packet'}</span>
                </button>
              </div>

              {/* JSON Packet Preview when transmitting */}
              {packetTransmitting && (
                <div className="mt-3 p-3 rounded-lg bg-black/80 border border-cyan-500/40 font-mono text-[11px] text-cyan-300 animate-in fade-in duration-200">
                  {`{ "device": "ESP32-MITS-GW01", "sensor": "${selectedSensor.id}", "val": ${simulationValue}, "unit": "${selectedSensor.readingUnit}", "status": "NOMINAL" }`}
                </div>
              )}
            </div>

            {/* Educational Disclaimer */}
            <div className="mt-4 text-center">
              <span className="text-[10px] font-mono text-slate-400">
                Note: Interactive architectural demonstration for recruiters and evaluators. Illustrates firmware logic without claiming live sensor connection to your local browser.
              </span>
            </div>

          </div>

        </div>

        {/* 3. Educational Deep Dive Panel: How Data Travels in IoT */}
        <div className="mt-16 glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/25">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-900/40 text-cyan-400 border border-purple-500/30">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  How Sensor Data Travels Through an IoT Architecture
                </h3>
                <p className="text-xs font-mono text-purple-400">
                  THE FOUNDATIONAL PHYSICS TO CLOUD TELEMETRY LOOP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-sm text-slate-300">
              <div className="space-y-2 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
                <div className="font-mono text-xs font-bold text-cyan-400 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>1. PHYSICAL CONVERSION</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Real-world stimuli (soil dialectric moisture or gas concentration) alter resistance or capacitance inside the transducer, yielding a variable analog voltage or modulated digital pulse.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
                <div className="font-mono text-xs font-bold text-cyan-400 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>2. EDGE COMPUTATION</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The ESP32 samples the analog signal through its 12-bit ADC (or digital I2C bus). Firmware converts raw integers into real units (°C, %, Lux) using pre-calibrated polynomial equations.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-purple-950/20 border border-purple-500/15">
                <div className="font-mono text-xs font-bold text-cyan-400 flex items-center space-x-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>3. DISPATCH & AUTOMATION</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  If readings cross critical bounds, the microcontroller toggles local hardware relays instantly (e.g. water valve or alarm) and publishes telemetry over MQTT with minimal packet overhead.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
