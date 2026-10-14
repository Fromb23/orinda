import { education, leadership } from "@/data/profile";
import SectionHeading from "./SectionHeading";

export default function EducationLeadership() {
  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          eyebrow="Education & leadership"
          title="Academic foundation and service"
          description="Completed teacher education, school qualifications and documented student leadership."
        />
        <div className="education__layout">
          <div className="education-list">
            <h3 className="subsection-title">Education</h3>
            {education.map((item, index) => (
              <article className="education-item" key={item.institution}>
                <span className="education-item__index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  {item.dates && <p className="education-item__date">{item.dates}</p>}
                  <h4>{item.institution}</h4>
                  <p>{item.qualification}</p>
                </div>
                <span className="status-label">{item.status}</span>
              </article>
            ))}
          </div>
          <aside className="leadership-panel" aria-labelledby="leadership-title">
            <p className="eyebrow">Service</p>
            <h3 id="leadership-title">Student leadership</h3>
            <div className="leadership-list">
              {leadership.map((item) => (
                <article key={item.role}>
                  <p className="leadership-list__date">{item.dates}</p>
                  <h4>{item.role}</h4>
                  <p>{item.organisation}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
