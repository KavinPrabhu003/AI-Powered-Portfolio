
import { personalInfo } from "../lib/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-secondary/50 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold gradient-text"
            >
              Alex<span className="text-primary">Dev</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Resume
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex space-x-4">
            {Object.entries(personalInfo.socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Follow on ${platform}`}
              >
                <SocialIcon platform={platform} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Helper component for social icons
const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform) {
    case "github":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.571 21.128 10.25 22V18.5C6.75 18.5 6.25 16.5 6.25 16.5C6 15.5 5.5 15 5.5 15C4.75 14.5 5.5 14.5 5.5 14.5C6.25 14.5 6.75 15.5 6.75 15.5C7.75 17 9.25 16.5 10.25 16C10.375 15.5 10.75 15 11 14.75C8.25 14.5 5.75 13.75 5.75 10C5.75 9 6 8 6.75 7.25C6.625 7 6.25 6 6.75 4.75C6.75 4.75 7.75 4.5 10.25 6.25C11 6 11.5 5.875 12 5.875C12.5 5.875 13 6 13.75 6.25C16.25 4.5 17.25 4.75 17.25 4.75C17.75 6 17.375 7 17.25 7.25C18 8 18.25 9 18.25 10C18.25 13.75 15.75 14.5 13 14.75C13.5 15.25 13.75 15.875 13.75 16.75V22C18.429 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.47 2H3.53C2.69 2 2 2.69 2 3.53V20.47C2 21.31 2.69 22 3.53 22H20.47C21.31 22 22 21.31 22 20.47V3.53C22 2.69 21.31 2 20.47 2ZM8.09 18.74H5.07V9.11H8.09V18.74ZM6.58 7.79C5.61 7.79 4.82 7 4.82 6.03C4.82 5.05 5.61 4.26 6.58 4.26C7.56 4.26 8.35 5.05 8.35 6.03C8.35 7 7.56 7.79 6.58 7.79ZM18.91 18.74H15.89V14.11C15.89 12.93 15.87 11.39 14.22 11.39C12.55 11.39 12.29 12.69 12.29 14.04V18.74H9.27V9.11H12.15V10.43H12.19C12.62 9.66 13.6 8.85 15.03 8.85C18.09 8.85 18.91 10.99 18.91 13.75V18.74Z" fill="currentColor" />
        </svg>
      );
    case "twitter":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 4C21 4.5 20.02 4.779 19 5C17.879 3.812 16 3.75 14.5 4.5C13 5.25 12 6.75 12 8.5V9.5C8.5 9.5 5.5 7.5 3 4.5C3 4.5 -1 13 8 17C6.5 18 4.5 18.5 2 18.5C11 23 18 18.5 18 8.5C18 8.295 17.985 8.09 17.955 7.895C18.915 7 21.5 5 22 4Z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
};
