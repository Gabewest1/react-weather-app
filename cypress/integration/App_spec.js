function getElement(selector) {
    return cy.get(`[data-test=${selector}]`)
}

describe("Weather App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("should display a form to enter a location to query weather data.", () => {
        const form = getElement("weatherForm")
    })

    it("should display a button to fetch weather data related to the form", () => {
        const weatherBtn = getElement("weatherBtn")
    })

    it("should display a button to fetch weather data related to the users current location", () => {
        const currentLocationWeatherBtn = getElement("currentLocationWeatherBtn")
    })
})