import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms and Conditions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Please read these terms carefully before using TOPGEAR Casino.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using TOPGEAR Casino, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p>
                The materials on TOPGEAR Casino are provided on an "as is" basis. TOPGEAR makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p>
                In no event shall TOPGEAR or its suppliers be liable for any damages arising out of the use or inability to use the materials on TOPGEAR Casino, even if TOPGEAR or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on TOPGEAR Casino could include technical, typographical, or photographic errors. TOPGEAR does not warrant that any of the materials are accurate, complete, or current. TOPGEAR may make changes to the materials at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Virtual Coins</h2>
              <p>
                All coins on TOPGEAR Casino are virtual and have no real-world value. Virtual coins cannot be withdrawn, sold, exchanged for real money, or transferred outside the platform. Coins are provided solely for gameplay and entertainment purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Age Restriction</h2>
              <p>
                TOPGEAR Casino is restricted to users aged 18 and above. By using this platform, you represent and warrant that you are at least 18 years of age.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. User Conduct</h2>
              <p>
                Users agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of TOPGEAR Casino. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Harassing or causing distress to any person</li>
                <li>Obscene or offensive language or graphics</li>
                <li>Disrupting the normal flow of dialogue</li>
                <li>Attempting to gain unauthorized access</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
              <p>
                TOPGEAR may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at support@topgear.com.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
