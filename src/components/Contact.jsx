import { profile } from "@/data/profile";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Start a conversation about learning.</h2>
          <p>School leaders, parents and learners are welcome to get in touch directly by email or telephone.</p>
          <a className="button button--light" href={`mailto:${profile.email}`}>
            Send an email <ArrowIcon />
          </a>
        </div>
        <address className="contact-list">
          <a href={`mailto:${profile.email}`} className="contact-item">
            <span className="contact-item__icon"><MailIcon /></span>
            <span><small>Email</small>{profile.email}</span>
          </a>
          <a href={profile.phoneHref} className="contact-item">
            <span className="contact-item__icon"><PhoneIcon /></span>
            <span><small>Telephone</small>{profile.phone}</span>
          </a>
          <div className="contact-item">
            <span className="contact-item__icon"><PinIcon /></span>
            <span><small>Postal address</small>{profile.postalAddress}</span>
          </div>
        </address>
      </div>
    </section>
  );
}
