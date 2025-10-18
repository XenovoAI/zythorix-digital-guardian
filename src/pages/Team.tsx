import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Ritesh Swain",
      title: "Founder & CEO",
      bio: "Visionary leader driving innovation in digital protection",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Vishwajeet Kumar",
      title: "Co-Founder & COO",
      bio: "Operational excellence and strategic growth expert",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhijeet Kumar",
      title: "Founding Member & Content Protection Expert",
      bio: "Pioneering anti-piracy technology and solutions",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Kirti Gupta",
      title: "Founding Member & CFO",
      bio: "Financial strategy and sustainable growth leader",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Harshit Patidar",
      title: "Founding Member & CTO",
      bio: "Technical architecture and innovation driver",
      image: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 overflow-hidden">
              <span className="inline-block animate-[fadeIn_1s_ease-out]" style={{ letterSpacing: "0.05em" }}>
                Meet the Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate innovators behind Zythorix Technologies
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="text-center animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6 inline-block">
                    {/* Photo Placeholder */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto flex items-center justify-center text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {member.bio}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-3 justify-center">
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals passionate about digital innovation
            </p>
            <a
              href="#"
              className="inline-block text-primary hover:text-primary/80 font-semibold text-lg underline"
            >
              View Open Positions →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
