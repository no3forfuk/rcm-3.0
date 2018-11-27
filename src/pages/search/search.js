//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotWords: [],
        userWords: [],
        keywords: '',
        searchResult: false,
        rankResult: [],
        elementResult: [],
        postResult: []
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

    },
    removeHistory() {
        app.request.removeHistory({
            params: {},
            success: res => {
                this.setData({
                    userWords: []
                })
            }
        })
    },
    getHotKeyWords() {
        app.request.getHotKeyWords({
            params: {},
            success: res => {
                this.setData({
                    hotWords: res.data.list,
                    userWords: res.data.user
                })
            }
        })
    },
    setkeywords(e) {
        this.setData({
            keywords: e.detail.value
        })
    },
    searchByHotWords(e) {
        this.setData({
            keywords: e.currentTarget.dataset.key
        })
        this.submitSearch()
    },
    submitSearch() {

        if (this.data.keywords.length == 0) {
            return
        } else {
            app.request.searchByWord({
                params: {
                    type: '1|2|3',
                    search: this.data.keywords,
                    page: 1,
                    limit: 100
                },
                success: res => {
                    if (res.status_code == 1) {
                        this.setData({
                            searchResult: true
                        })
                        this.setData({
                            rankResult: res.data.data.second || [],
                            elementResult: res.data.data.element || [],
                            postResult: res.data.data.post || []
                        })
                    }
                }
            })
        }

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getHotKeyWords()
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