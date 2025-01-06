'use client'

import { useLanguage } from '@/app/contexts/language-context'
import { Button } from '@/components/ui/button'


export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('es')}
        className={`${language === 'es' ? 'text-cyan-400' : 'text-gray-400'}`}
      >
        ES
      </Button>
      <span className="text-gray-600">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`${language === 'en' ? 'text-cyan-400' : 'text-gray-400'}`}
      >
        EN
      </Button>
    </div>
  )
}

