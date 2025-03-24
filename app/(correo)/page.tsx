import { Metadata } from 'next';
import React from 'react'
import CorreoPage from './components/CorreoPageClient';



export const metadata: Metadata = {
  title: "Silver5 - Agente Inteligente para Gmail",
  description: "Automatiza la gestión de tus correos con nuestro Agente Inteligente para Gmail. Etiquetado automático, respuestas inteligentes y más.",
};

const page = () => {
  return (
    <CorreoPage />
  )
}

export default page