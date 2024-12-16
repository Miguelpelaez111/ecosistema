// Routes configuration
const ROUTES = {
    SELECTOR: '../selector.html',
    TABLERO: 'TABLERO_REGISTRO/tablero_registro.html',
    GRAFICOS: 'REPORTES_GRAFICO/reportes_grafico.html',
    DOCUMENTATION: '#/documentation',
    CONTACT: '#/contact',
    DATABASE: '#/database'
};

class ReportesManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAccessibility();
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

        // Cards handling
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', () => {
                const section = card.dataset.section;
                this.handleCardNavigation(section);
            });

            // Add hover effect for better UX
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
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

    handleCardNavigation(section) {
        switch(section) {
            case 'tablero':
                window.location.href = ROUTES.TABLERO;
                break;
            case 'graficos':
                window.location.href = ROUTES.GRAFICOS;
                break;
            default:
                console.warn('Ruta no definida');
        }
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

    setupAccessibility() {
        // Add keyboard navigation
        let currentFocus = -1;
        const cards = document.querySelectorAll('.card');

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                currentFocus = currentFocus === cards.length - 1 ? 0 : currentFocus + 1;
                cards[currentFocus].focus();
            }
        });

        // Add ARIA labels
        cards.forEach(card => {
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', card.querySelector('.card__title').textContent);
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ReportesManager();
});