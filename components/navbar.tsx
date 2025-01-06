import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Silver5
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#servicios" className="text-gray-600 hover:text-gray-900">
              Servicios
            </Link>
            <Link href="#contacto" className="text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

