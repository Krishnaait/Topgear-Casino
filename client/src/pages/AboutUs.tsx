import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Zap, Shield, Heart, Globe } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About TOPGEAR Casino</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our mission, values, and commitment to providing the best free-to-play casino experience.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Story</h2>

          <div className="space-y-6 text-muted-foreground">
            <p>
              TOPGEAR Casino was founded with a simple yet powerful vision: to bring the excitement and entertainment of casino gaming to everyone, completely free and without any financial risk. We believed that casino games should be accessible, fun, and safe for all players, regardless of their background or experience level.
            </p>

            <p>
              Our journey began when our team recognized a gap in the gaming market. While traditional casinos require real money and carry financial risk, and many online casinos have complex registration processes, there was no platform that offered pure entertainment with virtual coins and instant access. We set out to change that.
            </p>

            <p>
              Today, TOPGEAR Casino stands as a premier free-to-play social casino platform, trusted by thousands of players worldwide. We continue to innovate, improve our games, and enhance the user experience while maintaining our core values of transparency, fairness, and responsible gaming.
            </p>

            <p>
              Our name, TOPGEAR, reflects our commitment to excellence and top-tier quality. Just like the precision and performance of premium automotive engineering, we apply the same standards to every aspect of our platform—from game design to customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission & Values</h2>

          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a world-class, free-to-play casino gaming experience that entertains, excites, and engages players of all skill levels, while maintaining the highest standards of fairness, security, and responsible gaming practices.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Heart className="w-8 h-8 text-primary" />,
                    title: "Player First",
                    description: "We put our players at the center of everything we do. Your satisfaction and safety are our top priorities.",
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-primary" />,
                    title: "Integrity & Fairness",
                    description: "We operate with complete transparency and use certified random number generators to ensure all games are fair and unbiased.",
                  },
                  {
                    icon: <Zap className="w-8 h-8 text-primary" />,
                    title: "Innovation",
                    description: "We continuously evolve and improve our platform, adding new games and features based on player feedback.",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-primary" />,
                    title: "Community",
                    description: "We foster a welcoming community where players can enjoy gaming together in a safe and respectful environment.",
                  },
                  {
                    icon: <Award className="w-8 h-8 text-primary" />,
                    title: "Excellence",
                    description: "We strive for excellence in every aspect—game quality, user interface, customer support, and security.",
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-primary" />,
                    title: "Accessibility",
                    description: "We believe gaming should be accessible to everyone. No registration, no real money, just pure fun.",
                  },
                ].map((value, idx) => (
                  <div key={idx} className="bg-card border border-border rounded-lg p-6">
                    <div className="mb-4">{value.icon}</div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">What Makes Us Different</h2>

          <div className="space-y-6">
            {[
              {
                title: "100% Free & No Real Money",
                description: "Play all our games completely free. Virtual coins have no real-world value and cannot be withdrawn. It's pure entertainment with zero financial risk.",
              },
              {
                title: "No Registration Required",
                description: "Start playing instantly without creating an account. No personal information needed, no email verification, no lengthy signup process. Just visit and play.",
              },
              {
                title: "Certified Fair Games",
                description: "All our games use certified random number generators (RNG) to ensure complete fairness. Every outcome is unpredictable and unbiased. We have nothing to hide.",
              },
              {
                title: "Generous Coin System",
                description: "Start with 1,000 coins, claim 200 free coins daily, and get 500 bonus coins when you run out. We want you to keep playing and having fun.",
              },
              {
                title: "Diverse Game Selection",
                description: "Choose from 5 unique games: Blackjack, Video Slots, Roulette, Spin Wheel, and Keno. Each offers a different experience and entertainment value.",
              },
              {
                title: "Responsible Gaming Focus",
                description: "We are committed to responsible gaming practices. Our platform includes resources, guidelines, and support for players who may need help.",
              },
              {
                title: "Responsive Design",
                description: "Play on any device—smartphone, tablet, or desktop. Our platform is fully optimized for all screen sizes and browsers.",
              },
              {
                title: "Exceptional Support",
                description: "Have questions? Our dedicated support team is ready to help. We respond quickly and professionally to all inquiries.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Games */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Game Portfolio</h2>

          <p className="text-muted-foreground mb-8">
            We offer a carefully curated selection of casino games, each designed to provide maximum entertainment and engagement. Our games are developed with cutting-edge technology and tested rigorously for fairness and performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                emoji: "🎴",
                name: "Blackjack",
                description: "The classic card game where strategy meets chance. Beat the dealer to 21 and win coins.",
              },
              {
                emoji: "🎰",
                name: "Video Slots",
                description: "Spin the reels and match symbols for instant wins. Simple, fun, and exciting gameplay.",
              },
              {
                emoji: "🎡",
                name: "Roulette",
                description: "Pick your number and watch the wheel spin. Will luck be on your side today?",
              },
              {
                emoji: "🌟",
                name: "Spin Wheel",
                description: "Daily free spins with no bet required. Claim your bonus coins every 24 hours.",
              },
              {
                emoji: "🎲",
                name: "Keno",
                description: "Select numbers and watch the draw. Match more numbers for bigger payouts.",
              },
              {
                emoji: "🎪",
                name: "More Coming Soon",
                description: "We're constantly developing new games. Stay tuned for exciting additions to our portfolio.",
              },
            ].map((game, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">{game.emoji}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{game.name}</h3>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Commitment to You</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Security & Privacy</h3>
              <p className="text-muted-foreground mb-4">
                We take your security and privacy seriously. Our platform uses industry-standard encryption and security measures to protect your data. We never sell your information and collect only what's necessary to provide our service.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ SSL encryption for all data transmission</li>
                <li>✓ Regular security audits and updates</li>
                <li>✓ Strict privacy policy compliance</li>
                <li>✓ No third-party data sharing</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Responsible Gaming</h3>
              <p className="text-muted-foreground mb-4">
                We are committed to promoting responsible gaming practices. Our platform includes resources, guidelines, and support for players to maintain a healthy relationship with gaming.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Clear information about odds and payouts</li>
                <li>✓ Responsible gaming guidelines and resources</li>
                <li>✓ Support for players experiencing issues</li>
                <li>✓ Age verification (18+ only)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Continuous Improvement</h3>
              <p className="text-muted-foreground mb-4">
                We listen to our players and continuously work to improve our platform. Your feedback shapes our roadmap and helps us deliver better experiences.
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Regular game updates and improvements</li>
                <li>✓ New features based on player feedback</li>
                <li>✓ Performance optimization</li>
                <li>✓ Enhanced user experience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Company Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-4">Legal Details</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Company Name:</strong><br />
                  TOPGEAR AUTOMOTIVE SOLUTIONS PRIVATE LIMITED
                </p>
                <p>
                  <strong>CIN:</strong><br />
                  U72900BR2019OPC042541
                </p>
                <p>
                  <strong>GST:</strong><br />
                  10AAICB5202A1ZQ
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Email:</strong><br />
                  support@topgear.com
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  +91 (080) XXXX-XXXX
                </p>
                <p>
                  <strong>Website:</strong><br />
                  www.topgear.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Head Office</h3>
            <p className="text-sm text-muted-foreground">
              Mazda No-11/16, 2 A Main Road, 5th Cross, Vignannagar, Malleshpalya, Bangalore, Karnataka, India, 560075
            </p>
          </div>

          <div className="mt-6 bg-card border border-border rounded-lg p-6">
            <h3 className="font-bold text-foreground mb-4">Regional Office</h3>
            <p className="text-sm text-muted-foreground">
              409, Beside Union Bank of India, 80 Feet Double Road, AGB Layout, Hesaraghatta Main Road, Geleyara Balaga Layout, Jalahalli West, Bengaluru, Karnataka 560090, India
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of thousands of players enjoying free casino gaming. No registration, no risk, just pure entertainment!
          </p>
          <a
            href="/games"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Start Playing Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
