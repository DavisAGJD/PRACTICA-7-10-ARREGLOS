class CuadroMagico {
    constructor(matriz) {
        this.matriz = matriz;
        this.tamano = matriz.length;
        this.constanteMagica = (this.tamano * (this.tamano * this.tamano + 1)) / 2;
    }

    // Verifica si todas las sumas de filas, columnas y diagonales coinciden con la constante mágica
    esCuadroMagico() {
        return this.sumaFilas(0) && this.sumaColumnas(0) && this.sumaDiagonales(0, 0, 0);
    }

    // Verificar suma de filas 
    sumaFilas(filaIndex) {
        if (filaIndex === this.tamano) return true; // Caso base: todas las filas han sido verificadas
        
        let sumaFila = this.sumarArreglo(this.matriz[filaIndex], 0);
        
        if (sumaFila !== this.constanteMagica) return false;
        
        return this.sumaFilas(filaIndex + 1); 
    }

    // Verificar suma de columnas 
    sumaColumnas(colIndex) {
        if (colIndex === this.tamano) return true; // Caso base: todas las columnas han sido verificadas
        
        let sumaColumna = this.sumarColumna(0, colIndex); 
        
        if (sumaColumna !== this.constanteMagica) return false;
        
        return this.sumaColumnas(colIndex + 1);
    }

    sumarColumna(filaIndex, colIndex) {
        if (filaIndex === this.tamano) return 0; // Caso base: se alcanzó el final de la columna
        
        return this.matriz[filaIndex][colIndex] + this.sumarColumna(filaIndex + 1, colIndex); // Suma de la columna
    }

    // Verificar suma de diagonales
    sumaDiagonales(index, sumaPrincipal, sumaSecundaria) {
        if (index === this.tamano) {
            return sumaPrincipal === this.constanteMagica && sumaSecundaria === this.constanteMagica; // Verificación de ambas diagonales
        }
        
        return this.sumaDiagonales(
            index + 1,
            sumaPrincipal + this.matriz[index][index], // Sumar diagonal principal
            sumaSecundaria + this.matriz[index][this.tamano - index - 1] // Sumar diagonal secundaria
        );
    }

    sumarArreglo(arreglo, index) {
        if (index === arreglo.length) return 0; // Caso base: se alcanzó el final del arreglo
        
        return arreglo[index] + this.sumarArreglo(arreglo, index + 1); 
    }

    // Obtener la constante mágica
    obtenerConstanteMagica() {
        return this.constanteMagica;
    }
}

export default CuadroMagico;
