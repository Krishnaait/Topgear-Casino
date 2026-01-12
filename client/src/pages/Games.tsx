import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";

export default function Games() {
  const games = [
    {
      id: "blackjack",
      title: "Blackjack",
      description: "Classic card game. Beat the dealer to 21! Test your strategy and luck.",
      icon: "🎴",
      href: "/games/blackjack",
    },
    {
      id: "slots",
      title: "Video Slots",
      description: "Spin the reels and win big with virtual coins! Multiple themes and paylines.",
      icon: "🎰",
      href: "/games/slots",
    },
    {
      id: "roulette",
      title: "Roulette",
      description: "Spin the wheel and test your luck! Place your bets and watch the wheel turn.",
      icon: "🎡",
      href: "/games/roulette",
    },
    {
      id: "spin-wheel",
      title: "Spin Wheel",
      description: "Daily spins for bonus coins! Get free spins every 24 hours.",
      icon: "🌟",
      href: "/games/spin-wheel",
    },
    {
      id: "keno",
      title: "Keno",
      description: "Pick your numbers and win! Simple yet exciting number-picking game.",
      icon: "🎲",
      href: "/games/keno",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">All Games</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Choose from our collection of exciting casino games. All games use virtual coins only - no real money involved!
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Game Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>100% free to play - no real money required</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Virtual coins with no real-world value</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Daily bonuses and free coins</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Achievement badges and leaderboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Smooth animations and sound effects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary">✓</span>
                  <span>Mobile, tablet, and desktop friendly</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Starting Balance</h3>
                  <p className="text-sm text-muted-foreground">
                    Every player starts with 1,000 virtual coins to begin playing.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Daily Bonus</h3>
                  <p className="text-sm text-muted-foreground">
                    Claim 200 free coins every 24 hours to keep playing.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Reset Option</h3>
                  <p className="text-sm text-muted-foreground">
                    When coins run out, get 500 bonus coins to continue playing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
