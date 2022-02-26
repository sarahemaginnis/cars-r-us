/*

    This module contains all of the data, or state, for the
    application. It exports four functions that allow other
    modules to get copies of the state.

*/
const database = {
    paintColors: [
        { id: 1, color: "Silver", price: 1000},
        { id: 2, color: "Midnight Blue", price: 2000},
        { id: 3, color: "Firebrick Red", price: 3000},
        { id: 4, color: "Spring Green", price: 4500}
    ],
    interiors: [
        { id: 1, package: "Beige Fabric", price: 1000},
        { id: 2, package: "Charcoal Fabric", price: 2000},
        { id: 3, package: "White Leather", price: 4000},
        { id: 4, package: "Black Leather", price: 5000}
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 500},
        { id: 2, package: "Navigation Package", price: 1000},
        { id: 3, package: "Visibility Package", price: 500},
        { id: 4, package: "Ultra Package", price: 1500}
    ],
    wheels: [
        { id: 1, package: "17-inch Pair Radial", price: 135},
        { id: 2, package: "17-inch Pair Radial BLack", price: 150},
        { id: 3, package: "18-inch Pair Spoke Silver", price: 250},
        { id: 4, package: "18-inch Pair Spoke Black", price: 275}
    ],
    customOrders: [
        {
            id: 1,
            paintColorId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 4,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {
    }
}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({...paintColor}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnology = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintColorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
   database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}