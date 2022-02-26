/*
    This module is responsible for generating the overall 
    HTML structure of the app.
*/

import { Technologies } from "./Technologies.js"
import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Wheels } from "./Wheels.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRUs = () => {
    return `
        <h1>Cars-R-Us: Personal Car Builder</h1>

        <article class = "choices">
            <section class="choices_paints options">
                ${Paints()}
            </section>
            <section class="choices_interiors options">
                ${Interiors()}
            </section>
            <section class="choices_wheels options">
                ${Wheels()}
            </section>
            <section class="choices_technologies options">
                ${Technologies()}
            </section>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}