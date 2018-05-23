function getElement(selector) {
    return cy.get(`[data-test=${selector}]`)
}

describe("Weather App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    describe("Weather Form", () => {
        it("should display", () => {
            const form = getElement("weatherForm")
        })

        it("should fetch weather data about Hong Kong", () => { 
            cy.server()
            cy.route("sockjs-node/*").as("getWeather")

            getElement("weatherQuery").type("Hong Kong")

            getElement("weatherBtn").click()
            
            cy.wait("@getWeather")
            
            getElement("temperature").should(el => {
                expect(el[0].textContent).to.not.equal("")
            })
        })
    })

    describe("Query Weather Button", () => {
        it("should display", () => {
            const weatherBtn = getElement("weatherBtn")
            console.log(weatherBtn)
        })
    })

    describe("Query Current Location Weather Button", () => {
        it("should display", () => {
            const currentLocationWeatherBtn = getElement("currentLocationWeatherBtn")
        })
        it("onClick: should fetch weather data about the current location", () => { 
            cy.server()
            cy.route("sockjs-node/*").as("getWeather")

            const currentLocationWeatherBtn = getElement("currentLocationWeatherBtn")
            currentLocationWeatherBtn.click()

            cy.wait("@getWeather")

            const temperature = getElement("temperature")
            temperature.should(el => {
                expect(el[0].textContent).to.not.equal("")
            })
        })
    })

    describe("Weekly Forecast", () => {
        let weatherBtn
        let currentLocationWeatherBtn

        beforeEach(() => {
            weatherBtn = getElement("weatherBtn")    
            currentLocationWeatherBtn = getElement("currentLocationWeatherBtn")    
        })

        it("should display 7 daily forecasts", () => {
            cy.server()
            cy.route("sockjs-node/*").as("getWeather")

            currentLocationWeatherBtn.click()

            cy.wait("@getWeather")

            const numForecasts = getElement("weeklyForecast").children()
            expect(numForecasts).to.equal(7)
        })
    })
})