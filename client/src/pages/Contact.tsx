import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 bg-card/30 border-b border-border">
        <div className="container px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a question or feedback? We would love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6 sm:gap-2 sm:p-3 md:p-4 sm:gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6 md:gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-2 sm:p-3 md:p-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">support@topgear.com</p>
                    <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-2 sm:p-3 md:p-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Head Office</h3>
                    <p className="text-muted-foreground">
                      Mazda No-11/16, 2 A Main Road, 5th Cross, Vignannagar, Malleshpalya, Bangalore, Karnataka, India, 560075
                    </p>
                  </div>
                </div>

                {/* Regional Office */}
                <div className="flex gap-2 sm:p-3 md:p-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Regional Office</h3>
                    <p className="text-muted-foreground">
                      409, Beside Union Bank of India, 80 Feet Double Road, AGB Layout, Hesaraghatta Main Road, Geleyara Balaga Layout, Jalahalli West, Bengaluru, Karnataka 560090, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="mt-12 bg-card border border-border rounded-lg p-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
                <h3 className="font-semibold text-foreground mb-4">Company Information</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Company:</strong> TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U72900BR2019OPC042541</p>
                  <p><strong>GST:</strong> 10AAICB5202A1ZQ</p>
                  <p><strong>Website:</strong> www.topgear.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="bg-card border border-primary rounded-lg p-8 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-lg font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been received. We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-card border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-primary resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
