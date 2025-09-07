"use client";

import React from "react";
import { useCurrency } from "@/contexts/CurrencyContext";

export default function Price({ amount, className }: { amount: number; className?: string }) {
  const { format } = useCurrency();
  return <span className={className}>{format(amount)}</span>;
}


