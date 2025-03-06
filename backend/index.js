import express from "express"

const app = express()
const port = 3545

app.get('/', (req, res)  => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log("Commentator API running on " + port + "...")
})