//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabData: {
            current: 0,
            items: [{
                label: '榜单',
                key: 'rank'
            }, {
                label: '排名',
                key: 'element'
            }, {
                label: '帖子',
                key: 'post'
            }]
        },
        scrollHeight: 0,
    },
    tabChange(e) {
        const detail = e.detail
        this.setData({
            tabData: {
                ...this.data.tabData,
                current: detail.index
            }
        })
    },
    handleSwiperChange(e) {
        const detail = e.detail
        this.setData({
            tabData: {
                ...this.data.tabData,
                current: detail.current
            }
        })
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
            target: '.index-page-swiper',
            isComponent: false,
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