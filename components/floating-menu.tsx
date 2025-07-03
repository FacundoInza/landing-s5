'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bot, MoreHorizontal, ChevronUp, Users, MessageSquare, ClipboardList, Brain } from 'lucide-react'

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Menú desplegable */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-3 mb-2">
          {/* Gestión de Clientes */}
          <Link href="/p2p-manager/gestion-clientes">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300">
                <Users className="h-5 w-5 text-purple-400" />
                <span className="font-medium">Gestión de Clientes</span>
              </button>
            </div>
          </Link>
          
          {/* Bot de Posicionamiento */}
          <Link href="/p2p-manager/bot-posicionamiento">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-green-400 transition-all duration-300">
                <Bot className="h-5 w-5 text-green-400" />
                <span className="font-medium">Bot de Posicionamiento</span>
              </button>
            </div>
          </Link>
          
          {/* Gestión de Órdenes */}
          <Link href="/p2p-manager/gestion-ordenes">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-orange-400 transition-all duration-300">
                <ClipboardList className="h-5 w-5 text-orange-400" />
                <span className="font-medium">Gestión de Órdenes</span>
              </button>
            </div>
          </Link>
          
          {/* Chats Centralizados */}
          <Link href="/p2p-manager/chats-centralizados">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <MessageSquare className="h-5 w-5 text-cyan-400" />
                <span className="font-medium">Chats Centralizados</span>
              </button>
            </div>
          </Link>
          
          {/* P2P Manager Principal */}
          <Link href="/p2p-manager">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <button className="relative flex items-center space-x-2 bg-gray-900 text-white px-4 py-3 rounded-full border border-gray-700 hover:border-purple-400 transition-all duration-300">
                <Brain className="h-5 w-5 text-purple-400" />
                <span className="font-medium">P2P Manager</span>
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