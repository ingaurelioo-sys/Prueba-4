/* ==========================================================================
   TEMARIO COMPLETO SECUENCIAL (CAPÍTULOS DEL 1.1 AL 3.12)
   ========================================================================== */
const courseData = [
  {
    sectionId: 1,
    sectionTitle: "Capítulo 1: Introducción a C++",
    topics: [
      {
        id: "1.1", name: "1.1 C++", level: "Básico", levelClass: "badge-basic",
        theory: "<p>C++ es un lenguaje compilado de alto rendimiento muy usado en motores de videojuegos y sistemas operativos.</p>",
        task: "Presiona 'Ir a la Consola' para escribir tu primer código de prueba.",
        code: `#include <iostream>\nint main() {\n    return 0;\n}`,
        hints: ["Solo debes compilar este código inicial."],
        testCases: [{ input: "Setup", expected: "0" }],
        validate: (c) => c.includes("return 0;"), solution: `#include <iostream>\nint main() {\n    return 0;\n}`
      },
      {
        id: "1.2", name: "1.2 Conocimiento de Hola Mundo", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Para imprimir datos en consola usas <code>std::cout</code> junto con el operador <code>&lt;&lt;</code>.</p>",
        task: "Aprende cómo funciona el flujo de datos hacia la consola.",
        code: `#include <iostream>\nint main() {\n    std::cout << "Hola Mundo";\n    return 0;\n}`,
        hints: ["std::cout envía la cadena a la salida estándar."],
        testCases: [{ input: "Consola", expected: "Hola Mundo" }],
        validate: (c) => c.includes("Hola Mundo"), solution: `#include <iostream>\nint main() {\n    std::cout << "Hola Mundo";\n    return 0;\n}`
      },
      {
        id: "1.4", name: "1.4 Desafío de Hola Mundo", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Aplica lo aprendido e imprime exactamente la cadena requerida.</p>",
        task: "Completa el espacio en blanco ___ para imprimir 'Hola Mundo'.",
        code: `#include <iostream>\nint main() {\n    std::___ << "Hola Mundo";\n    return 0;\n}`,
        hints: ["La palabra clave es cout.", "Recuerda incluir el prefijo std::"],
        testCases: [{ input: "Ejecución", expected: "Hola Mundo" }],
        validate: (c) => c.includes("std::cout") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    std::cout << "Hola Mundo";\n    return 0;\n}`
      },
      {
        id: "1.5", name: "1.5 Conocimiento de Comentarios", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Los comentarios de una línea usan <code>//</code> y los de varias líneas usan <code>/* */</code>.</p>",
        task: "Agrega un comentario de una línea.",
        code: `#include <iostream>\nint main() {\n    // Escribe un comentario aquí\n    return 0;\n}`,
        hints: ["Usa el doble slash //."],
        testCases: [{ input: "Compilación", expected: "OK" }],
        validate: (c) => c.includes("//"), solution: `// Comentario\n#include <iostream>\nint main() { return 0; }`
      },
      {
        id: "1.7", name: "1.7 Desafío de Comentarios", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Desactiva la línea incorrecta usando comentarios.</p>",
        task: "Comenta la línea que tiene el error de sintaxis.",
        code: `#include <iostream>\nint main() {\n    ___ std::cout << "Error";\n    return 0;\n}`,
        hints: ["Escribe // en lugar de ___"],
        testCases: [{ input: "Test", expected: "Sin errores" }],
        validate: (c) => c.includes("//") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    // std::cout << "Error";\n    return 0;\n}`
      },
      {
        id: "1.8", name: "1.8 Estructura Básica", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Todo programa en C++ requiere incluir librerías (#include) y la función main().</p>",
        task: "Completa la función principal main.",
        code: `#include <iostream>\nint ___() {\n    return 0;\n}`,
        hints: ["El punto de entrada se llama main."],
        testCases: [{ input: "Main check", expected: "0" }],
        validate: (c) => c.includes("main()") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    return 0;\n}`
      },
      {
        id: "1.10", name: "1.10 Trofeo del Capítulo", level: "Trofeo", levelClass: "badge-project", isTrophy: true,
        theory: "<p><strong>¡ENHORABUENA!</strong> Has completado el Capítulo 1. Reclama tu trofeo.</p>",
        task: "Presiona Run para validar tu trofeo de la Sección 1.",
        code: `// Capítulo 1 Completado con éxito`,
        hints: ["Presiona directamente el botón Run."],
        testCases: [{ input: "Trofeo", expected: "DESBLOQUEADO" }],
        validate: () => true, solution: `// Trofeo Capítulo 1`
      }
    ]
  },
  {
    sectionId: 2,
    sectionTitle: "Capítulo 2: Variables (Parte 1)",
    topics: [
      {
        id: "2.3", name: "2.3 Desafío Números Enteros", level: "Básico", levelClass: "badge-basic",
        theory: "<p>El tipo de dato <code>int</code> almacena valores enteros.</p>",
        task: "Declara una variable entera 'edad' asignándole el valor 25.",
        code: `#include <iostream>\nint main() {\n    ___ edad = 25;\n    return 0;\n}`,
        hints: ["Reemplaza ___ con int."],
        testCases: [{ input: "edad", expected: "25" }],
        validate: (c) => c.includes("int edad = 25") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    int edad = 25;\n    return 0;\n}`
      },
      {
        id: "2.7", name: "2.7 Desafío Números Reales", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Usa <code>double</code> o <code>float</code> para números con punto decimal.</p>",
        task: "Declara un número real llamado 'precio' con valor 19.99.",
        code: `#include <iostream>\nint main() {\n    ___ precio = 19.99;\n    return 0;\n}`,
        hints: ["Usa la palabra clave double."],
        testCases: [{ input: "precio", expected: "19.99" }],
        validate: (c) => (c.includes("double") || c.includes("float")) && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    double precio = 19.99;\n    return 0;\n}`
      },
      {
        id: "2.13", name: "2.13 Desafío Boolean", level: "Básico", levelClass: "badge-basic",
        theory: "<p>El tipo <code>bool</code> guarda valores verdaderos (true) o falsos (false).</p>",
        task: "Declara la variable bool 'activo' con valor true.",
        code: `#include <iostream>\nint main() {\n    ___ activo = true;\n    return 0;\n}`,
        hints: ["Usa el tipo bool."],
        testCases: [{ input: "activo", expected: "true" }],
        validate: (c) => c.includes("bool activo") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    bool activo = true;\n    return 0;\n}`
      },
      {
        id: "2.20", name: "2.20 Trofeo del Capítulo", level: "Trofeo", levelClass: "badge-project", isTrophy: true,
        theory: "<p>¡Trofeo del Capítulo 2 desbloqueado!</p>",
        task: "Valida tu trofeo de la parte 1 de variables.",
        code: `// Capítulo 2 Parte 1 Completado`,
        hints: ["Presiona Run para reclamar."],
        testCases: [{ input: "Trofeo", expected: "DESBLOQUEADO" }],
        validate: () => true, solution: `// Trofeo`
      }
    ]
  },
  {
    sectionId: 3,
    sectionTitle: "Capítulo 2.21: Variables (Parte 2)",
    topics: [
      {
        id: "2.33", name: "2.33 Desafío Type Casting 1", level: "Intermedio", levelClass: "badge-inter",
        theory: "<p>El Type Casting implícito o explícito <code>(int)valor</code> convierte tipos de datos.</p>",
        task: "Convierte el valor double 9.99 a un entero int.",
        code: `#include <iostream>\nint main() {\n    double pi = 9.99;\n    int entero = (___)pi;\n    return 0;\n}`,
        hints: ["Escribe int dentro del paréntesis."],
        testCases: [{ input: "casting", expected: "9" }],
        validate: (c) => c.includes("(int)") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    double pi = 9.99;\n    int entero = (int)pi;\n    return 0;\n}`
      },
      {
        id: "2.37", name: "2.37 Trofeo del Capítulo", level: "Trofeo", levelClass: "badge-project", isTrophy: true,
        theory: "<p>¡Trofeo de Type Casting y Convenciones desbloqueado!</p>",
        task: "Presiona Run para reclamar tu trofeo.",
        code: `// Capítulo 2 Parte 2 Completado`,
        hints: ["Presiona Run."],
        testCases: [{ input: "Trofeo", expected: "DESBLOQUEADO" }],
        validate: () => true, solution: `// Trofeo`
      }
    ]
  },
  {
    sectionId: 4,
    sectionTitle: "Capítulo 3: Operadores (Parte 1)",
    topics: [
      {
        id: "3.3", name: "3.3 Desafío Operadores Aritméticos", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Los operadores básicos son +, -, *, /.</p>",
        task: "Realiza la multiplicación de a * b.",
        code: `#include <iostream>\nint main() {\n    int a = 5, b = 4;\n    int res = a ___ b;\n    return 0;\n}`,
        hints: ["Usa el operador de asterisco *."],
        testCases: [{ input: "5*4", expected: "20" }],
        validate: (c) => c.includes("a * b") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    int a = 5, b = 4;\n    int res = a * b;\n    return 0;\n}`
      },
      {
        id: "3.6", name: "3.6 Desafío Operador Módulo", level: "Básico", levelClass: "badge-basic",
        theory: "<p>El operador módulo <code>%</code> devuelve el resto de una división.</p>",
        task: "Calcula el resto de 10 % 3.",
        code: `#include <iostream>\nint main() {\n    int res = 10 ___ 3;\n    return 0;\n}`,
        hints: ["El símbolo de módulo es %."],
        testCases: [{ input: "10%3", expected: "1" }],
        validate: (c) => c.includes("10 % 3") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    int res = 10 % 3;\n    return 0;\n}`
      },
      {
        id: "3.9", name: "3.9 Desafío Incremento / Decremento", level: "Básico", levelClass: "badge-basic",
        theory: "<p>Usa <code>++</code> para incrementar en 1 una variable.</p>",
        task: "Incrementa la variable contador en 1.",
        code: `#include <iostream>\nint main() {\n    int contador = 5;\n    contador___;\n    return 0;\n}`,
        hints: ["Usa el doble signo ++."],
        testCases: [{ input: "5++", expected: "6" }],
        validate: (c) => c.includes("contador++") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    int contador = 5;\n    contador++;\n    return 0;\n}`
      },
      {
        id: "3.12", name: "3.12 Desafío Post-incremento / Decremento", level: "Intermedio", levelClass: "badge-inter",
        theory: "<p>En el post-incremento (x++), el valor se evalúa primero y luego se incrementa.</p>",
        task: "Completa la asignación del post-incremento.",
        code: `#include <iostream>\nint main() {\n    int x = 10;\n    int y = x___;\n    return 0;\n}`,
        hints: ["Escribe ++ después de x."],
        testCases: [{ input: "x++", expected: "y=10, x=11" }],
        validate: (c) => c.includes("x++") && !c.includes("___"),
        solution: `#include <iostream>\nint main() {\n    int x = 10;\n    int y = x++;\n    return 0;\n}`
      }
    ]
  }
];

// Estado global de la app
let currentSectionIdx = 0;
let currentTopic = null;
let revealedHintsCount = 0;
let unlockedTopics = ["1.1"];
let userXP = 350;

window.onload = () => {
  renderMap();
};

/* ==========================================================================
   RENDERIZADO DEL MAPA
   ========================================================================== */
function renderMap() {
  const pathContainer = document.getElementById('nodesPath');
  pathContainer.innerHTML = '';

  const section = courseData[currentSectionIdx];
  document.getElementById('sectionTitle').innerText = section.sectionTitle;
  document.getElementById('sectionCounter').innerText = `Sección ${currentSectionIdx + 1} de ${courseData.length}`;

  section.topics.forEach((topic) => {
    const isUnlocked = unlockedTopics.includes(topic.id);

    const nodeWrapper = document.createElement('div');
    nodeWrapper.className = 'node-wrapper';

    const titleLabel = document.createElement('div');
    titleLabel.className = 'node-title';
    titleLabel.innerText = topic.name;

    const hexNode = document.createElement('div');
    hexNode.className = `hex-node ${!isUnlocked ? 'locked' : ''} ${topic.isTrophy ? 'trophy' : ''}`;
    hexNode.innerHTML = !isUnlocked ? '<i class="fas fa-lock"></i>' : (topic.isTrophy ? '<i class="fas fa-trophy"></i>' : '<i class="fas fa-code"></i>');

    if (isUnlocked) {
      hexNode.onclick = () => openLesson(topic);
    }

    nodeWrapper.appendChild(titleLabel);
    nodeWrapper.appendChild(hexNode);

    const line = document.createElement('div');
    line.className = 'connector-line';
    nodeWrapper.appendChild(line);

    pathContainer.appendChild(nodeWrapper);
  });
}

function prevSection() { if (currentSectionIdx > 0) { currentSectionIdx--; renderMap(); } }
function nextSection() { if (currentSectionIdx < courseData.length - 1) { currentSectionIdx++; renderMap(); } }

/* ==========================================================================
   SISTEMA DE LECCIONES Y SALTO A CONSOLA
   ========================================================================== */
function openLesson(topic) {
  currentTopic = topic;
  revealedHintsCount = 0;

  document.getElementById('mapView').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');

  const badge = document.getElementById('difficultyBadge');
  badge.innerText = `Nivel ${topic.level}`;
  badge.className = `badge ${topic.levelClass}`;

  document.getElementById('refTitle').innerText = topic.name;
  document.getElementById('referenceText').innerHTML = topic.theory;
  document.getElementById('challengeTitle').innerText = topic.name;
  document.getElementById('challengeDescription').innerHTML = `<p>${topic.task}</p>`;

  document.getElementById('codeEditor').value = topic.code;
  document.getElementById('solutionCode').innerText = topic.solution;
  
  document.getElementById('hintsList').innerHTML = '';
  document.getElementById('hintCount').innerText = '0';
  document.getElementById('testResults').innerText = 'Presiona "Run / Submit" para compilar y evaluar tu código.';
  document.getElementById('testResults').className = 'test-results-box';
  document.getElementById('testStatus').innerText = 'Sin ejecutar';

  switchTab('reference');
}

function closeLesson() {
  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('mapView').classList.remove('hidden');
  document.getElementById('bugsyModal').classList.add('hidden');
}

function switchTab(tabName) {
  ['reference', 'challenge', 'code', 'solution'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.add('hidden');
    document.getElementById(`btn-tab-${t}`)?.classList.remove('active');
  });
  
  document.getElementById(`tab-${tabName}`).classList.remove('hidden');
  document.getElementById(`btn-tab-${tabName}`)?.classList.add('active');
}

/* ==========================================================================
   PISTAS Y EVALUACIÓN
   ========================================================================== */
function revealNextHint() {
  if (!currentTopic || revealedHintsCount >= currentTopic.hints.length) return;

  const hintsList = document.getElementById('hintsList');
  const hintItem = document.createElement('div');
  hintItem.className = 'hint-item';
  hintItem.innerText = `Pista ${revealedHintsCount + 1}: ${currentTopic.hints[revealedHintsCount]}`;
  
  hintsList.appendChild(hintItem);
  revealedHintsCount++;
  document.getElementById('hintCount').innerText = revealedHintsCount;
}

function runCode() {
  const code = document.getElementById('codeEditor').value;
  const testResultsBox = document.getElementById('testResults');
  const testStatus = document.getElementById('testStatus');

  const isValid = currentTopic.validate(code);

  if (isValid) {
    testStatus.innerText = "PASADO";
    testStatus.style.color = "var(--primary-green)";
    testResultsBox.className = "test-results-box pass";

    let outputText = "Compilación exitosa.\n\n";
    currentTopic.testCases.forEach((tc, idx) => {
      outputText += `Test Case #${idx + 1} [${tc.input}] => Esperado: "${tc.expected}" (CORRECTO)\n`;
    });
    testResultsBox.innerText = outputText;

    userXP += 50;
    document.getElementById('xpCount').innerText = userXP;

    // Mensaje adaptado para trofeos
    if(currentTopic.isTrophy) {
      document.getElementById('successTitle').innerText = "¡Trofeo Desbloqueado!";
      document.getElementById('successIcon').innerHTML = '<i class="fas fa-trophy" style="color: #f1c40f;"></i>';
    } else {
      document.getElementById('successTitle').innerText = "¡Desafío Completado!";
      document.getElementById('successIcon').innerHTML = '<i class="fas fa-check-circle"></i>';
    }

    document.getElementById('successModal').classList.remove('hidden');

    // Desbloqueo secuencial del siguiente tema
    const allTopics = courseData.flatMap(s => s.topics);
    const currIndex = allTopics.findIndex(t => t.id === currentTopic.id);
    if (currIndex !== -1 && currIndex + 1 < allTopics.length) {
      const nextId = allTopics[currIndex + 1].id;
      if (!unlockedTopics.includes(nextId)) {
        unlockedTopics.push(nextId);
      }
    }
  } else {
    testStatus.innerText = "FALLIDO";
    testStatus.style.color = "var(--level-adv)";
    testResultsBox.className = "test-results-box fail";

    let errorText = "Error de Compilación o Sintaxis Incompleta:\n\n";
    errorText += `Asegúrate de reemplazar los espacios '___' o cumplir con el requerimiento del ejercicio.`;
    testResultsBox.innerText = errorText;
  }
}

function resetCode() {
  document.getElementById('codeEditor').value = currentTopic.code;
}

function nextChallenge() {
  document.getElementById('successModal').classList.add('hidden');
  closeLesson();
  renderMap();
}

/* ==========================================================================
   TUTOR IA (BUGSY)
   ========================================================================== */
function askBugsy() {
  const bugsyModal = document.getElementById('bugsyModal');
  const bugsyResponse = document.getElementById('bugsyResponse');
  const code = document.getElementById('codeEditor').value;

  bugsyModal.classList.remove('hidden');

  if (code.includes("___")) {
    bugsyResponse.innerText = "Bugsy: Tienes espacios '___' incompletos. Revisa la solapa de Teoría o solicita una Pista si te atascaste.";
  } else if (!currentTopic.validate(code)) {
    bugsyResponse.innerText = `Bugsy: Revisa la sintaxis introducida. Para el tema '${currentTopic.name}' debes asegurarte de usar exactamente los operadores o tipos de datos requeridos.`;
  } else {
    bugsyResponse.innerText = "Bugsy: ¡Tu código luce perfecto! Presiona 'Run / Submit' para ejecutar y validar.";
  }
}

function toggleBugsy() {
  document.getElementById('bugsyModal').classList.toggle('hidden');
}