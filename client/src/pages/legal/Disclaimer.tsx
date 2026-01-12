import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Disclaimer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Important legal information about TOPGEAR Casino.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-muted-foreground">
            {/* Main Disclaimer */}
            <div className="bg-card border-2 border-primary rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">IMPORTANT DISCLAIMER</h2>
              <p className="text-foreground font-semibold mb-4">
                TOPGEAR Casino is a FREE-TO-PLAY SOCIAL CASINO for entertainment purposes only.
              </p>
              <div className="space-y-4">
                <p>
                  <strong>No Real Money Gambling:</strong> This platform does not involve real money gambling. No real money is wagered, won, or lost.
                </p>
                <p>
                  <strong>Virtual Coins Only:</strong> All coins used in games are virtual and have no real-world value. They cannot be withdrawn, sold, exchanged for real money, or transferred outside the platform.
                </p>
                <p>
                  <strong>Entertainment Purpose:</strong> TOPGEAR Casino is designed purely for entertainment and recreational purposes. It is not a gambling platform.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. No Real Money Transactions</h2>
              <p>
                TOPGEAR Casino does not accept, process, or facilitate any real money transactions. All games use virtual coins that have no monetary value. Players cannot purchase coins with real money, and coins cannot be converted to real money under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Entertainment Only</h2>
              <p>
                This platform is provided for entertainment and recreational purposes only. It is not a gambling service and should not be used as a means to earn money or as a financial investment. Game outcomes are determined by chance and random number generation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Age Restriction</h2>
              <p>
                TOPGEAR Casino is restricted to individuals aged 18 years and above. We do not permit access to individuals under 18. Parents and guardians are encouraged to monitor their children's internet usage and prevent access to this platform by minors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. No Guarantee of Winnings</h2>
              <p>
                TOPGEAR Casino makes no guarantee that players will win coins or achieve any specific outcome. All games are games of chance. Winning and losing are both possible outcomes, and results are unpredictable. Players should not expect to win or rely on winning for any purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Responsible Gaming</h2>
              <p>
                While TOPGEAR Casino is free and involves no real money, we encourage all players to engage responsibly. If you feel that gaming is becoming problematic or affecting your daily life, please seek help from appropriate support services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. No Professional Advice</h2>
              <p>
                The content on TOPGEAR Casino is provided for informational and entertainment purposes only. It does not constitute professional, financial, legal, or medical advice. Players should not rely on any information provided on this platform for making decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TOPGEAR Casino and its operators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the platform, even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Technical Issues</h2>
              <p>
                While we strive to maintain the platform's availability and functionality, TOPGEAR Casino is provided "as is" without warranties of any kind. We do not guarantee uninterrupted access or error-free operation. We are not liable for any technical issues, data loss, or service interruptions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Content</h2>
              <p>
                TOPGEAR Casino may contain links to third-party websites and services. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Compliance with Laws</h2>
              <p>
                TOPGEAR Casino complies with applicable laws and regulations. However, the legality of accessing this platform may vary by jurisdiction. Players are responsible for ensuring that their use of TOPGEAR Casino complies with local laws and regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to Disclaimer</h2>
              <p>
                TOPGEAR Casino reserves the right to modify this disclaimer at any time without notice. Continued use of the platform following any changes constitutes your acceptance of the updated disclaimer.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
              <p>
                If you have questions about this disclaimer or need further clarification, please contact us at support@topgear.com.
              </p>
            </div>

            {/* Final Notice */}
            <div className="bg-card border border-border rounded-xl p-8 mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> January 2026
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                By using TOPGEAR Casino, you acknowledge that you have read, understood, and agree to this disclaimer. If you do not agree, please do not use this platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
