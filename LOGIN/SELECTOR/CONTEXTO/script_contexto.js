// Form field definitions
const formFields = {
    education: [
        'Tasa de cobertura neta total',
        'Tasa de cobertura neta preescolar (transición)',
        'Tasa de cobertura neta primaria',
        'Tasa de cobertura neta secundaria',
        'Tasa de cobertura neta media',
        'Tasa de cobertura bruta preescolar (transición)',
        'Tasa de cobertura bruta primaria',
        'Tasa de cobertura bruta secundaria',
        'Tasa de cobertura bruta media',
        'Tasa de deserción en Preescolar',
        'Tasa de deserción Oficial en edad escolar Básica Primaria',
        'Tasa de deserción Oficial en edad escolar Básica Secundaria',
        'Tasa de deserción Oficial en edad escolar Media',
        'Tasa de deserción Oficial en edad escolar Total',
        'Tasa de repitencia preescolar (transición)',
        'Tasa de repitencia Básica Primaria',
        'Tasa de repitencia Básica Secundaria',
        'Tasa de repitencia Media',
        'Tasa de repitencia Oficial Total',
        'Alumnos matriculados en el nivel educativo',
        'Tasa de extraedad por grado',
        'Tasa de deserción por niveles',
        'Tasa de extraedad por niveles'
    ],
    demographics: [
        'Población total comuna',
        'Total de personas por edad y sexo territorializada',
        'Total de personas por edad y sexo'
    ],
    employment: [
        'Tasa de desempleo Medellín Urbano',
        'Tasa global de participación Medellín Urbano',
        'Tasa de informalidad Medellín Urbano',
        'Tasa de ocupación Medellín Urbano',
        'Salario promedio hombre Medellín',
        'Salario promedio mujer Medellín',
        'Brecha salarial total de Medellín'
    ],
    health: [
        'Mortalidad infantil (menores de un año) por cada mil nacidos vivos',
        'Mortalidad infantil (menores de 5 años) por cada mil nacidos vivos',
        'Mortalidad por tuberculosis respiratoria (tasa por cien mil habitantes)',
        'Población afiliada al régimen subsidiado en salud',
        'Número de embarazos en adolescentes de 10 a 14 años',
        'Razón de mortalidad materna (por cada cien mil nacidos vivos)',
        'Tasa de mortalidad por desnutrición en menores de cinco años',
        'Tasa de mortalidad por EDA en menores de cinco años',
        'Tasa de mortalidad por IRA en menores de cinco años',
        'Proporción de bajo peso al nacer (total)',
        'Proporción de bajo peso al nacer (pretérmino)',
        'Proporción de bajo peso al nacer (a término)',
        'Población no asegurada al SGSSS',
        'Tasa de mortalidad general por cada cien mil habitantes',
        'Intento suicidio',
        'Exceso de peso entre 0 y 2 años'
    ],
    poverty: [
        'Coeficiente de Gini',
        'Incidencia de la pobreza monetaria moderada',
        'Incidencia de la pobreza monetaria extrema (o indigencia)',
        'Indicador de Desarrollo Humano',
        'Índice de Pobreza Multidimensional',
        'Índice Multidimensional de Condiciones de Vida',
        'Ingreso per-cápita de la unidad de gasto',
        'Índice de pobreza multidimensional por componentes'
    ]
};

// Navigation routes
const ROUTES = {
    selector: '../selector.html',
    reports: '../REPORTES/reportes_lobby.html',
    database: '#/database'
};

// Initialize form fields
function initializeFormFields() {
    Object.entries(formFields).forEach(([section, fields]) => {
        const container = document.getElementById(`${section}Fields`);
        if (container) {
            container.innerHTML = fields.map((label, index) => `
                <div class="coolinput">
                    <label for="${section}_${index}">${label}:</label>
                    <select id="${section}_${index}" name="${section}_${index}" required>
                        <option value="">Seleccione una opción...</option>
                        <option value="sample">Datos de ejemplo</option>
                    </select>
                </div>
            `).join('');
        }
    });
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

    const form = document.getElementById('conflictForm');
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
            const action = btn.dataset.action;
            if (ROUTES[action]) {
                window.location.href = ROUTES[action];
            }
        });
    });
});