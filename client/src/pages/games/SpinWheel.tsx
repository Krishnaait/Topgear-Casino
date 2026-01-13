import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useBalance } from "@/contexts/BalanceContext";
import { playSound } from "@/lib/soundEffects";

export default function SpinWheel() {
  const { balance, setBalance } = useBalance();
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [message, setMessage] = useState("Spin the wheel daily for bonus coins!");
  const [lastSpinTime, setLastSpinTime] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const rewards = [100, 50, 200, 75, 150, 25, 300, 125];

  useEffect(() => {
    const savedTime = localStorage.getItem("lastSpinTime");
    if (savedTime) {
      setLastSpinTime(parseInt(savedTime));
    }
  }, []);

  const canSpin = () => {
    if (!lastSpinTime) return true;
    const now = Date.now();
    const diff = now - lastSpinTime;
    return diff > 24 * 60 * 60 * 1000; // 24 hours
  };

  const getTimeUntilNextSpin = () => {
    if (!lastSpinTime) return null;
    const now = Date.now();
    const diff = now - lastSpinTime;
    const remaining = 24 * 60 * 60 * 1000 - diff;

    if (remaining <= 0) return null;

    const hours = Math.floor(remaining / (60 * 60 * 1000));
    const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
    return `${hours}h ${minutes}m`;
  };

  const spin = () => {
    if (!canSpin()) {
      setMessage(`Come back in ${getTimeUntilNextSpin()} for your next spin!`);
      return;
    }

    setSpinning(true);
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    const randomRotation = Math.random() * 360 + 1800; // Multiple rotations

    setRotation(randomRotation);
    if (soundEnabled) playSound('spin');

    setTimeout(() => {
      setBalance(balance + randomReward);
      setMessage(`🎉 You won ${randomReward} coins!`);
      setLastSpinTime(Date.now());
      localStorage.setItem("lastSpinTime", Date.now().toString());
      setSpinning(false);
      if (soundEnabled) playSound('win');
    }, 3000);
  };

  const timeUntilNext = getTimeUntilNextSpin();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section with Image */}
      <section className="relative h-40 sm:h-60 md:h-80 overflow-hidden mb-4 sm:mb-6 md:mb-8">
        <img
          src="/images/spinwheel-hero.png"
          alt="Spin Wheel Game"
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">SPIN WHEEL</h1>
        </div>
      </section>

      <div className="flex-grow container py-4 sm:py-6 md:py-8">
        {/* Game Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
          <h1 className="text-3xl font-bold text-foreground hidden">Daily Spin Wheel</h1>
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
          {/* Wheel */}
          <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
            <div className="relative w-64 h-64">
              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-primary" />
              </div>

              {/* Wheel */}
              <svg
                viewBox="0 0 200 200"
                className={`w-full h-full ${spinning ? "animate-spin-fast" : ""}`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning ? "none" : "transform 0.5s ease-out",
                }}
              >
                {rewards.map((reward, idx) => {
                  const angle = (idx / rewards.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const x = 100 + 80 * Math.cos(rad);
                  const y = 100 + 80 * Math.sin(rad);

                  return (
                    <g key={idx}>
                      <path
                        d={`M 100 100 L ${100 + 80 * Math.cos(rad)} ${100 + 80 * Math.sin(rad)} A 80 80 0 0 1 ${100 + 80 * Math.cos((angle + 360 / rewards.length) * Math.PI / 180)} ${100 + 80 * Math.sin((angle + 360 / rewards.length) * Math.PI / 180)} Z`}
                        fill={idx % 2 === 0 ? "#D4AF37" : "#C084FC"}
                        stroke="#1A0F2E"
                        strokeWidth="2"
                      />
                      <text
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-bold fill-white"
                      >
                        {reward}
                      </text>
                    </g>
                  );
                })}

                {/* Center circle */}
                <circle cx="100" cy="100" r="20" fill="#1A0F2E" stroke="#D4AF37" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <div className="bg-card border border-primary rounded-lg p-4 mb-4 sm:mb-6 md:mb-8 text-center">
            <p className="text-lg font-semibold text-primary">{message}</p>
            {timeUntilNext && (
              <p className="text-sm text-muted-foreground mt-2">Next spin available in: {timeUntilNext}</p>
            )}
          </div>

          {/* Spin Button */}
          <div className="flex justify-center">
            <Button
              onClick={spin}
              disabled={spinning || !canSpin()}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-12 px-12"
            >
              {spinning ? "Spinning..." : canSpin() ? "SPIN NOW" : "COME BACK TOMORROW"}
            </Button>
          </div>
        </div>

        {/* Info */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Daily Bonus Spin</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>✓ Spin once every 24 hours</li>
            <li>✓ Win between 25 and 300 coins</li>
            <li>✓ Free to play - no bet required</li>
            <li>✓ Bonus coins are added to your balance instantly</li>
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
      `}</style>
    </div>
  );
}
