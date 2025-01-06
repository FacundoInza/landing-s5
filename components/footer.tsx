import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            © 2023 Silver5. Todos los derechos reservados.
          </div>
          <div className="flex space-x-4">
            <Link href="/politicas" className="text-gray-600 hover:text-gray-900">
              Políticas de privacidad
            </Link>
            <Link href="/terminos" className="text-gray-600 hover:text-gray-900">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

