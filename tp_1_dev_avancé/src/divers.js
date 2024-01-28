/**
 * @description Definie la variable pour le hash du premier bloc
 * @type {string}
 */
export const monSecret = "";

/**
 * @description Retourne un timestamp au format aaaammjj-hh:mm:ss
 * @return {string}
 */
export function getDate() {
    let date;
    date = new Date();

    return date.getFullYear().toString() + date.getMonth().toString() + date.getDay().toString() + "-" +
        date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString();
}