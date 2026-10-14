import { documents } from "@/data/documents";
import { DownloadIcon, ExternalIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Documents() {
  return (
    <section className="section documents" id="documents" aria-labelledby="documents-title">
      <div className="container">
        <SectionHeading
          eyebrow="Professional documents"
          title="Credentials, ready to review"
          description="View each PDF in a new tab or download a local copy. The complete collection is also available as one file."
        />
        <div className="document-grid">
          {documents.map((document, index) => (
            <article className={`document-card${document.featured ? " document-card--featured" : ""}`} key={document.pdf}>
              <div className="document-card__header">
                <span className="document-card__icon" aria-hidden="true">PDF</span>
                <span className="document-card__number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{document.title}</h3>
              <p>{document.description}</p>
              <div className="document-card__actions">
                <a href={document.pdf} target="_blank" rel="noopener noreferrer">
                  View PDF <ExternalIcon />
                </a>
                <a href={document.pdf} download>
                  Download PDF <DownloadIcon />
                </a>
                {document.word ? (
                  <a href={document.word} download>
                    Download Word <DownloadIcon />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
