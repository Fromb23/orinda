import SectionHeading from "./SectionHeading";

const subjects = [
  {
    number: "01",
    symbol: "∑",
    title: "Mathematics",
    description:
      "Support with mathematical concepts, structured problem-solving and the careful working needed to make each step understandable.",
    topics: ["Concept explanation", "Problem-solving", "Individual support"],
  },
  {
    number: "02",
    symbol: "φ",
    title: "Physics",
    description:
      "Guidance that connects principles, calculations and scientific reasoning so learners can approach Physics questions with greater clarity.",
    topics: ["Core principles", "Calculations", "Scientific reasoning"],
  },
];

export default function Subjects() {
  return (
    <section className="section section--ink subjects" id="subjects" aria-labelledby="subjects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Teaching subjects"
          title="Building understanding, one concept at a time"
          description="Subject support grounded in explanation, practice and attentive guidance."
        />
        <div className="subject-grid">
          {subjects.map((subject) => (
            <article className="subject-card" key={subject.title}>
              <div className="subject-card__top">
                <span className="subject-card__number">{subject.number}</span>
                <span className="subject-card__symbol" aria-hidden="true">{subject.symbol}</span>
              </div>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
              <ul>
                {subject.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
