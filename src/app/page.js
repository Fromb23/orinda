import About from "@/components/About";
import Contact from "@/components/Contact";
import Documents from "@/components/Documents";
import EducationLeadership from "@/components/EducationLeadership";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Subjects from "@/components/Subjects";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Subjects />
        <Experience />
        <EducationLeadership />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
