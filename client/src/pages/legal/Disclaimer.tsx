import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 bg-card/30 border-b border-border">
        <div className="container px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl font-bold text-foreground mb-4">Disclaimer</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Important information about the nature of TOPGEAR Casino and limitations of liability.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container max-w-4xl">
          <div className="space-y-8 text-muted-foreground">
            {/* Last Updated */}
            <div className="bg-card border border-border rounded-lg p-2 sm:p-3 md:p-4">
              <p className="text-sm">
                <strong>Last Updated:</strong> January 2026<br />
                <strong>Effective Date:</strong> January 2026
              </p>
            </div>

            {/* Critical Notice */}
            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">⚠️ CRITICAL DISCLAIMER</h2>
              <p className="text-foreground font-semibold">
                TOPGEAR Casino is a FREE-TO-PLAY ENTERTAINMENT PLATFORM. NO REAL MONEY IS INVOLVED. Virtual coins have NO REAL-WORLD VALUE and CANNOT be withdrawn, exchanged, or converted to real currency under any circumstances.
              </p>
            </div>

            {/* 1. Entertainment Only */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Entertainment Purposes Only</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino is designed and intended for entertainment purposes only. The games, activities, and services provided on the Platform are meant to provide enjoyment and amusement to users.
                </p>
                <p>
                  <strong>Not Real Gambling:</strong> TOPGEAR Casino is NOT a gambling platform. No real money is wagered, won, or lost. This is not a casino in the traditional sense, and no real gambling occurs on the Platform.
                </p>
                <p>
                  <strong>No Financial Risk:</strong> Since virtual coins have no real-world value, there is no financial risk to users. You cannot lose real money, and any winnings cannot be converted to real currency.
                </p>
              </div>
            </div>

            {/* 2. Virtual Coins Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Virtual Coins - No Real Value</h2>
              <div className="space-y-4">
                <p>
                  Virtual coins used in TOPGEAR Casino are digital tokens with no real-world monetary value. The following disclaimers apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>No Monetary Value:</strong> Virtual coins cannot be exchanged for real money, goods, or services</li>
                  <li><strong>Non-Transferable:</strong> Coins cannot be transferred to other players or third parties</li>
                  <li><strong>Non-Withdrawable:</strong> Coins cannot be withdrawn or cashed out under any circumstances</li>
                  <li><strong>No Resale:</strong> Coins cannot be sold or traded on secondary markets</li>
                  <li><strong>No Guarantee:</strong> The Company does not guarantee the value or availability of coins</li>
                  <li><strong>Subject to Change:</strong> Coin amounts, bonuses, and systems may be modified or discontinued at any time</li>
                </ul>
              </div>
            </div>

            {/* 3. No Guarantee of Winnings */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. No Guarantee of Winnings</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino makes no guarantee regarding winnings, payouts, or outcomes. The following disclaimers apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Game outcomes are determined by random number generators and are unpredictable</li>
                  <li>There is no guarantee of winning any game or earning coins</li>
                  <li>Past performance does not guarantee future results</li>
                  <li>The odds of winning vary by game and are disclosed in game rules</li>
                  <li>The Company reserves the right to adjust odds, payouts, or game mechanics at any time</li>
                  <li>No strategy or system guarantees winning</li>
                </ul>
              </div>
            </div>

            {/* 4. Platform Availability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Platform Availability and Interruption</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino is provided on an "as is" and "as available" basis. The Company makes no guarantees regarding continuous availability or uninterrupted service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The Platform may be temporarily unavailable for maintenance or updates</li>
                  <li>Technical issues or outages may occur without notice</li>
                  <li>The Company is not responsible for service interruptions or data loss</li>
                  <li>The Company may discontinue or modify the Platform at any time</li>
                  <li>The Company is not liable for damages resulting from service interruptions</li>
                </ul>
              </div>
            </div>

            {/* 5. No Professional Advice */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. No Professional Advice</h2>
              <div className="space-y-4">
                <p>
                  Information provided on TOPGEAR Casino, including game guides, tips, and strategies, is for entertainment purposes only and should not be considered professional advice:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Game strategies do not guarantee winning</li>
                  <li>Tips and guides are for entertainment purposes only</li>
                  <li>The Company does not provide financial, legal, or professional advice</li>
                  <li>Users should not rely on Platform information for decision-making</li>
                </ul>
              </div>
            </div>

            {/* 6. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
              <div className="space-y-4">
                <p>
                  To the maximum extent permitted by law, TOPGEAR Casino and its owners, operators, employees, and service providers shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Damages resulting from service interruptions or technical issues</li>
                  <li>Damages resulting from unauthorized access or data breaches</li>
                  <li>Damages resulting from your use or misuse of the Platform</li>
                  <li>Any other damages arising from your use of the Platform</li>
                </ul>
              </div>
            </div>

            {/* 7. No Warranties */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. No Warranties</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino is provided without any warranties, express or implied:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No warranty of merchantability or fitness for a particular purpose</li>
                  <li>No warranty of accuracy, completeness, or timeliness of information</li>
                  <li>No warranty of uninterrupted or error-free operation</li>
                  <li>No warranty that defects will be corrected</li>
                  <li>No warranty regarding the security or reliability of the Platform</li>
                </ul>
              </div>
            </div>

            {/* 8. User Responsibility */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. User Responsibility</h2>
              <div className="space-y-4">
                <p>
                  Users are solely responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ensuring they meet the minimum age requirement (18+)</li>
                  <li>Ensuring their use complies with local laws and regulations</li>
                  <li>Maintaining the confidentiality of their device and browser</li>
                  <li>Protecting against unauthorized access to their gaming session</li>
                  <li>Understanding game rules and mechanics before playing</li>
                  <li>Managing their own gaming habits and time spent on the Platform</li>
                  <li>Seeking help if gaming becomes problematic</li>
                </ul>
              </div>
            </div>

            {/* 9. Third-Party Content */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Third-Party Content and Links</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino may contain links to third-party websites and content. The Company disclaims responsibility for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The accuracy or completeness of third-party content</li>
                  <li>The availability or functionality of third-party websites</li>
                  <li>The privacy practices of third-party services</li>
                  <li>Any damages resulting from your use of third-party websites</li>
                </ul>
              </div>
            </div>

            {/* 10. Security Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Security Disclaimer</h2>
              <div className="space-y-4">
                <p>
                  While TOPGEAR Casino implements security measures, no system is completely secure:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The Company cannot guarantee absolute security of your data</li>
                  <li>Unauthorized access or data breaches may occur despite security measures</li>
                  <li>The Company is not liable for damages resulting from security breaches</li>
                  <li>Users should not transmit sensitive information through the Platform</li>
                </ul>
              </div>
            </div>

            {/* 11. Age Restriction Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Age Restriction Disclaimer</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino is restricted to users aged 18 and above:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>By using the Platform, you represent that you are at least 18 years old</li>
                  <li>The Company is not responsible for unauthorized access by minors</li>
                  <li>Parents and guardians are responsible for monitoring their children's internet usage</li>
                  <li>The Company reserves the right to verify age and restrict access</li>
                </ul>
              </div>
            </div>

            {/* 12. Responsible Gaming Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Responsible Gaming Disclaimer</h2>
              <div className="space-y-4">
                <p>
                  Although TOPGEAR Casino involves no real money, we encourage responsible gaming:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Set time limits for your gaming sessions</li>
                  <li>Take regular breaks</li>
                  <li>Do not use gaming as a way to make money</li>
                  <li>Seek help if gaming becomes problematic</li>
                  <li>Contact support if you have concerns about your gaming habits</li>
                </ul>
              </div>
            </div>

            {/* 13. Changes to Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Changes to This Disclaimer</h2>
              <div className="space-y-4">
                <p>
                  TOPGEAR Casino reserves the right to modify this disclaimer at any time. Changes become effective immediately upon posting. Your continued use of the Platform constitutes acceptance of the updated disclaimer.
                </p>
              </div>
            </div>

            {/* 14. Severability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Severability</h2>
              <div className="space-y-4">
                <p>
                  If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
                </p>
              </div>
            </div>

            {/* 15. Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
              <div className="space-y-4">
                <p>
                  If you have questions about this disclaimer or concerns about the Platform, please contact us:
                </p>
                <div className="bg-card border border-border rounded-lg p-2 sm:p-3 md:p-4 space-y-2">
                  <p><strong>Email:</strong> support@topgear.com</p>
                  <p><strong>Company:</strong> TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED</p>
                  <p><strong>CIN:</strong> U72900BR2019OPC042541</p>
                  <p><strong>GST:</strong> 10AAICB5202A1ZQ</p>
                </div>
              </div>
            </div>

            {/* Final Acknowledgment */}
            <div className="bg-card border-2 border-primary rounded-lg p-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
              <p className="text-sm">
                <strong>Acknowledgment:</strong> By using TOPGEAR Casino, you acknowledge that you have read and understood this disclaimer. You agree that your use of the Platform is at your own risk and that the Company is not liable for any damages or losses resulting from your use of the Platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
