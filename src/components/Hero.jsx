import Image from "next/image";
import { profile } from "@/data/profile";
import { ArrowIcon, DownloadIcon, ExternalIcon } from "./Icons";

const cvPath = "/documents/ogira-mark-orinda-teacher-cv.pdf";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__rule" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">Education · Clarity · Growth</p>
          <h1 id="hero-title">
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__actions" aria-label="Portfolio actions">
            <a className="button" href="#contact">Contact Mr. Orinda <ArrowIcon /></a>
            <a className="button button--outline" href={cvPath} target="_blank" rel="noopener noreferrer">
              View CV <ExternalIcon />
            </a>
            <a className="text-link" href={cvPath} download>
              <DownloadIcon /> Download CV
            </a>
          </div>
          <a className="hero__documents-link" href="#documents">
            Browse all professional documents <ArrowIcon direction="down" />
          </a>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait-frame">
            <Image
              src={profile.portrait}
              alt="Professional portrait of Ogira Mark Orinda in a black blazer, white shirt and dark tie"
              fill
              priority
              sizes="(max-width: 760px) 88vw, (max-width: 1100px) 42vw, 470px"
              className="hero__portrait"
            />
          </div>
          <div className="hero__portrait-caption">
            <span className="status-dot" aria-hidden="true" />
            <span>
              <small>Based in</small>
              {profile.locality}
            </span>
          </div>
          <div className="hero__subject-note" aria-hidden="true">
            <span>01</span>
            <strong>Mathematics</strong>
            <span>02</span>
            <strong>Physics</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
