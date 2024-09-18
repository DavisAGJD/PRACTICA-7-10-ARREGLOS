class Matriz {
    constructor(matriz1, matriz2) {
        this.matriz1 = matriz1;
        this.matriz2 = matriz2;
        this.filas = matriz1.length;
        this.columnas = matriz1[0].length;
    }

    // Suma de matrices
    sumarMatrices() {
        return this.operarMatrices(0, 0, (a, b) => a + b);
    }

    // Resta de matrices
    restarMatrices() {
        return this.operarMatrices(0, 0, (a, b) => a - b);
    }

    // Producto simple de los elementos de las matrices 
    productoMatrices() {
        return this.operarMatrices(0, 0, (a, b) => a * b);
    }

    // División simple de los elementos de las matrices 
    dividirMatrices() {
        return this.operarMatrices(0, 0, (a, b) => (b !== 0 ? parseFloat((a / b).toFixed(4)) : '∞'));
    }

    // Función auxiliar recursiva para operar las matrices
    operarMatrices(i, j, operacion) {
        if (i === this.filas) {
            return []; // Caso base: hemos recorrido todas las filas
        }

        const nuevaFila = this.operarFila(i, j, operacion); // Operamos fila por fila
        return [nuevaFila].concat(this.operarMatrices(i + 1, 0, operacion)); // Pasamos a la siguiente fila
    }

    operarFila(i, j, operacion) {
        if (j === this.columnas) {
            return []; // Caso base: hemos recorrido toda la fila
        }

        const nuevoValor = operacion(this.matriz1[i][j], this.matriz2[i][j]); // Aplicamos la operación en los elementos
        return [nuevoValor].concat(this.operarFila(i, j + 1, operacion)); // Pasamos al siguiente elemento de la fila
    }
}

export default Matriz;
