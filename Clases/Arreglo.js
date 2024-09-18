class Arreglo {
    constructor(matriz) {
        this.matriz = matriz;
    }

    // Método para contar ceros en cada renglón
    contarCeros() {
        let cerosPorRenglon = [];

        this.matriz.forEach(fila => {
            let contadorCeros = 0;
            fila.forEach(numero => {
                if (numero === 0) {
                    contadorCeros++;
                }
            });
            cerosPorRenglon.push(contadorCeros);
        });

        return cerosPorRenglon;
    }
}

export default Arreglo;