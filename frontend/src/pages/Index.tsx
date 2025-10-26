import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Zythorix Technologies - Anti-Piracy Solutions & Web Development"
        description="Enterprise-grade anti-piracy automation and custom web development services. Protect your digital assets and build your web presence with Zythorix Technologies."
        keywords="anti-piracy, DMCA takedown, content protection, web development, digital security, AI automation, educational technology"
        canonical="https://zythorixtech.in/"
      />
      <Header />
      <main>
        <Hero />
        <Features />
        <WhyChooseUs />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
