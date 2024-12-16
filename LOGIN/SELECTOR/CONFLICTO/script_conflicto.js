// Form field definitions
const securityFields = [
    'Tasa de homicidio por cada cien mil habitantes',
    'Número total de homicidios',
    'Tasa de hurto a personas',
    'Hurto a entidades financieras',
    'Hurto a establecimiento comercial',
    'Hurto a residencia',
    'Hurto por Piratería Terrestre',
    'Accidentes de tránsito',
    'Lesión Fatal - Sin Establecer',
    'Suicidio',
    'Ley 1098',
    'Menores de edad Víctimas de Violencia Intrafamiliar (0-17 años)',
    'Porcentaje de vulneración de derechos de menores de cinco años maltratados',
    'Víctimas de secuestro',
    'Total Víctimas de violencia intrafamiliar',
    'Víctimas de delitos sexuales',
    'Número de denuncias por extorsión o vacuna'
];

// Initialize form fields
function initializeFormFields() {
    const container = document.getElementById('securityFields');
    if (container) {
        container.innerHTML = securityFields.map((label, index) => `
            <div class="coolinput">
                <label for="security_${index}">${label}:</label>
                <select id="security_${index}" name="security_${index}" required>
                    <option value="">Seleccione una opción...</option>
                    <option value="sample">Datos de ejemplo</option>
                </select>
            </div>
        `).join('');
    }
}

// Form validation
function validateForm(data) {
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
        alert('Por favor, complete todos los campos requeridos');
    }

    return isValid;
}

// Form submission
function submitForm(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Guardando...';

    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert('Registro guardado exitosamente');
        form.reset();
        document.querySelectorAll('select').forEach(select => {
            select.classList.remove('selected');
        });
    }, 1500);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeFormFields();

    const form = document.getElementById('securityForm');
    const resetBtn = document.getElementById('resetBtn');

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        if (validateForm(data)) {
            submitForm(form);
        }
    });

    // Reset button handler
    resetBtn.addEventListener('click', () => {
        if (confirm('¿Está seguro que desea limpiar todos los campos?')) {
            form.reset();
            document.querySelectorAll('select').forEach(select => {
                select.classList.remove('selected');
            });
        }
    });

    // Select change handler
    document.addEventListener('change', (e) => {
        if (e.target.tagName === 'SELECT') {
            e.target.classList.toggle('selected', e.target.value !== '');
        }
    });

    // Navigation handler
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.querySelector('span').textContent;
            switch(action) {
                case 'Volver al Selector':
                    window.location.href = '../selector.html';
                    break;
                case 'Ir a Reportes':
                    window.location.href = '../REPORTES/reportes_lobby.html';
                    break;
                case 'Ir a la base de datos':
                    window.location.href = '#/database';
                    break;
            }
        });
    });
});