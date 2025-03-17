'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-gray-800/50 rounded-full overflow-hidden border border-gray-700/50 p-0.5">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('es')}
        className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
          language === 'es' 
            ? 'bg-cyan-400 text-gray-900' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        ES
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
          language === 'en' 
            ? 'bg-cyan-400 text-gray-900' 
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </Button>
    </div>
  )
}

