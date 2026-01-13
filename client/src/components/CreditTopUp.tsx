import { useState, useEffect } from "react";
import { useBalance } from "@/contexts/BalanceContext";
import { Gift, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CreditTopUp() {
  const { balance, topUpCredits, claimDailyBonus, canClaimBonus, getTimeUntilNextBonus } = useBalance();
  const [showTopUpModal, setShowTopUpModal] = useState(false);
  const [timeUntilBonus, setTimeUntilBonus] = useState(getTimeUntilNextBonus());

  // Update countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilBonus(getTimeUntilNextBonus());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [getTimeUntilNextBonus]);

  const handleDailyBonus = () => {
    if (claimDailyBonus()) {
      toast.success("🎉 Claimed 500 bonus credits!");
      setTimeUntilBonus(getTimeUntilNextBonus());
    } else {
      toast.error(`Daily bonus already claimed. Available in ${timeUntilBonus}`);
    }
  };

  const handleTopUp = (amount: number) => {
    topUpCredits(amount);
    toast.success(`✨ Added ${amount} free credits!`);
    setShowTopUpModal(false);
  };

  return (
    <>
      {/* Floating Action Buttons - Always Visible */}
      <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 flex flex-col gap-2 sm:gap-3">
        {/* Top-up Button */}
        <button
          onClick={() => setShowTopUpModal(true)}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-lg hover:shadow-accent/50 transition-all whitespace-nowrap"
          title="Get free credits"
        >
          <Plus className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Free Credits</span>
          <span className="sm:hidden">Credits</span>
        </button>

        {/* Daily Bonus Button */}
        <button
          onClick={handleDailyBonus}
          disabled={!canClaimBonus()}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all whitespace-nowrap ${
            canClaimBonus()
              ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
              : "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
          }`}
          title={canClaimBonus() ? "Claim daily bonus" : `Available in ${timeUntilBonus}`}
        >
          <Gift className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Daily Bonus</span>
          <span className="sm:hidden">Bonus</span>
        </button>
      </div>

      {/* Top-up Modal */}
      {showTopUpModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 max-w-sm w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Get Free Credits</h2>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <button
                onClick={() => handleTopUp(500)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all text-base sm:text-lg"
              >
                + 500 Credits
              </button>
              <button
                onClick={() => handleTopUp(1000)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all text-base sm:text-lg"
              >
                + 1,000 Credits
              </button>
              <button
                onClick={() => handleTopUp(2000)}
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/50 text-primary-foreground font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all text-base sm:text-lg"
              >
                + 2,000 Credits
              </button>
              <button
                onClick={() => handleTopUp(5000)}
                className="w-full bg-gradient-to-r from-accent to-accent/80 hover:shadow-lg hover:shadow-accent/50 text-accent-foreground font-semibold py-3 sm:py-4 px-4 rounded-lg transition-all text-base sm:text-lg border-2 border-accent"
              >
                + 5,000 Credits (Bonus!)
              </button>
            </div>

            <button
              onClick={() => setShowTopUpModal(false)}
              className="w-full bg-muted text-muted-foreground hover:bg-muted/80 font-semibold py-2 sm:py-3 px-4 rounded-lg transition-all text-base sm:text-lg"
            >
              Close
            </button>

            <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4 sm:mt-6">
              All credits are free and for entertainment only. No real money involved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
