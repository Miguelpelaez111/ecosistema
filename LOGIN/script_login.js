// Utility Functions
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showMessage = (message, type = 'success') => {
  // Remove existing messages
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
      existingMessage.remove();
  }

  // Create and show new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  messageDiv.style.cssText = `
      color: ${type === 'error' ? '#ef4444' : '#10b981'};
      font-size: 0.875rem;
      margin-top: 0.5rem;
      text-align: center;
  `;
  messageDiv.textContent = message;

  loginForm.insertBefore(messageDiv, loginForm.querySelector('.forgot-password'));

  // Remove message after 3 seconds
  setTimeout(() => {
      messageDiv.remove();
  }, 3000);
};

// Constants
const VALID_CREDENTIALS = {
  email: 'admin@udea.edu.co',
  password: 'medellin123'
};

// Main Logic
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Form validation and submission
  loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      if (!emailInput.value || !passwordInput.value) {
          showMessage('Por favor, complete todos los campos', 'error');
          return;
      }

      if (!isValidEmail(emailInput.value)) {
          showMessage('Por favor, ingrese un correo electrónico válido', 'error');
          return;
      }

      // Check credentials
      if (emailInput.value === VALID_CREDENTIALS.email && 
          passwordInput.value === VALID_CREDENTIALS.password) {
          handleLogin();
      } else {
          showMessage('Credenciales inválidas', 'error');
      }
  });

  // Handle login attempt
  function handleLogin() {
      // Show loading state
      const submitButton = loginForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = `
          <i class='bx bx-loader-alt bx-spin'></i>
          Iniciando sesión...
      `;

      // Simulate API call
      setTimeout(() => {
          // Reset button state
          submitButton.disabled = false;
          submitButton.innerHTML = originalButtonText;

          // Show success message
          showMessage('Inicio de sesión exitoso');
          
          // Redirect after successful login
          setTimeout(() => {
              window.location.href = 'SELECTOR/selector.html';
          }, 1000);
      }, 1500);
  }

  // Input focus effects
  const inputs = loginForm.querySelectorAll('input');
  inputs.forEach(input => {
      input.addEventListener('focus', () => {
          input.parentElement.style.transform = 'scale(1.02)';
      });

      input.addEventListener('blur', () => {
          input.parentElement.style.transform = 'scale(1)';
      });
  });

  // Footer link handling
  document.querySelectorAll('.footer-link').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const action = link.querySelector('span').textContent;
          console.log(`Clicked: ${action}`);
      });
  });
});