import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <SectionHeading eyebrow="About" title="A thoughtful approach to learning" />
        <div className="about__content">
          <p className="about__lead">
            Mr. Orinda is preparing for a career in education through the Bachelor of Education Science programme at the University of Nairobi, where his studies have been in progress since September 2023.
          </p>
          <p>
            His experience includes teaching Mathematics and Physics at Nyang’iela Secondary School and providing individual support through Cares Homebased Tuition. He brings a calm, organised and communicative approach to working with learners.
          </p>
          <ul className="strength-list" aria-label="Professional strengths">
            {profile.strengths.map((strength, index) => (
              <li key={strength}><span>{String(index + 1).padStart(2, "0")}</span>{strength}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
