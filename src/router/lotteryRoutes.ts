import express from "express"

const router = express.Router()

/**
 * 获取奖池信息
 * @method get
 * @route /
 * @group lottery
 * @sample http://localhost:8888/lottery/
 * @returns
 */
router.get("/", (req, res) => {
    res.send("lottery infos")
})

/**
 * 提交奖池信息
 * @method get
 * @route /
 * @group lottery
 * @sample http://localhost:8888/lottery/
 * @returns
 */
router.post("/", (req, res) => {
    res.send("post infos")
})

export default router
