import { GoodSchema, LotterySchema } from "~/models";
import { v4 as uuidv4 } from "uuid"

/**
 * 模拟数据存储
 */
class LotteryStore {
    // 存放奖池的容器
    private _lotteryMap: Map<string, LotterySchema>
    // 存放抽奖结果
    private _lotteryResultMap: Map<string, string[]>

    constructor() {
        this._lotteryMap = new Map()
        this._lotteryResultMap = new Map()
    }

    /**
     * 是否有对应 id 的奖池
     * @param { string } id 
     * @return { boolean }
     */
    public has(id: string): boolean {
        return this._lotteryMap.has(id)
    }

    /**
     * 新增一个奖池
     * @param { GoodSchema[] } goods 奖池奖品
     * @returns { string } 奖池 id, 返回前端更新前端数据
     */
    public add(name: string, goods: GoodSchema[]): string {
        const newLotteryId = uuidv4()
        const newLottery: LotterySchema = {
            lotteryId: newLotteryId,
            name,
            goods
        }
        this._lotteryMap.set(newLotteryId, newLottery)

        return newLotteryId
    }

    /**
     * 根据 id 查找一个奖池
     * @param id 奖池 id
     * @returns { boolean }
     */
    public find(id: string): LotterySchema {
        if (!this.has(id)) throw Error("no such lottery")

        return this._lotteryMap.get(id)!
    }

    /**
     * todo
     * 修改奖池奖品
     * @param id 
     * @param good 
     */
    public put(id: string, good: GoodSchema) {
        // const lottery = this.find(id)
        // let prevGood = lottery.find((item) => item.goodId === good.goodId)

        // if (prevGood) {
        //     prevGood = { ...good }
        // } else {
        //     lottery.push(good)
        //     lottery.sort((a, b) => a.placeIndex - b.placeIndex)
        // }
    }

    /**
     * 删除一个奖池
     * @param { string } id 
     * @returns { boolean } 是否删除成功
     */
    public delete(id: string): boolean {
        return this._lotteryMap.delete(id)
    }
}

const lotteryStore = new LotteryStore()

export default lotteryStore