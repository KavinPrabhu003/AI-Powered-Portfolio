
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../lib/portfolioData";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal({ delay: 200 });
  const ctaRef = useScrollReveal({ delay: 400 });

  const scrollToNextSection = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background to-accent/30 dark:from-background dark:to-accent/10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWYxZjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgzMHYzMGgzMFYwem0wIDMwSDMwdjMwaDMwVjMwek0zMCAwSDB2MzBoMzBWMHptMCAzMEgwdjMwaDMwVjMweiIgZmlsbD0iI2ZhZmFmYSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="mb-6 font-bold tracking-tight">
            <span className="gradient-text">Hi, I'm {personalInfo.name}</span>
          </h1>
          
          <div ref={subtitleRef as React.RefObject<HTMLDivElement>} className="mb-10">
            <div className="typing-container w-full sm:w-max">
              <p className="typing-text text-xl sm:text-2xl font-medium text-foreground/80">
                {personalInfo.title}
              </p>
            </div>
          </div>
          
          <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-transform hover:translate-y-[-2px] hover:shadow-lg"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg border border-primary text-primary font-medium transition-all hover:bg-primary/10"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-20 animate-bounce">
            <button 
              onClick={scrollToNextSection}
              className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
