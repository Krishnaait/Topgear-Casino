import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HowToPlay() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-12 md:py-16 bg-card/30 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How to Play</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Learn how to get started and make the most of your TOPGEAR Casino experience.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Getting Started</h2>

          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "No Sign-Up Required",
                description: "Simply visit TOPGEAR Casino and start playing immediately. No registration, no login, no hassle!",
              },
              {
                step: "2",
                title: "Receive Starting Coins",
                description: "Every player starts with 1,000 virtual coins. These are completely free and have no real-world value.",
              },
              {
                step: "3",
                title: "Choose Your Game",
                description: "Browse our collection of games: Blackjack, Video Slots, Roulette, Spin Wheel, and Keno.",
              },
              {
                step: "4",
                title: "Place Your Bet",
                description: "Select how many coins you want to bet. You can adjust your bet amount at any time.",
              },
              {
                step: "5",
                title: "Play & Win",
                description: "Follow the game rules and try to win! Winning coins are added to your balance instantly.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit System */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Credit System</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Starting Balance</h3>
              <p className="text-muted-foreground">
                Every new player receives <strong>1,000 virtual coins</strong> to begin playing. Use these coins to explore different games and find your favorites.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Daily Bonus</h3>
              <p className="text-muted-foreground">
                Claim <strong>200 free coins every 24 hours</strong>. Simply visit the Daily Spin Wheel to collect your bonus. This helps you keep playing even if you run out of coins.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Reset Option</h3>
              <p className="text-muted-foreground">
                When you've used all your coins, you can get a <strong>500 coin reset bonus</strong> to continue playing. This ensures you never run out of coins permanently.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Winning Coins</h3>
              <p className="text-muted-foreground">
                Win coins by playing games successfully. Winning coins are added to your balance instantly and can be used for future games.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Virtual Coins Only</h3>
              <p className="text-muted-foreground">
                All coins are virtual and have <strong>no real-world value</strong>. They cannot be withdrawn, sold, or exchanged for real money. They're purely for gameplay and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Rules */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Game Rules</h2>

          <div className="space-y-6">
            {[
              {
                game: "Blackjack",
                rules: [
                  "Try to get a hand value closer to 21 than the dealer without going over 21",
                  "Face cards (K, Q, J) are worth 10 points",
                  "Aces can be worth 1 or 11 points",
                  "Hit to get another card, Stand to keep your hand",
                  "If you go over 21, you bust and lose your bet",
                  "If you beat the dealer's hand, you win 2x your bet",
                ],
              },
              {
                game: "Video Slots",
                rules: [
                  "Spin the reels and try to match symbols",
                  "All 3 symbols matching: Win 10x your bet",
                  "2 symbols matching: Win 3x your bet",
                  "No matches: Lose your bet",
                  "Adjust your bet before spinning",
                  "Results are completely random",
                ],
              },
              {
                game: "Roulette",
                rules: [
                  "Select a number from 0 to 36",
                  "Place your bet",
                  "The wheel spins and a ball lands on a number",
                  "If the ball lands on your number, you win 36x your bet",
                  "If it doesn't match, you lose your bet",
                  "Each spin is independent",
                ],
              },
              {
                game: "Spin Wheel",
                rules: [
                  "Spin once every 24 hours for free",
                  "No bet required - it's a bonus spin",
                  "Win between 25 and 300 coins",
                  "Bonus coins are added to your balance",
                  "Come back tomorrow for another spin",
                  "Perfect for daily free coins",
                ],
              },
              {
                game: "Keno",
                rules: [
                  "Select 1 to 10 numbers from 1 to 80",
                  "Place your bet",
                  "20 numbers are drawn randomly",
                  "Winnings depend on how many of your numbers match",
                  "More matches = bigger winnings",
                  "Up to 1000x your bet for 10 matches",
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">{item.game}</h3>
                <ul className="space-y-2">
                  {item.rules.map((rule, ruleIdx) => (
                    <li key={ruleIdx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary flex-shrink-0">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Strategies */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tips & Strategies</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Start Small</h3>
              <p className="text-muted-foreground">
                Begin with small bets to learn how each game works. As you get comfortable, you can increase your bets.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Claim Daily Bonuses</h3>
              <p className="text-muted-foreground">
                Don't forget to spin the Daily Spin Wheel every 24 hours to get free coins. This keeps your balance topped up.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Understand the Odds</h3>
              <p className="text-muted-foreground">
                Each game has different odds and payouts. Learn the rules before playing to make informed decisions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Play for Fun</h3>
              <p className="text-muted-foreground">
                Remember, this is entertainment! Enjoy the games, don't stress about wins or losses, and have fun!
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Try All Games</h3>
              <p className="text-muted-foreground">
                Each game is unique. Try them all to find which ones you enjoy the most.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
