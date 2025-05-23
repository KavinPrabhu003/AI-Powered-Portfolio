
import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { personalInfo, chatbotPrompts, skills, projects, experiences } from "../lib/portfolioData";

type Message = {
  id: number;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize chatbot with greeting
  useEffect(() => {
    if (messages.length === 0) {
      const initialMessage: Message = {
        id: 1,
        type: "bot",
        content: `Hi there! I'm ${personalInfo.name}'s Career Assistant. How can I help you learn more about Alex's experience and skills?`,
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, []);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.trim() === "") return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: input,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Generate bot response (simulating AI processing)
    setTimeout(() => {
      const botResponse = generateResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        type: "bot",
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  // Simple response generation based on input keywords
  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Project related queries
    if (lowerQuery.includes("project") || lowerQuery.includes("work") || lowerQuery.includes("portfolio")) {
      const featuredProjects = projects.filter(p => p.featured);
      return `Alex has worked on several exciting projects! Some highlights include: 
      
${featuredProjects.map(p => `• ${p.title}: ${p.description}`).join('\n\n')}

Would you like more details about any specific project?`;
    }
    
    // Skills and expertise
    if (lowerQuery.includes("skill") || lowerQuery.includes("know") || lowerQuery.includes("expert") || lowerQuery.includes("good at")) {
      const topSkills = skills.flatMap(category => 
        category.items
          .filter(skill => skill.proficiency >= 85)
          .map(skill => skill.name)
      );
      
      return `Alex specializes in several technical areas. The top skills include: ${topSkills.join(', ')}. 
      
Alex is particularly strong in AI Engineering and Full Stack Development.`;
    }
    
    // Experience related
    if (lowerQuery.includes("experience") || lowerQuery.includes("work history") || lowerQuery.includes("job")) {
      const latestJob = experiences[0];
      return `Alex's most recent position is ${latestJob.position} at ${latestJob.company} (${latestJob.period}).
      
Key responsibilities include: ${latestJob.description}

Alex has over 3 years of professional experience in AI and software development.`;
    }
    
    // Education
    if (lowerQuery.includes("education") || lowerQuery.includes("degree") || lowerQuery.includes("university") || lowerQuery.includes("college") || lowerQuery.includes("study")) {
      return `Alex holds a Master of Science in Computer Science with specialization in Artificial Intelligence from Stanford University, and a Bachelor's degree from UC Berkeley.`;
    }
    
    // Contact information
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("reach") || lowerQuery.includes("hire")) {
      return `You can contact Alex at ${personalInfo.email} or through the contact form on this website. Alex is currently based in ${personalInfo.location}.`;
    }
    
    // Fallback response
    return `I'd be happy to tell you more about Alex's background, projects, or skills. Is there something specific you'd like to know about Alex's experience in AI Engineering or Full Stack Development?`;
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all ${
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-[5.5rem] right-6 z-50 w-[90%] sm:w-[350px] md:w-[400px] glassmorphism shadow-xl rounded-xl transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary/20 p-2 rounded-full mr-3">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Career Assistant</h3>
              <p className="text-xs text-muted-foreground">AI-powered bot</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Chat messages */}
        <div className="h-[350px] overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                <div className="whitespace-pre-line text-sm">{message.content}</div>
                <div className="mt-1 text-right text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: "2-digit", 
                    minute: "2-digit" 
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-lg bg-secondary">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        <div className="p-4 border-t border-border overflow-x-auto whitespace-nowrap">
          <div className="flex gap-2">
            {chatbotPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(prompt);
                }}
                className="px-3 py-1 text-xs bg-secondary rounded-full whitespace-nowrap hover:bg-primary/10 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-border">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={input.trim() === ""}
              className={`p-2 rounded-lg transition-colors ${
                input.trim() === ""
                  ? "bg-secondary text-muted-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
