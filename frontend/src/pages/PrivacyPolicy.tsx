import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Zythorix Technologies' Privacy Policy detailing how we collect, use, protect, and manage your personal information and data security practices."
        keywords="privacy policy, data protection, personal information, data security, gdpr, privacy rights"
        canonical="https://zythorixtech.in/privacy-policy"
        breadcrumbs={[
          { name: "Home", url: "https://zythorixtech.in/" },
          { name: "Privacy Policy", url: "https://zythorixtech.in/privacy-policy" }
        ]}
      />
      <Header />
      <main className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">1. Information We Collect</h2>
              <p>Zythorix collects various types of information to provide and improve our services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing information</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our services</li>
                <li><strong>Technical Data:</strong> IP addresses, browser types, device information, and cookies</li>
                <li><strong>Content Data:</strong> Files and content you submit for anti-piracy protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing payments and preventing fraud</li>
                <li>Detecting and removing pirated content</li>
                <li>Communicating with you about services and updates</li>
                <li>Improving our services and developing new features</li>
                <li>Complying with legal obligations and enforcing our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in service delivery</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information, including encryption, 
                secure servers, and access controls. However, no method of transmission over the internet is 100% 
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide services and fulfill the 
                purposes outlined in this policy. When information is no longer needed, we securely delete or 
                anonymize it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance user experience, analyze usage patterns, 
                and deliver personalized content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">8. Third-Party Links</h2>
              <p>
                Our services may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect 
                personal information from children. If we discover such collection, we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure 
                appropriate safeguards are in place to protect your data in accordance with this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes 
                by posting the new policy on our website and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our data practices, please 
                contact us through our official communication channels.
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

export default PrivacyPolicy;
