//获取应用实例
const app = getApp()
const ajax = app.request
Page({
    /**
     * 页面的初始数据
     */
    data: {
        hotWordsList: [],
        searchKey: ''
    },
    setSearchKey(e) {
        this.setData({
            searchKey: e.detail.value
        })
    },
    search(e) {
        const key = e.currentTarget.dataset.key
        if (key) {
            this.setData({
                searchKey: key
            })
        }
        const len = this.data.searchKey.length
        if (len == 0) {
            wx.showToast({
                title: '搜索内容不能为空',
                mask: true,
                duration: 1000
            })
        } else {
            ajax.searchByKeyWords({
                params: {
                    type: 'all',
                    search_key: this.data.searchKey
                },
                success: res => {

                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        ajax.getHotKeyWords({
            success: res => {
                this.setData({
                    hotWordsList: res.data.hot
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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