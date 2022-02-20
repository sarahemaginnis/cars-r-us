/*
    This module is responsible for generating the overall HTML structure of the app.
*/

import { Technologies } from "./Technologies.js"
import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Wheels } from "./Wheels.js"

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us: Personal Car Builder</h1>

        <article class = "choices">
            <section class="choices_paints options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices_interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices_wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
            <section class="choices_technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
        </article>
    `
}