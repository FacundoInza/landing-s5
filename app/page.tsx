'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Code, Shield, Bot, Box, Cpu, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { translations } from './translations'
import { useLanguage } from './contexts/language-context'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-[#0A0B14] text-white">
      {/* Navbar */}
      <nav className="border-b border-gray-800 sticky top-0 z-50 bg-[#0A0B14]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
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
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                {t.nav.launchApp}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-20 animate-float">
            <Box className="h-8 w-8 text-cyan-400 opacity-50" />
          </div>
          <div className="absolute top-40 right-40 animate-float-delayed">
            <Shield className="h-8 w-8 text-purple-400 opacity-50" />
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
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
                {t.hero.startProject}
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                {t.hero.viewDemo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: t.stats.projects, value: '50+' },
              { label: t.stats.clients, value: '30+' },
              { label: t.stats.developers, value: '20+' },
              { label: t.stats.years, value: '5+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-center mb-16">{t.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-cyan-400" />,
                title: t.services.custom.title,
                description: t.services.custom.description
              },
              {
                icon: <Cpu className="h-8 w-8 text-cyan-400" />,
                title: t.services.mobile.title,
                description: t.services.mobile.description
              },
              {
                icon: <Bot className="h-8 w-8 text-cyan-400" />,
                title: t.services.ai.title,
                description: t.services.ai.description
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm transform transition-transform hover:scale-105">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
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
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900">
              {t.cta.button}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.company}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.about}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.careers}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.blog}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.services}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.webDev}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.mobileDev}</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">{t.footer.ai}</Link></li>
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
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                {t.footer.social}
              </h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">LinkedIn</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">GitHub</Link></li>
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

