import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";

export default function Keno() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [drawing, setDrawing] = useState(false);
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [message, setMessage] = useState("Select 1-10 numbers and place your bet!");
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleNumber = (num: number) => {
    if (drawing) return;

    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== num));
    } else if (selectedNumbers.length < 10) {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };

  const draw = () => {
    if (selectedNumbers.length === 0) {
      setMessage("Please select at least 1 number!");
      return;
    }

    if (bet > balance) {
      setMessage("Insufficient balance!");
      return;
    }

    setDrawing(true);
    setMessage("Drawing numbers...");
    setBalance(balance - bet);

    // Draw random numbers
    const drawn: number[] = [];
    const available = Array.from({ length: 80 }, (_, i) => i + 1);

    for (let i = 0; i < 20; i++) {
      const idx = Math.floor(Math.random() * available.length);
      drawn.push(available[idx]);
      available.splice(idx, 1);
    }

    // Animate drawing
    let count = 0;
    const drawInterval = setInterval(() => {
      setDrawnNumbers(drawn.slice(0, count + 1));
      count++;

      if (count >= 20) {
        clearInterval(drawInterval);
        checkWin(drawn);
        setDrawing(false);
      }
    }, 150);
  };

  const checkWin = (drawn: number[]) => {
    const matches = selectedNumbers.filter((num) => drawn.includes(num)).length;

    const payouts: { [key: number]: number } = {
      1: 1,
      2: 2,
      3: 5,
      4: 10,
      5: 25,
      6: 50,
      7: 100,
      8: 200,
      9: 500,
      10: 1000,
    };

    const winAmount = (payouts[matches] || 0) * bet;

    if (matches === 0) {
      setMessage("No matches. Try again!");
    } else {
      setBalance((prev) => prev + winAmount);
      setMessage(`🎉 ${matches} matches! You won ${winAmount} coins!`);
    }
  };

  const clearSelection = () => {
    if (!drawing) {
      setSelectedNumbers([]);
      setDrawnNumbers([]);
      setMessage("Select 1-10 numbers and place your bet!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-80 overflow-hidden mb-8">
        <img
          src="/images/keno-hero.png"
          alt="Keno Game"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">KENO</h1>
        </div>
      </section>

      <div className="flex-grow container py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground hidden">Keno</h1>
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
        <div className="bg-gradient-to-b from-card to-card/50 border border-border rounded-xl p-8 mb-8">
          {/* Message */}
          <div className="bg-card border border-primary rounded-lg p-4 mb-8 text-center">
            <p className="text-lg font-semibold text-primary">{message}</p>
            {selectedNumbers.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Selected: {selectedNumbers.length}/10 numbers
              </p>
            )}
          </div>

          {/* Number Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Select Numbers (1-80)</h3>
            <div className="grid grid-cols-8 md:grid-cols-10 gap-2 mb-4">
              {Array.from({ length: 80 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => toggleNumber(num)}
                  disabled={drawing}
                  className={`p-3 rounded-lg font-semibold transition-all text-sm ${
                    selectedNumbers.includes(num)
                      ? "bg-primary text-primary-foreground border-2 border-primary"
                      : drawnNumbers.includes(num)
                      ? "bg-secondary text-secondary-foreground border-2 border-secondary"
                      : "bg-card border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Betting Section */}
          <div className="bg-card/50 border border-border rounded-lg p-6 mb-8">
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
              onClick={draw}
              disabled={drawing || selectedNumbers.length === 0 || bet > balance}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-12"
            >
              {drawing ? "Drawing..." : "DRAW"}
            </Button>
            <Button
              onClick={clearSelection}
              disabled={drawing}
              variant="outline"
              className="border-border"
            >
              Clear
            </Button>
          </div>
        </div>

        {/* Payouts Info */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Payouts</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((matches) => (
              <div key={matches} className="bg-card/50 border border-border rounded-lg p-3 text-center">
                <p className="text-muted-foreground">{matches} Match{matches > 1 ? "es" : ""}</p>
                <p className="text-lg font-bold text-primary">{[1, 2, 5, 10, 25, 50, 100, 200, 500, 1000][matches - 1]}x</p>
              </div>
            ))}
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
      `}</style>
    </div>
  );
}
