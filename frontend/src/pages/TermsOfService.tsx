import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Service"
        description="Read Zythorix Technologies' Terms of Service outlining user responsibilities, service agreements, intellectual property rights, and legal terms for our digital protection services."
        keywords="terms of service, user agreement, legal terms, service conditions, zythorix terms"
        canonical="https://zythorixtech.in/terms-of-service"
        breadcrumbs={[
          { name: "Home", url: "https://zythorixtech.in/" },
          { name: "Terms of Service", url: "https://zythorixtech.in/terms-of-service" }
        ]}
      />
      <Header />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Zythorix's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. Services Description</h2>
              <p>
                Zythorix provides anti-piracy automation, web development, content fingerprinting, and educational 
                services. We reserve the right to modify, suspend, or discontinue any service at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. User Responsibilities</h2>
              <p>Users of our services agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to breach security or authentication measures</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on Zythorix's platform remain the property 
                of Zythorix and its licensors. Users may not reproduce, distribute, or create derivative works 
                without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Anti-Piracy Services</h2>
              <p>
                Our anti-piracy services are provided on a best-effort basis. While we employ advanced technology 
                and methods, we cannot guarantee the complete prevention of content piracy. Users acknowledge that 
                results may vary based on numerous factors beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">6. Payment Terms</h2>
              <p>
                Services are billed according to the pricing model selected (per-sale basis, per-member basis, 
                or custom arrangements). Payment terms will be specified in individual service agreements. 
                Late payments may result in service suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                Zythorix shall not be liable for any indirect, incidental, special, or consequential damages 
                resulting from the use or inability to use our services. Our total liability shall not exceed 
                the amount paid for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">8. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary information shared during 
                the course of service provision. This obligation survives the termination of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">9. Termination</h2>
              <p>
                Either party may terminate services with written notice. Zythorix reserves the right to 
                immediately terminate access for violations of these terms or illegal activities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                Zythorix reserves the right to modify these Terms of Service at any time. Continued use of 
                our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">11. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes 
                shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">12. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please contact us through our official 
                communication channels provided on our website.
              </p>
            </section>

            <p className="text-sm mt-12 pt-6 border-t border-border">
              Last Updated: October 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
