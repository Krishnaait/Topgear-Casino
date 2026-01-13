import { useBalance } from "@/contexts/BalanceContext";

export default function FloatingBalance() {
  const { balance } = useBalance();

  return (
    <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-30 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 sm:px-5 py-2 sm:py-3 rounded-lg border border-primary/50 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 sm:gap-2">
        <span className="text-lg sm:text-xl">💰</span>
        <div className="flex flex-col">
          <span className="text-xs sm:text-xs font-semibold opacity-90 leading-tight">Balance</span>
          <span className="text-base sm:text-lg font-bold leading-tight">{balance.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
