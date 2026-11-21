"use client";

import { DEMO_INQUIRIES, type DemoInquiry } from "@/lib/demo/catalog";

const KEY = "aurora-demo-inquiries";

export function readExtraInquiries(): DemoInquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as DemoInquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function rememberDemoInquiry(entry: {
  name: string;
  email: string;
  message: string;
  relatedTitle?: string;
  relatedSlug?: string;
}) {
  const item: DemoInquiry = {
    id: `local-${Date.now()}`,
    name: entry.name,
    email: entry.email,
    message: entry.message,
    relatedTitle: entry.relatedTitle || undefined,
    relatedSlug: entry.relatedSlug || undefined,
    status: "nuevo",
    createdAt: new Date().toISOString(),
  };
  const next = [item, ...readExtraInquiries()];
  window.sessionStorage.setItem(KEY, JSON.stringify(next));
}

export function demoInbox(): DemoInquiry[] {
  return [...readExtraInquiries(), ...DEMO_INQUIRIES];
}
