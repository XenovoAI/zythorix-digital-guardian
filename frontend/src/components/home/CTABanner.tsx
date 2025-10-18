import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Diagonal Background */}
      <div className="absolute inset-0 bg-primary transform -skew-y-2 origin-top-left" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Ready to Secure and Scale Your Digital Projects?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Join hundreds of businesses protecting their content and growing their online presence
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
