import { getTechnology, setTechnology } from "./database.js";

const technologies = getTechnology()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technologies">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technologies.map( (tech) => {
            return `option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
