import { useBalance } from "@/contexts/BalanceContext";

export default function FloatingBalance() {
  const { balance } = useBalance();

  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-40 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-primary/50 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-xl sm:text-2xl">💰</span>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-semibold opacity-90">Balance</span>
          <span className="text-lg sm:text-2xl font-bold">{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
