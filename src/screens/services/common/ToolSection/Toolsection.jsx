import { toolsCatalog } from "../../data/toolsCatlog";
import "./Toolsection.css";

export default function ToolsSection({ tools = [] }) {
  return (
    <section className="tools-section" aria-labelledby="tools-title">
      <div className="tools-section-inner">
        <div className="tools-section-header">
          <p className="tools-label">TOOLS</p>
          <div className="tools-content">
            <h2 id="tools-title">Tools our teams work with.</h2>
            <p className="tools-description">
              We leverage industry-leading tools to help us find the right audience,
              create meaningful content and drive measurable results.
            </p>
          </div>
        </div>
        <div className="tools-list" aria-label="Tools used by our teams">
          {tools.map((toolId) => {
            const tool = toolsCatalog[toolId];

            if (!tool) return null;

            return (
              <div className="tool-item" key={toolId}>
                <img src={tool.logo} alt={tool.name} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}