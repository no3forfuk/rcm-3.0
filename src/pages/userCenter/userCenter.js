//获取应用实例
const app = getApp();
const ajax = app.request
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
                }
            ]
        },
        userInfo: {},
        optionData: [
            {
                text: '榜单',
                key: ''
            },
            {
                text: '关注',
                key: 'attention',
                link: '/pages/attention/attention'
            },
            {
                text: '粉丝',
                key: 'fan'
            },
            // {
            //     text: '收藏',
            //     key: 'attention',
            //     link: '/pages/attention/attention'
            // }
        ]
    },
    onGotUserInfo(res) {
        const infoData = {
            encryptedData: res.detail.encryptedData,
            iv: res.detail.iv
        }
        wx.login({
            success: loginres => {
                const options = {
                    ...infoData,
                    code: loginres.code
                }
                ajax.login(options, rcmres => {
                    wx.setStorageSync('token', rcmres.data.token.access_token)
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        ajax.getSelfInfo({
            success: res => {
                wx.setStorageSync('userInfo', res.data)
                this.setData({
                    userInfo: res.data
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