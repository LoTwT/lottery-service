import express from "express"

const router = express.Router()

/**
 * 获取所有奖池信息
 * @method get
 * @route /all
 * @group lottery
 * @sample http://localhost:8888/lottery/all
 * @returns
 */
router.get("/all", (req, res) => {
    res.send("all infos")
})

/**
 * 获取对应奖池信息
 * @method get
 * @route /:id
 * @group lottery
 * @sample http://localhost:8888/lottery/:id
 * @returns
 */
router.get("/:id", (req, res) => {
    res.send("get infos")
})

/**
 * 新增奖池
 * @method post
 * @route /
 * @group lottery
 * @sample http://localhost:8888/lottery/
 * @returns id
 */
router.post("/", (req, res) => {
    res.send("post infos")
})

/**
 * 修改对应奖池信息
 * @method put
 * @route /:id
 * @group lottery
 * @sample http://localhost:8888/lottery/:id
 * @returns
 */
router.put("/:id", (req, res) => {
    res.send("put infos")
})

/**
 * 删除对应奖池
 * @method delete
 * @route /:id
 * @group lottery
 * @sample http://localhost:8888/lottery/:id
 * @returns id
 */
router.delete("/:id", (req, res) => {
    res.send("delete infos")
})

export default router
