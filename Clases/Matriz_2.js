class MatrizCuadrada {
    constructor(size) {
        this.size = size;
        this.matriz = this.crearMatriz();
    }

    // Crear una matriz vacía que el usuario puede llenar
    crearMatriz() {
        let matriz = [];
        for (let i = 0; i < this.size; i++) {
            let fila = new Array(this.size).fill(0);
            matriz.push(fila);
        }
        return matriz;
    }

    // Crear una matriz aumentada [A | I]
    crearMatrizAumentada() {
        let aumentada = [];
        for (let i = 0; i < this.size; i++) {
            let fila = [];
            for (let j = 0; j < this.size; j++) {
                fila.push(this.matriz[i][j]); // Parte de la matriz A
            }
            for (let j = 0; j < this.size; j++) {
                fila.push(i === j ? 1 : 0); // Parte de la matriz identidad I
            }
            aumentada.push(fila);
        }
        return aumentada;
    }

    // Obtener los valores de los inputs que el usuario llenó
    obtenerMatrizDelFormulario() {
        for (let i = 0; i < this.size; i++) {
            for (let j = 0; j < this.size; j++) {
                let inputId = `celda-${i}-${j}`;
                let valor = parseFloat(document.getElementById(inputId).value);
                this.matriz[i][j] = isNaN(valor) ? 0 : valor;
            }
        }
    }

    // Método para aplicar Gauss-Jordan
    metodoGaussJordan(matrizAumentada, fila) {
        // Caso base: si hemos procesado todas las filas
        if (fila === this.size) {
            return matrizAumentada;
        }

        // Hacer el pivote igual a 1
        let pivot = matrizAumentada[fila][fila];
        if (pivot !== 0) {
            this.normalizarFila(matrizAumentada, fila, pivot); // Normalizar la fila
        }

        // Hacer ceros en la columna del pivote
        this.hacerCerosColumna(matrizAumentada, fila);

        // Llamada para procesar la siguiente fila
        return this.metodoGaussJordan(matrizAumentada, fila + 1);
    }

    // Normalizar una fila dividiendo por el valor del pivote
    normalizarFila(matrizAumentada, fila, pivot) {
        if (pivot !== 0) {
            for (let j = 0; j < 2 * this.size; j++) {
                matrizAumentada[fila][j] /= pivot;
            }
        }
    }

    // Método para hacer ceros en la columna del pivote
    hacerCerosColumna(matrizAumentada, fila) {
        this.hacerCeroFila(matrizAumentada, fila, 0);
    }


    hacerCeroFila(matrizAumentada, filaActual, filaObjetivo) {
        if (filaObjetivo === this.size) return; // Caso base: hemos terminado todas las filas

        if (filaObjetivo !== filaActual) {
            let factor = matrizAumentada[filaObjetivo][filaActual];
            for (let j = 0; j < 2 * this.size; j++) {
                matrizAumentada[filaObjetivo][j] -= factor * matrizAumentada[filaActual][j];
            }
        }

        // Llamada  para la siguiente fila
        this.hacerCeroFila(matrizAumentada, filaActual, filaObjetivo + 1);
    }

    // Renderizar la matriz aumentada (mostrar tanto la identidad como la inversa)
    renderizarMatrizCompleta() {
        let aumentada = this.crearMatrizAumentada();
        aumentada = this.metodoGaussJordan(aumentada, 0); // Aplicar Gauss-Jordan 
        let tabla = '<table>';

        // Mostrar ambas partes de la matriz aumentada: la identidad y la inversa
        aumentada.forEach(fila => {
            tabla += '<tr>';
            // Recorrer solo las columnas correspondientes a la matriz original (matriz identidad transformada)
            for (let j = 0; j < this.size; j++) {
                tabla += `<td>${fila[j].toFixed(2)}</td>`;
            }
            // Añadir un separador visual
            tabla += '<td style="padding: 0 10px;"></td>';
            // Recorrer las columnas correspondientes a la matriz inversa (parte derecha de la matriz aumentada)
            for (let j = this.size; j < 2 * this.size; j++) {
                tabla += `<td>${fila[j].toFixed(2)}</td>`;
            }
            tabla += '</tr>';
        });

        tabla += '</table>';
        return tabla;
    }
}

export default MatrizCuadrada;
