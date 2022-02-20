import { getInteriors } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    return `<h2>Interiors</h2>`
}