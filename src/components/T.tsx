"use client";

import React from "react";
import { useI18n } from "@/contexts/I18nContext";

export default function T({ k, as: Tag = 'span', className }: { k: string; as?: any; className?: string }) {
  const { t } = useI18n();
  const Text = Tag as any;
  return <Text className={className}>{t(k)}</Text>;
}


