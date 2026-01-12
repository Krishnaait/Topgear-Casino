import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Zap, Shield, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About TOPGEAR Casino</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Bringing the excitement of casino gaming to everyone, completely free and safe.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                TOPGEAR Casino was founded with a simple mission: to provide entertainment through casino games without the financial risk. We believe everyone should be able to enjoy the thrill and excitement of casino gaming in a safe, responsible environment.
              </p>
              <p className="text-muted-foreground mb-4">
                Our platform uses virtual coins that have no real-world value, ensuring that players can enjoy the games purely for entertainment purposes. We've created a space where fun comes first, and responsibility is always maintained.
              </p>
              <p className="text-muted-foreground">
                Today, thousands of players worldwide enjoy our games, compete on leaderboards, and earn achievement badges—all without spending a single penny.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Founded with Purpose</h3>
                    <p className="text-sm text-muted-foreground">To bring joy and entertainment to everyone</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Fast & Reliable</h3>
                    <p className="text-sm text-muted-foreground">Smooth gameplay across all devices</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Safe & Secure</h3>
                    <p className="text-sm text-muted-foreground">Your data is protected and secure</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Community Focused</h3>
                    <p className="text-sm text-muted-foreground">Join thousands of players worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide a safe, entertaining, and accessible platform where players can enjoy casino games without financial risk. We're committed to promoting responsible gaming and ensuring that entertainment remains the primary focus.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the world's leading free-to-play social casino platform, where millions of players enjoy games, compete fairly, and build a vibrant community—all while maintaining the highest standards of safety and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We operate with complete transparency and honesty. All games are fair, and our terms are clear.",
              },
              {
                title: "Safety",
                description: "Player safety is paramount. We protect data, ensure secure transactions, and maintain a safe environment.",
              },
              {
                title: "Fun",
                description: "Entertainment is our core purpose. We create engaging, enjoyable games that bring joy to players.",
              },
              {
                title: "Responsibility",
                description: "We promote responsible gaming and provide resources for players to enjoy games healthily.",
              },
              {
                title: "Innovation",
                description: "We continuously improve our platform with new games, features, and better user experiences.",
              },
              {
                title: "Community",
                description: "We foster a positive, inclusive community where players can connect, compete, and celebrate together.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Free */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why We're 100% Free</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-6">
              We believe casino gaming should be accessible to everyone without financial barriers. By offering a completely free platform, we ensure that:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Players can enjoy games without any financial risk or pressure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Entertainment remains the primary focus, not profit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Everyone has equal opportunity to play and win</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Players can build skills and strategies without consequences</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>Families and friends can play together for fun</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fair Play Gaming */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Fair Play Gaming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Random Number Generation</h3>
              <p className="text-sm text-muted-foreground">
                All games use certified random number generators to ensure fair and unpredictable outcomes. Every player has an equal chance of winning.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">No House Edge Manipulation</h3>
              <p className="text-sm text-muted-foreground">
                Our games are designed with fair odds. We don't manipulate outcomes or use hidden algorithms to disadvantage players.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Transparent Rules</h3>
              <p className="text-sm text-muted-foreground">
                Every game has clear, published rules. Players know exactly how to play and what the odds are before they start.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Regular Audits</h3>
              <p className="text-sm text-muted-foreground">
                Our games are regularly tested and audited to ensure they meet the highest standards of fairness and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
