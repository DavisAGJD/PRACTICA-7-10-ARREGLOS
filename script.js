// Importación de clases externas
import Arreglo from "./Clases/Arreglo.js";
import CuadroMagico from "./Clases/CuadroMagico.js";
import Matriz from "./Clases/Matriz.js";
import MatrizCuadrada from "./Clases/Matriz_2.js";

// Obtención de elementos del DOM
const seleccionPractica = document.getElementById("work-selector");
const contenedor = document.querySelector(".container");

const formPractica7 = document.getElementById("practica-7");
const formP7 = document.getElementById("p-7");

const size = document.getElementById("size");
const formCuadro = document.getElementById("form-cuadro");
const formPractica8 = document.getElementById("practica-8");

const formMatrix = document.getElementById("p9-form");
const formPractica9 = document.getElementById("practica-9");

const formPractica10 = document.getElementById("practica-10");
const formMatriz2 = document.getElementById("p10-form");
const matrizSize = document.getElementById("matrix-size")

// Inicializar ocultando el contenedor y los formularios
contenedor.style.display = "none";
ocultarFormularios();

// Función para ocultar los formularios de las prácticas
function ocultarFormularios() {
  formPractica7.style.display = "none";
  formPractica8.style.display = "none";
  formPractica9.style.display = "none";
  formPractica10.style.display = "none";
}

// Evento para cambiar el formulario mostrado según la selección
seleccionPractica.addEventListener("change", (event) => {
  ocultarFormularios(); // Ocultar formularios existentes

  // Mostrar el contenedor si hay una práctica seleccionada
  contenedor.style.display = event.target.value ? "block" : "none";

  // Mostrar el formulario correspondiente según la selección
  switch (event.target.value) {
    case "practica-7":
      formPractica7.style.display = "block";
      break;
    case "practica-8":
      formPractica8.style.display = "block";
      break;
    case "practica-9":
      formPractica9.style.display = "block";
      break;
    case "practica-10":
      formPractica10.style.display = "block";
      break;
  }
});

// ---- Práctica 7: Contar ceros en cada renglón ----
formP7.addEventListener("submit", (event) => {
  event.preventDefault();

  // Arreglo predefinido
  const arreglo = [
    [0, 2, 5, 7, 6],
    [0, 0, 0, 3, 8],
    [2, 9, 6, 3, 4],
    [1, 5, 6, 1, 4],
    [0, 9, 2, 5, 0],
  ];

  const arregloObjeto = new Arreglo(arreglo); // Crear instancia de Arreglo
  const ceros = arregloObjeto.contarCeros(); // Contar los ceros por renglón

  // Mostrar el resultado
  const resultadoDiv = document.getElementById("resultado-7");
  resultadoDiv.innerHTML = "<h3>Ceros por renglón:</h3>";

  ceros.forEach((numCeros, index) => {
    resultadoDiv.innerHTML += `<p>Renglón ${index + 1}: ${numCeros} ceros</p>`;
  });
});

// ---- Práctica 8: Crear inputs dinámicos para el cuadro mágico ----
size.addEventListener("input", function () {
  const matrixSize = parseInt(this.value); // Tamaño de la matriz
  const container = document.getElementById("inputs-container");
  container.innerHTML = ""; // Limpiar el contenedor de inputs previos

  // Si el campo está vacío, no mostrar mensaje de alerta
  if (this.value === "") {
    const container = document.getElementById("inputs-container");
    container.innerHTML = ""; // Limpiar el contenedor si el campo está vacío
    return;
  }

  // Validar si el tamaño es NaN, menor que 2 o no es un número entero
  if (isNaN(matrixSize) || matrixSize <= 1 || matrixSize % 1 !== 0) {
    alert(
      "Por favor, ingrese un tamaño de matriz válido. Debe ser un número entero mayor a 1."
    );
    return;
  }

  // Crear inputs según el tamaño de la matriz
  if (matrixSize > 1) {
    for (let i = 0; i < matrixSize; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      for (let j = 0; j < matrixSize; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("matrix-input");
        input.required = true;
        rowDiv.appendChild(input);
      }
      container.appendChild(rowDiv);
    }
  }
});

// ---- Práctica 8: Verificar si es un cuadro mágico ----
formCuadro.addEventListener("submit", (event) => {
  event.preventDefault();

  const matrixSize = parseInt(document.getElementById("size").value);
  const inputs = document.querySelectorAll(".matrix-input");
  const matriz = [];
  let index = 0;


  // Convertir los valores de los inputs en una matriz
  for (let i = 0; i < matrixSize; i++) {
    const fila = [];
    for (let j = 0; j < matrixSize; j++) {
      fila.push(parseInt(inputs[index].value));
      index++;
    }
    matriz.push(fila);
  }

  // Crear instancia de CuadroMagico y verificar si es un cuadro mágico
  const cuadroMagico = new CuadroMagico(matriz);
  const resultadoDiv = document.getElementById("resultado-8");

  if (cuadroMagico.esCuadroMagico()) {
    resultadoDiv.textContent = `¡Es un cuadro mágico! La constante mágica es ${cuadroMagico.obtenerConstanteMagica()}.`;
  } else {
    resultadoDiv.textContent = "No es un cuadro mágico.";
  }
});

// ---- Práctica 9: Obtener matriz y operaciones con matrices 2x2 ----
function obtenerMatriz(id) {
  return [
    [
      parseFloat(document.getElementById(`${id}-0-0`).value),
      parseFloat(document.getElementById(`${id}-0-1`).value),
    ],
    [
      parseFloat(document.getElementById(`${id}-1-0`).value),
      parseFloat(document.getElementById(`${id}-1-1`).value),
    ],
  ];
}

formMatrix.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener las dos matrices desde los inputs
  const matriz1 = obtenerMatriz("m1");
  const matriz2 = obtenerMatriz("m2");


  // Crear instancia de Matriz
  const operaciones = new Matriz(matriz1, matriz2);

  // Realizar las operaciones
  const suma = operaciones.sumarMatrices();
  const resta = operaciones.restarMatrices();
  const producto = operaciones.productoMatrices();
  const division = operaciones.dividirMatrices();

  // Mostrar los resultados
  document.getElementById("suma").textContent = `Suma: ${JSON.stringify(suma)}`;
  document.getElementById("resta").textContent = `Resta: ${JSON.stringify(
    resta
  )}`;
  document.getElementById("producto").textContent = `Producto: ${JSON.stringify(
    producto
  )}`;
  document.getElementById("division").textContent = `División: ${JSON.stringify(
    division
  )}`;
});

// Obtener el tamaño de la matriz cuando cambia el input
matrizSize.addEventListener("input", function () {
  const size = parseInt(this.value);

  crearFormularioMatriz(size);
});

// Función para generar los inputs vacíos de la matriz
function crearFormularioMatriz(size) {
  const container = document.getElementById("matrix-container");
  container.innerHTML = ""; // Limpiar el contenido anterior

  const matriz = new MatrizCuadrada(size); // Crear una nueva instancia de la clase MatrizCuadrada

  // Crear inputs vacíos
  let htmlFormulario = '<table>';
  for (let i = 0; i < size; i++) {
      htmlFormulario += '<tr>';
      for (let j = 0; j < size; j++) {
          htmlFormulario += `<td><input type="number" id="celda-${i}-${j}" value=""></td>`;
      }
      htmlFormulario += '</tr>';
  }
  htmlFormulario += '</table>';
  container.innerHTML = htmlFormulario;

  // Mostrar el botón de transformación
  const transformButton = document.getElementById("transformbutton");
  transformButton.style.display = 'block';
}

// Función para transformar la matriz en identidad al hacer clic en el botón
formMatriz2.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar el recargo de la página al enviar el formulario

  const size = parseInt(document.getElementById("matrix-size").value); // Obtener el tamaño de la matriz
  const matriz = new MatrizCuadrada(size); // Crear una nueva instancia de MatrizCuadrada

  // Obtener los valores ingresados por el usuario
  matriz.obtenerMatrizDelFormulario();

  // Aplicar el método de Gauss-Jordan y mostrar solo la matriz identidad
  const matrizIdentidad = matriz.renderizarMatrizCompleta();

  // Mostrar la matriz transformada (identidad)
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = matrizIdentidad;
});

