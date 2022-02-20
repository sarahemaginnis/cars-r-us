import { getWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    return `<h2>Wheels</h2>`
}