"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SupportedCurrency = "EGP" | "USD" | "EUR";

interface CurrencyContextType {
  currency: SupportedCurrency;
  setCurrency: (c: SupportedCurrency) => void;
  format: (amount: number) => string;
  convert: (amount: number, to?: SupportedCurrency) => number;
}

// Simple fixed rates vs USD; used to convert from EGP base → target
// Approximate values; in a real app, fetch dynamically.
const rates: Record<SupportedCurrency, number> = {
  USD: 1,    // 1 USD
  EUR: 0.9,  // 1 USD ≈ 0.9 EUR
  EGP: 31,   // 1 USD ≈ 31 EGP (example)
};

const symbols: Record<SupportedCurrency, string> = {
  USD: "$",
  EUR: "€",
  EGP: "E£",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<SupportedCurrency>("EGP");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("currency") as SupportedCurrency | null;
      if (saved === "USD" || saved === "EUR" || saved === "EGP") setCurrency(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currency", currency);
    }
  }, [currency]);

  const convert = (amount: number, to: SupportedCurrency = currency) => {
    // Treat incoming amounts as EGP by default
    // Convert EGP → USD, then USD → target
    const usdFromEGP = amount / rates.EGP;
    return usdFromEGP * rates[to];
  };

  const format = (amount: number) => {
    const symbol = symbols[currency];
    const converted = convert(amount, currency);
    return `${symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  };

  const value = useMemo<CurrencyContextType>(() => ({ currency, setCurrency, format, convert }), [currency, format, convert]);
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency(): CurrencyContextType {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}


