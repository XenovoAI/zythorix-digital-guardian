import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowUp, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { name: "About", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Careers", path: "#" },
    ],
    services: [
      { name: "Anti-Piracy", path: "/services" },
      { name: "Web Development", path: "/services" },
      { name: "Fingerprinting", path: "/services" },
      { name: "Analytics", path: "/services" },
    ],
    resources: [
      { name: "Blog", path: "#" },
      { name: "Case Studies", path: "#" },
      { name: "FAQ", path: "#" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
    ],
  };

  return (
    <>
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company */}
            <div className="animate-fade-up">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-white/80">
                  <Mail size={16} />
                  <a
                    href="mailto:contact@zythorixtech.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@zythorixtech.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-white/80">
                  <Phone size={16} />
                  <a
                    href="tel:+919204536628"
                    className="hover:text-white transition-colors"
                  >
                    +91 920 453 6628
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://www.linkedin.com/company/zythorixtechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/zythorixtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/zythorixtechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} Zythorix Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 shadow-lg animate-fade-in"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </>
  );
};

export default Footer;
