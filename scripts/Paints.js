import { getPaintColors } from "./database.js";

const paints = getPaintColors()

export const Paints = () => {
    return `<h2>Paints</h2>`
}