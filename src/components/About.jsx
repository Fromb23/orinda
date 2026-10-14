import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <SectionHeading eyebrow="About" title="A thoughtful approach to learning" />
        <div className="about__content">
          <p className="about__lead">
            Mr. Orinda is a trained Mathematics and Physics educator and a University of Nairobi graduate awaiting issuance of his degree certificate. His teaching experience began in 2022 and includes secondary-school teaching and individual tuition support.
          </p>
          <p>
            At Nyang’iela Secondary School, he taught Mathematics and Physics, while Cares Homebased Tuition allowed him to provide focused support to individual learners. He brings a calm, organised and communicative approach to his work.
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
