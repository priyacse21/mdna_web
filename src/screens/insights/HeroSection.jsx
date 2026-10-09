
import React, { useState, memo } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { heroData } from "./data/insightsData";
const HeroContent = memo(({ sectionTitle, title, titleHighlight, description }) => (
  <div className="relative z-[2] flex items-end py-[40px] sm:py-[60px] lg:py-[100px] pr-[7vw] pl-[max(36px,calc((100vw-1440px)/2))] max-[900px]:min-h-[59svh] max-[900px]:px-6">
    <div>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <h2
        id="page-title"
        className="mt-5 mb-6 max-w-[850px] text-[clamp(58px,7.2vw,108px)] leading-[0.9] tracking-[-0.065em] font-bold max-[600px]:text-[clamp(48px,15vw,72px)]"
      >
        {title}
        <span className="block text-[#b400e8]">{titleHighlight}</span>
      </h2>
      <p className="m-0 max-w-[540px] text-[clamp(16px,1.25vw,19px)] leading-[1.55] text-white/[0.62] max-[600px]:text-[15px]">
        {description}
      </p>
    </div>
  </div>
));

HeroContent.displayName = "HeroContent";

const HeroDiagram = memo(({ badgeText, captionText, nodes, connectorLines, pulseDots }) => {
  const [activeNodeId, setActiveNodeId] = useState("idea");

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-l border-white/[0.11] bg-[#0d0f14] max-[900px]:h-[39svh] max-[900px]:min-h-[290px] max-[900px]:border-l-0 max-[900px]:border-t"
    >
      <div className="absolute top-7 right-7 z-[3] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-white/[0.32]">
        {badgeText}
      </div>
      <div className="absolute inset-[13%_8%_10%_10%] rotate-[-7deg] transition-transform duration-[600ms] ease-[cubic-bezier(0.2,0.7,0.2,1)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:48px_48px] [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(180,0,232,0.12),transparent_65%)] pointer-events-none" />
        {nodes.map((node) => {
          const isActive = activeNodeId === node.id;
          return (
            <span
              key={node.id}
              onMouseEnter={() => setActiveNodeId(node.id)}
              onMouseLeave={() => setActiveNodeId("idea")}
              style={{ left: node.left, top: node.top }}
              className={`absolute cursor-pointer whitespace-nowrap font-mono text-[12px] leading-none tracking-[0.1em] transition-all duration-[450ms] select-none ${
                isActive
                  ? "text-white scale-105 before:absolute before:top-1/2 before:left-[-15px] before:h-[7px] before:w-[7px] before:-translate-y-1/2 before:rotate-45 before:bg-[#b400e8] before:shadow-[0_0_22px_rgba(180,0,232,0.75)]"
                  : "text-white/[0.45] hover:text-white/80"
              }`}
            >
              {node.label}
            </span>
          );
        })}
        {connectorLines.map((line, idx) => (
          <i
            key={`line-${idx}`}
            style={{
              left: line.left,
              top: line.top,
              width: line.width,
              transform: `rotate(${line.rotate})`,
            }}
            className="absolute h-px origin-left bg-[#b400e8]/[0.52] opacity-[0.55] transition-opacity duration-300 pointer-events-none"
          />
        ))}
        {pulseDots.map((dot, idx) => (
          <i
            key={`dot-${idx}`}
            style={{ left: dot.left, top: dot.top }}
            className="absolute h-[5px] w-[5px] rotate-45 bg-[#b400e8] shadow-[0_0_18px_rgba(180,0,232,0.5)] transition-transform duration-300 pointer-events-none"
          />
        ))}
      </div>
      <div className="absolute bottom-[26px] left-[10%] max-w-[230px] font-mono text-[10px] leading-[1.2] tracking-[0.14em] uppercase text-white/[0.28]">
        {captionText}
      </div>
    </div>
  );
});

HeroDiagram.displayName = "HeroDiagram";
const InsightsHero = () => {
  return (
    <section
      aria-labelledby="page-title"
      className="relative grid min-h-[78svh] grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)] overflow-hidden bg-[#111318] font-sans text-white max-[900px]:grid-cols-1 max-[900px]:min-h-0"
    >
      <HeroContent
        sectionTitle={heroData.sectionTitle}
        title={heroData.title}
        titleHighlight={heroData.titleHighlight}
        description={heroData.description}
      />
      <HeroDiagram
        badgeText={heroData.badgeText}
        captionText={heroData.captionText}
        nodes={heroData.nodes}
        connectorLines={heroData.connectorLines}
        pulseDots={heroData.pulseDots}
      />
    </section>
  );
};

export default InsightsHero;
