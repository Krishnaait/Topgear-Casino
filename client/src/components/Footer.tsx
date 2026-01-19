import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src="/images/topgear-logo.webp" alt="TOPGEAR Casino" className="h-20 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Free-to-play social casino for entertainment. No real money, just fun!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Games
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-muted-foreground hover:text-primary transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/responsible-gaming" className="text-muted-foreground hover:text-primary transition-colors">
                  Responsible Gaming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@topgear.com</li>
              <li>
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="bg-muted/20 border border-muted rounded-lg p-4">
            <p className="text-xs text-muted-foreground">
              <strong>Disclaimer:</strong> TOPGEAR Social Casino is for entertainment purposes only. No real money is involved. Virtual coins have no real-world value and cannot be withdrawn or exchanged for cash. Must be 18+ to play.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
          <p>CIN: U72900BR2019OPC042541 | GST: 10AAICB5202A1ZQ</p>
        </div>
      </div>
    </footer>
  );
}
