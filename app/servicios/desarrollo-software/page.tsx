'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code, ArrowLeft, Database, Cloud } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '../../contexts/language-context'

export default function DesarrolloSoftware() {
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
              {isSpanish ? 'Desarrollo de Software a Medida' : 'Custom Software Development'}
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              {isSpanish 
                ? 'Creamos soluciones personalizadas que impulsan la innovación y el crecimiento de tu negocio.'
                : 'We create custom solutions that drive innovation and business growth.'}
            </p>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
              {isSpanish ? 'Consultar ahora' : 'Inquire now'}
            </Button>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
            <Image
              src="/placeholder.svg"
              alt={isSpanish ? "Desarrollo de Software" : "Software Development"}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Code className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Desarrollo Web' : 'Web Development',
              description: isSpanish 
                ? 'Aplicaciones web modernas y escalables con las últimas tecnologías.'
                : 'Modern and scalable web applications with the latest technologies.'
            },
            {
              icon: <Database className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Bases de Datos' : 'Databases',
              description: isSpanish
                ? 'Diseño e implementación de bases de datos optimizadas y seguras.'
                : 'Design and implementation of optimized and secure databases.'
            },
            {
              icon: <Cloud className="h-8 w-8 text-cyan-400" />,
              title: isSpanish ? 'Cloud Computing' : 'Cloud Computing',
              description: isSpanish
                ? 'Soluciones en la nube para máxima escalabilidad y disponibilidad.'
                : 'Cloud solutions for maximum scalability and availability.'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Nuestro Proceso' : 'Our Process'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: isSpanish ? 'Análisis' : 'Analysis',
                description: isSpanish
                  ? 'Entendemos tus necesidades y objetivos de negocio'
                  : 'We understand your needs and business objectives'
              },
              {
                number: '02',
                title: isSpanish ? 'Diseño' : 'Design',
                description: isSpanish
                  ? 'Creamos la arquitectura y diseño de la solución'
                  : 'We create the solution architecture and design'
              },
              {
                number: '03',
                title: isSpanish ? 'Desarrollo' : 'Development',
                description: isSpanish
                  ? 'Implementamos la solución con metodologías ágiles'
                  : 'We implement the solution using agile methodologies'
              },
              {
                number: '04',
                title: isSpanish ? 'Entrega' : 'Delivery',
                description: isSpanish
                  ? 'Desplegamos y mantenemos tu solución'
                  : 'We deploy and maintain your solution'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-5xl font-bold text-cyan-400/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? 'Casos de Éxito' : 'Case Studies'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <div key={item} className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 group">
                <Image
                  src="/placeholder.svg"
                  alt={isSpanish ? `Caso de éxito ${item}` : `Case study ${item}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-2">
                    {isSpanish ? `Proyecto ${item}` : `Project ${item}`}
                  </h3>
                  <p className="text-gray-300">
                    {isSpanish 
                      ? 'Descripción breve del proyecto y sus resultados.'
                      : 'Brief description of the project and its results.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isSpanish ? '¿Listo para empezar?' : 'Ready to start?'}
          </h2>
          <p className="text-gray-400 mb-8">
            {isSpanish 
              ? 'Contáctanos para discutir tu próximo proyecto.'
              : 'Contact us to discuss your next project.'}
          </p>
          <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
            {isSpanish ? 'Contactar' : 'Contact Us'}
          </Button>
        </div>
      </div>
    </div>
  )
}

