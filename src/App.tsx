import { Laptop, Settings, Wifi, Shield, Wrench, ShoppingCart, Headset, Monitor, Facebook, Youtube, MessageCircle, Mail, MessageSquare, UserPlus } from 'lucide-react';

function App() {
  const services = [
    {
      icon: Laptop,
      title: "Computación",
      items: [
        "Reparación de laptops y PC",
        "Diagnóstico de fallas de hardware y software",
        "Mantenimiento preventivo y correctivo",
        "Cambio y actualización de componentes (RAM, SSD, HDD)",
        "Instalación y optimización de Windows",
        "Respaldo y recuperación de información",
        "Eliminación de virus y malware"
      ]
    },
    {
      icon: Settings,
      title: "Software y configuración",
      items: [
        "Instalación y configuración de programas",
        "Actualización de sistemas y drivers",
        "Optimización de equipos lentos",
        "Configuración de impresoras y periféricos"
      ]
    },
    {
      icon: Wifi,
      title: "Redes y conectividad",
      items: [
        "Configuración de redes domésticas y de oficina",
        "Instalación y configuración de routers, switches y repetidores",
        "Cableado estructurado (voz y datos)",
        "Solución de problemas de conexión a Internet"
      ]
    },
    {
      icon: Shield,
      title: "Seguridad",
      items: [
        "Instalación y mantenimiento de cámaras CCTV",
        "Configuración de DVR / NVR",
        "Acceso remoto desde celular o computadora"
      ]
    },
    {
      icon: Wrench,
      title: "Electrónica",
      items: [
        "Reparación electrónica de dispositivos",
        "Diagnóstico y solución de fallas a nivel componente",
        "Reparación de fuentes de poder y placas electrónicas",
        "Evaluación y recuperación de equipos dañados"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Puntos de Venta (POS)",
      items: [
        "Instalación y configuración de sistemas de punto de venta",
        "Configuración de impresoras térmicas y escáneres",
        "Soporte técnico a cajas y terminales",
        "Respaldo y restauración de información del sistema",
        "Capacitación básica para el uso del POS"
      ]
    },
    {
      icon: Headset,
      title: "Soporte",
      items: [
        "Soporte técnico a domicilio",
        "Soporte técnico remoto",
        "Asesoría técnica personalizada"
      ]
    }
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-fixed"
      style={{
        backgroundImage: `url('https://raw.githubusercontent.com/spetnet/gerardo/refs/heads/main/1000030330_2048x2048.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <div className="inline-block relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/spetnet/gerardo/refs/heads/main/profile.jpg"
                  alt="Gerardo Gómez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-blue-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Gerardo Gómez
          </h1>
          <p className="text-2xl text-blue-400 font-light mb-6">
            Ingeniero en Sistemas Informáticos
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Servicios Profesionales
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="https://wa.me/6121423681"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
            >
              <MessageSquare className="w-5 h-5" />
              Enviar WhatsApp
            </a>
            <button
              onClick={() => {
                const email = prompt('Ingrese su correo electrónico:');
                if (email) {
                  window.location.href = `mailto:gerardogomezsanchez@gmail.com?subject=Agregar Contacto&body=Mi correo es: ${email}`;
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <UserPlus className="w-5 h-5" />
              Agregar Contacto
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg mr-3">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas ayuda técnica?
          </h3>
          <p className="text-slate-300 text-lg">
            Soluciones profesionales en tecnología, redes y electrónica
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://facebook.com/Spetnet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                <Facebook className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-sm">Facebook</p>
                <p className="text-white font-semibold">Spetnet</p>
              </div>
            </a>

            <a
              href="https://youtube.com/@CCTVGerry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                <Youtube className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-sm">YouTube</p>
                <p className="text-white font-semibold">CCTV Gerry</p>
              </div>
            </a>

            <a
              href="https://wa.me/6121423681"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-sm">WhatsApp</p>
                <p className="text-white font-semibold">612 142 3681</p>
              </div>
            </a>

            <a
              href="mailto:gerardogomezsanchez@gmail.com"
              className="flex items-center p-4 bg-slate-700/50 rounded-lg hover:bg-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-slate-400 text-sm">Correo</p>
                <p className="text-white font-semibold">gerardogomezsanchez@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
