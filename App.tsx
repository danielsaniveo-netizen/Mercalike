import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Rocket, 
  Search, 
  FileText, 
  Award, 
  TrendingUp, 
  Menu, 
  X, 
  Zap,
  MessageSquare,
  CheckCircle,
  Cpu
} from './components/Icons';
import { consultTrademark } from './services/geminiService';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Proceso', href: '#process' },
    { name: 'Consultor IA', href: '#ai-consultant' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer">
          MERCALIKE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)]">
            Iniciar Trámite
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 border-b border-slate-700 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full font-bold">
                Iniciar Trámite
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero3DElement = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000 mx-auto">
      <motion.div
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="w-full h-full relative preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Abstract Shield Construction */}
        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full" style={{ transform: 'translateZ(50px)' }} />
        <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full" style={{ transform: 'rotateY(90deg) translateZ(50px)' }} />
        <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full" style={{ transform: 'rotateX(90deg) translateZ(50px)' }} />
        
        {/* Floating Icons */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(100px)' }}>
          <ShieldCheck size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: 'translateZ(-100px) rotateY(180deg)' }}>
          <Award size={64} className="text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]" />
        </div>
      </motion.div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-700/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-700/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 font-bold tracking-widest text-sm mb-4 uppercase">Registro ante el IMPI</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Protege tu legado.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Hazlo Oficial.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0">
              Registra tu marca en México de forma 100% digital, rápida y segura. Asegura la exclusividad de tu nombre comercial hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg font-bold text-white shadow-lg shadow-blue-500/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Rocket size={20} /> Comenza Ahora
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-500 rounded-lg font-bold text-white transition-all backdrop-blur-sm">
                Saber más
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center"
        >
          <Hero3DElement />
        </motion.div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  icon: any;
  title: string;
  desc: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, desc, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
      className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/60 hover:border-blue-500/50 transition-all group perspective-1000"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Protección Jurídica",
      desc: "Obtén el derecho exclusivo al uso de tu marca en todo el territorio mexicano por 10 años renovables."
    },
    {
      icon: TrendingUp,
      title: "Activo Intangible",
      desc: "Tu marca se convierte en un activo que puede aumentar el valor de tu empresa, ser franquiciada o licenciada."
    },
    {
      icon: Zap,
      title: "Acciones Legales",
      desc: "Facultad para ejercer acciones legales contra terceros que usen tu marca sin autorización (piratería)."
    },
    {
      icon: Award,
      title: "Imagen y Prestigio",
      desc: "Transmite seriedad y confianza a tus clientes. El símbolo ® es sinónimo de calidad garantizada."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            ¿Por qué registrar tu marca?
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessStep = ({ number, title, desc, align }: { number: string, title: string, desc: string, align: 'left' | 'right' }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <div className={`md:flex flex-col ${align === 'right' ? 'md:items-end md:text-right' : ''}`}>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 max-w-md">{desc}</p>
        </div>
      </motion.div>

      <div className="relative flex-shrink-0 z-10">
        <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-blue-500 flex items-center justify-center text-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          {number}
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
};

const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 hidden md:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">El Camino al Éxito</h2>
          <p className="text-slate-400">Proceso simplificado de registro ante el IMPI</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ProcessStep 
            number="01"
            title="Búsqueda Fonética"
            desc="Analizamos la viabilidad de tu marca para evitar conflictos con registros existentes en la base de datos del IMPI."
            align="left"
          />
          <ProcessStep 
            number="02"
            title="Clasificación Niza"
            desc="Determinamos la clase correcta (producto o servicio) para proteger tu marca de manera efectiva y sin errores."
            align="right"
          />
          <ProcessStep 
            number="03"
            title="Solicitud y Pago"
            desc="Preparamos y presentamos tu solicitud oficial. Nos encargamos de todos los trámites burocráticos."
            align="left"
          />
          <ProcessStep 
            number="04"
            title="Título de Marca"
            desc="Damos seguimiento puntual hasta la obtención de tu título de propiedad. ¡Felicidades, tu marca es tuya!"
            align="right"
          />
        </div>
      </div>
    </section>
  );
};

const AIConsultant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await consultTrademark(input);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai-consultant" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-900/20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-slate-800/80 border border-slate-700 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600/20 rounded-lg">
              <Cpu className="text-blue-400" size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Mercalike AI Consultant</h2>
              <p className="text-slate-400 text-sm">Pregunta sobre disponibilidad, clases o consejos.</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-900/50 rounded-lg p-6 min-h-[120px] border border-slate-700/50">
              {!response && !loading && (
                <div className="text-slate-500 flex flex-col items-center justify-center h-full text-center">
                  <MessageSquare size={24} className="mb-2 opacity-50" />
                  <p>Ejemplo: "¿Puedo registrar 'TacosGalácticos' para un restaurante?"</p>
                </div>
              )}
              {loading && (
                <div className="flex items-center justify-center h-full space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              )}
              {response && (
                <div className="prose prose-invert prose-sm">
                  <p className="text-slate-200 leading-relaxed animate-in fade-in duration-500">
                    {response}
                  </p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu duda sobre marcas aquí..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button 
                type="submit" 
                disabled={loading || !input}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center gap-2"
              >
                <Search size={20} />
                <span className="hidden sm:inline">Consultar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400 text-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">MERCALIKE</h3>
          <p className="max-w-sm mb-6">
            Expertos en propiedad industrial. Simplificamos el proceso de registro de marca en México para emprendedores y empresas visionarias.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Enlaces</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Inicio</a></li>
            <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Beneficios</a></li>
            <li><a href="#process" className="hover:text-blue-400 transition-colors">Proceso</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Precios</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Aviso de Privacidad</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Términos y Condiciones</a></li>
            <li className="flex items-center gap-2 mt-4">
               <span className="w-2 h-2 rounded-full bg-green-500"></span> Sistema Operativo
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-center">
        <p>&copy; {new Date().getFullYear()} Mercalike. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <AIConsultant />
      
      <section className="py-24 bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para proteger tu marca?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            No dejes que alguien más registre tu nombre. Inicia tu trámite hoy mismo con la asesoría de expertos.
          </p>
          <button className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Registrar mi Marca Ahora
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;