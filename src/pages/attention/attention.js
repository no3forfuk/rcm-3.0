//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabbarData: {
            show: true,
            items: [
                {
                    text: '首页',
                    imageUrl: '/static/images/home@3x.png',
                    targetUrl: '/pages/index/index'
                },
                {
                    text: '个人中心',
                    imageUrl: '/static/images/user@3x.png',
                    targetUrl: '/pages/userCenter/userCenter'
                }
            ]
        },
        tabSwiperData: {
            tabData: {
                current: 0,
                items: [{
                    label: '关注的人',
                    key: 'people'
                }, {
                    label: '关注的榜单',
                    key: 'ranking'
                }]
            },
            swiperData: [{
                key: 'focusPeople'
            }, {
                key: 'focusRank'
            }]
        }
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
        (() => {
            //设置滚动区域高度
            const system = wx.getSystemInfoSync()
            const query = wx.createSelectorQuery()
            query.select('#tab-swiper').boundingClientRect()
            query.exec(res => {
                if (!res[0]) {
                    return
                } else {
                    const [_top, wHeight] = [res[0].top, system.windowHeight]
                    this.setData({
                        scrollHeight: wHeight - _top
                    })
                }
            })
        })();
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