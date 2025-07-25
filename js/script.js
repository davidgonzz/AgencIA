// -------- SCROLL SUAVE EN ANCLAS --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// -------- NAVBAR (igual en todas las páginas) --------
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});

// -------- CONTACTO CON CALENDLY --------
document.addEventListener('DOMContentLoaded', () => {
    const contactoContainer = document.getElementById('contactoCalendly');

    if (contactoContainer) {
        // Insertar el widget de Calendly
        contactoContainer.innerHTML = `
            <div class="calendly-inline-widget" 
                data-url="https://calendly.com/TU_USUARIO" 
                style="min-width:320px;height:630px;">
            </div>
        `;

        // Cargar el script oficial de Calendly
        const scriptCalendly = document.createElement('script');
        scriptCalendly.src = 'https://assets.calendly.com/assets/external/widget.js';
        scriptCalendly.async = true;
        document.body.appendChild(scriptCalendly);
    }
});
