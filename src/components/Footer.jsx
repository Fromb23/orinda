import { navigation, profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <a className="brand brand--footer" href="#top" aria-label="Mr. Orinda — back to top">
            <span className="brand__mark" aria-hidden="true">MO</span>
            <span className="brand__text"><strong>{profile.publicName}</strong><small>{profile.role}</small></span>
          </a>
        </div>
        <nav aria-label="Footer navigation">
          <p>Explore</p>
          <ul>
            {navigation.map((item) => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="site-footer__subjects">
          <p>Subject specialisms</p>
          <span>Mathematics</span>
          <span>Physics</span>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
