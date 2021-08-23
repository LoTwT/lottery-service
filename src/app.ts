import express from "express"
import { appPort } from "~/config/app.config"

const app = express()

app.get("/", (req, res) => {
    res.send("lottery server...")
})

app.listen(appPort, () => console.log(`service is running at http://localhost:${appPort}`))