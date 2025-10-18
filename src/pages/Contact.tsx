import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
      consent: false,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform origin-left animate-[scaleX_0.5s_ease-out]" />
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's start a conversation about protecting and growing your digital presence
            </p>
          </div>
        </section>

        {/* Contact Form & Details */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="role">Role</Label>
                    <select
                      id="role"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select a role</option>
                      <option value="creator">Content Creator</option>
                      <option value="business">Business Owner</option>
                      <option value="developer">Developer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 min-h-[150px]"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1"
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to the privacy policy and terms of service
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden group"
                  >
                    <span className="relative z-10">Submit</span>
                    <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="animate-slide-in-right">
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  Get In Touch
                </h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4 p-4 glass-card rounded-lg animate-fade-up">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        123 Tech Boulevard<br />
                        Innovation District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 glass-card rounded-lg animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Email</h3>
                      <a href="mailto:info@zythorix.com" className="text-primary hover:underline">
                        info@zythorix.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 glass-card rounded-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                </div>

                {/* Map Section */}
                <div className="rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
