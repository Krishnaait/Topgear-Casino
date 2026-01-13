import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useBalance } from "@/contexts/BalanceContext";
import { playSound } from "@/lib/soundEffects";

interface Card {
  suit: string;
  rank: string;
  value: number;
}

export default function Blackjack() {
  const { balance, setBalance } = useBalance();
  const [bet, setBet] = useState(10);
  const [gameState, setGameState] = useState<"betting" | "playing" | "finished">("betting");
  const [playerCards, setPlayerCards] = useState<Card[]>([]);
  const [dealerCards, setDealerCards] = useState<Card[]>([]);
  const [message, setMessage] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const suits = ["♠", "♥", "♦", "♣"];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const getCardValue = (rank: string): number => {
    if (rank === "K" || rank === "Q" || rank === "J") return 10;
    if (rank === "A") return 11;
    return parseInt(rank);
  };

  const createDeck = (): Card[] => {
    const deck: Card[] = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push({ suit, rank, value: getCardValue(rank) });
      }
    }
    return deck.sort(() => Math.random() - 0.5);
  };

  const calculateHand = (cards: Card[]): number => {
    let total = 0;
    let aces = 0;

    for (let card of cards) {
      if (card.rank === "A") {
        aces++;
        total += 11;
      } else if (card.rank === "K" || card.rank === "Q" || card.rank === "J") {
        total += 10;
      } else {
        total += parseInt(card.rank);
      }
    }

    while (total > 21 && aces > 0) {
      total -= 10;
      aces--;
    }

    return total;
  };

  const startGame = () => {
    if (bet > balance) {
      setMessage("Insufficient balance!");
      return;
    }

    const deck = createDeck();
    const player = [deck.pop()!, deck.pop()!];
    const dealer = [deck.pop()!, deck.pop()!];

    setPlayerCards(player);
    setDealerCards([dealer[0]]);
    setGameState("playing");
    setMessage("Your turn!");
    setBalance(balance - bet);
    if (soundEnabled) playSound('deal');
  };

  const hit = () => {
    const deck = createDeck();
    const newCard = deck.pop()!;
    const newPlayerCards = [...playerCards, newCard];
    setPlayerCards(newPlayerCards);
    if (soundEnabled) playSound('deal');

    const playerTotal = calculateHand(newPlayerCards);
    if (playerTotal > 21) {
      endGame(newPlayerCards, dealerCards, true);
    }
  };

  const stand = () => {
    let newDealerCards = [...dealerCards];
    const deck = createDeck();

    while (calculateHand(newDealerCards) < 17) {
      newDealerCards.push(deck.pop()!);
    }

    endGame(playerCards, newDealerCards, false);
  };

  const endGame = (playerCards: Card[], dealerCards: Card[], playerBusted: boolean) => {
    const playerTotal = calculateHand(playerCards);
    const dealerTotal = calculateHand(dealerCards);

    let result = "";
    let winAmount = 0;

    if (playerBusted) {
      result = "You busted! Dealer wins!";
      if (soundEnabled) playSound('lose');
    } else if (dealerTotal > 21) {
      result = "Dealer busted! You win!";
      winAmount = bet * 2;
      if (soundEnabled) playSound('win');
    } else if (playerTotal > dealerTotal) {
      result = "You win!";
      winAmount = bet * 2;
      if (soundEnabled) playSound('win');
    } else if (dealerTotal > playerTotal) {
      result = "Dealer wins!";
      if (soundEnabled) playSound('lose');
    } else {
      result = "It's a tie!";
      winAmount = bet;
    }

    if (winAmount > 0) {
      setBalance(balance + winAmount);
    }

    setMessage(result);
    setGameState("finished");
  };

  const resetGame = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setGameState("betting");
    setMessage("");
  };

  const playerTotal = calculateHand(playerCards);
  const dealerTotal = calculateHand(dealerCards);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-24 sm:h-32 md:h-40 overflow-hidden mb-2 sm:mb-3 md:mb-4">
        <img
          src="/images/blackjack-hero.webp"
          alt="Blackjack Game"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">BLACKJACK</h1>
        </div>
      </section>

      <div className="flex-grow container py-4 sm:py-6 md:py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground hidden">Blackjack</h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="bg-card border border-border px-3 sm:px-4 py-1 sm:py-2 rounded-lg">
              <p className="text-sm text-muted-foreground">Balance</p>
              <p className="text-lg sm:text-xl sm:text-2xl font-bold text-primary">{balance}</p>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 hover:bg-card rounded-lg transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-6 h-6" />
              ) : (
                <VolumeX className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Game Area */}
        <div className="bg-gradient-to-b from-card to-card/50 border border-border rounded-xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8">
          {/* Dealer Section */}
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-foreground mb-4">Dealer</h2>
            <div className="flex gap-2 sm:gap-4 mb-2">
              {dealerCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-20 sm:w-24 h-28 sm:h-32 bg-white rounded-lg border-2 border-primary flex items-center justify-center text-lg sm:text-xl sm:text-2xl font-bold text-primary shadow-lg animate-card-deal"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {card.rank}
                  {card.suit}
                </div>
              ))}
            </div>
            {gameState !== "betting" && (
              <p className="text-sm text-muted-foreground">
                Total: <span className="text-primary font-bold">{dealerTotal}</span>
              </p>
            )}
          </div>

          {/* Player Section */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">Your Hand</h2>
            <div className="flex gap-2 sm:gap-4">
              {playerCards.map((card, idx) => (
                <div
                  key={idx}
                  className="w-20 sm:w-24 h-28 sm:h-32 bg-white rounded-lg border-2 border-primary flex items-center justify-center text-lg sm:text-xl sm:text-2xl font-bold text-primary shadow-lg animate-card-deal"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  {card.rank}
                  {card.suit}
                </div>
              ))}
            </div>
            {gameState !== "betting" && (
              <p className="text-sm text-muted-foreground">
                Total: <span className="text-secondary font-bold">{playerTotal}</span>
              </p>
            )}
          </div>
        </div>

        {/* Betting Section */}
        {gameState === "betting" && (
          <div className="bg-card border border-border rounded-xl p-6 mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Place Your Bet</h3>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-end">
              <div className="flex-grow">
                <label className="text-sm text-muted-foreground mb-2 block">Bet Amount</label>
                <input
                  type="number"
                  value={bet}
                  onChange={(e) => setBet(Math.max(1, parseInt(e.target.value) || 1))}
                  max={balance}
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-1 sm:py-2 text-foreground"
                />
              </div>
              <Button
                onClick={startGame}
                disabled={bet > balance}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Deal Cards
              </Button>
            </div>
          </div>
        )}

        {/* Message */}
        {message && (
          <div className="bg-card border border-primary rounded-lg p-4 mb-4 sm:mb-6 md:mb-8 text-center">
            <p className="text-lg font-semibold text-primary">{message}</p>
          </div>
        )}

        {/* Action Buttons */}
        {gameState === "playing" && (
          <div className="flex gap-2 sm:gap-4 justify-center mb-4 sm:mb-6 md:mb-8">
            <Button
              onClick={hit}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Hit
            </Button>
            <Button
              onClick={stand}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Stand
            </Button>
          </div>
        )}

        {gameState === "finished" && (
          <div className="flex gap-2 sm:gap-4 justify-center mb-4 sm:mb-6 md:mb-8">
            <Button
              onClick={resetGame}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Play Again
            </Button>
          </div>
        )}
      </div>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        
        @keyframes card-flip {
          0% { transform: rotateY(90deg); opacity: 0; }
          50% { transform: rotateY(45deg); }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .animate-card-flip { animation: card-flip 0.6s ease-out; }
        
        @keyframes card-deal {
          0% { transform: translateX(-100px) translateY(-100px) scale(0.8); opacity: 0; }
          100% { transform: translateX(0) translateY(0) scale(1); opacity: 1; }
        }
        .animate-card-deal { animation: card-deal 0.5s ease-out; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(212, 175, 55, 0.3); }
          50% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.6); }
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
