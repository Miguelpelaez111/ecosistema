// Dashboard data structure
const dashboardData = {
    social: {
        title: 'Infraestructura Social',
        categories: {
            'Horizonte estratégico': ['Línea', 'Objetivo de línea', 'Apuestas de las líneas estratégicas', 'Núcleos temáticos', 'Objetivos del nucleo tematico', 'Indicador de producto Nombre', 'Indicador de producto Formula de calculo'],
            'Actor comunitario asociado a la acción': ['Nombre asociado a la acción', 'Persona responsable asociado a la acción', 'Función asociada a la actividad asociado a la acción', 'Recursos asociado a la acción'],
            'Escenario Comunitario o mixto asociado a la acción': ['Nombre asociado a la acción', 'Tipo de escenario asociado a la acción', 'Funciones asociadas al resultado asociado a la acción', 'Responsable de Secretaría Ejecutiva asociado a la acción', 'Actores gubernamentales asociado a la acción', 'Actotes comunitarios asociado a la acción'],
        }
    },
    institucional: {
        title: 'Infraestructura Institucional',
        categories: {
            'Lineamientos programáticos asociados a la acción': ['Instrumento de planeación', 'Línea Estratégica', 'Programa/proyecto/acción', 'Meta', 'Nombre del Indicador', 'Tipo de indicador', 'Responsable asociado al nombre del Indicador asociado a la acción'],
            'Institución asociada al nombre del Indicador asociado a la acción': ['Nombre asociado al nombre del Indicador asociado a la acción', 'Nivel territorial de la institución asociado al nombre del Indicador asociado a la acción', 'Competencia asociada asociado al nombre del Indicador asociado a la acción', 'Instrumento de seguimiento asociado al nombre del Indicador asociado a la acción', 'Rutas de atención asociada asociado al nombre del Indicador asociado a la acción', 'Acceso y manejo de la información asociadas al nombre del Indicador asociado a la acción'],
            'Coordinación asociada al nombre del Indicador asociado a la acción': ['Coordinación y articulación dentro de la política a la que se asocia al nombre del Indicador asociado a la acción', 'Coordinación con las instancias políticas de toma de decisión asociadas al al nombre del Indicador asociado a la acción', 'Coordinación con las redes sociales y comunitarias asociadas al al nombre del Indicador asociado a la acción', 'Escenario comunitario o mixto asociado al nombre del Indicador asociado a la acción', 'Tipo de escenario asociado al nombre del Indicador asociado a la acción', 'Funciones asociadas al resultado asociado al nombre del Indicador asociado a la acción', 'Responsable de Secretaría Ejecutiva asociado al nombre del Indicador asociado a la acción', 'Actores gubernamentales asociado al nombre del Indicador asociado a la acción', 'Actotes comunitarios asociado al nombre del Indicador asociado a la acción']
        }
    },
    conflicto: {
        title: 'Violencia',
        categories: {
            'Seguridad': ['Tasa de homicidio por cada cien mil habitantes', 'Número total de homicidios', 'Tasa de hurto a personas', 'Hurto a entidades financieras', 'Hurto a establecimiento comercial', 'Hurto a residencia', 'Hurto por Pirateria Terrestre', 'Accidentes de tránsito', 'Lesión Fatal - Sin Establecer', 'Suicidios', 'Ley 1098', 'Menores de edad víctimas de Violencia Intrafamiliar (0-17 años)', 'Porcentaje de vulneración de derechos de menores de cinco años maltratados', 'Víctimas de secuestro', 'Total Víctimas de violencia intrafamiliar', 'Víctimas de delitos sexuales', 'Número de denuncias por extorsión o vacuna']
        }
    },
    contexto: {
        title: 'Contexto',
        categories: {
            'Educación': ['Tasa de cobertura neta total', 'Tasa de cobertura neta preescolar (transición)', 'Tasa de cobertura neta primaria', 'Tasa de cobertura neta secundaria', 'Tasa de cobertura neta media', 'Tasa de cobertura bruta preescolar (transición)', 'Tasa de cobertura bruta primaria', 'Tasa de cobertura bruta secundaria', 'Tasa de cobertura bruta media', 'Tasa de deserción en Preescolar', 'Tasa de deserción Oficial en edad escolar Básica Primaria', 'Tasa de deserción Oficial en edad escolar Básica Secundaria', 'Tasa de deserción Oficial en edad escolar Media', 'Tasa de deserción Oficial en edad escolar Total', 'Tasa de repitencia preescolar (transición)', 'Tasa de repitencia Básica Primaria', 'Tasa de repitencia Básica Secundaria', 'Tasa de repitencia Media', 'Tasa de repitencia Oficial Total (Tasa de repitencia en preescolar, básica y media)', 'Alumnos matriculados en el nivel educativo', 'Tasa de deserción por grado', 'Tasa de extraedad por grado', 'Tasa de deserción por niveles', 'Tasa de extraedad por niveles'],
            'Demograficos': ['Población total comuna', 'Total de personas por edad y sexo territorializada', 'Total de personas por edad y sexo'],
            'Empleo': ['Tasa de desempleo Medellín Urbano', 'Tasa global de participación Medellín Urbano', 'Tasa de Informalidad Medellín Urbano', 'Tasa de ocupación Medellín Urbano', 'Salario promedio hombre Medellín', 'Salario promedio mujer Medellín', 'Brecha salarial total de Medellín'],
            'Salud': ['Mortalidad infantil (menores de un año) por cada mil nacidos vivos', 'Mortalidad por tuberculosis respiratoria (tasa por cien mil habitantes)', 'Población afiliada al régimen subsidiado en salud', 'Número de embarazos en adolescentes de 10 a 14 años. (nacidos vivos+def. fetales)', 'Número de embarazos en adolescentes de 10 a 19 años. (nacidos vivos+def. fetales)', 'Tasa de mortalidad por desnutrición en menores de cinco años (por cada cien mil menores de cinco años)', 'Tasa de mortalidad por EDA en menores de cinco años (por cada cien mil menores de cinco años)', 'Tasa de mortalidad por IRA en menores de cinco años (por cada cien mil menores de cinco años)', 'Razón de mortalidad materna (por cada cien mil nacidos vivos)', 'Tasa de mortalidad general por cada cien mil habitantes (tasa cruda)', 'Proporción de bajo peso al nacer (total)', 'Proporción de bajo peso al nacer (pretérmino)', 'Proporción de bajo peso al nacer (a término)', 'Poblacion no asegurada al SGSSS.', 'Tasa de mortalidad general por cada cien mil habitantes (tasa ajustada)', 'Intento suicidio', 'Suicidio', 'Exceso de peso entre 0 y 2 años'],
            'Social': ['Coeficiente de Gini', 'Incidencia de la pobreza monetaria moderada', 'Incidencia de la pobreza monetaria extrema (o indigencia)', 'Indicador de Desarrollo Humano', 'Índice de Pobreza Multidimensional', 'Índice Multidimensional de Condiciones de Vida', 'Ingreso per-cápita de la unidad de gasto', 'Índice de pobreza multidimensional por componentes']
        }
    }
};

// Sample actions and dummy responses
const actions = [
    'L1 NT1 A1 Elaboración por parte de las comunidades y las víctimas, junto con firmantes de paz, de líneas del tiempo para el reconocimiento de verdad',
    'L1 NT1 A3 Apoyo a las iniciativas sobre verdad y memoria lideradas por las organizaciones sociales, culturales, de víctimas y comunitarias',
    'L4 NT7 A3 Identificar el repertorio de recuperación, autoreparación e integración local de facto, que incluye la autoorganización, la autoconstrucción popular de territorio articulada a las luchas por lo común, y la participación activa.',
    'L4 NT5 A3 Estrategia de Pedagogías, Memoria e Investigación, ejercicios de construcción de memorias colectivas y el diseño de escuelas populares territoriales como expresiones de investigación y formación.',
];

const dummyResponses = {
    'L1 NT1 A1 Elaboración por parte de las comunidades y las víctimas, junto con firmantes de paz, de líneas del tiempo para el reconocimiento de verdad': {
        social: {
            'Horizonte estratégico': {
                'Línea': 'LINEA 1: Verdad y reconciliación',
                'Objetivo de línea': '[acción a realizar] Promover [objeto sobre el que recae la acción] el derecho a la verdad, la memoria y la reconciliación  y el acceso a medidas restaurativas para las víctimas, la comunidad y el territorio [complemento] por medio de la promoción y participación en procesos restaurativos, con el  compromiso de los comparecientes y el acompañamiento de la jep.',
                'Apuestas de las líneas estratégicas': 'Se esperan  los aportes a la verdad por parte de firmantes y comparecientes y el apoyo de  la jep a victimas y comunidades',
                'Núcleos temáticos': 'NT 1. Aporte a la verdad y reconocimiento público de organizaciones de víctimas y comunidades',
                'Objetivos del nucleo tematico': 'objetivo (n2) 1. [acción a realizar] generar  [objeto sobre el que recae la acción] espacios dialógicos de aporte a la verdad [complemento] para crear condiciones restaurativas  comunitarias y apoyar las sanciones propias anticipadas en el marco de la jep',
                'Indicador de producto Nombre': 'Líneas del tiempo para el reconocimiento de verdad necesarias',
                'Indicador de producto Formula de calculo': '# de líneas del tiempo realizadas/total de líneas del tiempo planeadas por la camunidad y las víctimas'
            }
        },
        institucional: {
            'Lineamientos programáticos asociados a la acción': {
                'Instrumento de planeación': 'Plan de Desarrollo Departamental',
                'Línea Estratégica': 'Nuestra vida',
                'Programa/proyecto/acción': 'Componente 1: Es el momento de la vida, la seguridad humana y la convivencia',
                'Meta': 'SD',
                'Nombre del Indicador': 'Contribución en la reparación integral a víctimas.',
                'Tipo de indicador': 'Resultado',
                'Responsable asociado al nombre del Indicador asociado a la acción': 'Secretaría de Gobierno'
            }
        }
    }
};

class Dashboard {
    constructor() {
        this.grid = document.querySelector('.dashboard-grid');
        this.actionSelect = document.getElementById('actionSelect');
        this.init();
    }

    init() {
        this.createSections();
        this.setupActionSelect();
        this.setupBackButton();
        
        // Set initial action
        this.actionSelect.value = actions[0];
        this.filterDashboard();
    }

    createSections() {
        const order = ['social', 'institucional', 'conflicto', 'contexto'];
        order.forEach(key => {
            const section = this.createSection(key, dashboardData[key]);
            this.grid.appendChild(section);
        });
    }

    createSection(key, data) {
        const section = document.createElement('div');
        section.className = 'report-section';
        section.setAttribute('data-section', key);

        section.innerHTML = `
            <div class="section-header">
                <h3>${data.title}</h3>
                <button class="expand-btn">
                    <i class='bx bx-chevron-down'></i>
                </button>
            </div>
            <div class="section-content">
                <div class="tabs">
                    ${Object.keys(data.categories).map((category, index) => `
                        <button class="tab ${index === 0 ? 'active' : ''}">${category}</button>
                    `).join('')}
                </div>
                ${Object.entries(data.categories).map(([category, items], index) => `
                    <div class="tab-content ${index === 0 ? 'active' : ''}" data-category="${category}">
                        <table class="report-table">
                            <tbody>
                                ${items.map(item => `
                                    <tr>
                                        <td>${item}</td>
                                        <td class="response-cell" data-item="${item}">
                                            <div class="empty-response">Sin datos</div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                `).join('')}
            </div>
        `;

        this.setupSectionEvents(section);
        return section;
    }

    setupSectionEvents(section) {
        const header = section.querySelector('.section-header');
        const content = section.querySelector('.section-content');
        const tabs = section.querySelectorAll('.tab');

        header.querySelector('.expand-btn').addEventListener('click', () => {
            content.classList.toggle('active');
        });

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.textContent;
                this.switchTab(section, category);
            });
        });
    }

    switchTab(section, category) {
        const tabs = section.querySelectorAll('.tab');
        const contents = section.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        const activeTab = Array.from(tabs).find(tab => tab.textContent === category);
        const activeContent = Array.from(contents).find(content => 
            content.getAttribute('data-category') === category
        );
        
        activeTab?.classList.add('active');
        activeContent?.classList.add('active');
    }

    setupActionSelect() {
        // Populate select options
        actions.forEach(action => {
            const option = document.createElement('option');
            option.value = action.toLowerCase().replace(/\s+/g, '-');
            option.textContent = action;
            this.actionSelect.appendChild(option);
        });

        // Handle selection change
        this.actionSelect.addEventListener('change', () => this.filterDashboard());
    }

    setupBackButton() {
        document.getElementById('backButton')?.addEventListener('click', () => {
            window.location.href = '../reportes_lobby.html';
        });
    }

    filterDashboard() {
        const selectedAction = this.actionSelect.value;
        
        document.querySelectorAll('.response-cell').forEach(cell => {
            cell.innerHTML = '<div class="empty-response">Sin datos</div>';
        });

        if (selectedAction && dummyResponses[selectedAction]) {
            this.updateResponses(selectedAction);
        }
    }

    updateResponses(action) {
        const responses = dummyResponses[action];
        
        Object.entries(responses).forEach(([section, categoryData]) => {
            const sectionElement = document.querySelector(`[data-section="${section}"]`);
            if (!sectionElement) return;

            Object.entries(categoryData).forEach(([category, items]) => {
                Object.entries(items).forEach(([item, value]) => {
                    const cell = sectionElement.querySelector(`[data-item="${item}"] .empty-response`);
                    if (cell) {
                        cell.className = 'response-value';
                        cell.textContent = value;
                    }
                });
            });

            // Expand the section if it has data
            const content = sectionElement.querySelector('.section-content');
            content.classList.add('active');
        });
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Dashboard();
});