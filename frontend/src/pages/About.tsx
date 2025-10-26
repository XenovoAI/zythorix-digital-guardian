import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { Brain, Zap, Shield, Database, Search, Bell } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2020", event: "Company Founded", description: "Zythorix Technologies established with vision of digital protection" },
    { year: "2021", event: "AI Platform Launch", description: "Launched proprietary AI-powered anti-piracy detection system" },
    { year: "2022", event: "Global Expansion", description: "Expanded services to cover 50+ countries worldwide" },
    { year: "2023", event: "Web Development Division", description: "Launched custom web development services" },
    { year: "2024", event: "10,000+ Clients", description: "Reached milestone of protecting 10,000+ digital creators" },
  ];

  const technologies = [
    { icon: Brain, name: "AI Recognition", description: "Advanced pattern matching" },
    { icon: Zap, name: "API Integrations", description: "Seamless platform connectivity" },
    { icon: Shield, name: "Blockchain Verification", description: "Immutable proof of ownership" },
    { icon: Database, name: "Predictive Analytics", description: "Future threat modeling" },
    { icon: Search, name: "Evidence Collection", description: "Comprehensive documentation" },
    { icon: Bell, name: "Real-Time Alerts", description: "Instant notifications" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Zythorix Technologies - Digital Asset Protection & Innovation"
        description="Learn about Zythorix Technologies' journey in pioneering digital asset protection and web innovation. Our mission, vision, and cutting-edge technology platform."
        keywords="about zythorix, company history, digital protection, technology platform, mission vision"
        canonical="https://zythorixtech.in/about"
        breadcrumbs={[
          { name: "Home", url: "https://zythorixtech.in/" },
          { name: "About", url: "https://zythorixtech.in/about" }
        ]}
      />
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">
              About Zythorix
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pioneering the future of digital asset protection and web innovation
            </p>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our growth story
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative pl-8 pb-12 last:pb-0 border-l-2 border-primary/30 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -ml-2 rounded-full bg-primary" />
                  <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">{milestone.event}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-4xl font-bold text-secondary mb-6">
                  Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">Our Mission</h3>
                    <p className="text-foreground leading-relaxed">
                      To empower digital creators and businesses with cutting-edge technology that protects their intellectual property while enabling them to build and scale their online presence with confidence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">Our Vision</h3>
                    <p className="text-foreground leading-relaxed">
                      To become the global standard for digital asset protection and web innovation, creating a secure digital ecosystem where creativity and commerce thrive without fear of piracy or technical limitations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-48 h-48 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Platform */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">
                Our Technology Platform
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powered by cutting-edge technologies and innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="text-center p-6 glass-card rounded-2xl hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <tech.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
