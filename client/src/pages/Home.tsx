import { Link } from "wouter";
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
      icon: <Sparkles className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />,
      title: "100% Free",
      description: "No real money involved. Play for pure entertainment!",
    },
    {
      icon: <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />,
      title: "Safe & Secure",
      description: "Your data is protected. No financial transactions.",
    },
    {
      icon: <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />,
      title: "Achievements",
      description: "Earn badges and climb the leaderboard!",
    },
    {
      icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />,
      title: "Daily Bonuses",
      description: "Get free coins every day to keep playing!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-20 md:py-32 overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-casino.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />

        <div className="container relative z-10 px-3 sm:px-4 lg:px-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Play Free <span className="gradient-text">Casino Games</span>
            </h1>
            <p className="text-base sm:text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-4 sm:mb-6 md:mb-8">
              Experience the thrill of casino gaming without real money. Enjoy Blackjack, Slots, Roulette, and more with virtual coins. 100% free, 100% fun!
            </p>

            {/* Disclaimer */}
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg p-3 sm:p-2 sm:p-3 md:p-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <strong>⚠️ For Entertainment Purposes Only:</strong> This is a social casino platform. No real money gambling is involved. Virtual coins have no real-world value and cannot be withdrawn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 sm:p-3 md:p-4">
              <Link href="/games" className="inline-block w-full sm:w-auto">
                <span className="inline-flex items-center justify-center w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 rounded-md transition-colors">
                  Play Free Now
                </span>
              </Link>
              <Link href="/how-to-play" className="inline-block w-full sm:w-auto">
                <span className="inline-flex items-center justify-center w-full sm:w-auto border border-primary text-primary hover:bg-primary/10 font-semibold text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 rounded-md transition-colors">
                  Learn How to Play
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-10 sm:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Why Play TOPGEAR Casino?</h2>
            <p className="text-sm sm:text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Experience casino gaming the way it should be - fun, safe, and completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:p-3 md:p-4 sm:gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-2 sm:p-3 md:p-4 sm:p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:border-primary transition-colors duration-300">
                <div className="mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-12 sm:py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24 bg-card/30">
        <div className="container px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-10 sm:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Our Games</h2>
            <p className="text-sm sm:text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Choose from our collection of exciting casino games. All games use virtual coins only.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:p-3 md:p-4 sm:gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-10 sm:mb-4 sm:mb-6 md:mb-8 sm:mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:p-3 md:p-4 sm:gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full text-primary-foreground font-bold text-lg sm:text-xl mb-3 sm:mb-4">1</div>
              <h3 className="font-bold text-foreground mb-2">Sign Up</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">No registration needed! Play instantly.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full text-primary-foreground font-bold text-lg sm:text-xl mb-3 sm:mb-4">2</div>
              <h3 className="font-bold text-foreground mb-2">Get Coins</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Start with 1,000 virtual coins.</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full text-primary-foreground font-bold text-lg sm:text-xl mb-3 sm:mb-4">3</div>
              <h3 className="font-bold text-foreground mb-2">Play & Win</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Play games and win more coins!</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
