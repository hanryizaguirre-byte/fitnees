import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Flame, 
  Copy, 
  Check, 
  Menu, 
  X, 
  Eye, 
  FileCode, 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ShoppingCart, 
  Info, 
  Award, 
  Heart, 
  Plus, 
  Sparkle,
  Github,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { BTP_FILES } from './data/btpFiles';

export default function App() {
  // Estados para alternar entre Vista Previa e Inspector de Códigos
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  
  // Estado para el visor de archivos
  const [selectedFile, setSelectedFile] = useState<'html' | 'css' | 'js'>('html');
  const [copied, setCopied] = useState(false);

  // Estados de la tienda simulada
  const [carrito, setCarrito] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavSection, setActiveNavSection] = useState('inicio');

  // Estado del formulario de contacto
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  // Registrar inicio en la consola de la applet
  useEffect(() => {
    console.log("%c💪 ¡FitHome Iniciado con Éxito! 💪", "color: #00e676; font-size: 16px; font-weight: bold; background-color: #111; padding: 8px 12px; border-radius: 4px;");
    console.log("Portal BTP Informática - Instituto Técnico Contable John F. Kennedy");
  }, []);

  // Copiar código del archivo seleccionado
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Agregar al carro y disparar la alerta exacta requerida por el usuario
  const handleComprarAhora = (productName: string) => {
    setCarrito(prev => [...prev, productName]);
    
    // Alerta exacta definida por el usuario
    alert(`¡Excelente elección! 🏋️‍♂️ '${productName}' ha sido añadido a tu carrito de compras.\n\nEscanea el código QR que vendrá en tu paquete para descargar tus rutinas de regalo.`);
  };

  // Manejar envío de contacto en React
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias por contactarnos, ${formName}! Tu consulta ha sido enviada. Un asesor de FitHome te escribirá pronto por correo.`);
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  // Obtener el código actual cargado en el visualizador
  const getSelectedCode = () => {
    if (selectedFile === 'html') return BTP_FILES.indexHtml;
    if (selectedFile === 'css') return BTP_FILES.stylesCss;
    return BTP_FILES.scriptJs;
  };

  // Obtener el nombre del archivo
  const getSelectedFileName = () => {
    if (selectedFile === 'html') return 'index.html';
    if (selectedFile === 'css') return 'styles.css';
    return 'script.js';
  };

  return (
    <div className="min-h-screen bg-[#fcfdfc] font-sans text-neutral-900 selection:bg-[#00e676] selection:text-neutral-950 transition-colors duration-300">
      
      {/* ==========================================
         BARRA DE NAVEGACIÓN SUPERIOR (PORTAL ESTUDIANTE BTP)
         ========================================== */}
      <div className="sticky top-0 z-[1100] w-full bg-neutral-950 border-b-3 border-neutral-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-none border-2 border-white bg-[#00e676] flex items-center justify-center text-neutral-950 font-black shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
              <Dumbbell className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display font-black text-xs tracking-wider text-[#00e676] block uppercase bg-[#00e676]/10 px-2 py-0.5 border border-[#00e676]/20">BTP EN INFORMÁTICA</span>
              <h2 className="text-[11px] text-neutral-300 font-mono tracking-tight leading-none mt-1">Proyecto Integrador - Col. John F. Kennedy</h2>
            </div>
          </div>

          {/* Selector de Modos Clave */}
          <div className="flex items-center gap-2 bg-neutral-900 p-1 border-2 border-neutral-800">
            <button 
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-display font-black tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'preview' 
                  ? 'bg-[#00e676] text-neutral-950 border-2 border-neutral-950 shadow-[2px_2px_0px_0px_#ffffff]' 
                  : 'text-neutral-400 hover:text-white border-2 border-transparent'
              }`}
            >
              <Eye className="w-3.5 h-3.5 stroke-[2.5]" />
              Vista Previa
            </button>
            <button 
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-display font-black tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'code' 
                  ? 'bg-[#00e676] text-neutral-950 border-2 border-neutral-950 shadow-[2px_2px_0px_0px_#ffffff]' 
                  : 'text-neutral-400 hover:text-white border-2 border-transparent'
              }`}
            >
              <FileCode className="w-3.5 h-3.5 stroke-[2.5]" />
              Código Fuente
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-[11px] text-yellow-400 font-mono font-bold bg-yellow-400/15 px-3 py-1 border-2 border-yellow-400/30 flex items-center gap-1.5">
              <Sparkle className="w-3.5 h-3.5 animate-spin duration-3000" />
              Excelente Calificación 100%
            </span>
          </div>
        </div>
      </div>

      {activeTab === 'preview' ? (
        /* ==========================================
           VISTA PREVIA EN VIVO (CLIENT STOREFRONT VIEW)
           ========================================== */
        <div className="animate-fadeIn">
          
          {/* HEADER DEL CLIENTE */}
          <header className="sticky top-[64px] left-0 w-full z-50 bg-neutral-950 border-b-3 border-neutral-900 py-4 transition-all">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
              <a href="#inicio" className="text-2xl font-display font-black tracking-tighter text-white uppercase flex items-center gap-1.5 hover:text-[#00e676] transition-colors">
                FIT<span className="text-[#00e676] bg-[#00e676]/10 px-2 py-0.5 border border-[#00e676]/30">HOME</span>
              </a>

              {/* Menú de navegación Desktop */}
              <nav className="hidden md:block">
                <ul className="flex items-center gap-8 text-xs font-display font-bold uppercase tracking-widest">
                  <li>
                    <a 
                      href="#inicio" 
                      onClick={() => setActiveNavSection('inicio')}
                      className={`text-white hover:text-[#00e676] transition-all relative py-1 ${activeNavSection === 'inicio' ? 'text-[#00e676]' : ''}`}
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#productos" 
                      onClick={() => setActiveNavSection('productos')}
                      className={`text-white hover:text-[#00e676] transition-all relative py-1 ${activeNavSection === 'productos' ? 'text-[#00e676]' : ''}`}
                    >
                      Productos
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#beneficios" 
                      onClick={() => setActiveNavSection('beneficios')}
                      className={`text-white hover:text-[#00e676] transition-all relative py-1 ${activeNavSection === 'beneficios' ? 'text-[#00e676]' : ''}`}
                    >
                      Beneficios
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contacto" 
                      onClick={() => setActiveNavSection('contacto')}
                      className={`text-white hover:text-[#00e676] transition-all relative py-1 ${activeNavSection === 'contacto' ? 'text-[#00e676]' : ''}`}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Botones de acción y carrito */}
              <div className="flex items-center gap-4">
                <div className="relative flex items-center bg-neutral-900 border-2 border-neutral-800 rounded-none px-4 py-2 hover:border-[#00e676] hover:shadow-[3px_3px_0px_0px_#00e676] transition-all">
                  <ShoppingCart className="w-4 h-4 text-[#00e676] stroke-[2.5]" />
                  <span className="text-white text-xs font-display font-black uppercase tracking-wider ml-2">Carrito</span>
                  <span className="ml-2 bg-[#00e676] text-neutral-950 text-[10px] font-mono font-black px-2 py-0.5 border border-neutral-950 shrink-0">
                    {carrito.length}
                  </span>
                </div>

                {/* Hamburguesa Móvil */}
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-white hover:text-[#00e676] transition-colors border-2 border-neutral-800"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {mobileMenuOpen && (
              <div className="md:hidden w-full bg-neutral-950 border-t-3 border-neutral-900 px-6 py-6 transition-all duration-300 animate-slideDown">
                <ul className="flex flex-col gap-4 text-xs font-display font-bold uppercase tracking-widest">
                  <li>
                    <a 
                      href="#inicio" 
                      onClick={() => { setActiveNavSection('inicio'); setMobileMenuOpen(false); }}
                      className={`block py-1.5 border-b border-neutral-900 ${activeNavSection === 'inicio' ? 'text-[#00e676]' : 'text-neutral-300 hover:text-white'}`}
                    >
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#productos" 
                      onClick={() => { setActiveNavSection('productos'); setMobileMenuOpen(false); }}
                      className={`block py-1.5 border-b border-neutral-900 ${activeNavSection === 'productos' ? 'text-[#00e676]' : 'text-neutral-300 hover:text-white'}`}
                    >
                      Productos
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#beneficios" 
                      onClick={() => { setActiveNavSection('beneficios'); setMobileMenuOpen(false); }}
                      className={`block py-1.5 border-b border-neutral-900 ${activeNavSection === 'beneficios' ? 'text-[#00e676]' : 'text-neutral-300 hover:text-white'}`}
                    >
                      Beneficios
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contacto" 
                      onClick={() => { setActiveNavSection('contacto'); setMobileMenuOpen(false); }}
                      className={`block py-1.5 ${activeNavSection === 'contacto' ? 'text-[#00e676]' : 'text-neutral-300 hover:text-white'}`}
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </header>

          {/* SECCIÓN HERO */}
          <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center text-center bg-neutral-950 text-white pt-28 pb-24 px-6 overflow-hidden border-b-4 border-neutral-950">
            {/* Gradientes decorativos de fondo */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00e676]/8 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.9))] pointer-events-none"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-[#00e676]/10 border-2 border-[#00e676] text-[#00e676] px-4 py-1.5 rounded-none text-xs font-display font-extrabold tracking-widest uppercase mb-10 shadow-[3px_3px_0px_0px_#00e676]">
                <Flame className="w-4 h-4 fill-current animate-bounce shrink-0" />
                Tu Gimnasio en Casa
              </div>

              <h1 className="text-4xl md:text-8xl font-display font-black tracking-tighter leading-[0.9] uppercase mb-10 select-none">
                ENTRENA EN CASA,<br />
                <span className="text-white relative inline-block my-2">
                  <span className="absolute inset-0 bg-[#00e676] -skew-y-1 z-[-1] border-2 border-neutral-950"></span>
                  <span className="relative z-10 px-6 py-1 text-neutral-950">SUPERA LÍMITES</span>
                </span>
              </h1>

              <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-12 font-sans tracking-tight leading-relaxed">
                Equipamiento deportivo premium y rutinas guiadas para transformar tu cuerpo y mejorar tu salud sin salir de tu hogar de forma totalmente garantizada.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a 
                  href="#productos" 
                  className="w-full sm:w-auto px-8 py-4 bg-[#00e676] text-neutral-950 font-display font-black border-3 border-neutral-950 rounded-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-y-1 transition-all text-center uppercase tracking-wider text-xs"
                >
                  Explorar Catálogo
                </a>
                <a 
                  href="#beneficios" 
                  className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 border-3 border-neutral-950 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:translate-y-1 transition-all text-center uppercase tracking-wider text-xs"
                >
                  Saber Más
                </a>
              </div>
            </div>
          </section>

          {/* SECCIÓN PRODUCTOS ESTRELLA */}
          <section id="productos" className="py-24 bg-[#fafcfa] border-t-4 border-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center mb-16">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#00e676] bg-neutral-950 px-3 py-1 border border-[#00e676]/30">
                  EQUIPAMIENTO DE ÉLITE
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-neutral-950 uppercase tracking-tighter mt-4 leading-none">
                  Productos Estrella
                </h2>
                <div className="w-16 h-2 bg-[#00e676] mx-auto mt-6 border-2 border-neutral-950"></div>
                <p className="text-neutral-600 max-w-2xl mx-auto mt-6 font-mono text-xs md:text-sm">
                  Nuestra selección especial de artículos de alta calidad recomendados por entrenadores profesionales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Producto 1 */}
                <div className="group bg-white rounded-none overflow-hidden shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-3 border-neutral-950 flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-neutral-950 text-[#00e676] text-[10px] font-mono font-bold px-3.5 py-1.5 border-b-3 border-l-3 border-neutral-950 uppercase tracking-widest z-20">
                    Más Vendido
                  </div>
                  <div className="h-44 bg-gradient-to-br from-neutral-50 to-neutral-200/50 flex items-center justify-center relative overflow-hidden border-b-3 border-neutral-950">
                    <span className="text-7xl select-none transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">🏋️‍♀️</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-lg font-display font-black text-neutral-950 mb-2 leading-tight uppercase group-hover:text-emerald-700 transition-colors">
                      Bandas de Resistencia de Tela
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6 flex-grow">
                      Set de 3 intensidades (suave, media, fuerte) con costuras reforzadas, ideal para tonificar piernas y glúteos de forma segura.
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                      <span className="text-2xl font-display font-black text-neutral-950 leading-none">$24.99</span>
                      <button 
                        onClick={() => handleComprarAhora("Bandas de Resistencia de Tela")}
                        className="px-3.5 py-2 bg-neutral-950 text-white rounded-none text-xs font-display font-extrabold uppercase tracking-wide hover:bg-[#00e676] hover:text-neutral-950 border-2 border-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                </div>

                {/* Producto 2 */}
                <div className="group bg-white rounded-none overflow-hidden shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-3 border-neutral-950 flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-neutral-950 text-[#00e676] text-[10px] font-mono font-bold px-3.5 py-1.5 border-b-3 border-l-3 border-neutral-950 uppercase tracking-widest z-20">
                    Premium
                  </div>
                  <div className="h-44 bg-gradient-to-br from-neutral-50 to-neutral-200/50 flex items-center justify-center relative overflow-hidden border-b-3 border-neutral-950">
                    <span className="text-7xl select-none transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">🧘‍♂️</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-lg font-display font-black text-neutral-950 mb-2 leading-tight uppercase group-hover:text-emerald-700 transition-colors">
                      Tapete de Yoga Premium
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6 flex-grow">
                      Grosor extra de 6mm de material TPE ecológico, antideslizante con sofisticadas líneas grabadas de alineación postural.
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                      <span className="text-2xl font-display font-black text-neutral-950 leading-none">$34.99</span>
                      <button 
                        onClick={() => handleComprarAhora("Tapete de Yoga Premium")}
                        className="px-3.5 py-2 bg-neutral-950 text-white rounded-none text-xs font-display font-extrabold uppercase tracking-wide hover:bg-[#00e676] hover:text-neutral-950 border-2 border-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                </div>

                {/* Producto 3 */}
                <div className="group bg-white rounded-none overflow-hidden shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-3 border-neutral-950 flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-neutral-950 text-[#00e676] text-[10px] font-mono font-bold px-3.5 py-1.5 border-b-3 border-l-3 border-neutral-950 uppercase tracking-widest z-20">
                    Alta Velocidad
                  </div>
                  <div className="h-44 bg-gradient-to-br from-neutral-50 to-neutral-200/50 flex items-center justify-center relative overflow-hidden border-b-3 border-neutral-950">
                    <span className="text-7xl select-none transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">⚡</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-lg font-display font-black text-neutral-950 mb-2 leading-tight uppercase group-hover:text-emerald-700 transition-colors">
                      Cuerda de Alta Velocidad
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6 flex-grow">
                      Cable de acero ajustable con rodamientos de bolas profesionales integrados para giros fluidos y saltos dobles rápidos.
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                      <span className="text-2xl font-display font-black text-neutral-950 leading-none">$14.99</span>
                      <button 
                        onClick={() => handleComprarAhora("Cuerda de Alta Velocidad")}
                        className="px-3.5 py-2 bg-neutral-950 text-white rounded-none text-xs font-display font-extrabold uppercase tracking-wide hover:bg-[#00e676] hover:text-neutral-950 border-2 border-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                </div>

                {/* Producto 4 */}
                <div className="group bg-white rounded-none overflow-hidden shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 border-3 border-neutral-950 flex flex-col relative">
                  <div className="absolute top-0 right-0 bg-neutral-950 text-[#00e676] text-[10px] font-mono font-bold px-3.5 py-1.5 border-b-3 border-l-3 border-neutral-950 uppercase tracking-widest z-20">
                    Nivel Pro
                  </div>
                  <div className="h-44 bg-gradient-to-br from-neutral-50 to-neutral-200/50 flex items-center justify-center relative overflow-hidden border-b-3 border-neutral-950">
                    <span className="text-7xl select-none transform group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">🛹</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-lg font-display font-black text-neutral-950 mb-2 leading-tight uppercase group-hover:text-emerald-700 transition-colors">
                      Rueda Abdominal Pro
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-6 flex-grow">
                      Rodillo de doble rueda ultra estable con agarre ergonómico antideslizante y almohadilla protectora suave para rodillas.
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-200">
                      <span className="text-2xl font-display font-black text-neutral-950 leading-none">$19.99</span>
                      <button 
                        onClick={() => handleComprarAhora("Rueda Abdominal Pro")}
                        className="px-3.5 py-2 bg-neutral-950 text-white rounded-none text-xs font-display font-extrabold uppercase tracking-wide hover:bg-[#00e676] hover:text-neutral-950 border-2 border-neutral-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-center cursor-pointer"
                      >
                        Comprar Ahora
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* BENEFICIOS SECCIÓN */}
          <section id="beneficios" className="py-24 bg-neutral-950 text-white relative border-b-4 border-neutral-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              
              <div className="text-center mb-16">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#00e676] bg-neutral-900 px-3 py-1 border border-[#00e676]/30">
                  VENTAJAS FITMATE
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter mt-4 leading-none text-white">
                  ¿Por Qué Entrenar Con Nosotros?
                </h2>
                <div className="w-16 h-2 bg-[#00e676] mx-auto mt-6 border-2 border-neutral-950"></div>
                <p className="text-neutral-400 max-w-2xl mx-auto mt-6 font-mono text-xs md:text-sm">
                  Equípate con tranquilidad. Nos aseguramos de darte el mejor servicio en cada paso de tu camino fitness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Beneficio 1 */}
                <div className="bg-neutral-900/60 border-3 border-neutral-800 p-8 rounded-none text-center group hover:bg-neutral-900/90 hover:border-[#00e676] hover:shadow-[6px_6px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-20 h-20 rounded-none bg-neutral-950 border-3 border-neutral-800 flex items-center justify-center text-[#00e676] mx-auto mb-6 group-hover:border-[#00e676] group-hover:shadow-[3px_3px_0px_0px_#00e676] transition-all duration-300">
                    <span className="text-3xl select-none group-hover:scale-110 transition-transform">🚀</span>
                  </div>
                  <h3 className="text-xl font-display font-black mb-3 uppercase tracking-tight text-white">Envío Rápido</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Recibe tus productos deportivos directamente en la puerta de tu casa en menos de 48 horas de forma totalmente segura.
                  </p>
                </div>

                {/* Beneficio 2 */}
                <div className="bg-neutral-900/60 border-3 border-neutral-800 p-8 rounded-none text-center group hover:bg-neutral-900/90 hover:border-[#00e676] hover:shadow-[6px_6px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-20 h-20 rounded-none bg-neutral-950 border-3 border-neutral-800 flex items-center justify-center text-[#00e676] mx-auto mb-6 group-hover:border-[#00e676] group-hover:shadow-[3px_3px_0px_0px_#00e676] transition-all duration-300">
                    <span className="text-3xl select-none group-hover:scale-110 transition-transform">⭐</span>
                  </div>
                  <h3 className="text-xl font-display font-black mb-3 uppercase tracking-tight text-white">Calidad Garantizada</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Trabajamos bajo estándares rigurosos con materiales ultra duraderos y probados por atletas de alto rendimiento.
                  </p>
                </div>

                {/* Beneficio 3 */}
                <div className="bg-neutral-900/60 border-3 border-neutral-800 p-8 rounded-none text-center group hover:bg-neutral-900/90 hover:border-[#00e676] hover:shadow-[6px_6px_0px_0px_rgba(0,230,118,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-20 h-20 rounded-none bg-neutral-950 border-3 border-neutral-800 flex items-center justify-center text-[#00e676] mx-auto mb-6 group-hover:border-[#00e676] group-hover:shadow-[3px_3px_0px_0px_#00e676] transition-all duration-300">
                    <span className="text-3xl select-none group-hover:scale-110 transition-transform">🎁</span>
                  </div>
                  <h3 className="text-xl font-display font-black mb-3 uppercase tracking-tight text-white">Rutinas Gratis</h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                    Incluimos un manual digital interactivo con rutinas y planes de entrenamiento exclusivos en cada una de tus compras.
                  </p>
                </div>

              </div>

            </div>
          </section>

          {/* SECCIÓN CONTACTO */}
          <section id="contacto" className="py-24 bg-[#fbfcfa] border-b-4 border-neutral-950">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="text-center mb-16">
                <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#00e676] bg-neutral-950 px-3 py-1 border border-[#00e676]/30">
                  ATENCIÓN AL CLIENTE
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-neutral-950 uppercase tracking-tighter mt-4 leading-none">
                  Únete Al Equipo FitHome
                </h2>
                <div className="w-16 h-2 bg-[#00e676] mx-auto mt-6 border-2 border-neutral-950"></div>
                <p className="text-neutral-600 max-w-2xl mx-auto mt-6 font-mono text-xs md:text-sm">
                  ¿Tienes alguna pregunta sobre nuestros equipos? Escríbenos y un experto te atenderá al instante.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                
                {/* Info de contacto */}
                <div className="bg-neutral-950 text-white p-10 md:p-12 rounded-none border-4 border-neutral-990 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(0,230,118,1)]">
                  <div>
                    <h3 className="text-3xl font-display font-black tracking-tight uppercase mb-4 text-white">Información de Contacto</h3>
                    <p className="text-neutral-400 text-xs font-sans leading-relaxed mb-10">
                      Estamos listos para apoyarte a alcanzar todas tus metas físicas de salud y bienestar de forma totalmente personalizada.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-[#00e676]" />
                        </div>
                        <div>
                          <p className="text-[9px] text-[#00e676] font-mono font-black uppercase tracking-widest">Ubicación</p>
                          <p className="text-sm tracking-tight text-neutral-200 font-mono">Tegucigalpa, Honduras. Col. Kennedy.</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-[#00e676]" />
                        </div>
                        <div>
                          <p className="text-[9px] text-[#00e676] font-mono font-black uppercase tracking-widest">Correo</p>
                          <p className="text-sm tracking-tight text-neutral-200 font-mono">contacto@fithome.com</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-[#00e676]" />
                        </div>
                        <div>
                          <p className="text-[9px] text-[#00e676] font-mono font-black uppercase tracking-widest">Llámanos</p>
                          <p className="text-sm tracking-tight text-neutral-200 font-mono">+504 2222-3333</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span>Atención 24 Horas, 7 Días de la Semana</span>
                    <span className="text-[#00e676] font-bold">● Activo Hoy</span>
                  </div>
                </div>

                {/* Formulario */}
                <form 
                  onSubmit={handleContactSubmit}
                  className="bg-neutral-50 border-3 border-neutral-950 p-10 md:p-12 rounded-none flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(10,10,10,1)]"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono font-black text-neutral-800 uppercase tracking-wider mb-2">Nombre Completo</label>
                      <input 
                        type="text" 
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ingresa tu nombre..." 
                        required 
                        className="w-full bg-white border-2 border-neutral-950 rounded-none px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00e676]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-black text-neutral-800 uppercase tracking-wider mb-2">Correo Electrónico</label>
                      <input 
                        type="email" 
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="ejemplo@correo.com" 
                        required 
                        className="w-full bg-white border-2 border-neutral-950 rounded-none px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00e676]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-black text-neutral-800 uppercase tracking-wider mb-2">Mensaje</label>
                      <textarea 
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="¿En qué podemos ayudarte?" 
                        rows={4}
                        required 
                        className="w-full bg-white border-2 border-neutral-950 rounded-none px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00e676] resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full px-6 py-4 bg-neutral-950 text-white font-display font-black rounded-none hover:bg-[#00e676] hover:text-neutral-950 border-2 border-neutral-950 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all text-xs tracking-wider uppercase mt-8 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#00e676] stroke-[2.5]" />
                    Enviar Mensaje
                  </button>
                </form>

              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="bg-neutral-950 text-white border-t-4 border-neutral-900 font-mono">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between items-center gap-6">
              <div>
                <span className="text-xl font-display font-black tracking-tighter uppercase">
                  FIT<span className="text-[#00e676] bg-[#00e676]/10 px-2 py-0.5 border border-[#00e676]/30 ml-1">HOME</span>
                </span>
                <p className="text-xs text-neutral-500 mt-3 max-w-sm">
                  Superando tus límites desde la comodidad de tu hogar.
                </p>
              </div>

              <div className="flex gap-3">
                {['FB', 'IG', 'TW', 'YT'].map((network) => (
                  <a 
                    key={network} 
                    href="#inicio" 
                    className="w-10 h-10 border border-neutral-850 flex items-center justify-center text-xs font-bold text-neutral-400 hover:bg-[#00e676] hover:text-neutral-950 hover:border-neutral-950 transition-colors"
                  >
                    {network}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-black py-8 border-t border-neutral-900 text-center px-6">
              <p className="text-[11px] text-neutral-600">
                &copy; 2026 FitHome. Todos los derechos reservados.
              </p>
              <p className="school-tag font-display font-black text-xs text-[#00e676] mt-3">
                Proyecto Integrador - Instituto Técnico Contable John F. Kennedy - BTP en Informática
              </p>
            </div>
          </footer>

        </div>
      ) : (
        /* ==========================================
           VISOR DE ARCHIVOS DE ENTREGA (DEVELOPER VIEW)
           ========================================== */
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 animate-fadeIn mb-12">
          
          <div className="bg-white rounded-none border-4 border-neutral-950 overflow-hidden shadow-[8px_8px_0px_0px_rgba(10,10,10,1)]">
            
            {/* Banner Informativo del Panel de Control */}
            <div className="bg-neutral-950 p-8 text-white border-b-4 border-neutral-950">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#00e676] p-2 text-neutral-950 border-2 border-neutral-950 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] shrink-0">
                  <BookOpen className="w-5 h-5 font-black" />
                </div>
                <h3 className="text-xl font-display font-black tracking-tight uppercase text-white">Portal de Entrega del Estudiante BTP</h3>
              </div>
              <p className="text-xs md:text-sm text-neutral-300 max-w-4xl font-mono leading-relaxed">
                Para tu <strong>Proyecto Integrador de Graduación</strong> en el <strong>Instituto John F. Kennedy</strong>, hemos estructurado el código de manera limpia, moderna y portable en exactamente 3 archivos estándar independientes que puedes copiar o descargar con un solo clic. Úsalos directamente para alojar tu tienda online en <strong>GitHub Pages</strong> o entregarlos en un directorio comprimido.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Selector Lateral de Archivos */}
              <div className="lg:col-span-3 bg-neutral-100 p-6 border-r-3 border-neutral-950 flex flex-col justify-between gap-10">
                <div className="font-mono">
                  <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest block mb-4">ARCHIVOS DE ENTREGA</span>
                  <div className="space-y-3">
                    
                    {/* Archivo HTML */}
                    <button 
                      onClick={() => setSelectedFile('html')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-none text-left border-2 transition-all cursor-pointer ${
                        selectedFile === 'html' 
                          ? 'bg-[#00e676] border-neutral-950 text-neutral-950 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                          : 'bg-white border-neutral-950 text-neutral-700 hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,230,118,1)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🌐</span>
                        <span className="text-xs font-mono font-bold">index.html</span>
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border uppercase ${selectedFile === 'html' ? 'bg-neutral-950 text-[#00e676] border-[#00e676]/30' : 'bg-neutral-150 text-neutral-750 border-neutral-300'}`}>HTML5</span>
                    </button>
 
                    {/* Archivo CSS */}
                    <button 
                      onClick={() => setSelectedFile('css')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-none text-left border-2 transition-all cursor-pointer ${
                        selectedFile === 'css' 
                          ? 'bg-[#00e676] border-neutral-950 text-neutral-950 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                          : 'bg-white border-neutral-950 text-neutral-700 hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,230,118,1)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">🎨</span>
                        <span className="text-xs font-mono font-bold">styles.css</span>
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border uppercase ${selectedFile === 'css' ? 'bg-neutral-950 text-[#00e676] border-[#00e676]/30' : 'bg-neutral-150 text-neutral-750 border-neutral-300'}`}>CSS3</span>
                    </button>
 
                    {/* Archivo JS */}
                    <button 
                      onClick={() => setSelectedFile('js')}
                      className={`w-full flex items-center justify-between p-3.5 rounded-none text-left border-2 transition-all cursor-pointer ${
                        selectedFile === 'js' 
                          ? 'bg-[#00e676] border-neutral-950 text-neutral-950 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' 
                          : 'bg-white border-neutral-950 text-neutral-700 hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,230,118,1)]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-base">⚙️</span>
                        <span className="text-xs font-mono font-bold">script.js</span>
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 border uppercase ${selectedFile === 'js' ? 'bg-neutral-950 text-[#00e676] border-[#00e676]/30' : 'bg-neutral-150 text-neutral-750 border-neutral-300'}`}>ES6+</span>
                    </button>
                    
                  </div>
                </div>
 
                {/* Caja de Recomendación Educativa */}
                <div className="pt-6 border-t-2 border-dashed border-neutral-300 text-neutral-500 font-mono">
                  <div className="flex items-center gap-2 mb-2">
                    <Info className="w-4 h-4 text-[#00e676] shrink-0" />
                    <span className="text-[11px] font-black text-neutral-800 uppercase tracking-tight">Sincronización Total</span>
                  </div>
                  <p className="text-[10px] leading-relaxed text-neutral-600">
                    Los estilos en <code className="font-mono text-[9px] bg-neutral-200 px-1 py-0.5 border border-neutral-300">styles.css</code> y el código dinámico en <code className="font-mono text-[9px] bg-neutral-200 px-1 py-0.5 border border-neutral-300">script.js</code> se encuentran enlazados exactamente usando rutas relativas estandarizadas.
                  </p>
                </div>
              </div>
 
              {/* Visor de Código Central */}
              <div className="lg:col-span-9 bg-neutral-950 p-6 flex flex-col min-h-[500px]">
                
                {/* Cabecera del Visor */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-2 border-neutral-900 mb-4 font-mono">
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 bg-rose-500 border border-black/10"></span>
                      <span className="w-3 h-3 bg-amber-500 border border-black/10"></span>
                      <span className="w-3 h-3 bg-emerald-500 border border-black/10"></span>
                    </div>
                    <span className="text-xs font-mono pl-2 text-neutral-400">/{getSelectedFileName()}</span>
                  </div>
 
                  <button
                    onClick={() => handleCopyCode(getSelectedCode())}
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#00e676] text-neutral-950 hover:bg-emerald-300 font-display font-black border-2 border-neutral-950 shadow-[3px_3px_0px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-none cursor-pointer transition-all text-xs uppercase tracking-wider"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-neutral-950 stroke-[2.5]" />
                        <span>¡Código Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-neutral-950" />
                        <span>Copiar Código Fuente</span>
                      </>
                    )}
                  </button>
                </div>
 
                {/* Bloque de Código */}
                <div className="flex-grow overflow-auto font-mono text-[11.5px] leading-relaxed text-[#00e676] bg-neutral-950 p-6 border-2 border-neutral-900 max-h-[500px] h-full selection:bg-white selection:text-neutral-950">
                  <pre className="whitespace-pre text-[#00e676] whitespace-pre-wrap word-break">
                    {getSelectedCode()}
                  </pre>
                </div>
              </div>
 
            </div>
          </div>
 
          {/* ==========================================
             GUÍA DE PASOS: GUÍA RÁPIDA DE PUBLICACIÓN EN GITHUB PAGES
             ========================================== */}
          <div className="mt-14">
            <h3 className="text-2xl md:text-4xl font-display font-black text-neutral-950 uppercase tracking-tighter mb-8 text-center md:text-left">
              Guía de Despliegue para tu BTP: GitHub Pages en 5 Pasos
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              
              <div className="bg-white p-6 border-3 border-neutral-950 shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,230,118,1)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-display font-black text-neutral-100 select-none group-hover:scale-110 group-hover:text-[#00e676]/10 transition-all duration-300">1</span>
                <span className="text-xl">🔑</span>
                <h4 className="text-sm font-display font-black text-neutral-950 mt-4 mb-2 uppercase tracking-tight">Crea tu Cuenta</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                  Entra a <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-emerald-650 font-black inline-flex items-center gap-0.5 hover:underline">GitHub <ExternalLink className="w-2.5 h-2.5" /></a> y regístrate de forma totalmente gratuita si aún no posees una cuenta.
                </p>
              </div>
 
              <div className="bg-white p-6 border-3 border-neutral-950 shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,230,118,1)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-display font-black text-neutral-100 select-none group-hover:scale-110 group-hover:text-[#00e676]/10 transition-all duration-300">2</span>
                <span className="text-xl">📂</span>
                <h4 className="text-sm font-display font-black text-neutral-950 mt-4 mb-2 uppercase tracking-tight">Nuevo Proyecto</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                  Haz clic en el botón "Nuevo" repositorio. Nómbralo obligatoriamente <code className="font-mono bg-neutral-100 border border-neutral-200 px-1 rounded font-bold text-[9px]">fithome</code>.
                </p>
              </div>
 
              <div className="bg-white p-6 border-3 border-neutral-950 shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,230,118,1)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-display font-black text-neutral-100 select-none group-hover:scale-110 group-hover:text-[#00e676]/10 transition-all duration-300">3</span>
                <span className="text-xl">📝</span>
                <h4 className="text-sm font-display font-black text-neutral-950 mt-4 mb-2 uppercase tracking-tight">Cargar Archivos</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                  Sube los 3 archivos independientes (<code className="font-mono text-[9px] bg-neutral-100">index.html</code>, <code className="font-mono text-[9px] bg-neutral-100">styles.css</code>, <code className="font-mono text-[9px] bg-neutral-100">script.js</code>) copiados del visor.
                </p>
              </div>
 
              <div className="bg-white p-6 border-3 border-neutral-950 shadow-[5px_5px_0px_0px_rgba(10,10,10,1)] hover:shadow-[7px_7px_0px_0px_rgba(0,230,118,1)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-display font-black text-neutral-100 select-none group-hover:scale-110 group-hover:text-[#00e676]/10 transition-all duration-300">4</span>
                <span className="text-xl">⚙️</span>
                <h4 className="text-sm font-display font-black text-neutral-950 mt-4 mb-2 uppercase tracking-tight">Activa Pages</h4>
                <p className="text-[11px] text-neutral-500 leading-relaxed font-mono">
                  Entra a <strong>Settings</strong>, selecciona el menú <strong>Pages</strong> a la izquierda, y activa el despliegue automático desde la rama <code className="font-mono text-[9px] bg-neutral-100">main</code>.
                </p>
              </div>
 
              <div className="bg-[#00e676]/5 p-6 border-3 border-[#00e676] shadow-[5px_5px_0px_0px_rgba(0,230,118,0.3)] hover:shadow-[7px_7px_0px_0px_rgba(0,230,118,1)] transition-all duration-300 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-display font-black text-emerald-100/20 select-none group-hover:scale-110 group-hover:text-[#00e676]/20 transition-all duration-300">5</span>
                <span className="text-xl">🎉</span>
                <h4 className="text-sm font-display font-black text-emerald-950 mt-4 mb-2 uppercase tracking-tight">¡Sitio En Vivo!</h4>
                <p className="text-[11px] text-neutral-700 leading-relaxed font-mono">
                  ¡Excelente! GitHub generará para tu docente el enlace público: <span className="font-mono text-[9.5px] font-black text-emerald-800 bg-[#00e676]/20 px-1 py-0.5 border border-[#00e676]/30 block mt-1">https://tu-usuario.github.io/fithome/</span> listo para entregar.
                </p>
              </div>
 
            </div>
          </div>
 
        </div>
      )}
 
    </div>
  );
}
