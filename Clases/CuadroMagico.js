class CuadroMagico {
    constructor(matriz) {
        this.matriz = matriz;
        this.tamano = matriz.length;
        this.constanteMagica = (this.tamano * (this.tamano * this.tamano + 1)) / 2;
    }

    // Verifica si todas las sumas de filas, columnas y diagonales coinciden con la constante mágica
    esCuadroMagico() {
        return this.sumaFilas() && this.sumaColumnas() && this.sumaDiagonales();
    }

    // Verificar suma de filas
    sumaFilas() {
        for (let i = 0; i < this.tamano; i++) {
            let sumaFila = this.matriz[i].reduce((acc, val) => acc + val, 0);
            if (sumaFila !== this.constanteMagica) return false;
        }
        return true;
    }

    // Verificar suma de columnas
    sumaColumnas() {
        for (let i = 0; i < this.tamano; i++) {
            let sumaColumna = 0;
            for (let j = 0; j < this.tamano; j++) {
                sumaColumna += this.matriz[j][i];
            }
            if (sumaColumna !== this.constanteMagica) return false;
        }
        return true;
    }

    // Verificar suma de diagonales
    sumaDiagonales() {
        let sumaDiagonalPrincipal = 0;
        let sumaDiagonalSecundaria = 0;
        for (let i = 0; i < this.tamano; i++) {
            sumaDiagonalPrincipal += this.matriz[i][i];
            sumaDiagonalSecundaria += this.matriz[i][this.tamano - i - 1];
        }
        return sumaDiagonalPrincipal === this.constanteMagica && sumaDiagonalSecundaria === this.constanteMagica;
    }

    // Obtener la constante mágica
    obtenerConstanteMagica() {
        return this.constanteMagica;
    }
}

export default CuadroMagico;