/* ==========================================
   REGISTRO DE CÓDIGO BTP INFORMÁTICA
   FitHome - Archivos listos para producción
   ========================================== */

export const BTP_FILES = {
    indexHtml: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitHome - Deporte en Casa y Fitness</title>
    <!-- Google Fonts para tipografía premium -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <!-- Enlace a la hoja de estilos externa -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- CABECERA FIJA (STICKY HEADER) -->
    <header class="main-header">
        <div class="header-container">
            <a href="#inicio" class="logo">Fit<span>Home</span></a>
            
            <!-- Botón del menú móvil (Hamburguesa) -->
            <button class="mobile-menu-toggle" aria-label="Abrir menú">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="nav-menu">
                <ul>
                    <li><a href="#inicio" class="active">Inicio</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#beneficios">Beneficios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- ANCLA INICIO / SECCIÓN HERO -->
    <section id="inicio" class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <span class="hero-badge">TU GIMNASIO EN CASA</span>
            <h1 class="hero-title">ENTRENA EN CASA, SUPERA TUS LÍMITES</h1>
            <p class="hero-subtitle">Equipamiento deportivo premium y rutinas guiadas para transformar tu cuerpo y mejorar tu salud sin salir de tu hogar.</p>
            <div class="hero-buttons">
                <a href="#productos" class="btn btn-primary">Explorar Catálogo</a>
                <a href="#beneficios" class="btn btn-outline">Saber Más</a>
            </div>
        </div>
    </section>

    <!-- SECCIÓN DE PRODUCTOS ESTRELLA -->
    <section id="productos" class="products-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">PRODUCTOS ESTRELLA</h2>
                <div class="section-line"></div>
                <p class="section-subtitle">Nuestra selección especial de artículos de alta calidad recomendados por entrenadores profesionales.</p>
            </div>

            <div class="products-grid">
                <!-- PRODUCTO 1 -->
                <div class="product-card" id="prod-1">
                    <div class="product-badge">Más Vendido</div>
                    <div class="product-img-wrapper container-emoji-1">
                        <span class="product-emoji">🏋️‍♀️</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Bandas de Resistencia de Tela</h3>
                        <p class="product-description">Set de 3 intensidades (suave, media, fuerte) con costuras reforzadas, ideal para tonificar piernas y glúteos de forma segura.</p>
                        <div class="product-footer">
                            <span class="product-price">$24.99</span>
                            <button class="btn btn-buy" data-name="Bandas de Resistencia de Tela">Comprar Ahora</button>
                        </div>
                    </div>
                </div>

                <!-- PRODUCTO 2 -->
                <div class="product-card" id="prod-2">
                    <div class="product-badge">Premium</div>
                    <div class="product-img-wrapper container-emoji-2">
                        <span class="product-emoji">🧘‍♂️</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Tapete de Yoga Premium</h3>
                        <p class="product-description">Grosor extra de 6mm de material TPE ecológico, antideslizante con sofisticadas líneas grabadas de alineación postural.</p>
                        <div class="product-footer">
                            <span class="product-price">$34.99</span>
                            <button class="btn btn-buy" data-name="Tapete de Yoga Premium">Comprar Ahora</button>
                        </div>
                    </div>
                </div>

                <!-- PRODUCTO 3 -->
                <div class="product-card" id="prod-3">
                    <div class="product-badge">Alta Velocidad</div>
                    <div class="product-img-wrapper container-emoji-3">
                        <span class="product-emoji">⚡</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Cuerda de Alta Velocidad</h3>
                        <p class="product-description">Cable de acero ajustable con rodamientos de bolas profesionales integrados para giros fluidos y saltos dobles rápidos.</p>
                        <div class="product-footer">
                            <span class="product-price">$14.99</span>
                            <button class="btn btn-buy" data-name="Cuerda de Alta Velocidad">Comprar Ahora</button>
                        </div>
                    </div>
                </div>

                <!-- PRODUCTO 4 -->
                <div class="product-card" id="prod-4">
                    <div class="product-badge">Nivel Pro</div>
                    <div class="product-img-wrapper container-emoji-4">
                        <span class="product-emoji">🛹</span>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">Rueda Abdominal Pro</h3>
                        <p class="product-description">Rodillo de doble rueda ultra estable con agarre ergonómico antideslizante y almohadilla protectora suave para rodillas.</p>
                        <div class="product-footer">
                            <span class="product-price">$19.99</span>
                            <button class="btn btn-buy" data-name="Rueda Abdominal Pro">Comprar Ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN BENEFICIOS -->
    <section id="beneficios" class="benefits-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">¿POR QUÉ ENTRENAR CON NOSOTROS?</h2>
                <div class="section-line"></div>
                <p class="section-subtitle">Equípate con tranquilidad. Nos aseguramos de darte el mejor servicio en cada paso de tu camino fitness.</p>
            </div>

            <div class="benefits-grid">
                <!-- BENEFICIO 1 -->
                <div class="benefit-card" id="benefit-1">
                    <div class="benefit-icon-wrapper">
                        <span class="benefit-emoji">🚀</span>
                    </div>
                    <h3 class="benefit-title">Envío Rápido</h3>
                    <p class="benefit-text">Recibe tus productos deportivos directamente en la puerta de tu casa en menos de 48 horas de forma segura.</p>
                </div>

                <!-- BENEFICIO 2 -->
                <div class="benefit-card" id="benefit-2">
                    <div class="benefit-icon-wrapper">
                        <span class="benefit-emoji">⭐</span>
                    </div>
                    <h3 class="benefit-title">Calidad Garantizada</h3>
                    <p class="benefit-text">Trabajamos bajo estándares rigurosos con materiales ultra duraderos y probados por atletas de alto rendimiento.</p>
                </div>

                <!-- BENEFICIO 3 -->
                <div class="benefit-card" id="benefit-3">
                    <div class="benefit-icon-wrapper">
                        <span class="benefit-emoji">🎁</span>
                    </div>
                    <h3 class="benefit-title">Rutinas Gratis</h3>
                    <p class="benefit-text">Incluimos un manual digital interactivo con rutinas y planes de entrenamiento exclusivos en cada una de tus compras.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- SECCIÓN CONTACTO -->
    <section id="contacto" class="contact-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">ÚNETE AL EQUIPO FITHOME</h2>
                <div class="section-line"></div>
                <p class="section-subtitle">¿Tienes alguna pregunta sobre nuestros equipos? Escríbenos y un experto te atenderá al instante.</p>
            </div>

            <div class="contact-wrapper">
                <div class="contact-info">
                    <h3>Información de Contacto</h3>
                    <p class="contact-desc">Estamos listos para apoyarte a alcanzar todas tus metas físicas de salud y bienestar.</p>
                    
                    <div class="info-list">
                        <div class="info-item">
                            <span class="info-emoji">📍</span>
                            <p>Tegucigalpa, Honduras. Col. Kennedy.</p>
                        </div>
                        <div class="info-item">
                            <span class="info-emoji">✉️</span>
                            <p>contacto@fithome.com</p>
                        </div>
                        <div class="info-item">
                            <span class="info-emoji">📞</span>
                            <p>+504 2222-3333 (Atención 24/7)</p>
                        </div>
                    </div>
                </div>

                <!-- FORMULARIO DE CONTACTO -->
                <form class="contact-form" id="main-contact-form" onsubmit="event.preventDefault(); alert('¡Gracias por contactarnos! Tu consulta ha sido enviada. Un asesor de FitHome te escribirá pronto por correo.'); this.reset();">
                    <div class="form-group">
                        <label for="name">Nombre Completo</label>
                        <input type="text" id="name" placeholder="Ingresa tu nombre..." required>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo Electrónico</label>
                        <input type="email" id="email" placeholder="ejemplo@correo.com" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    </section>

    <!-- PIE DE PÁGINA (FOOTER) -->
    <footer class="main-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <p class="footer-logo">Fit<span>Home</span></p>
                <p class="footer-tagline">Superando tus límites desde la comodidad de tu hogar.</p>
            </div>
            
            <div class="footer-socials">
                <a href="#inicio" class="social-link" title="Facebook">FB</a>
                <a href="#inicio" class="social-link" title="Instagram">IG</a>
                <a href="#inicio" class="social-link" title="Twitter">TW</a>
                <a href="#inicio" class="social-link" title="YouTube">YT</a>
            </div>
        </div>
        
        <div class="footer-credit">
            <p>&copy; 2026 FitHome. Todos los derechos reservados.</p>
            <p class="school-tag font-bold">Proyecto Integrador - Instituto Técnico Contable John F. Kennedy - BTP en Informática</p>
        </div>
    </footer>

    <!-- Enlace al archivo JavaScript de comportamiento -->
    <script src="script.js"></script>
</body>
</html>`,
    stylesCss: `/* ==========================================
   FITHOME - HOJA DE ESTILOS PREMIUM
   Proyecto Integrador BTP en Informática
   Instituto Técnico Contable John F. Kennedy
   ========================================== */

/* 1. RESET Y CONFIGURACIONES GLOBALES */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Paleta de colores Premium Fitness */
    --color-dark-bg: #111111;         /* Negro elegante para secciones clave */
    --color-light-bg: #f8f9fa;        /* Gris claro suave de fondo general */
    --color-white: #ffffff;           /* Blanco puro */
    --color-text-dark: #333333;       /* Texto gris oscuro principal */
    --color-text-muted: #666666;      /* Texto secundario atenuado */
    --color-accent: #00e676;          /* Verde neón enérgico / fitness */
    --color-accent-hover: #00b359;    /* Verde neón más oscuro para hover en botones */
    --color-shadow: rgba(0, 0, 0, 0.08); /* Sombra elegante por defecto */
    
    /* Tipografía y Espaciado */
    --font-primary: 'Poppins', 'Segoe UI', Arial, sans-serif;
    --border-radius-card: 12px;       /* Bordes muy bien redondeados */
    --border-radius-btn: 30px;        /* Botones estilo píldora deportiva */
    --transition-smooth: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

html {
    scroll-behavior: smooth;
    font-family: var(--font-primary);
    background-color: var(--color-light-bg);
    color: var(--color-text-dark);
}

body {
    line-height: 1.6;
    overflow-x: hidden;
}

/* Contenedor central flexible */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Enlaces limpios */
a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-smooth);
}

/* Botones genéricos */
.btn {
    display: inline-block;
    padding: 12px 30px;
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: var(--border-radius-btn);
    border: 2px solid transparent;
    cursor: pointer;
    transition: var(--transition-smooth);
    text-align: center;
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-dark-bg);
}

.btn-primary:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 230, 118, 0.4);
}

.btn-outline {
    background-color: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
}

.btn-outline:hover {
    background-color: var(--color-white);
    color: var(--color-dark-bg);
    transform: translateY(-2px);
}

.btn-block {
    display: block;
    width: 100%;
}

/* Encabezados de Sección */
.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-title {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: inherit;
}

.section-line {
    width: 70px;
    height: 4px;
    background-color: var(--color-accent);
    margin: 15px auto;
    border-radius: 2px;
}

.section-subtitle {
    font-size: 1.05rem;
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
}


/* 2. CABECERA FIJA (STICKY HEADER) */
.main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(17, 17, 17, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    padding: 15px 0;
    transition: var(--transition-smooth);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Logo "FitHome" */
.logo {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: var(--color-white);
    text-transform: uppercase;
}

.logo span {
    color: var(--color-accent);
}

/* Menú de Navegación */
.nav-menu ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-menu a {
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    padding: 5px 0;
}

.nav-menu a:hover,
.nav-menu a.active {
    color: var(--color-accent);
}

/* Indicador de pestaña activa */
.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: var(--transition-smooth);
}

.nav-menu a:hover::after,
.nav-menu a.active::after {
    width: 100%;
}

/* Botón Hamburguesa Móvil */
.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 25px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1010;
}

.mobile-menu-toggle span {
    width: 100%;
    height: 3px;
    background-color: var(--color-white);
    transition: var(--transition-smooth);
    border-radius: 2px;
}


/* 3. SECCIÓN HERO DE BIENVENIDA */
.hero-section {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: var(--color-dark-bg);
    background-image: radial-gradient(circle at 20% 30%, rgba(0, 230, 118, 0.15) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(17, 17, 17, 0.9) 0%, transparent 60%),
                      linear-gradient(135deg, #0e1111 0%, #1a1a1a 100%);
    color: var(--color-white);
    padding-top: 80px;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 850px;
    padding: 0 20px;
}

.hero-badge {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    padding: 6px 16px;
    border-radius: 20px;
    margin-bottom: 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.15;
    margin-bottom: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    animation: fadeInDown 0.8s ease;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: #cccccc;
    margin-bottom: 40px;
    font-weight: 300;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    animation: fadeInUp 0.8s ease;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
}


/* 4. SECCIÓN DE PRODUCTOS ESTRELLA */
.products-section {
    padding: 100px 0;
    background-color: var(--color-light-bg);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

/* Tarjetas de Producto */
.product-card {
    background-color: var(--color-white);
    border-radius: var(--border-radius-card);
    overflow: hidden;
    box-shadow: 0 10px 30px var(--color-shadow);
    transition: var(--transition-smooth);
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.03);
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.product-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: var(--color-dark-bg);
    color: var(--color-accent);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 10px;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(0, 230, 118, 0.3);
}

.product-img-wrapper {
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.container-emoji-1 { background: linear-gradient(135deg, #eef2f3 0%, #ffeaf2 100%); }
.container-emoji-2 { background: linear-gradient(135deg, #e3f2fd 0%, #e8f5e9 100%); }
.container-emoji-3 { background: linear-gradient(135deg, #f3e5f5 0%, #fffde7 100%); }
.container-emoji-4 { background: linear-gradient(135deg, #efebe9 0%, #eceff1 100%); }

.product-emoji {
    font-size: 5rem;
    transition: var(--transition-smooth);
    user-select: none;
}

.product-card:hover .product-emoji {
    transform: scale(1.15) rotate(5deg);
}

.product-info {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.product-name {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-dark-bg);
    margin-bottom: 12px;
}

.product-description {
    font-size: 0.88rem;
    color: var(--color-text-muted);
    margin-bottom: 20px;
    line-height: 1.5;
    flex-grow: 1;
}

.product-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
}

.product-price {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-dark-bg);
}

.btn-buy {
    font-size: 0.82rem;
    padding: 8px 18px;
    border-radius: 8px;
    background-color: var(--color-dark-bg);
    color: var(--color-white);
    border: none;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
}

.btn-buy:hover {
    background-color: var(--color-accent);
    color: var(--color-dark-bg);
    box-shadow: 0 4px 10px rgba(0, 230, 118, 0.3);
}


/* 5. SECCIÓN BENEFICIOS DE ENTRENAR CON NOSOTROS */
.benefits-section {
    padding: 100px 0;
    background-color: var(--color-dark-bg);
    color: var(--color-white);
    position: relative;
}

.benefits-section .section-subtitle {
    color: #aaaaaa;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
    margin-top: 30px;
}

.benefit-card {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 30px;
    border-radius: var(--border-radius-card);
    text-align: center;
    transition: var(--transition-smooth);
}

.benefit-card:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: var(--color-accent);
    transform: translateY(-5px);
}

.benefit-icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: rgba(0, 230, 118, 0.1);
    color: var(--color-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 25px;
    border: 2px dashed rgba(0, 230, 118, 0.3);
}

.benefit-emoji {
    font-size: 2.2rem;
}

.benefit-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    letter-spacing: 0.5px;
}

.benefit-text {
    font-size: 0.95rem;
    color: #b0b0b0;
    line-height: 1.6;
}


/* 6. SECCIÓN DE CONTACTO EXCLUSIVA */
.contact-section {
    padding: 100px 0;
    background-color: var(--color-white);
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 50px;
    margin-top: 20px;
    align-items: stretch;
}

.contact-info {
    background-color: var(--color-dark-bg);
    color: var(--color-white);
    padding: 50px;
    border-radius: var(--border-radius-card);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.contact-info h3 {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.contact-desc {
    color: #cccccc;
    font-size: 0.95rem;
    margin-bottom: 40px;
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.info-emoji {
    font-size: 1.8rem;
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.info-item p {
    font-size: 0.95rem;
    color: #e0e0e0;
}

.contact-form {
    background-color: var(--color-light-bg);
    padding: 50px;
    border-radius: var(--border-radius-card);
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-dark);
    margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 14px 20px;
    border-radius: 8px;
    border: 1px solid #dddddd;
    background-color: var(--color-white);
    font-family: var(--font-primary);
    font-size: 0.95rem;
    transition: var(--transition-smooth);
    color: var(--color-text-dark);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--color-accent);
    box-shadow: 0 0 10px rgba(0, 230, 118, 0.15);
}


/* 7. PIE DE PÁGINA (FOOTER) ENRIQUECIDO */
.main-footer {
    background-color: #0c0c0c;
    color: var(--color-white);
    padding: 60px 0 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 40px;
}

.footer-logo {
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--color-white);
    text-transform: uppercase;
    margin-bottom: 8px;
}

.footer-logo span {
    color: var(--color-accent);
}

.footer-tagline {
    font-size: 0.88rem;
    color: #888888;
}

.footer-socials {
    display: flex;
    gap: 15px;
}

.social-link {
    width: 45px;
    height: 45px;
    background-color: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
    color: #cccccc;
}

.social-link:hover {
    background-color: var(--color-accent);
    color: var(--color-dark-bg);
    transform: translateY(-3px);
}

.footer-credit {
    text-align: center;
    padding: 30px 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.82rem;
    color: #666666;
}

.footer-credit p {
    margin-bottom: 10px;
}

.school-tag {
    color: var(--color-accent) !important;
    font-size: 0.95rem;
    font-weight: 600 !important;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 10px;
}

/* Animaciones de entrada */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}


/* ==========================================
   MINDS-EYE RESPONSIVE DESIGN (MEDIA QUERIES)
   ========================================== */

/* Tabletas y Pantallas Medianas */
@media screen and (max-width: 992px) {
    .hero-title {
        font-size: 2.8rem;
    }
    
    .contact-wrapper {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}

/* Celulares Inteligentes y Dispositivos Pequeños */
@media screen and (max-width: 768px) {
    .mobile-menu-toggle {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background-color: rgba(17, 17, 17, 0.98);
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
        padding: 100px 40px;
        transition: var(--transition-smooth);
        z-index: 1005;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-menu ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 35px;
    }

    .nav-menu a {
        font-size: 1.2rem;
    }

    .mobile-menu-toggle.active span:nth-child(1) {
        transform: translateY(7.5px) rotate(45deg);
    }
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: translateY(-7.5px) rotate(-45deg);
    }

    .hero-section {
        height: auto;
        min-height: 100vh;
        padding: 120px 0 80px;
    }

    .hero-title {
        font-size: 2.2rem;
    }

    .hero-subtitle {
        font-size: 1.05rem;
    }

    .hero-buttons {
        flex-direction: column;
        gap: 15px;
        max-width: 300px;
        margin: 0 auto;
    }

    .section-title {
        font-size: 1.8rem;
    }

    .products-section, 
    .benefits-section, 
    .contact-section {
        padding: 70px 0;
    }

    .contact-info, 
    .contact-form {
        padding: 30px 20px;
    }
    
    .footer-container {
        flex-direction: column;
        text-align: center;
    }
}
`,
    scriptJs: `/* ==========================================
   FITHOME - COMPORTAMIENTO INTERACTIVO JS
   Proyecto Integrador BTP en Informática
   Instituto Técnico Contable John F. Kennedy
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. INICIALIZADOR Y VERIFICADOR DE ENLAZADO EN CONSOLA
    console.log("%c💪 ¡FitHome Iniciado Correctamente! 💪", "color: #00e676; font-size: 16px; font-weight: bold; background-color: #111; padding: 8px 12px; border-radius: 4px;");
    console.log("%cEstudios BTP Informática - Instituto Técnico Contable John F. Kennedy", "color: #ffffff; font-style: italic;");
    console.log("Comprobación: styles.css cargado con éxito. script.js inicializado y listo para la acción.");

    // 2. CONTROL DEL MENÚ DE NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
    const mobileMenuBtn = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            // Alternar clases activas para animar hamburger y abrir menú de lado
            mobileMenuBtn.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Cerrar menú móvil al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                mobileMenuBtn.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // 3. SELECCIÓN ACTIVA DE PESTAÑAS BASADO EN EL DESPLAZAMIENTO (SCROLL)
    const sections = document.querySelectorAll("section[id]");
    
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset para compensar el header fijo
            const sectionId = current.getAttribute("id");
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const activeLink = document.querySelector(\`.nav-menu a[href*=\${sectionId}]\`);
                if (activeLink) {
                    navLinks.forEach(link => link.classList.remove("active"));
                    activeLink.classList.add("active");
                }
            }
        });
    });

    // 4. CAPTURA DE BOTONES "COMPRAR AHORA" E INTERACCIÓN GLOBAL
    const buyButtons = document.querySelectorAll(".btn-buy");

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            // Capturar automáticamente el nombre del producto desde el atributo data-name
            const productName = event.target.getAttribute("data-name") || "este artículo premium";
            
            // Generar alerta limpia y personalizada según la especificación exacta del usuario
            const alertMessage = \`¡Excelente elección! 🏋️‍♂️ '\${productName}' ha sido añadido a tu carrito de compras.\\n\\nEscanea el código QR que vendrá en tu paquete para descargar tus rutinas de regalo.\`;
            
            alert(alertMessage);
            
            // Output complementario en consola para registro de la compra simulada
            console.log(\`[Carrito FitHome] Se agregó el producto: "\${productName}" con éxito.\`);
        });
    });

});`
};
