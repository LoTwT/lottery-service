/**
 * 奖池奖品
 */
export interface GoodSchema {
    placeIndex: number  // 在转盘上的位置坐标，左上 => 右下顺时针，从 0 开始
    goodId: number,     // 商品 id
    goodName: string,   // 种类
    rate: number,       // 中奖概率
    initialNum: number, // 初始数量
    restNum: number,    // 剩余数量
    img: string,        // 图片地址
}

/**
 * 奖池
 */
export interface LotterySchema {
    lotteryId: string,     // 奖池 id
    name: string,          // 奖池名
    goods: GoodSchema[],   // 奖品
}