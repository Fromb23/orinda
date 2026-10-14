import { experience } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="experience-title">
      <div className="container experience__grid">
        <SectionHeading
          eyebrow="Teaching experience"
          title="Experience in school and individual tuition settings"
          description="Two distinct teaching settings, presented with the dates recorded in the professional CV."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline__item" key={item.organisation}>
              <div className="timeline__marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline__body">
                <p className="timeline__date">{item.dates}</p>
                <h3>{item.organisation}</h3>
                <p className="timeline__role">{item.role}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
