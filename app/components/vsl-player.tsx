'use client'

import { useLanguage } from '../contexts/language-context'

interface VSLPlayerProps {
  className?: string
}

export function VSLPlayer({ className = '' }: VSLPlayerProps) {
  const { language } = useLanguage()
  
  // Obtener las URLs de embed de los videos desde las variables de entorno
  const spanishVideoUrl = process.env.NEXT_PUBLIC_VSL_SPANISH_URL || 'https://www.loom.com/embed/b5a9f03d1a694a32bcb753d2d95d7eca'
  const englishVideoUrl = process.env.NEXT_PUBLIC_VSL_ENGLISH_URL || 'https://www.loom.com/embed/b5a9f03d1a694a32bcb753d2d95d7eca'
  
  // Seleccionar la URL de embed del video según el idioma
  const videoEmbedUrl = language === 'es' ? spanishVideoUrl : englishVideoUrl
  
  // No necesitamos extraer el ID ni usar useEffect para esto
  // useEffect(() => {
  //   // Extraer el ID del video de la URL de Google Drive
  //   const extractVideoId = (url: string) => {
  //     const regex = /\/d\/([a-zA-Z0-9_-]+)/
  //     const match = url.match(regex)
  //     return match ? match[1] : ''
  //   }
    
  //   setVideoId(extractVideoId(videoUrl))
  // }, [videoUrl, language])

  return (
    <div className={`vsl-player-container ${className}`}>
      {videoEmbedUrl ? (
        <div className="aspect-video relative w-full">
          <iframe 
            src={videoEmbedUrl} // Usar directamente la URL de embed
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            allow="autoplay; encrypted-media" // Permitir autoplay y media encriptada
            allowFullScreen // Permitir pantalla completa
            frameBorder="0"
            title="VSL Player" // Añadir un título por accesibilidad
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