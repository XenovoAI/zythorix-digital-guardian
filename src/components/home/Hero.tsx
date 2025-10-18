import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Protecting Your Digital Assets & Building Your Web Presence";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with typing effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 min-h-[3em]">
            {displayedText}
            <span className="inline-block w-1 h-12 bg-primary ml-1 animate-pulse" />
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "2s" }}>
            Enterprise-grade anti-piracy automation and custom web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "2.5s" }}>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              <a href="#demo" className="flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
