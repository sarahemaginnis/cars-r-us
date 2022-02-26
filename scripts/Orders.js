import { getInteriors, getOrders, getPaintColors, getTechnology, getWheels } from "./database.js"

const paints = getPaintColors()
const interiors = getInteriors()
const technologies = getTechnology()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    //const chosenPaint = paints.find(paint => {return paint.id === order.paintId})
    const chosenPaint = paints.find(paint => {
        return paint.id === order.paintColorId
    })
    const chosenInterior = interiors.find(interior => interior.id === order.interiorId)
    const chosenTechnology = technologies.find(technology => technology.id === order.technologyId)
    const chosenWheels = wheels.find(wheel => wheel.id === order.wheelId)
    const totalCost = chosenPaint.price + chosenInterior.price + chosenTechnology.price + chosenWheels.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}