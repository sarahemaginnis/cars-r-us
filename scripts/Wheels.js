import { getWheels, setWheel } from "./database.js";

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `option value="${wheel.id}">${wheel.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}