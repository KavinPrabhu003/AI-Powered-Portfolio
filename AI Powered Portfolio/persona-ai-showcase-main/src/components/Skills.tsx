
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../lib/portfolioData";

export default function Skills() {
  const titleRef = useScrollReveal();
  const skillsRef = useScrollReveal({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="section-container">
        <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div ref={skillsRef as React.RefObject<HTMLDivElement>}>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {skills.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === idx
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary hover:bg-primary/10"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
          
          {/* Skills Display */}
          <div className="max-w-4xl mx-auto">
            {skills.map((category, categoryIdx) => (
              <div
                key={categoryIdx}
                className={`transition-all duration-300 ${
                  activeTab === categoryIdx ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx}
                      className="glassmorphism rounded-lg p-6 hover:shadow-lg transition-all hover:translate-y-[-5px]"
                      style={{ animationDelay: `${skillIdx * 100}ms` }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.proficiency}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-blue-500 animate-pulse-soft"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
