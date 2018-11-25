//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageHeight: 0,
        info: {},
        rankingDetails: []
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
            target: '.new-rank-page',
            isComponent: false,
            success: height => {
                this.setData({
                    pageHeight: height
                })
            }
        })
    },
    //获取榜单数据
    getRankDetails() {
        app.request.getRankDetails({
            params: {
                second_id: this.options.id,
            },
            success: res => {
                this.setData({
                    info: res.data.info,
                    rankingDetails: JSON.parse(res.data.info.ranking_details)
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getRankDetails()
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