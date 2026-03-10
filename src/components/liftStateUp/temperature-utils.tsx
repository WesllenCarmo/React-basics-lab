import React from 'react';
export const toC = (f: number) => (f - 32 ) * (5/9);
export const toF = (c: number) => c * (9/5) + 32;

export function tryParseNumber(s: string): number | null {
  if (s.trim() === "") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};