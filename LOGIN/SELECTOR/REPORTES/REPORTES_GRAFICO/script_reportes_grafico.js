// Constants
const ROUTES = {
    SELECTOR: '../reportes_lobby.html',
    DOCUMENTATION: '#/documentation',
    CONTACT: '#/contact',
    DATABASE: '#/database'
};

class ReportesGraficosManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIframeHandlers();
    }

    setupEventListeners() {
        // Navigation handling
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.querySelector('span').textContent;
                if (action === 'Volver al Selector') {
                    window.location.href = ROUTES.SELECTOR;
                }
            });
        });

        // Footer links handling
        document.querySelectorAll('.footer-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const action = link.querySelector('span').textContent;
                this.handleFooterNavigation(action);
            });
        });
    }

    setupIframeHandlers() {
        // Add loading state for iframes
        document.querySelectorAll('iframe').forEach(iframe => {
            // Set initial opacity
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.3s ease';

            // Handle load event
            iframe.addEventListener('load', () => {
                iframe.style.opacity = '1';
            });

            // Handle error event
            iframe.addEventListener('error', () => {
                console.error('Failed to load iframe:', iframe.title);
                iframe.insertAdjacentHTML('afterend', `
                    <div class="error-message">
                        Error al cargar el reporte. Por favor, actualice la página.
                    </div>
                `);
            });
        });
    }

    handleFooterNavigation(action) {
        switch(action) {
            case 'Ir a la documentación del Aplicativo':
                window.location.href = ROUTES.DOCUMENTATION;
                break;
            case 'Contactar al equipo del desarrollo':
                window.location.href = ROUTES.CONTACT;
                break;
            case 'Consultar la base de datos':
                window.location.href = ROUTES.DATABASE;
                break;
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ReportesGraficosManager();
});