
import { useState, FormEvent } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../lib/portfolioData";
import { toast } from "sonner";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal({ threshold: 0.1, delay: 100 });
  const infoRef = useScrollReveal({ threshold: 0.1, delay: 200 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Show success message
    toast.success("Message sent successfully! I'll get back to you soon.", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="section-container">
        <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div 
            ref={formRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-3"
          >
            <div className="glassmorphism rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all flex items-center justify-center ${
                    isSubmitting ? "opacity-80" : "hover:translate-y-[-2px] hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className="lg:col-span-2"
          >
            <div className="glassmorphism rounded-xl p-6 md:p-8 mb-8 h-[calc(100%-2rem)]">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                      Location
                    </h4>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="pt-6 mt-6 border-t border-border">
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">
                    Follow me on social media
                  </h4>
                  <div className="flex space-x-4">
                    {Object.entries(personalInfo.socialLinks).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-secondary p-3 rounded-full hover:bg-primary/10 transition-colors"
                        aria-label={`Follow on ${platform}`}
                      >
                        <SocialIcon platform={platform} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
