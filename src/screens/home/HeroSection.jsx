import React from "react";



import { Link } from "react-router-dom";
import { nodes } from "./data/homedata";
import SectionTitle from "../../components/common/SectionTitle";


const nodePositions = {
  n1: "left-0 top-[9%] max-[600px]:-left-2 max-[600px]:top-[4%]",
  n2: "right-0 top-[8%] max-[600px]:-right-2 max-[600px]:top-[3%]",
  n3: "left-[2%] bottom-[7%] max-[900px]:left-0 max-[600px]:-left-2 max-[600px]:bottom-[5%]",
  n4: "right-0 bottom-[7%] max-[600px]:-right-2 max-[600px]:bottom-[5%]",
  n5: "right-[-2%] top-[43%] max-[900px]:right-0 max-[600px]:hidden",
};

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
  className="relative flex items-center overflow-hidden py-[40px] sm:py-[60px] lg:py-[100px] bg-[#10171e] text-white font-['Poppins',Arial,sans-serif]"

    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.09] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.65) 55%, transparent 100%)",
        }}
      />

      {/* Hero glow ring */}
      <div
        aria-hidden="true"
        className="absolute w-[720px] h-[720px] -right-[330px] -top-[150px] border border-[#a604d6]/[0.22] rounded-full pointer-events-none"
      />

      <div className="w-[min(calc(100%-52px),1440px)] sm:w-[min(calc(100%-64px),1440px)] mx-auto grid grid-cols-1 lg:grid-cols-[1.03fr_0.97fr] gap-[54px] items-center relative z-2">
        <div>
          <div className="font-mono uppercase tracking-[1.8px] text-[10px] text-[#b9c1c7] flex items-center gap-3 mb-[26px] ">
             <span className="text-[#a604d6]"><SectionTitle> Marketing that moves business forward </SectionTitle></span>
          </div>

          <h1
            id="hero-title"
            className="text-[56px] sm:text-[clamp(58px,7.3vw,112px)] leading-[0.91] tracking-[-3px] sm:tracking-[-3.5px] lg:tracking-[-5px] font-semibold m-0 max-w-[820px]"
          >
            MARKETING
            <br />
            THAT MOVES
            <br />
            <em className="not-italic text-[#a604d6]">BUSINESS.</em>
          </h1>

          <p className="max-w-[650px] text-[#B8C1CC] text-[18px] sm:text-[16px] leading-[1.75] sm:leading-[1.85] font-light mt-[30px] mb-0">
            From qualified conversations and visibility to credibility,
            diagnosis and strategy — mDNA brings the right marketing moves
            together.
          </p>

          <div className="flex gap-3 flex-wrap mt-[34px]">
            <a
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-[19px] border border-transparent text-[12px] font-semibold tracking-[0.01em] bg-[#a604d6] text-white no-underline hover:shadow-[0_14px_35px_rgba(166,4,214,0.24)] transition-all max-[600px]:w-full"
              href="#system"
            >
              Explore the mDNA System <span>↓</span>
            </a>
            <Link
              className="min-h-[46px] inline-flex items-center justify-center gap-2.5 px-[19px] border border-white/30 text-[12px] font-semibold tracking-[0.01em] text-white no-underline hover:border-[#a604d6] hover:bg-[#a604d6]/8 transition-all max-[600px]:w-full"
              to="/contact"
            >
              Talk to Us <span>↗</span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5 mt-[22px] text-[#69747c] font-mono text-[10px] tracking-[0.7px]">
            <i className="w-1.5 h-1.5 rounded-full bg-[#a604d6] inline-block shadow-[0_0_0_5px_rgba(166,4,214,0.1)]" />
            FIVE CAPABILITIES / ONE CONNECTED PORTFOLIO
          </div>
        </div>

        {/* Marketing system map */}
        <div
          aria-label="Illustrative mDNA marketing system map"
         className="relative min-h-[380px] sm:min-h-[390px] md:min-h-[420px] lg:min-h-[450px] max-[600px]:mt-2.5" 
        >
          <div className="absolute inset-0">
            {/* Diamond outer frame */}
            <div
              aria-hidden="true"
              className="absolute inset-[12%_2%] sm:inset-[12%_7%] border border-white/10 -rotate-3 pointer-events-none"
            />
            {/* Center concentric pulse ring */}
            <div
              aria-hidden="true"
              className="absolute w-[250px] h-[250px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#a604d6]/35 rounded-full shadow-[0_0_0_45px_rgba(166,4,214,0.025),0_0_0_92px_rgba(166,4,214,0.015)] pointer-events-none"
            />

            <svg
              aria-hidden="true"
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 620 520"
            >
              <line
  className="stroke-[#a604d6] stroke-[1.7] [stroke-dasharray:5_6] [animation:dash-flow_0.8s_linear_infinite]"
  x1="310" x2="95" y1="260" y2="100"
/>
              <line className="stroke-white/22 stroke-[1]" x1="310" x2="525" y1="260" y2="100" />
              <line className="stroke-white/22 stroke-[1]" x1="310" x2="90" y1="260" y2="425" />
              <line className="stroke-white/22 stroke-[1]" x1="310" x2="530" y1="260" y2="425" />
              <line className="stroke-white/22 stroke-[1]" x1="310" x2="560" y1="260" y2="260" />
            </svg>

            <div className="absolute left-[2%] sm:left-[8%] top-0 text-[#5f6a72] font-mono text-[7px] sm:text-[9px] tracking-widest">
              SYSTEM / 00 — STARTING POINTS
            </div>
            <div className="absolute right-[2%] sm:right-[8%] bottom-0 text-[#5f6a72] font-mono text-[7px] sm:text-[9px] tracking-widest">
              ILLUSTRATIVE / NOT LIVE DATA
            </div>

            {/* Core Diamond */}
            <div className="absolute left-1/2 top-1/2 w-[88px] h-[88px] sm:w-[116px] sm:h-[116px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#a604d6]/90 bg-[#10171e]/95 flex items-center justify-center z-3">
              <span className="-rotate-45 text-[15px] sm:text-[19px] font-bold tracking-tight">
                m<b className="text-[#a604d6] font-bold">D</b>NA
              </span>
            </div>

            {/* Center Pulse */}
            <div className="absolute w-2 h-2 rounded-full bg-[#a604d6] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-5 animate-ping" />

            {/* Nodes */}
            {nodes.map((node) => (
              <a
                key={node.num}
                className={`absolute w-[137px] sm:w-[180px] p-3 sm:py-[15px] sm:px-4 border border-white/15 bg-[#10171e]/90 backdrop-blur-md transition-all duration-300 z-4 hover:border-[#a604d6] hover:-translate-y-1 ${
                  nodePositions[node.className] || ""
                }`}
                href={node.href}
              >
                <span className="font-mono text-[10px] text-[#a604d6] block mb-1 sm:mb-[7px]">
                  {node.num}
                </span>
                <strong className="text-[9px] sm:text-[11px] leading-[1.45] block font-medium">
                  {node.title}
                </strong>
                <small className="block text-[#758089] font-mono text-[7px] sm:text-[9px] mt-2 sm:mt-2.5">
                  {node.tag}
                </small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}