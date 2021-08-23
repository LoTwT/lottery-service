import express from "express"
import { appPort } from "~/config/app.config"
import { LotteryRoutes } from "~/router/index"

const app = express()

app.get("/", (req, res) => {
    res.send("lottery server...")
})

app.use("/lottery", LotteryRoutes)

app.listen(appPort, () => console.log(`service is running at http://localhost:${appPort}`))

export default app