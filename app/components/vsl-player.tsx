'use client'

import { useLanguage } from '../contexts/language-context'
import { useState, useEffect } from 'react'

interface VSLPlayerProps {
  className?: string
}

export function VSLPlayer({ className = '' }: VSLPlayerProps) {
  const { language } = useLanguage()
  const [videoId, setVideoId] = useState<string>('')
  
  // Obtener las URLs de los videos desde las variables de entorno
  const spanishVideoUrl = process.env.NEXT_PUBLIC_VSL_SPANISH_URL || 'https://drive.google.com/file/d/1RZlAnUhNCvNnZNbLlnDywUnYwwIO52fD/view'
  const englishVideoUrl = process.env.NEXT_PUBLIC_VSL_ENGLISH_URL || 'https://drive.google.com/file/d/1kbJWlPap0vDWk7g5hkX4RBhXGin7p0OW/view'
  
  // Seleccionar la URL del video según el idioma
  const videoUrl = language === 'es' ? spanishVideoUrl : englishVideoUrl
  
  useEffect(() => {
    // Extraer el ID del video de la URL de Google Drive
    const extractVideoId = (url: string) => {
      const regex = /\/d\/([a-zA-Z0-9_-]+)/
      const match = url.match(regex)
      return match ? match[1] : ''
    }
    
    setVideoId(extractVideoId(videoUrl))
  }, [videoUrl, language])

  return (
    <div className={`vsl-player-container ${className}`}>
      {videoId ? (
        <div className="aspect-video relative w-full">
          <iframe 
            src={`https://drive.google.com/file/d/${videoId}/preview`}
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            allow="autoplay"
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <div className="aspect-video relative w-full bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <p className="text-white">El video no está disponible</p>
        </div>
      )}
    </div>
  )
} 