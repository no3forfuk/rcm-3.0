//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollViewHeight: 0,
        partakeRankList: [],
        recommendRank: [{ranking_name: '生命周期函数--监听页面初次渲染完成生命周期函数--监听页面初次渲染完成'}]
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
            target: '.partake-rank-page',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollViewHeight: height
                })
            }
        })
    },
    //获取用户动态
    getUserDynamic() {
        app.request.getUserDynamic({
            params: {
                from_uid: wx.getStorageSync('u_id'),
                to_uid: this.options.id,
                page: 1,
                limit: 100
            },
            success: res => {
                if (res.status_code == 1) {
                    this.setData({
                        partakeRankList: res.data.list.reverse()
                    })
                }
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getUserDynamic()
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