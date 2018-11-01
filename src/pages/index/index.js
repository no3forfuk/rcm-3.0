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
        currentPage: 1,
        bottomBarData: [{
            text: '发榜',
            icon: 'Edithomepage@2x.png',
            handle: ''
        }, {
            text: '我的',
            icon: 'Mine@2x.png',
            handle: 'linkUserCenter'
        }]
    },
    linkUserCenter() {
        wx.navigateTo({
            url: '/pages/userCenter/userCenter'
        })
    },
    //切换tab页
    tabChange(e) {
        const detail = e.detail
        this.setData({
            tabData: {
                ...this.data.tabData,
                current: detail.index
            }
        })
    },
    //切换swiper
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
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
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