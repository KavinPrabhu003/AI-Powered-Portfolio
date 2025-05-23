
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AIAssistant from "../components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
