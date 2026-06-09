/* ==========================================
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
                const activeLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
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
            const alertMessage = `¡Excelente elección! 🏋️‍♂️ '${productName}' ha sido añadido a tu carrito de compras.\n\nEscanea el código QR que vendrá en tu paquete para descargar tus rutinas de regalo.`;
            
            alert(alertMessage);
            
            // Output complementario en consola para registro de la compra simulada
            console.log(`[Carrito FitHome] Se agregó el producto: "${productName}" con éxito.`);
        });
    });

});
