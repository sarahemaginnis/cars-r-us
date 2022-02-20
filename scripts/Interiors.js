import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interiors">'
    html += '<option value="0">Select an interior</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `option value="${interior.id}">${interior.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
