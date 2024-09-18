class Matriz {
    constructor(matriz1, matriz2) {
        this.matriz1 = matriz1;
        this.matriz2 = matriz2;
    }

    // Suma de matrices
    sumarMatrices() {
        return this.matriz1.map((fila, i) =>
            fila.map((valor, j) => valor + this.matriz2[i][j])
        );
    }

    // Resta de matrices
    restarMatrices() {
        return this.matriz1.map((fila, i) =>
            fila.map((valor, j) => valor - this.matriz2[i][j])
        );
    }

    // Producto simple de los elementos de las matrices
    productoMatrices() {
        return this.matriz1.map((fila, i) =>
            fila.map((valor, j) => valor * this.matriz2[i][j])
        );
    }

    // División simple de los elementos de las matrices
    dividirMatrices() {
        return this.matriz1.map((fila, i) =>
            fila.map((valor, j) =>
                this.matriz2[i][j] !== 0 ? parseFloat((valor / this.matriz2[i][j]).toFixed(4)) : '∞'
            )
        );
    }    
}

export default Matriz;
