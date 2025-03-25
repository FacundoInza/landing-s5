import Link from 'next/link'
import { MessageSquareIcon } from 'lucide-react'
import { LanguageSwitcher } from './language-switcher'

export default function Navbar() {
  return (
    <nav className="bg-[#0A0B14] border-b border-gray-800/50 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Silver5 AI
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/agent" className="text-gray-300 hover:text-cyan-400 flex items-center transition-colors duration-200">
              <MessageSquareIcon className="mr-1 h-4 w-4" />
              <span>WhatsApp Agent</span>
            </Link>
            <Link href="#servicios" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Servicios
            </Link>
            <Link href="#contacto" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">
              Contacto
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

