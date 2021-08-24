import express from "express"
import multer from "multer"
import bodyParser from "body-parser"

const router = express.Router()
const jsonParser = bodyParser.json()
const upload = multer()

/**
 * 获取所有奖池信息
 * @method get
 * @route /all
 * @group lottery
 * @sample http://localhost:8888/lottery/all
 * @returns
 */
router.get("/all", (req, res, next) => {
    res.send("all infos1")
})

/**
 * 获取对应奖池信息
 * @method get
 * @route /:id
 * @group lottery
 * @sample http://localhost:8888/lottery/:id
 * @returns
 */
router.get("/:id", (req, res, next) => {
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
router.post("/", jsonParser, (req, res, next) => {
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
router.put("/:id", jsonParser, (req, res, next) => {
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
router.delete("/:id", (req, res, next) => {
    res.send("delete infos")
})

export default router
