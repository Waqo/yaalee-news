import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const languages = {
  en: { name: 'English', nativeName: 'English' },
  om: { name: 'Oromo', nativeName: 'Afaan Oromoo' },
  am: { name: 'Amharic', nativeName: 'አማርኛ' },
};

export type Language = keyof typeof languages;

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
}

export function formatDate(date: string, locale: string = 'en') {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
