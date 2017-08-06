export default function convertFahrenheitToCelcius(temp) {
    console.log("IS IT A NUMBER:", typeof(temp))
    return ((5 * (temp - 32)) / 9).toFixed(2)
}