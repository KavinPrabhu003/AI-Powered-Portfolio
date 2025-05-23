
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experiences, education, certifications } from "../lib/portfolioData";

export default function Resume() {
  const titleRef = useScrollReveal();
  const experienceRef = useScrollReveal({ threshold: 0.1 });
  const educationRef = useScrollReveal({ threshold: 0.1, delay: 100 });
  const certificationsRef = useScrollReveal({ threshold: 0.1, delay: 200 });

  return (
    <section id="resume" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title">
          My <span className="gradient-text">Resume</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div 
            ref={experienceRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-2"
          >
            <div className="bg-background glassmorphism rounded-xl p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M3 10h18"></path>
                  </svg>
                </span>
                Work Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 pb-8 border-l border-border last:border-l-transparent last:pb-0"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {experience.period}
                    </div>
                    <h4 className="text-lg font-semibold">{experience.position}</h4>
                    <div className="text-primary font-medium">{experience.company}</div>
                    <p className="mt-2 text-muted-foreground">
                      {experience.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div 
              ref={educationRef as React.RefObject<HTMLDivElement>}
              className="bg-background glassmorphism rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </span>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative pl-8 pb-6 border-l border-border last:border-l-transparent last:pb-0"
                  >
                    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className="mb-1 text-sm text-muted-foreground">
                      {edu.period}
                    </div>
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <div className="text-primary font-medium">{edu.institution}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {edu.specialization}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div 
              ref={certificationsRef as React.RefObject<HTMLDivElement>}
              className="bg-background glassmorphism rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary/10 text-primary p-2 rounded-md mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 9h10M7 13h10M7 17h10"></path>
                  </svg>
                </span>
                Certifications
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {cert.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
