import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-8 text-muted-foreground">
            {/* Last Updated */}
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm">
                <strong>Last Updated:</strong> January 2026<br />
                <strong>Effective Date:</strong> January 2026
              </p>
            </div>

            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED ("Company," "we," "us," "our," or "TOPGEAR Casino") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Platform. Your use of TOPGEAR Casino indicates your acceptance of this Privacy Policy.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <p>
                  <strong>No Registration Required:</strong> Since TOPGEAR Casino does not require registration or login, we collect minimal personal information. However, we may collect the following types of information:
                </p>

                <div className="bg-card border border-border rounded-lg p-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Device Information</h4>
                    <p className="text-sm">
                      We automatically collect information about the devices you use to access the Platform, including device type, operating system, browser type, IP address, and unique device identifiers. This information helps us optimize the Platform for different devices and detect security issues.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Usage Information</h4>
                    <p className="text-sm">
                      We collect information about how you interact with the Platform, including games played, gameplay duration, features used, and actions taken. This helps us understand user behavior and improve our services.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Location Information</h4>
                    <p className="text-sm">
                      We may collect approximate location information based on your IP address. This helps us comply with regional regulations and provide localized services. We do not collect precise GPS location data.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Cookies and Tracking Technologies</h4>
                    <p className="text-sm">
                      We use cookies, web beacons, and similar tracking technologies to maintain your gaming session, remember your preferences, and analyze Platform usage. You can control cookies through your browser settings.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Voluntary Information</h4>
                    <p className="text-sm">
                      If you contact us via email or contact form, we collect the information you provide, including your email address and message content. This information is used solely to respond to your inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4">
                <p>We use the information we collect for various purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Platform Operation:</strong> To maintain, operate, and improve the Platform</li>
                  <li><strong>User Experience:</strong> To personalize your experience and optimize content delivery</li>
                  <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security issues</li>
                  <li><strong>Analytics:</strong> To understand how users interact with the Platform and identify trends</li>
                  <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                  <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms</li>
                  <li><strong>Improvement:</strong> To develop new features, products, and services</li>
                  <li><strong>Marketing:</strong> To send you updates about new games or features (only if you opt-in)</li>
                </ul>
              </div>
            </div>

            {/* 4. Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-4">
                <p>
                  <strong>No Third-Party Sales:</strong> We do not sell, trade, or rent your personal information to third parties. Your privacy is important to us.
                </p>

                <p>
                  <strong>Service Providers:</strong> We may share information with trusted service providers who assist us in operating the Platform, including hosting providers, analytics services, and customer support platforms. These providers are contractually obligated to use your information only as necessary to provide services to us.
                </p>

                <p>
                  <strong>Legal Requirements:</strong> We may disclose your information when required by law, such as in response to subpoenas, court orders, or other legal processes. We may also disclose information to protect our rights, privacy, safety, or property, and that of our users and the public.
                </p>

                <p>
                  <strong>Business Transfers:</strong> If TOPGEAR Casino is involved in a merger, acquisition, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have regarding your information.
                </p>

                <p>
                  <strong>Aggregated Data:</strong> We may share aggregated, anonymized data that cannot identify you with third parties for research, marketing, and analytics purposes.
                </p>
              </div>
            </div>

            {/* 5. Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <div className="space-y-4">
                <p>
                  We implement comprehensive security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. Our security measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure servers with firewalls and intrusion detection</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security. You use the Platform at your own risk.
                </p>
              </div>
            </div>

            {/* 6. Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
              <div className="space-y-4">
                <p>
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. The retention period depends on the type of information and the purpose for which we use it.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Session Data:</strong> Stored locally on your device and cleared when you clear your browser cache</li>
                  <li><strong>Usage Analytics:</strong> Retained for up to 2 years for analysis and improvement purposes</li>
                  <li><strong>Support Communications:</strong> Retained for 1 year after the last communication</li>
                  <li><strong>Legal Records:</strong> Retained as long as required by applicable law</li>
                </ul>
              </div>
            </div>

            {/* 7. Your Privacy Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Privacy Rights</h2>
              <div className="space-y-4">
                <p>
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>

                <div className="bg-card border border-border rounded-lg p-4 space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Right to Access</h4>
                    <p className="text-sm">
                      You have the right to request access to the personal information we hold about you.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Right to Correction</h4>
                    <p className="text-sm">
                      You have the right to request correction of inaccurate or incomplete information.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Right to Deletion</h4>
                    <p className="text-sm">
                      You have the right to request deletion of your personal information, subject to certain legal exceptions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Right to Opt-Out</h4>
                    <p className="text-sm">
                      You have the right to opt-out of marketing communications and certain data processing activities.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Right to Data Portability</h4>
                    <p className="text-sm">
                      You have the right to request your data in a portable format.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  To exercise any of these rights, please contact us at support@topgear.com with your request. We will respond within 30 days.
                </p>
              </div>
            </div>

            {/* 8. Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
              <div className="space-y-4">
                <p>
                  <strong>What are Cookies?</strong> Cookies are small text files stored on your device that help us recognize you and remember your preferences.
                </p>

                <p>
                  <strong>Types of Cookies We Use:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for the Platform to function properly</li>
                  <li><strong>Performance Cookies:</strong> Help us understand how users interact with the Platform</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Analytics Cookies:</strong> Collect information about Platform usage</li>
                </ul>

                <p className="mt-4">
                  <strong>Cookie Control:</strong> You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect Platform functionality.
                </p>
              </div>
            </div>

            {/* 9. Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Links and Services</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino may contain links to third-party websites and services. This Privacy Policy applies only to information collected through our Platform. We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of any third-party services before providing your information.
                </p>
              </div>
            </div>

            {/* 10. Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child's access to the Platform.
                </p>
                <p>
                  Parents and guardians who believe their child has provided information to TOPGEAR Casino should contact us immediately at support@topgear.com.
                </p>
              </div>
            </div>

            {/* 11. International Data Transfer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. International Data Transfer</h2>
              <div className="space-y-4">
                <p>
                  Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using TOPGEAR Casino, you consent to the transfer of your information to countries outside your country of residence.
                </p>
              </div>
            </div>

            {/* 12. Changes to Privacy Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <div className="space-y-4">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last Updated" date at the top of this policy. Your continued use of the Platform following the posting of revised Privacy Policy means you accept and agree to the changes.
                </p>
              </div>
            </div>

            {/* 13. Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
              <div className="space-y-4">
                <p>
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                  <p><strong>Email:</strong> support@topgear.com</p>
                  <p><strong>Company:</strong> TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U72900BR2019OPC042541</p>
                  <p><strong>GST:</strong> 10AAICB5202A1ZQ</p>
                </div>
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-card border-2 border-primary rounded-lg p-6">
              <p className="text-sm">
                <strong>Privacy Commitment:</strong> We are committed to protecting your privacy and maintaining your trust. If you believe we have not complied with this Privacy Policy, please contact us immediately. We will investigate and take appropriate action to resolve your concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
