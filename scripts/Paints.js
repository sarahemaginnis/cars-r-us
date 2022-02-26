import { getPaintColors, setPaint } from "./database.js";

const paints = getPaintColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paints") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paints">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}