
import NeedList from "../../components/common/NeedList/NeedList";
import "../../screens/home/home.css";
import {needs1} from "./data/homedata";


export default function ProblemSection() {
  return (
    <section className="problem-section light-section">
      <div className="problem-copy">
        <p className="eyebrow">00 - The marketing problem</p>

        <h2>
          More marketing
          <br />
          isn't always
          <br />
          the <span>answer.</span>
        </h2>

        <p>
          The next move depends on the problem in front of you.
          Sometimes you need more pipeline. Sometimes you need
          visibility, credibility, clarity or a stronger marketing
          function.
        </p>
      </div>

      <NeedList
        title="Where the need shows up"
        needs={needs1}
        variant="simple"
        showFooter
      />
    </section>
  );
}