// Configuración de rutas
const ROUTES = {
  SELECTOR: '../selector.html',
  REPORTS: '#/reports',
  DATABASE: '#/database',
  DOCUMENTATION: '#/documentation',
  CONTACT: '#/contact',
  DATABASE_QUERY: '#/database-query'
};

class InfraestructuraManager {
  constructor() {
      this.form = null;
      this.resetBtn = null;
      this.submitBtn = null;
      this.storageKey = 'infraestructura_institucional_data';
  }

  init() {
      // Inicializar elementos del DOM
      this.form = document.getElementById('infrastructureForm');
      this.resetBtn = document.getElementById('resetBtn');
      this.submitBtn = this.form.querySelector('button[type="submit"]');

      // Configurar eventos
      this.setupEventListeners();
      this.setupNavigation();
      this.setupSelectAnimations();
  }

  setupEventListeners() {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.resetBtn.addEventListener('click', () => this.handleReset());
  }

  handleSubmit(e) {
      e.preventDefault();
      const data = this.collectFormData();
      
      if (this.validateForm(data)) {
          this.setLoadingState(true);

          try {
              this.saveToLocalStorage(data);
              this.showNotification('Registro guardado exitosamente');
              this.resetForm();
          } catch (error) {
              this.showNotification('Error al guardar los datos', 'error');
              console.error('Error al guardar:', error);
          } finally {
              this.setLoadingState(false);
          }
      }
  }

  saveToLocalStorage(data) {
      try {
          // Obtener datos existentes
          let existingData = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
          
          // Añadir nuevo registro con timestamp
          const newRecord = {
              ...data,
              id: Date.now(),
              created_at: new Date().toISOString()
          };
          
          existingData.push(newRecord);
          
          // Guardar datos actualizados
          localStorage.setItem(this.storageKey, JSON.stringify(existingData));
          
          // Log para desarrollo
          console.log('Datos guardados:', newRecord);
      } catch (error) {
          console.error('Error al guardar en localStorage:', error);
          throw new Error('Error al guardar los datos');
      }
  }

  collectFormData() {
      const formData = new FormData(this.form);
      return Object.fromEntries(formData.entries());
  }

  validateForm(data) {
      let isValid = true;
      const requiredFields = Object.entries(data);

      requiredFields.forEach(([key, value]) => {
          const field = document.getElementById(key);
          if (!value) {
              isValid = false;
              field.classList.add('error');
          } else {
              field.classList.remove('error');
          }
      });

      if (!isValid) {
          this.showNotification('Por favor, complete todos los campos requeridos', 'error');
      }

      return isValid;
  }

  handleReset() {
      if (confirm('¿Está seguro que desea limpiar todos los campos?')) {
          this.resetForm();
      }
  }

  resetForm() {
      this.form.reset();
      document.querySelectorAll('select').forEach(select => {
          select.classList.remove('selected');
          select.classList.remove('error');
      });
  }

  setLoadingState(isLoading) {
      this.submitBtn.disabled = isLoading;
      this.submitBtn.innerHTML = isLoading ? 
          '<i class="bx bx-loader-alt bx-spin"></i> Guardando...' :
          '<i class="bx bx-save"></i><span>Guardar Registro</span>';
  }

  showNotification(message, type = 'success') {
      const notification = document.createElement('div');
      notification.className = `notification ${type}`;
      notification.textContent = message;
      notification.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          padding: 15px 25px;
          background-color: ${type === 'success' ? '#10B981' : '#EF4444'};
          color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.3s ease;
      `;
      
      document.body.appendChild(notification);
      
      // Trigger animation
      setTimeout(() => {
          notification.style.opacity = '1';
          notification.style.transform = 'translateY(0)';
      }, 10);
      
      // Remove notification
      setTimeout(() => {
          notification.style.opacity = '0';
          notification.style.transform = 'translateY(-20px)';
          setTimeout(() => notification.remove(), 300);
      }, 3000);
  }

  setupSelectAnimations() {
      document.querySelectorAll('select').forEach(select => {
          select.addEventListener('change', () => {
              if (select.value) {
                  select.classList.add('selected');
              } else {
                  select.classList.remove('selected');
              }
          });
      });
  }

  setupNavigation() {
      // Botones de navegación del header
      document.querySelectorAll('.nav-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              const action = btn.querySelector('span').textContent;
              switch(action) {
                  case 'Volver al Selector':
                      window.location.href = ROUTES.SELECTOR;
                      break;
                  case 'Ir a Reportes':
                      window.location.href = ROUTES.REPORTS;
                      break;
                  case 'Ir a la base de datos':
                      window.location.href = ROUTES.DATABASE;
                      break;
              }
          });
      });

      // Enlaces del footer
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
  }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  const manager = new InfraestructuraManager();
  manager.init();
});