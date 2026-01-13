import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function HowToPlay() {
  const [expandedGame, setExpandedGame] = useState<string | null>("blackjack");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 bg-card/30 border-b border-border">
        <div className="container px-3 sm:px-4 lg:px-6">
          <h1 className="text-2xl sm:text-xl sm:text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-4xl lg:text-5xl font-bold text-foreground mb-4">How to Play</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Master every game at TOPGEAR Casino with our comprehensive guides. Learn strategies, understand odds, and become an expert player.
          </p>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">Quick Start Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-2 sm:p-3 md:p-4 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            {[
              { num: "1", title: "Visit Site", desc: "No signup needed" },
              { num: "2", title: "Get Coins", desc: "Start with 1,000" },
              { num: "3", title: "Pick Game", desc: "Choose your favorite" },
              { num: "4", title: "Place Bet", desc: "Select coin amount" },
              { num: "5", title: "Play & Win", desc: "Enjoy the game" },
            ].map((step, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-2 sm:p-3 md:p-4 text-center">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary-foreground">{step.num}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Coin System */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8 mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Understanding the Coin System</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
              <div>
                <h4 className="font-bold text-primary mb-2">Starting Balance</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Every player begins with <strong>1,000 virtual coins</strong> at no cost. These coins are yours to use immediately.
                </p>
                <div className="bg-card border border-border rounded p-3">
                  <p className="text-sm font-mono text-primary">💰 1,000 coins</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-2">Daily Bonus</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Spin the Daily Spin Wheel every 24 hours to claim <strong>200 free coins</strong>. It's your daily reward!
                </p>
                <div className="bg-card border border-border rounded p-3">
                  <p className="text-sm font-mono text-primary">🎁 200 coins/day</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-2">Reset Bonus</h4>
                <p className="text-muted-foreground text-sm mb-3">
                  Run out of coins? Get <strong>500 bonus coins</strong> to continue playing and enjoying the games.
                </p>
                <div className="bg-card border border-border rounded p-3">
                  <p className="text-sm font-mono text-primary">🔄 500 coins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Game Guides */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24 bg-card/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 sm:mb-4 sm:mb-6 md:mb-8 md:mb-12">Detailed Game Guides</h2>

          <div className="space-y-4">
            {/* Blackjack */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedGame(expandedGame === "blackjack" ? null : "blackjack")}
                className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:p-3 md:p-4">
                  <span className="text-3xl">🎴</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">Blackjack</h3>
                    <p className="text-sm text-muted-foreground">Beat the dealer to 21</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    expandedGame === "blackjack" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGame === "blackjack" && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Objective</h4>
                    <p className="text-muted-foreground">
                      Get a hand value as close to 21 as possible without going over. Beat the dealer's hand to win coins equal to your bet. If you tie with the dealer, your bet is returned.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Card Values</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• <strong>Number Cards (2-10):</strong> Worth their face value</li>
                      <li>• <strong>Face Cards (J, Q, K):</strong> Worth 10 points each</li>
                      <li>• <strong>Ace:</strong> Worth 1 or 11 points (automatically chosen for best hand)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How to Play</h4>
                    <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                      <li>Place your bet by selecting coin amount</li>
                      <li>You and dealer each receive 2 cards (your cards are visible, dealer shows 1 card)</li>
                      <li>Choose to <strong>Hit</strong> (get another card) or <strong>Stand</strong> (keep your hand)</li>
                      <li>Dealer automatically plays by house rules (hits on 16 or less, stands on 17+)</li>
                      <li>Highest hand without busting wins</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Payouts</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• <strong>Win:</strong> 2x your bet</li>
                      <li>• <strong>Blackjack (21 with 2 cards):</strong> 2.5x your bet</li>
                      <li>• <strong>Tie:</strong> Your bet is returned</li>
                      <li>• <strong>Bust or Lose:</strong> Lose your bet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Strategy Tips</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Always hit on hands totaling 11 or less</li>
                      <li>• Stand on hands totaling 17 or more</li>
                      <li>• Be cautious with hands between 12-16</li>
                      <li>• Remember the dealer must hit on 16 and stand on 17</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Video Slots */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedGame(expandedGame === "slots" ? null : "slots")}
                className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:p-3 md:p-4">
                  <span className="text-3xl">🎰</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">Video Slots</h3>
                    <p className="text-sm text-muted-foreground">Spin and match symbols</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    expandedGame === "slots" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGame === "slots" && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Objective</h4>
                    <p className="text-muted-foreground">
                      Spin the reels and match symbols to win coins. The more symbols you match, the bigger your prize!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How to Play</h4>
                    <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                      <li>Select your bet amount (10, 25, 50, or 100 coins)</li>
                      <li>Click the Spin button to start the reels</li>
                      <li>Watch the reels spin and stop randomly</li>
                      <li>Matching symbols in the center line wins coins</li>
                      <li>Spin again or adjust your bet</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Winning Combinations</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• <strong>3 Matching Symbols:</strong> Win 10x your bet</li>
                      <li>• <strong>2 Matching Symbols:</strong> Win 3x your bet</li>
                      <li>• <strong>No Match:</strong> Lose your bet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Symbols</h4>
                    <p className="text-muted-foreground text-sm">
                      The game features various symbols including fruits, numbers, and special icons. Each spin is completely random with equal chances for all outcomes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Tips</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Start with smaller bets to practice</li>
                      <li>• Understand that slots are purely luck-based</li>
                      <li>• Set a budget and stick to it</li>
                      <li>• Enjoy the entertainment value</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Roulette */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedGame(expandedGame === "roulette" ? null : "roulette")}
                className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:p-3 md:p-4">
                  <span className="text-3xl">🎡</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">Roulette</h3>
                    <p className="text-sm text-muted-foreground">Pick a number and spin</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    expandedGame === "roulette" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGame === "roulette" && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Objective</h4>
                    <p className="text-muted-foreground">
                      Select a number from 0 to 36, place your bet, and watch the wheel spin. If the ball lands on your number, you win big!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How to Play</h4>
                    <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                      <li>Choose a number from 0 to 36 on the roulette table</li>
                      <li>Select your bet amount</li>
                      <li>Click Spin to start the wheel</li>
                      <li>The wheel spins and a ball lands on a random number</li>
                      <li>If it matches your number, you win!</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Payouts</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• <strong>Correct Number:</strong> Win 36x your bet</li>
                      <li>• <strong>Wrong Number:</strong> Lose your bet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Odds & Probability</h4>
                    <p className="text-muted-foreground text-sm">
                      With 37 possible numbers (0-36), your chance of winning on any single spin is 1 in 37, or approximately 2.7%. Each spin is completely independent and random.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Strategy Considerations</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Roulette is a game of pure chance</li>
                      <li>• No strategy can improve your odds</li>
                      <li>• Play for entertainment, not income</li>
                      <li>• Manage your coin budget wisely</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Spin Wheel */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedGame(expandedGame === "spin-wheel" ? null : "spin-wheel")}
                className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:p-3 md:p-4">
                  <span className="text-3xl">🌟</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">Spin Wheel</h3>
                    <p className="text-sm text-muted-foreground">Daily free bonus spins</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    expandedGame === "spin-wheel" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGame === "spin-wheel" && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Objective</h4>
                    <p className="text-muted-foreground">
                      Spin the wheel once every 24 hours to win free bonus coins. No bet required!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How to Play</h4>
                    <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                      <li>Visit the Spin Wheel section</li>
                      <li>Click the Spin button (available once per 24 hours)</li>
                      <li>The wheel spins and stops on a random segment</li>
                      <li>You win the coins shown on that segment</li>
                      <li>Coins are added to your balance instantly</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Possible Winnings</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Minimum: 25 coins</li>
                      <li>• Maximum: 300 coins</li>
                      <li>• Average: Around 100-150 coins</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Key Features</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• <strong>Free to Play:</strong> No coins required to spin</li>
                      <li>• <strong>Daily Reset:</strong> One spin every 24 hours</li>
                      <li>• <strong>No Risk:</strong> You cannot lose coins on this game</li>
                      <li>• <strong>Instant Payout:</strong> Winnings added immediately</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Tips</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Never miss your daily spin for free coins</li>
                      <li>• Use winnings to play other games</li>
                      <li>• Combine with other bonuses to maximize coins</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Keno */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedGame(expandedGame === "keno" ? null : "keno")}
                className="w-full flex items-center justify-between p-3 sm:p-2 sm:p-3 md:p-4 md:p-6 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center gap-2 sm:p-3 md:p-4">
                  <span className="text-3xl">🎲</span>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-foreground">Keno</h3>
                    <p className="text-sm text-muted-foreground">Pick numbers and win</p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    expandedGame === "keno" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGame === "keno" && (
                <div className="px-6 pb-6 border-t border-border space-y-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Objective</h4>
                    <p className="text-muted-foreground">
                      Select numbers from 1 to 80, place your bet, and watch as 20 numbers are drawn. The more of your numbers that match, the more you win!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">How to Play</h4>
                    <ol className="text-muted-foreground space-y-2 text-sm list-decimal list-inside">
                      <li>Select 1 to 10 numbers from the grid (1-80)</li>
                      <li>Choose your bet amount</li>
                      <li>Click Play to start the draw</li>
                      <li>20 numbers are randomly drawn</li>
                      <li>Your winnings depend on how many numbers match</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Payout Table</h4>
                    <div className="bg-card/50 border border-border rounded p-3 text-sm">
                      <p className="text-muted-foreground mb-2"><strong>Selecting 10 numbers:</strong></p>
                      <ul className="text-muted-foreground space-y-1 text-xs">
                        <li>• 10 matches: 1000x your bet</li>
                        <li>• 9 matches: 100x your bet</li>
                        <li>• 8 matches: 20x your bet</li>
                        <li>• 7 matches: 5x your bet</li>
                        <li>• 6 or fewer: Lose your bet</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Strategy Tips</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Start with fewer numbers (3-5) for better odds</li>
                      <li>• More numbers = higher potential payout but lower odds</li>
                      <li>• Spread numbers across the entire grid</li>
                      <li>• Remember each draw is independent</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-8 sm:py-6 sm:py-4 sm:py-6 md:py-8 lg:py-12 lg:py-16 lg:py-24">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:mb-6 md:mb-8">General Gaming Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-2 sm:p-3 md:p-4 md:gap-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
            {[
              {
                title: "Understand the Odds",
                description: "Each game has different odds and payouts. Learn them before playing to make informed decisions.",
              },
              {
                title: "Manage Your Coins",
                description: "Set a budget for your gaming session and stick to it. Don't bet more than you can afford to lose.",
              },
              {
                title: "Play for Fun",
                description: "Remember, these are games of entertainment. Enjoy the experience rather than focusing solely on winning.",
              },
              {
                title: "Take Breaks",
                description: "Gaming should be enjoyable. Take regular breaks to keep the experience fresh and fun.",
              },
              {
                title: "Try All Games",
                description: "Each game offers a unique experience. Explore different games to find your favorites.",
              },
              {
                title: "Use Bonuses Wisely",
                description: "Claim your daily bonuses and use them strategically to extend your playtime.",
              },
            ].map((tip, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-3 sm:p-2 sm:p-3 md:p-4 md:p-6">
                <h3 className="font-bold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
