import { Shield, Code, Fingerprint, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Anti-Piracy Automation",
      description: "AI-powered scanning and instant DMCA takedowns to protect your content 24/7.",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, responsive websites with SEO optimization and performance excellence.",
    },
    {
      icon: Fingerprint,
      title: "Content Fingerprinting",
      description: "Invisible digital markers for forensic traceability of your content.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Analytics",
      description: "Track recovered income and measure ROI with comprehensive dashboards.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to protect, build, and scale your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 glass-card border-none hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
