// Routes configuration
const ROUTES = {
  // Main section routes
  HORIZONTE: 'HORIZONTE_ESTRATEGICO/horizonte_estrategico.html',
  INFRAESTRUCTURA: 'INFRAESTRUCTURA_INSTITUCIONAL/infraestructura_institucional.html',
  CONTEXTO: 'CONTEXTO/contexto.html',
  CONFLICTO: 'CONFLICTO/conficto.html', 
  // Header navigation routes (dummy routes for now)
  SELECTOR: '#',
  REPORTS: 'REPORTES/reportes_lobby.html',
  DATABASE: '#',
  // Footer routes (dummy routes for now)
  DOCUMENTATION: '#',
  CONTACT: '#',
  DATABASE_QUERY: '#'
};

document.addEventListener('DOMContentLoaded', () => {
  // Navigation handling
  const handleNavigation = (section) => {
      switch(section) {
          case 'horizonte':
              window.location.href = ROUTES.HORIZONTE;
              break;
          case 'infraestructura':
              window.location.href = ROUTES.INFRAESTRUCTURA;
              break;
          case 'contexto':
              window.location.href = ROUTES.CONTEXTO;
              break;
          case 'conflicto':
              window.location.href = ROUTES.CONFLICTO;
              break;
          case 'back':
              window.location.href = ROUTES.SELECTOR;
              break;
          case 'reports':
              window.location.href = ROUTES.REPORTS;
              break;
          case 'database':
              window.location.href = ROUTES.DATABASE;
              break;
          default:
              console.log(`Accessing section: ${section}`);
      }
  };

  // Add click handlers to navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
          const action = btn.querySelector('span').textContent;
          if (action === 'Volver al Selector') {
              handleNavigation('back');
          } else if (action === 'Ir a Reportes') {
              handleNavigation('reports');
          } else if (action === 'Ir a la base de datos') {
              handleNavigation('database');
          }
      });
  });

  // Add click handlers to cards
  document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
          const section = card.dataset.section;
          handleNavigation(section);
      });
  });

  // Add click handlers to footer links
  document.querySelectorAll('.footer-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const action = link.querySelector('span').textContent;
          switch(action) {
              case 'Ir a la documentación del Aplicativo':
                  window.location.href = ROUTES.DOCUMENTATION;
                  break;
              case 'Contactar al equipo del desarrollo':
                  window.location.href = ROUTES.CONTACT;
                  break;
              case 'Consultar la base de datos':
                  window.location.href = ROUTES.DATABASE_QUERY;
                  break;
          }
      });
  });

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

  // Add touch device support
  if (window.matchMedia('(hover: none)').matches) {
      cards.forEach(card => {
          card.addEventListener('touchstart', () => {
              cards.forEach(c => c.classList.remove('active'));
              card.classList.add('active');
          });
      });
  }
});