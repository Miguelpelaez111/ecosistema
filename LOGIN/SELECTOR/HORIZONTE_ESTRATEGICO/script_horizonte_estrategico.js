document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const form = document.getElementById('strategicForm');
    const resetBtn = document.getElementById('resetBtn');
    const accionesSelect = document.getElementById('acciones');
    const indicadorProductoSelect = document.getElementById('indicador');
    const formulaCalculoSelect = document.getElementById('indicadorformula');

    // Constantes
    const ROUTES = {
        SELECTOR: '../selector.html',
        REPORTS: '../REPORTES/reportes_lobby.html',
        DATABASE: '#/database'
    };

    const MESSAGES = {
        CONFIRM_RESET: '¿Está seguro que desea limpiar todos los campos?',
        REQUIRED_FIELDS: 'Por favor, complete todos los campos requeridos',
        SAVE_SUCCESS: 'Registro guardado exitosamente'
    };

    // Manejo de campos vinculados
    accionesSelect.addEventListener('change', () => {
        const selectedValue = accionesSelect.value;
        if (selectedValue) {
            indicadorProductoSelect.value = selectedValue;
            formulaCalculoSelect.value = selectedValue;
            [indicadorProductoSelect, formulaCalculoSelect].forEach(select => {
                select.classList.add('selected');
            });
        }
    });

    // Manejador de envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        if (validateForm(data)) {
            submitForm(form);
        }
    });

    // Manejador de reinicio del formulario
    resetBtn.addEventListener('click', () => {
        if (confirm(MESSAGES.CONFIRM_RESET)) {
            form.reset();
            document.querySelectorAll('select').forEach(select => {
                select.classList.remove('selected');
            });
        }
    });

    // Validación del formulario
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
            alert(MESSAGES.REQUIRED_FIELDS);
        }

        return isValid;
    }

    // Envío del formulario
    function submitForm(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Guardando...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            alert(MESSAGES.SAVE_SUCCESS);
            form.reset();
            document.querySelectorAll('select').forEach(select => {
                select.classList.remove('selected');
            });
        }, 1500);
    }

    // Animaciones de selección
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => {
            select.classList.toggle('selected', select.value !== '');
        });
    });

    // Manejo de navegación
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
});