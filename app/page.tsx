'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code, Shield, Bot, Box, Cpu, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from './contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'
import { translations } from './translations'
import { useState } from 'react'

// Asegúrate de que la variable de entorno esté disponible
const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver5-ai';
export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  // Estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState(t.useCases.cases[0].image);

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 sticky top-0 z-50 bg-[#0A0B14]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo-s5-w.png" alt="Silver5 AI" width={40} height={40} />
                <span className="font-bold text-xl">Silver5</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#servicios" className="text-gray-300 hover:text-white hidden sm:block">
                {t.nav.services}
              </Link>
              <Link href="#seguridad" className="text-gray-300 hover:text-white hidden sm:block">
                {t.nav.security}
              </Link>
              <LanguageSwitcher />
              <Link href={calendlyUrl}>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-full">
                  {t.nav.launchApp}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 flex flex-col justify-center items-center overflow-hidden h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
          <div className="absolute top-40 left-[20%] animate-float">
            <Box className="h-8 w-8 text-purple-400 opacity-50" />
          </div>
          <div className="absolute top-32 right-[25%] animate-float-delayed">
            <Shield className="h-8 w-8 text-cyan-400 opacity-50" />
          </div>
          <div className="absolute bottom-40 left-[35%] animate-float-delayed">
            <Bot className="h-8 w-8 text-purple-400 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              {t.hero.title} <span className="text-cyan-400">{t.hero.titleHighlight}</span> {t.hero.titleEnd}
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
                  {t.hero.startProject}
                </Button>
              </Link>
              <Link href={calendlyUrl}>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800 rounded-full">
                  {t.hero.viewDemo}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Technologies Section */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {[
              { name: 'AWS', description: 'Implementamos de manera rápida y personalizada en los servidores de AWS.', logo: '/aws.png' },
              { name: 'N8N', description: 'Automatización de flujos de trabajo con N8N.', logo: '/n8n.png' },
              { name: 'DeepSeek', description: 'Análisis de datos avanzado con DeepSeek.', logo: '/deepseek-color.png' },
              { name: 'OpenAI', description: 'Integración de IA avanzada con OpenAI.', logo: '/openai.png' },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center justify-between bg-gray-900 p-8 rounded-lg">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <Image src={tech.logo} alt={tech.name} width={80} height={80}  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </div>
                <Link href={calendlyUrl}>
                  <Button className="bg-cyan-400 hover:bg-red-600 text-white rounded-full px-6 py-2">
                    CONSÚLTENOS
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">
            {t.services?.title || 'Título de Servicios'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              {
                icon: <Code className="h-8 w-8 text-cyan-400" />,
                title: t.services?.custom?.title || 'Desarrollo a Medida',
                description: t.services?.custom?.description || 'Soluciones personalizadas para tu negocio con las últimas tecnologías.',
                details: t.services?.custom?.details
              },
              {
                icon: <Cpu className="h-8 w-8 text-cyan-400" />,
                title: t.services?.mobile?.title || 'Apps Móviles',
                description: t.services?.mobile?.description || 'Aplicaciones nativas y multiplataforma de alto rendimiento.',
                details: t.services?.mobile?.details
              },
              {
                icon: <Bot className="h-8 w-8 text-cyan-400" />,
                title: t.services?.ai?.title || 'IA y Automatización',
                description: t.services?.ai?.description || 'Implementación de IA y chatbots para optimizar procesos.',
                details: t.services?.ai?.details
              },
              {
                icon: <Box className="h-8 w-8 text-cyan-400" />,
                title: t.services?.cloudMigration?.title || 'Migración a la Nube',
                description: t.services?.cloudMigration?.description || 'Servicios de Migración a la Nube para AWS',
                details: t.services?.cloudMigration?.details
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                {service.details && service.details.length > 0 && (
                  <ul className="mt-4 text-sm text-gray-400 list-disc list-inside space-y-2">
                    {service.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <Link href={calendlyUrl}>
                  <Button className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
                    {index === 0 ? 'Descubre más' : index === 1 ? 'Ver Apps' : index === 2 ? 'Automatiza ahora' : 'Migra a la Nube'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="seguridad" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">{t.security.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-cyan-400" />,
                title: t.security.code.title,
                description: t.security.code.description
              },
              {
                icon: <Lock className="h-8 w-8 text-cyan-400" />,
                title: t.security.audits.title,
                description: t.security.audits.description
              },
              {
                icon: <Box className="h-8 w-8 text-cyan-400" />,
                title: t.security.infrastructure.title,
                description: t.security.infrastructure.description
              }
            ].map((feature, index) => (
              <div key={index} className="text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <Link href={calendlyUrl}>
                  <Button className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
                    {index === 0 ? 'Asegura tu código' : index === 1 ? 'Solicita una auditoría' : 'Optimiza tu infraestructura'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-gray-400 mb-8">
              {t.cta.description}
            </p>
            <Link href={calendlyUrl}>
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
                {t.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Sobre Nosotros</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: 'Julian Besteiro', linkedin: 'https://www.linkedin.com/in/julian-besteiro-software-engineer/', image: '/juli.jpeg' },
              { name: 'Facundo Inza', linkedin: 'https://www.linkedin.com/in/facundo-inza/', image: '/facu.jpeg' },
              { name: 'Miguel Angel Lupani', linkedin: 'https://www.linkedin.com/in/miguel-angel-lupani-5847b720a/', image: '/migue.jpeg' },
            ].map((person, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl text-center">
                <Image src={person.image} alt={person.name} width={100} height={100} className="mx-auto rounded-full mb-4 filter grayscale" />
                <h3 className="text-xl font-semibold text-white mb-2">{person.name}</h3>
                <Link href={person.linkedin} className="text-cyan-400 hover:text-cyan-500">
                  Ver perfil en LinkedIn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">Resuelve todas tus dudas antes de nuestra reunión.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Image src="/wpp.png" alt="WhatsApp" width={40} height={40}  />
                <span className="text-xl font-semibold text-white">{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4 mb-4">Escanea el código y escríbenos</p>
            <Image src="/qrwpp.png" alt="QR Code" width={100} height={100}  />
          </div>
          <div>
            <Image src="/blueprint.png" alt="Contact Illustration" width={300} height={300} />
          </div>
        </div>
      </section>

      {/* Sección de Casos de Uso */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t.useCases.title}</h2>
          <div className="flex justify-center mb-8">
            <div className="border-4 border-cyan-400 rounded-lg p-2 max-w-full lg:max-w-lg">
              <Image src={selectedImage} alt="Caso de Uso" layout="responsive" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.useCases.cases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm transform transition-transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(useCase.image)}
              >
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Automatizaciones para CRM */}
      <section className="border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">{t.crmAutomations.title}</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.crmAutomations.cases.map((caseItem, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm transform transition-transform hover:scale-105 cursor-pointer"
              >
                <Image src={caseItem.image} alt={caseItem.title} width={300} height={200} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
                <p className="text-gray-400">{caseItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.company}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.about}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.services}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.services}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.webDev}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.mobileDev}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Automatizaciones</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.legal}
              </h3>
              <ul className="space-y-2">
                <li><Link href="/politicas" className="text-gray-400 hover:text-white">{t.footer.privacy}</Link></li>
                <li><Link href="/terminos" className="text-gray-400 hover:text-white">{t.footer.terms}</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

