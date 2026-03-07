/** 
 * 121. Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// 1. Equivalente a tu solución original en Python
/**
 * Esta versión sigue exactamente la misma lógica de tu solución original.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitMySolution = function (prices) {
    if (!prices || prices.length === 0) return 0;

    let min = prices[0];
    let max = prices[0];
    let max_profit = 0;

    // Podemos usar un for...of que es equivalente a "for value in prices" de Python
    for (const value of prices) {
        if (value < min) {
            min = value;
            max = value;
            continue;
        }
        if (value > max) {
            max = value;
            let profit = max - min;
            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }
    return max_profit;
};


// 2. Solución óptima adaptada específicamente a las fortalezas de JavaScript
/**
 * Esta es la implementación más rápida en motores V8 (como Node.js o Chrome).
 * 
 * ¿Por qué es óptima en JS?
 * - Evitamos usar `Math.max` o `Math.min` en cada iteración. Llamar a estas funciones 
 *   crea overhead en loops grandes dentro de JavaScript.
 * - Usamos un loop `for` tradicional, que suele ser ligeramente más rápido
 *   que `for...of` o métodos de arreglos como `.forEach()` o `.reduce()`.
 * 
 * Complejidad de tiempo: O(N)
 * Complejidad de espacio: O(1)
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitOptimal = function (prices) {
    let minPrice = Infinity; // Infinity es muy útil en JS para inicializar mínimos
    let bestProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        let currentPrice = prices[i];

        // Actualizar el precio mínimo de compra si encontramos uno más bajo
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
        // Si no es el menor precio histórico, checkeamos si la ganancia supera la mejor que hemos visto
        else {
            let currentProfit = currentPrice - minPrice;
            if (currentProfit > bestProfit) {
                bestProfit = currentProfit;
            }
        }
    }

    return bestProfit;
};

// 3. Solución "Idiomática" (Equivalente al código de GPT en Python)
/**
 * Esta versión usa las funciones nativas y tiene un estilo más limpio y conciso,
 * intercambiando un minúsculo nivel de rendimiento puro por mejor legibilidad.
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIdiomatic = function (prices) {
    if (!prices || prices.length === 0) return 0;

    let minPrice = prices[0];
    let bestProfit = 0;

    for (const price of prices) {
        bestProfit = Math.max(bestProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }

    return bestProfit;
};
