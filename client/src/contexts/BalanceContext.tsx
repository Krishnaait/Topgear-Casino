import React, { createContext, useContext, useState, useEffect } from "react";

interface BalanceContextType {
  balance: number;
  setBalance: (balance: number) => void;
  addBalance: (amount: number) => void;
  subtractBalance: (amount: number) => boolean;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export function BalanceProvider({ children }: { children: React.ReactNode }) {
  const [balance, setBalanceState] = useState(1000);

  // Load balance from localStorage on mount
  useEffect(() => {
    const savedBalance = localStorage.getItem("playerBalance");
    if (savedBalance) {
      setBalanceState(parseInt(savedBalance));
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

  return (
    <BalanceContext.Provider value={{ balance, setBalance, addBalance, subtractBalance }}>
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
