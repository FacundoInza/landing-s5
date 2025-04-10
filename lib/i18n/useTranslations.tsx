"use client";


import { useLanguage } from "@/app/contexts/language-context";
import enMessages from "../../messages/en.json";
import esMessages from "../../messages/es.json";

type Messages = typeof enMessages;

type FaqQuestion = {
  title: string;
  content: string;
};

type FaqSection = {
  title: string;
  questions: FaqQuestion[];
};

type MessageValue = string | FaqQuestion[] | FaqSection | { [key: string]: MessageValue };

type NestedMessages = {
  [key: string]: MessageValue;
};

export function useTranslations() {
  const { language } = useLanguage();
  
  const messages: Messages = language === "es" ? esMessages : enMessages;
  
  const t = (key: string, params?: Record<string, string | number>) => {
    // Dividir la clave por puntos (ej: "common.save" -> ["common", "save"])
    const parts = key.split(".");
    
    // Navegar por el objeto de mensajes
    let result: MessageValue = messages;
    for (const part of parts) {
      if (result && typeof result === 'object' && part in result) {
        result = (result as NestedMessages)[part];
      } else {
        // Si no se encuentra la clave, devolver la clave original
        return key;
      }
    }
    
    // Si hay parámetros, reemplazar las variables
    if (params && typeof result === 'string') {
      return Object.entries(params).reduce(
        (text, [key, value]) => text.replace(`{${key}}`, String(value)),
        result
      );
    }
    
    return typeof result === 'string' ? result : key;
  };
  
  return { t, language };
} 