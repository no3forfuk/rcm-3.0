/*Created By Jsir on 2018/9/19*/
'use strict'
const setScrollHeight = function (selector, callback) {
    //设置滚动区域高度
    const system = wx.getSystemInfoSync()
    const query = wx.createSelectorQuery()
    let height;
    query.select(selector).boundingClientRect()
    query.exec(res => {
        if (!res[0]) {
            return
        } else {
            const [_top, wHeight] = [res[0].top, system.windowHeight]
            height = wHeight - _top
            callback(height)
        }
    })
}
module.exports = {
    setScrollHeight
}