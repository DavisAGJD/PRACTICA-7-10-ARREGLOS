class Matriz_2 {
    constructor(dimension) {
        this.dimension = dimension;
        this.matriz = this.crearMatriz(); // Inicializa la matriz
    }

    // Método para crear una matriz cuadrada con 1's en la diagonal principal y 0's en el resto
    crearMatriz() {
        let matriz = [];
        for (let i = 0; i < this.dimension; i++) {
            let fila = [];
            for (let j = 0; j < this.dimension; j++) {
                if (i === j) {
                    fila.push(1);  // 1 en la diagonal principal
                } else {
                    fila.push(0);  // 0 en las demás posiciones
                }
            }
            matriz.push(fila);
        }
        return matriz;
    }

    // Método para mostrar la matriz en el HTML
    mostrarMatriz() {
        const matrizContainer = document.getElementById('matriz');
        matrizContainer.innerHTML = ''; // Limpia el contenido previo
        const table = document.createElement('table');
        for (let i = 0; i < this.dimension; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < this.dimension; j++) {
                const td = document.createElement('td');
                td.textContent = this.matriz[i][j]; // Agrega los valores a la tabla
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        matrizContainer.appendChild(table);
    }
}

export default Matriz_2;
