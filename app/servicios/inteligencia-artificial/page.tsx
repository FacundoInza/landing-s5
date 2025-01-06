'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Bot, ArrowLeft, Brain, Network } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

export default function InteligenciaArtificial() {
  const { language } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-400 hover:text-cyan-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {isSpanish ? 'Volver al inicio' : 'Back to home'}
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {isSpanish ? 'Soluciones de Inteligencia Artificial' : 'Artificial Intelligence Solutions'}
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {isSpanish 
                ? 'Implementamos soluciones de IA que transforman y automatizan tus procesos de negocio.'
                : 'We implement AI solutions that transform and automate your business processes.'}
            </p>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
              {isSpanish ? 'Consultar ahora' : 'Inquire now'}
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <Image
              src="/placeholder.svg"
              alt={isSpanish ? "Inteligencia Artificial" : "Artificial Intelligence"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Bot className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Chatbots IA' : 'AI Chatbots',
              description: isSpanish 
                ? 'Asistentes virtuales inteligentes para atención al cliente 24/7.'
                : 'Intelligent virtual assistants for 24/7 customer service.'
            },
            {
              icon: <Brain className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Machine Learning' : 'Machine Learning',
              description: isSpanish
                ? 'Modelos predictivos y análisis de datos avanzado.'
                : 'Predictive models and advanced data analysis.'
            },
            {
              icon: <Network className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Automatización' : 'Automation',
              description: isSpanish
                ? 'Automatización inteligente de procesos empresariales.'
                : 'Intelligent automation of business processes.'
            }
          ].map((solution, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Casos de Uso' : 'Use Cases'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    alt={isSpanish ? `Caso de uso ${item}` : `Use case ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {isSpanish ? `Caso de Uso ${item}` : `Use Case ${item}`}
                </h3>
                <p className="text-gray-400">
                  {isSpanish 
                    ? 'Descripción del caso de uso y sus beneficios.'
                    : 'Description of the use case and its benefits.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Tecnologías IA' : 'AI Technologies'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square relative rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/placeholder.svg"
                  alt={`Technology ${item}`}
                  fill
                  className="object-contain p-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Listo para innovar?' : 'Ready to innovate?'}
          </h2>
          <p className="text-gray-400 mb-8">
            {isSpanish 
              ? 'Descubre cómo la IA puede transformar tu negocio.'
              : 'Discover how AI can transform your business.'}
          </p>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
            {isSpanish ? 'Contactar' : 'Contact Us'}
          </Button>
        </div>
      </div>
    </div>
  )
}

