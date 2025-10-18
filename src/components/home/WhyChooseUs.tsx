import { Brain, Zap, FileText, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Brain,
      title: "Proprietary AI",
      description: "Advanced machine learning algorithms for precise content detection",
    },
    {
      icon: Zap,
      title: "Fast Enforcement",
      description: "Automated takedown requests processed in minutes, not days",
    },
    {
      icon: FileText,
      title: "Transparent Reporting",
      description: "Real-time dashboards with detailed analytics and insights",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and expert assistance whenever needed",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Why Choose Zythorix?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading technology backed by exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex p-4 bg-white rounded-full shadow-lg">
                <reason.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
