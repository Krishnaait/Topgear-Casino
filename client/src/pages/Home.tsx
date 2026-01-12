import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Sparkles, Shield, Trophy, Zap } from "lucide-react";

export default function Home() {
  const games = [
    {
      id: "blackjack",
      title: "Blackjack",
      description: "Classic card game. Beat the dealer to 21!",
      icon: "🎴",
      href: "/games/blackjack",
    },
    {
      id: "slots",
      title: "Video Slots",
      description: "Spin the reels and win big with virtual coins!",
      icon: "🎰",
      href: "/games/slots",
    },
    {
      id: "roulette",
      title: "Roulette",
      description: "Spin the wheel and test your luck!",
      icon: "🎡",
      href: "/games/roulette",
    },
    {
      id: "spin-wheel",
      title: "Spin Wheel",
      description: "Daily spins for bonus coins!",
      icon: "🌟",
      href: "/games/spin-wheel",
    },
    {
      id: "keno",
      title: "Keno",
      description: "Pick your numbers and win!",
      icon: "🎲",
      href: "/games/keno",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "100% Free",
      description: "No real money involved. Play for pure entertainment!",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safe & Secure",
      description: "Your data is protected. No financial transactions.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Achievements",
      description: "Earn badges and climb the leaderboard!",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Daily Bonuses",
      description: "Get free coins every day to keep playing!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-casino.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Play Free <span className="gradient-text">Casino Games</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Experience the thrill of casino gaming without real money. Enjoy Blackjack, Slots, Roulette, and more with virtual coins. 100% free, 100% fun!
            </p>

            {/* Disclaimer */}
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-4 mb-8">
              <p className="text-sm text-muted-foreground">
                <strong>⚠️ For Entertainment Purposes Only:</strong> This is a social casino platform. No real money gambling is involved. Virtual coins have no real-world value and cannot be withdrawn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/games">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-8">
                  Play Free Now
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg h-12 px-8">
                  Learn How to Play
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Play TOPGEAR Casino?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience casino gaming the way it should be - fun, safe, and completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Games</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of exciting casino games. All games use virtual coins only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started is simple. No registration required!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Start Playing",
                description: "No sign-up needed! You get 1,000 virtual coins to start.",
              },
              {
                step: "2",
                title: "Play & Win",
                description: "Play your favorite games and win more virtual coins!",
              },
              {
                step: "3",
                title: "Earn Bonuses",
                description: "Get 200 free coins daily and unlock achievement badges.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-b border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Play?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players enjoying free casino gaming. No money, no risk, just pure entertainment!
          </p>
          <Link href="/games">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-8">
              Start Playing Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
