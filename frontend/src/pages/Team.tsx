import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import riteshPhoto from "@/assets/ritesh-swain.jpg";
import vishwajeetPhoto from "@/assets/vishwajeet-kumar.jpg";
import abhijeetPhoto from "@/assets/abhijeet-kumar.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Ritesh Swain",
      title: "Founder & CEO",
      bio: "Studying BSc Geology at Central University of Karnataka, Ritesh is a renowned EdTech influencer who has collaborated with NEETPrep and Aakash Education to design adaptive learning strategies, create engaging video content, and scale student communities across social platforms.",
      image: riteshPhoto,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Vishwajeet Kumar",
      title: "Co-Founder & COO",
      bio: "Holds a BTech in AI Engineering from NIAR Vadodara, Vishwajeet spearheads our AI initiatives, architecting machine learning pipelines and intelligent automations that drive real-time piracy detection and seamless integration with enterprise systems.",
      image: vishwajeetPhoto,
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
      },
    },
    {
      name: "Abhijeet Kumar",
      title: "Founding Member & Content Protection Expert",
      bio: "A pioneering EdTech security specialist, Abhijeet has built robust anti-piracy frameworks for India's top learning platforms, executed advanced DMCA takedowns, and preserved premium educational content valued at millions through forensic watermarking and AI-driven enforcement.",
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
      bio: "Pursuing a BSc in Psychology at Central University of Karnataka, Kirti combines behavioral insights with financial acumen to optimize budget allocations, forecast growth trajectories, and craft data-driven funding strategies that sustain our global anti-piracy operations.",
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
      bio: "An Indian entrepreneur and innovator, Harshit is Founder & CEO of Xenovo AI—championing breakthroughs in AI, blockchain, and decentralized systems—and Co-Founder of SirCBSE.com. At Zythorix, he leads development of cutting-edge software architectures and scalable security solutions.",
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
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-48 h-48 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 mx-auto flex items-center justify-center text-4xl font-bold text-white group-hover:scale-105 transition-transform duration-300">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
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
