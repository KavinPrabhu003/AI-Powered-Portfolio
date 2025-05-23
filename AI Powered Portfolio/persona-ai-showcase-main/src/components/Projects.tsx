
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../lib/portfolioData";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const titleRef = useScrollReveal();
  const projectsRef = useScrollReveal({ threshold: 0.1 });
  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="section-container">
        <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg border border-border p-1 bg-background">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-secondary"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                filter === "featured"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-secondary"
              }`}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div 
          ref={projectsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-background glassmorphism rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:translate-y-[-5px]"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs bg-primary text-white px-3 py-1 rounded-full font-medium"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs bg-background/80 dark:bg-gray-800 text-foreground px-3 py-1 rounded-full font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 bg-secondary rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Learn More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More Button (for a real implementation you'd add pagination) */}
        {filter === "all" && projects.length > 6 && (
          <div className="mt-10 text-center">
            <button className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg font-medium transition-colors">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
