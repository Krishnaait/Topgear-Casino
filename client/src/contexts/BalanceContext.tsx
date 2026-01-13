import React, { createContext, useContext, useState, useEffect } from "react";

interface BalanceContextType {
  balance: number;
  setBalance: (balance: number) => void;
  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => boolean;
  claimDailyBonus: () => boolean;
  canClaimBonus: () => boolean;
  getTimeUntilNextBonus: () => string;
  topUpCredits: (amount: number) => void;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export function BalanceProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalanceState] = useState(1000);
  const [lastBonusTime, setLastBonusTime] = useState<number | null>(null);

  // Load balance and bonus time from localStorage on mount
  useEffect(() => {
    const savedBalance = localStorage.getItem("playerBalance");
    const savedBonusTime = localStorage.getItem("lastBonusTime");
    
    if (savedBalance) {
      setBalanceState(parseInt(savedBalance));
    }
    if (savedBonusTime) {
      setLastBonusTime(parseInt(savedBonusTime));
    }
  }, []);

  // Save balance to localStorage whenever it changes
  const setBalance = (newBalance: number) => {
    setBalanceState(newBalance);
    localStorage.setItem("playerBalance", newBalance.toString());
  };

  const addBalance = (amount: number) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
  };

  const subtractBalance = (amount: number): boolean => {
    if (balance >= amount) {
      const newBalance = balance - amount;
      setBalance(newBalance);
      return true;
    }
    return false;
  };

  const canClaimBonus = (): boolean => {
    if (!lastBonusTime) return true;
    
    const now = Date.now();
    const timeSinceLastBonus = now - lastBonusTime;
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    return timeSinceLastBonus >= twentyFourHours;
  };

  const getTimeUntilNextBonus = (): string => {
    if (!lastBonusTime) return "Ready to claim!";
    
    const now = Date.now();
    const timeSinceLastBonus = now - lastBonusTime;
    const twentyFourHours = 24 * 60 * 60 * 1000;
    
    if (timeSinceLastBonus >= twentyFourHours) {
      return "Ready to claim!";
    }
    
    const timeRemaining = twentyFourHours - timeSinceLastBonus;
    const hours = Math.floor(timeRemaining / (60 * 60 * 1000));
    const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
    
    return `${hours}h ${minutes}m`;
  };

  const claimDailyBonus = (): boolean => {
    if (canClaimBonus()) {
      addBalance(500);
      setLastBonusTime(Date.now());
      localStorage.setItem("lastBonusTime", Date.now().toString());
      return true;
    }
    return false;
  };

  const topUpCredits = (amount: number) => {
    addBalance(amount);
  };

  return (
    <BalanceContext.Provider 
      value={{ 
        balance, 
        setBalance, 
        addBalance, 
        subtractBalance,
        claimDailyBonus,
        canClaimBonus,
        getTimeUntilNextBonus,
        topUpCredits
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
}

export function useBalance() {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalance must be used within BalanceProvider");
  }
  return context;
}
