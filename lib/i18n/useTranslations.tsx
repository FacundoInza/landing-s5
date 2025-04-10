"use client";

import { useLanguage } from "./LanguageContext";
import enMessages from "../../messages/en.json";
import esMessages from "../../messages/es.json";

type Messages = typeof enMessages;

export function useTranslations() {
  const { language } = useLanguage();
  
  const messages: Messages = language === "es" ? esMessages : enMessages;
  
  const t = (key: string, params?: Record<string, string | number>) => {
    // Dividir la clave por puntos (ej: "common.save" -> ["common", "save"])
    const parts = key.split(".");
    
    // Navegar por el objeto de mensajes
    let result: any = messages;
    for (const part of parts) {
      if (result && result[part] !== undefined) {
        result = result[part];
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
    
    return result;
  };
  
  return { t, language };
} 