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
                key: 'rank',
                focusType: 1
            }, {
                label: '排名',
                key: 'element',
                focusType: 2
            }, {
                label: '用户',
                key: 'user',
                focusType: 3
            }]
        },
        scrollHeight: 0,
        focusType: 1,
        focusList: []
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
        this.setData({
            focusList: []
        })
        const detail = e.detail
        this.setData({
            tabData: {
                ...this.data.tabData,
                current: detail.current
            },
            focusType: this.data.tabData.items[detail.current].focusType
        })
        this.getUserFocusList()
    },
    //获取用户关注列表
    getUserFocusList() {
        app.request.getUserFocusList({
            params: {
                type: this.data.focusType,
                to_uid: this.options.id,
                from_uid: wx.getStorageSync('u_id')
            },
            success: res => {
                this.setData({
                    focusList: res.data.list
                })
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
        this.getUserFocusList()
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