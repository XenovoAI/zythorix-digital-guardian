import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Code, Fingerprint, TrendingUp, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState<"antipiracy" | "webdev" | "educational">("antipiracy");

  const services = [
    {
      icon: Shield,
      title: "Anti-Piracy Automation",
      description: "AI-powered scanning and instant DMCA takedowns",
      features: [
        "24/7 automated content scanning across platforms",
        "Instant DMCA takedown processing",
        "Real-time monitoring dashboard",
        "Evidence collection and documentation",
      ],
      imageAlt: "Anti-piracy protection network",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, responsive websites optimized for performance",
      features: [
        "Responsive design for all devices",
        "Custom CMS integration",
        "SEO optimization built-in",
        "Performance-first architecture",
      ],
      imageAlt: "Web development code",
    },
    {
      icon: GraduationCap,
      title: "Educational Services",
      description: "Flexible pricing models for educational content protection",
      features: [
        "Per-Sale Basis: Pay only when content is sold, ideal for course creators",
        "Per-Member Basis: Monthly subscription per active member, perfect for institutions",
        "Scalable pricing that grows with your platform",
        "Dedicated educational content monitoring",
      ],
      imageAlt: "Educational services pricing",
    },
    {
      icon: Fingerprint,
      title: "Content Fingerprinting & Watermarking",
      description: "Invisible digital markers for forensic traceability",
      features: [
        "Invisible watermark embedding",
        "Unique digital fingerprints",
        "Forensic traceability",
        "Multi-format support",
      ],
      imageAlt: "Digital fingerprint technology",
    },
    {
      icon: TrendingUp,
      title: "Revenue Recovery & Analytics",
      description: "Track recovered income and measure ROI",
      features: [
        "Loss estimation algorithms",
        "Recovered income tracking",
        "Comprehensive ROI dashboards",
        "Predictive analytics",
      ],
      imageAlt: "Revenue analytics dashboard",
    },
  ];

  const comparisonFeatures = {
    antipiracy: [
      { name: "AI-Powered Scanning", included: true },
      { name: "Automated DMCA Takedowns", included: true },
      { name: "Real-time Monitoring", included: true },
      { name: "Evidence Collection", included: true },
      { name: "Multi-Platform Coverage", included: true },
    ],
    webdev: [
      { name: "Responsive Design", included: true },
      { name: "Custom Development", included: true },
      { name: "SEO Optimization", included: true },
      { name: "Performance Tuning", included: true },
      { name: "Ongoing Support", included: true },
    ],
    educational: [
      { name: "Per-Sale Pricing Model", included: true },
      { name: "Per-Member Pricing Model", included: true },
      { name: "Scalable Subscription Plans", included: true },
      { name: "Educational Content Focus", included: true },
      { name: "Flexible Payment Options", included: true },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left animate-[scaleX_0.5s_ease-out]" />
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for digital protection and web presence
            </p>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => (
          <section
            key={service.title}
            className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gradient-to-br from-blue-50/30 to-cyan-50/30"}`}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"
                  }`}
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-secondary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Placeholder */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "animate-slide-in-right" : "animate-slide-in-left"
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Compare Our Services
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the solution that fits your needs
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Toggle Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  onClick={() => setActiveTab("antipiracy")}
                  variant={activeTab === "antipiracy" ? "default" : "outline"}
                  className={`flex-1 min-w-[150px] ${
                    activeTab === "antipiracy"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  Anti-Piracy
                </Button>
                <Button
                  onClick={() => setActiveTab("webdev")}
                  variant={activeTab === "webdev" ? "default" : "outline"}
                  className={`flex-1 min-w-[150px] ${
                    activeTab === "webdev"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  Web Development
                </Button>
                <Button
                  onClick={() => setActiveTab("educational")}
                  variant={activeTab === "educational" ? "default" : "outline"}
                  className={`flex-1 min-w-[150px] ${
                    activeTab === "educational"
                      ? "bg-primary text-primary-foreground"
                      : ""
                  }`}
                >
                  Educational Services
                </Button>
              </div>

              {/* Features List */}
              <div className="glass-card rounded-2xl p-8 animate-fade-in">
                <ul className="space-y-4">
                  {comparisonFeatures[activeTab].map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-foreground">{feature.name}</span>
                      {feature.included && (
                        <span className="text-primary font-semibold">✓</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help protect and grow your digital presence
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 animate-pulse"
            >
              <Link to="/contact">Request Demo</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
