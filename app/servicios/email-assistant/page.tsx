import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver5 - Agente Inteligente para Gmail",
  description: "Potencia tu experiencia en Gmail con nuestro agente inteligente. Automatiza tareas, categoriza emails y ahorra tiempo en tu bandeja de entrada.",
};

export default function CorreoPage() {
  return (
    <div>
      {/* Sección Hero */}
      <section id="hero" className="w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Silver5: Tu Asistente Inteligente para Gmail
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Automatiza tu bandeja de entrada, categoriza emails de forma inteligente y ahorra horas cada semana.
            </p>
            <div className="mt-8">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium py-3 px-8 rounded-lg hover:scale-[1.02] transition-transform duration-200">
                Probar Ahora
              </button>
            </div>
          </div>
          <div className="mt-16 rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 backdrop-blur-sm">
            {/* Aquí irá la imagen o video del producto */}
            <div className="w-full h-[300px] md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <p className="text-gray-400">Imagen o video del producto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Funcionalidades */}
      <section id="funcionalidades" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Funcionalidades Inteligentes para Tu Gmail
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Silver5 transforma tu bandeja de entrada con herramientas potenciadas por IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Funcionalidad 1 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Respuestas Automáticas Inteligentes</h3>
              <p className="text-gray-400">
                Genera respuestas contextuales basadas en el historial de comunicación y el contenido del email.
              </p>
            </div>

            {/* Funcionalidad 2 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Categorización Avanzada</h3>
              <p className="text-gray-400">
                Organiza automáticamente tus emails por prioridad, tipo de contenido y relevancia para tu trabajo.
              </p>
            </div>

            {/* Funcionalidad 3 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Recordatorios Inteligentes</h3>
              <p className="text-gray-400">
                Recibe notificaciones para dar seguimiento a emails importantes que requieren tu atención.
              </p>
            </div>

            {/* Funcionalidad 4 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Detección de Phishing</h3>
              <p className="text-gray-400">
                Identifica automáticamente correos sospechosos y protege tu información sensible.
              </p>
            </div>

            {/* Funcionalidad 5 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Gestión de Suscripciones</h3>
              <p className="text-gray-400">
                Administra y cancela suscripciones con un solo clic para mantener tu bandeja organizada.
              </p>
            </div>

            {/* Funcionalidad 6 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Análisis de Productividad</h3>
              <p className="text-gray-400">
                Visualiza estadísticas sobre tu uso del correo y recibe recomendaciones para optimizar tu tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section id="beneficios" className="w-full py-24 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Recupera Tu Tiempo y Productividad
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ahorro de 5+ horas semanales</h3>
                    <p className="text-gray-400">La automatización de respuestas y la categorización inteligente te permiten enfocarte en lo realmente importante.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">90% menos de correos sin responder</h3>
                    <p className="text-gray-400">Los recordatorios inteligentes aseguran que no olvides responder mensajes importantes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reducción del 75% en estrés digital</h3>
                    <p className="text-gray-400">Una bandeja de entrada más organizada y menos saturada reduce la sensación de sobrecarga informativa.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Incremento del 40% en tasa de respuesta</h3>
                    <p className="text-gray-400">Las sugerencias de respuesta inteligentes mejoran tu comunicación y velocidad de respuesta.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-gray-900/80 border border-gray-800/50 rounded-xl overflow-hidden p-6">
                  <div className="w-full h-[350px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <p className="text-gray-400">Gráfico de productividad o ilustración de ahorro de tiempo</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">5+</p>
                      <p className="text-xs text-gray-400">Horas ahorradas por semana</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">75%</p>
                      <p className="text-xs text-gray-400">Reducción de estrés</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">90%</p>
                      <p className="text-xs text-gray-400">Menos emails sin responder</p>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center backdrop-blur-sm">
                      <p className="text-3xl font-bold text-cyan-400">40%</p>
                      <p className="text-xs text-gray-400">Mayor tasa de respuesta</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sección de Testimonios */}
      <section id="testimonios" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Lo Que Dicen Nuestros Usuarios
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Descubre cómo Silver5 está transformando la manera en que profesionales gestionan su correo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-300 italic mb-6">
                  &quot;Silver5 ha transformado mi forma de trabajar. Antes pasaba 2 horas diarias revisando emails, ahora en 20 minutos tengo todo gestionado. La inteligencia con la que organiza mi bandeja es impresionante.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    ML
                  </div>
                  <div>
                    <h4 className="text-white font-medium">María López</h4>
                    <p className="text-gray-400 text-sm">Directora de Marketing Digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-300 italic mb-6">
                  &quot;Como emprendedor, recibo cientos de emails diarios. Silver5 no solo me ayuda a filtrarlos, sino que me sugiere respuestas contextuales que suenan exactamente como yo. Es como tener un asistente personal 24/7.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    CR
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Carlos Rodríguez</h4>
                    <p className="text-gray-400 text-sm">Fundador & CEO, TechStart</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm relative">
              <div className="absolute -top-3 -left-3">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-gray-300 italic mb-6">
                  &quot;La función de detección de phishing me ha salvado varias veces de caer en estafas. Además, la categorización automática hace que encuentre cualquier email en segundos. No puedo imaginar volver a usar Gmail sin Silver5.&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 text-xl font-semibold mr-4">
                    AP
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Ana Pérez</h4>
                    <p className="text-gray-400 text-sm">Gerente de Proyectos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm max-w-3xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl md:text-2xl text-white italic font-light mb-4">
                    &quot;Silver5 ha cambiado radicalmente cómo gestionamos la comunicación en nuestra empresa. El ROI ha sido inmediato: 30% menos tiempo en email y 25% más productividad en el equipo.&quot;
                  </p>
                  <div>
                    <h4 className="text-white font-medium">Laura Sánchez</h4>
                    <p className="text-cyan-400 text-sm">Directora de Operaciones, GlobalTech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Precios */}
      <section id="precios" className="w-full py-24 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Planes Flexibles para Cada Necesidad
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Elige el plan que mejor se adapte a tus necesidades y comienza a ahorrar tiempo hoy mismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Plan Básico</h3>
                <p className="text-gray-400 text-sm mb-6">Ideal para uso personal y freelancers</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">€9.99</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Respuestas automatizadas básicas</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Categorización de emails</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Detección de phishing básica</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">500 emails procesados/mes</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-500">Sin análisis de productividad</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors">
                  Comenzar Prueba Gratuita
                </button>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="bg-gray-900/40 border-2 border-cyan-400/50 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 relative">
              <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                  MÁS POPULAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Plan Pro</h3>
                <p className="text-gray-400 text-sm mb-6">Perfecto para profesionales y pequeñas empresas</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">€19.99</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Respuestas personalizadas avanzadas</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Categorización y etiquetado inteligente</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Detección avanzada de phishing</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">2.000 emails procesados/mes</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Análisis de productividad completo</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-white font-medium transition-colors">
                  Comenzar Prueba Gratuita
                </button>
              </div>
            </div>

            {/* Plan Empresarial */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:scale-[1.02] transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Plan Empresarial</h3>
                <p className="text-gray-400 text-sm mb-6">Para equipos y organizaciones grandes</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-white">€49.99</span>
                  <span className="text-gray-400 ml-2">/mes</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Respuestas con IA personalizada completa</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Sistema avanzado de workflow personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Protección de seguridad empresarial</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Emails ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Soporte técnico prioritario 24/7</span>
                  </li>
                </ul>
                <button className="w-full py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors">
                  Contactar para Demo
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">¿Necesitas un plan personalizado para tu organización?</p>
            <a href="#contacto" className="text-cyan-400 font-medium hover:underline">Contacta con nuestro equipo de ventas</a>
          </div>
        </div>
      </section>

      {/* Sección de FAQ */}
      <section id="faq" className="w-full py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#0A0B14] to-[#0d0f1d]">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Respuestas a las dudas más comunes sobre Silver5
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* Pregunta 1 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Cómo funciona Silver5 con mi cuenta de Gmail?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Silver5 se integra con Gmail a través de nuestra extensión segura para navegador. Una vez autorizado con tus credenciales de Google (mediante OAuth), Silver5 puede procesar tus emails para ofrecer sus funciones de IA. Toda la información se maneja con estrictos protocolos de seguridad y nunca almacenamos el contenido de tus emails en nuestros servidores.</p>
                </div>
              </details>
            </div>

            {/* Pregunta 2 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Es seguro usar Silver5 con mi información personal?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Absolutamente. La seguridad es nuestra prioridad número uno. Silver5 utiliza cifrado de extremo a extremo y cumple con todas las normativas de protección de datos (GDPR, CCPA). No almacenamos permanentemente el contenido de tus emails, y todo el procesamiento se realiza de manera segura. Además, tenemos auditorías de seguridad regulares por empresas externas para garantizar la protección de tus datos.</p>
                </div>
              </details>
            </div>

            {/* Pregunta 3 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Puedo personalizar cómo Silver5 categoriza mis emails?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Sí, Silver5 ofrece amplias opciones de personalización. Puedes crear tus propias categorías, definir reglas específicas para la clasificación de emails, y enseñar al sistema tus preferencias. Con el tiempo, el sistema de IA aprenderá de tus correcciones y se adaptará a tu estilo de trabajo, ofreciendo una experiencia cada vez más personalizada.</p>
                </div>
              </details>
            </div>

            {/* Pregunta 4 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Cómo cancelo mi suscripción si ya no necesito el servicio?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Cancelar es fácil y sin complicaciones. Puedes hacerlo en cualquier momento desde tu panel de control en la sección &quot;Suscripción&quot;. No hay períodos de permanencia ni penalizaciones por cancelación. Si cancelas, mantendrás acceso al servicio hasta el final del período facturado. También ofrecemos la opción de pausar tu suscripción si solo necesitas un descanso temporal.</p>
                </div>
              </details>
            </div>

            {/* Pregunta 5 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Silver5 funciona con otras plataformas de correo además de Gmail?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Actualmente, Silver5 está optimizado para funcionar con Gmail y Google Workspace. Estamos trabajando en integraciones con otras plataformas populares como Outlook, Yahoo Mail y servicios de email corporativos. Si tienes interés en una integración específica, háznoslo saber a través de nuestro formulario de contacto y te mantendremos informado sobre los nuevos lanzamientos.</p>
                </div>
              </details>
            </div>

            {/* Pregunta 6 */}
            <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-medium text-white">¿Ofrecen soporte técnico para resolver problemas?</h3>
                  <span className="transition-transform duration-300 group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-300">
                  <p>Todos nuestros planes incluyen soporte técnico. Los usuarios de los planes Básico y Pro tienen acceso a soporte por email con un tiempo de respuesta de 24 horas. Los usuarios del plan Empresarial disfrutan de soporte prioritario 24/7 por email, chat en vivo y llamadas telefónicas. También ofrecemos una extensa base de conocimientos y tutoriales en video para ayudarte a aprovechar al máximo Silver5.</p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">¿No encuentras la respuesta que buscas?</p>
            <a href="#contacto" className="text-cyan-400 font-medium hover:underline">Contacta con nuestro equipo de soporte</a>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="w-full py-24 px-4 md:px-8 lg:px-16">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                ¿Listo para Transformar tu Experiencia en Gmail?
              </h2>
              
              <p className="text-gray-300 mb-8">
                Déjanos tus datos y un especialista se pondrá en contacto contigo para resolver todas tus dudas y ayudarte a comenzar con Silver5.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Implementación en minutos</h3>
                    <p className="text-gray-400">Configura Silver5 en tu Gmail en menos de 5 minutos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Soporte personalizado</h3>
                    <p className="text-gray-400">Nuestro equipo te guiará en todo el proceso</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">14 días de prueba gratis</h3>
                    <p className="text-gray-400">Sin compromiso y con todas las funcionalidades</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gray-900/40 border border-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Solicita información</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-1">
                      Nombre completo <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-300 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-white"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-white font-medium transition-colors"
                    >
                      Enviar Solicitud
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 