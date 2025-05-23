
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../lib/portfolioData";

export default function About() {
  const imageRef = useScrollReveal({ threshold: 0.2 });
  const textRef = useScrollReveal({ threshold: 0.2, delay: 200 });

  return (
    <section id="about" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image */}
          <div 
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={personalInfo.avatarUrl} 
                alt={personalInfo.name}
                className="w-full h-auto object-cover" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-10 -left-5 w-full h-full border-2 border-primary rounded-lg -z-10"></div>
            <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-primary/10 rounded-full filter blur-xl"></div>
          </div>
          
          {/* Bio */}
          <div 
            ref={textRef as React.RefObject<HTMLDivElement>}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Nice to meet you
            </div>
            
            <h3 className="text-3xl font-bold">
              I'm <span className="text-primary">{personalInfo.name}</span> - an AI Engineer and Full Stack Developer based in {personalInfo.location}
            </h3>
            
            <div className="text-muted-foreground space-y-4">
              {personalInfo.bio.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            <div className="pt-4 flex flex-wrap gap-6">
              <div>
                <span className="text-lg font-semibold text-primary">3+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">20+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <span className="text-lg font-semibold text-primary">5+</span>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
