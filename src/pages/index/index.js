// pages/index/index.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabData: {
            current: 1,
            items: [{
                label: '关注',
                key: 'focus'
            }, {
                label: '发现',
                key: 'discover'
            }, {
                label: '榜单',
                key: 'ranking'
            }]
        },
        swiperData: [{
            key: 'indexFocus'
        }, {
            key: 'indexDiscover'
        }, {
            key: 'indexRanking'
        }],
        tabbarData: {
            show: true,
            items: [
                {
                    text: '个人中心',
                    imageUrl: '/static/images/user@3x.png',
                    targetUrl: '/pages/userCenter/userCenter'
                }
            ]
        },
        scrollHeight: 0,
        currentPage: 1
    },
    pageScroll(e) {
        const [index, detail, tabbarData] = [e.currentTarget.dataset.index, e.detail, this.data.tabbarData]
        const Y = e.detail.scrollHeight - e.detail.scrollTop - this.data.scrollHeight
        if (detail.deltaY > 0) {
            tabbarData.show = true
        } else {
            tabbarData.show = Y > 50 ? false : true
        }
        this.setData({
            tabbarData
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        app.tools.setScrollHeight('#tab-swiper', height => {
            this.setData({
                scrollHeight: height
            })
        });

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})