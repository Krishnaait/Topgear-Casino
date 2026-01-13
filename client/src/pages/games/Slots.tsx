import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useBalance } from "@/contexts/BalanceContext";
import { playSound } from "@/lib/soundEffects";

export default function Slots() {
  const { balance, setBalance } = useBalance();
  const [bet, setBet] = useState(10);
  const [spinning, setSpinning] = useState(false);
  const [reels, setReels] = useState(["🍎", "🍎", "🍎"]);
  const [message, setMessage] = useState("Click Spin to play!");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const symbols = ["🍎", "🍊", "🍋", "🍌", "🍇", "🍓"];

  const spin = () => {
    if (bet > balance) {
      setMessage("Insufficient balance!");
      return;
    }

    setSpinning(true);
    setMessage("Spinning...");
    setBalance(balance - bet);
    if (soundEnabled) playSound('spin');

    // Simulate spinning animation
    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
      spinCount++;

      if (spinCount > 20) {
        clearInterval(spinInterval);
        const finalReels = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
        ];
        setReels(finalReels);
        checkWin(finalReels, balance - bet);
        setSpinning(false);
      }
    }, 100);
  };

  const checkWin = (reels: string[], currentBalance: number) => {
    if (reels[0] === reels[1] && reels[1] === reels[2]) {
      const winAmount = bet * 10;
      setBalance(currentBalance + winAmount);
      setMessage(`🎉 You won ${winAmount} coins!`);
      if (soundEnabled) playSound('win');
    } else {
      setMessage("Try again!");
      if (soundEnabled) playSound('lose');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-40 sm:h-60 md:h-80 overflow-hidden mb-4 sm:mb-6 md:mb-8">
        <img
          src="/images/slots-hero.png"
          alt="Slots Game"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">SLOTS</h1>
        </div>
      </section>

      <div className="flex-grow container py-4 sm:py-6 md:py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl font-bold text-foreground hidden">Slots</h1>
          <div className="flex items-center gap-4">
            <div className="bg-card border border-border px-4 py-2 rounded-lg">
              <p className="text-sm text-muted-foreground">Balance</p>
              <p className="text-2xl font-bold text-primary">{balance}</p>
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
          {/* Reels */}
          <div className="flex gap-6 justify-center mb-4 sm:mb-6 md:mb-8">
            {reels.map((reel, idx) => (
              <div
                key={idx}
                className={`w-32 h-32 bg-white rounded-lg border-4 border-primary flex items-center justify-center text-6xl shadow-lg ${
                  spinning ? "animate-spin-reel" : "animate-bounce-in"
                }`}
              >
                {reel}
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="bg-card border border-primary rounded-lg p-4 mb-4 sm:mb-6 md:mb-8 text-center">
            <p className="text-lg font-semibold text-primary">{message}</p>
          </div>

          {/* Betting Section */}
          <div className="bg-card/50 border border-border rounded-lg p-6 mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Bet Amount</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-grow">
                <input
                  type="number"
                  value={bet}
                  onChange={(e) => setBet(Math.max(1, parseInt(e.target.value) || 1))}
                  max={balance}
                  className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => setBet(Math.max(1, bet - 10))}
                  variant="outline"
                  className="border-border"
                >
                  -
                </Button>
                <Button
                  onClick={() => setBet(bet + 10)}
                  variant="outline"
                  className="border-border"
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={spin}
              disabled={spinning || bet > balance}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-12"
            >
              {spinning ? "Spinning..." : "SPIN"}
            </Button>
          </div>
        </div>

        {/* How to Play */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">How to Play</h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>🎯 <span className="text-foreground font-semibold">Objective:</span> Match three symbols to win!</p>
            <p>💰 <span className="text-foreground font-semibold">Payouts:</span></p>
            <p>✨ 3 matching symbols: <span className="text-primary font-bold">10x bet</span></p>
            <p>❌ No match: <span className="text-destructive font-bold">Lose bet</span></p>
            <div className="text-xs">
              <p className="text-muted-foreground">Example: If you bet 10 coins and get 3 matching symbols, you win 100 coins!</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        
        @keyframes spin-reel {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .animate-spin-reel { animation: spin-reel 0.1s linear infinite; }
        
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in { animation: bounce-in 0.5s ease-out; }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(192, 132, 252, 0.4); }
          50% { box-shadow: 0 0 30px rgba(192, 132, 252, 0.8); }
        }
        .animate-glow-pulse { animation: glow-pulse 1.5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
