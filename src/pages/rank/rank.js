//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rankData: {},
        elementList: [],
        pageElementList: [],
        popupElementList: [],
        scrollHeight: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        app.tools.setScrollHeight({
            isComponent: false,
            target: '.rank-scroll-view',
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        app.request.getRankDetails({
            params: {
                level: 2,
                id: this.options.id,
                page: 1,
                solt_name: 'exponent'
            },
            success: res => {
                const arr = res.data.data.data
                this.setData({
                    rankData: res.data,
                    elementList: arr.splice(0, 5),
                    popupElementList: arr
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})