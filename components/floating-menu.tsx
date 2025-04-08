'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bot, MoreHorizontal, ChevronUp, ExternalLink } from 'lucide-react'

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Menú desplegable */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 mb-2">
          {/* Bot P2P */}
          <Link href="https://p2p.silver5ai.com" target="_blank" rel="noopener noreferrer">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <Bot className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Bot P2P</span>
                <ExternalLink className="h-4 w-4 ml-1 text-gray-400" />
              </button>
            </div>
          </Link>
          
          {/* Silver P2P Manager */}
          <Link href="/p2p-manager">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300">
                <Bot className="h-5 w-5 text-purple-400" />
                <span className="font-medium">Silver P2P Manager</span>
              </button>
            </div>
          </Link>
        </div>
      )}

      {/* Botón principal (toggle) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative"
      >
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300 ${isOpen ? 'opacity-100' : ''}`}></div>
        <div className={`relative flex items-center justify-center w-14 h-14 bg-gray-900 text-white rounded-full border border-gray-700 hover:border-cyan-400 transition-all duration-300 ${isOpen ? 'border-cyan-400' : ''}`}>
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-cyan-400" />
          ) : (
            <MoreHorizontal className="h-6 w-6 text-cyan-400" />
          )}
        </div>
      </button>
    </div>
  )
} 