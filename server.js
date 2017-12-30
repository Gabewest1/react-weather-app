const path = require("path")
const express = require("express")

const app = express()

app.use(express.static(path.resolve(__dirname, "build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Running on port: ${ PORT }`))
