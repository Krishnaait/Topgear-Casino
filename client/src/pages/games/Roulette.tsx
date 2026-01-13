import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useBalance } from "@/contexts/BalanceContext";
import { playSound } from "@/lib/soundEffects";

export default function Roulette() {
  const { balance, setBalance } = useBalance();
  const [bet, setBet] = useState(10);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [message, setMessage] = useState("Select a number and place your bet!");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const spin = () => {
    if (!selectedNumber) {
      setMessage("Please select a number first!");
      return;
    }

    if (bet > balance) {
      setMessage("Insufficient balance!");
      return;
    }

    setSpinning(true);
    setMessage("Spinning...");
    setBalance(balance - bet);
    if (soundEnabled) playSound('spin');

    // Simulate spinning
    let spinCount = 0;
    const spinInterval = setInterval(() => {
      setResult(Math.floor(Math.random() * 37));
      spinCount++;

      if (spinCount > 15) {
        clearInterval(spinInterval);
        const finalResult = Math.floor(Math.random() * 37);
        setResult(finalResult);
        checkWin(finalResult);
        setSpinning(false);
      }
    }, 100);
  };

  const checkWin = (finalResult: number) => {
    if (finalResult === selectedNumber) {
      const winAmount = bet * 36;
      setBalance(balance - bet + winAmount);
      setMessage(`🎉 You won ${winAmount} coins! The ball landed on ${finalResult}!`);
      if (soundEnabled) playSound('win');
    } else {
      setMessage(`The ball landed on ${finalResult}. Try again!`);
      if (soundEnabled) playSound('lose');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-24 sm:h-32 md:h-40 overflow-hidden mb-2 sm:mb-3 md:mb-4">
        <img
          src="/images/roulette-hero.png"
          alt="Roulette Game"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">ROULETTE</h1>
        </div>
      </section>

      <div className="flex-grow container py-4 sm:py-6 md:py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl font-bold text-foreground hidden">Roulette</h1>
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
          {/* Roulette Wheel Display */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className={`relative w-32 h-32 rounded-full border-4 border-primary bg-gradient-to-br from-primary to-secondary flex items-center justify-center ${
              spinning ? "animate-spin-wheel" : ""
            }`}>
              {result !== null && (
                <div className="text-4xl font-bold text-primary-foreground animate-pulse-bounce">{result}</div>
              )}
              {result === null && (
                <div className="text-4xl font-bold text-primary-foreground">?</div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="bg-card border border-primary rounded-lg p-4 mb-4 sm:mb-6 md:mb-8 text-center">
            <p className="text-lg font-semibold text-primary">{message}</p>
          </div>

          {/* Number Selection */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Select a Number (0-36)</h3>
            <div className="grid grid-cols-6 md:grid-cols-9 gap-2 mb-4">
              {Array.from({ length: 37 }, (_, i) => i).map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedNumber(num)}
                  disabled={spinning}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    selectedNumber === num
                      ? "bg-primary text-primary-foreground border-2 border-primary"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
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

          {/* Spin Button */}
          <div className="flex justify-center">
            <Button
              onClick={spin}
              disabled={spinning || !selectedNumber || bet > balance}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-12"
            >
              {spinning ? "Spinning..." : "SPIN"}
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">How to Play</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Select a number from 0 to 36</li>
            <li>✓ Place your bet</li>
            <li>✓ Click SPIN to spin the wheel</li>
            <li>✓ If the ball lands on your number, you win 36x your bet!</li>
          </ul>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        
        @keyframes spin-wheel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-wheel { animation: spin-wheel 0.05s linear infinite; }
        
        @keyframes pulse-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-bounce { animation: pulse-bounce 0.6s ease-in-out; }
      `}</style>
    </div>
  );
}
