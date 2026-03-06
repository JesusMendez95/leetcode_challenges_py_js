/**
 * 1. Equivalente a tu solución original en Python
 * 
 * Esta solución mantiene la misma lógica. Utiliza un bucle for...of para 
 * iterar sobre los caracteres de 't' y un puntero 'i' para las letras de 's'.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length === 0) {
        return true;
    } else if (t.length < s.length) {
        return false;
    }

    let i = 0; // index de iteración para las letras de s
    for (const t_char of t) {
        if (s[i] === t_char) {
            i++;
        }
        if (i === s.length) {
            return true;
        }
    }
    return false;
};

/**
 * 2. Solución óptima y nativa en JavaScript ("JS-esque")
 * 
 * Opción A: Usando indexOf (Equivalente al estilo Pythonic)
 * Esta solución es extremadamente rápida en JavaScript porque String.prototype.indexOf
 * está implementado internamente en C++ (en motores como V8 de Chrome/Node).
 * Es concisa y evita iterar manualmente de manera explicita.
 */
var isSubsequenceOptimal = function (s, t) {
    let index = 0;
    for (const char of s) {
        index = t.indexOf(char, index);
        if (index === -1) return false;
        index++; // Avanzamos el índice para no reutilizar la letra actual
    }
    return true;
};

/**
 * Opción B: Dos punteros limpios (Clásica óptima de JS en O(N))
 * Si prefieres no usar métodos integrados y tener el algoritmo más puro.
 * Evalúa ambas condiciones en el for loop y sale rápidamente si ya validó 's'.
 */
var isSubsequenceTwoPointers = function (s, t) {
    let i = 0;
    for (let j = 0; j < t.length && i < s.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
    }
    return i === s.length;
};
