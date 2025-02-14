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

  // Estado para el caso de uso seleccionado
  const [selectedCase, setSelectedCase] = useState(0);

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
      <section className="relative pt-20 pb-32 flex flex-col justify-center items-center overflow-hidden h-screen bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />
          <div className="absolute top-40 left-[20%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute top-32 right-[25%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute bottom-40 left-[35%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-20 right-[15%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
          <div className="absolute top-10 left-[50%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-8">
              {t.hero.title} <span className="text-cyan-400">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={calendlyUrl}>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
                  {t.hero.cta}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="relative flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 right-[20%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">Tecnologías que Utilizamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Binance', description: 'Automatización y gestión de operaciones en Binance.', logo: '/binance-logo.svg' },
              { name: 'N8N', description: 'Automatización de flujos de trabajo con N8N.', logo: '/n8n.png' },
              { name: 'AWS', description: 'Implementación rápida y personalizada en servidores de AWS.', logo: '/aws.png' },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                <img src={tech.logo} alt={tech.name} className="mb-4 w-20 h-20 object-contain" />
                <h3 className={`text-2xl font-bold mb-2 ${tech.name === 'Binance' ? 'text-yellow-500' : 'text-white'}`}>{tech.name}</h3>
                <p className="text-gray-400 text-center">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Casos de Uso */}
            <section className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.useCases.title}</h2>
          <div className="flex justify-center mb-8">
            {t.useCases.cases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setSelectedCase(index)}
                className={`px-4 py-2 mx-2 rounded-full ${selectedCase === index ? 'bg-cyan-400 text-gray-900' : 'bg-gray-800 text-white'}`}
              >
                {useCase.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <img src={t.useCases.cases[selectedCase].image} alt={t.useCases.cases[selectedCase].title} className="mb-4 object-contain" />
            <p className="text-gray-400 text-center">{t.useCases.cases[selectedCase].description}</p>
          </div>
        </div>
      </section>

      {/* Identificación de Dolor */}
      <section className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-[15%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-20 right-[25%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.painPoints.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.painPoints.points.map((point, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <section className="border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">{t.finalCta.title}</h2>
          <Link href={calendlyUrl}>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 rounded-full">
              {t.finalCta.cta}
            </Button>
          </Link>
        </div>
      </section>




      {/* Nuestros Servicios Automatizados */}
      <section className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-10 left-[20%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 left-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.servicesAutomated.title}</h2>
          <ul className="space-y-8">
            {t.servicesAutomated.services.map((service, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* Sección de LinkedIn */}
      <section className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.linkedIn.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {t.linkedIn.profiles.map((profile, index) => (
              <div key={index} className="flex flex-col items-center bg-gray-900 p-8 rounded-lg shadow-lg">
                <img src={profile.image} alt={profile.name} className="mb-4 w-24 h-24 rounded-full object-cover" />
                <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
                <a href={profile.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Clave */}
      <section className="relative min-h-screen flex flex-col justify-center items-center border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-15 left-[30%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-15 right-[35%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-5 right-[20%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.keyBenefits.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.keyBenefits.benefits.map((benefit, index) => (
              <div key={index} className={`bg-gray-${index % 2 === 0 ? '900' : '800'} rounded-xl p-6 shadow-md`}>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios / Casos de Éxito */}
      <section className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-5 left-[25%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-12 w-12 opacity-50" />
          </div>
          <div className="absolute bottom-5 right-[30%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-10 right-[15%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-cyan-400">{t.testimonials.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {t.testimonials.cases.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 shadow-lg">
                <p className="text-gray-400 italic">"{testimonial.content}"</p>
                <h3 className="text-xl font-semibold mt-4 text-white">{testimonial.author}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="relative border-t border-gray-800 py-20 bg-[#0A0B14]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-5 left-[20%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-10 w-10 opacity-50" />
          </div>
          <div className="absolute bottom-5 right-[25%] animate-float-delayed">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-8 w-8 opacity-50" />
          </div>
          <div className="absolute top-10 right-[10%] animate-float">
            <img src="/binance-logo.svg" alt="Binance Logo" className="h-6 w-6 opacity-50" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-around relative z-10">
          <div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Contacto</h2>
            <p className="text-gray-300 mb-4">Resuelve todas tus dudas antes de nuestra reunión.</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img src="/wpp.png" alt="WhatsApp" width={40} height={40} />
                <span className="text-xl font-semibold text-white">{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</span>
              </div>
            </div>
            <p className="text-gray-300 mt-4 mb-4">Escanea el código y escríbenos</p>
            <img src="/qrwpp.png" alt="QR Code" width={100} height={100} />
          </div>
          <div>
            <img src="/blueprint.png" alt="Contact Illustration" width={300} height={300} />
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

