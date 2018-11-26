//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {},
        userOptions: [{
            text: '参与的榜单',
            icon: 'Personalcenter_ranking@2x.png',
            page: '/pages/partakeRank/partakeRank'
        }, {
            text: '我的关注',
            icon: 'personalcenter_myfocus@2x.png',
            page: '/pages/myFocus/myFocus'
        }, {
            text: '我的收藏',
            icon: 'personalcenter_mycollect@2x.png',
            page: '/pages/myCollection/myCollection'
        }, {
            text: '每日任务',
            icon: 'personalcenter_task@2x.png',
            page: '/pages/myTask/myTask'
        },],
        statusBarHeight: 0,
        noticeList: []
    },
    linkTargetPage(e) {
        wx.navigateTo({
            url: `${e.currentTarget.dataset.page}?id=${wx.getStorageSync('u_id')}`
        })
    },
    link2UserDetails() {
        wx.navigateTo({
            url: `/pages/userDetails/userDetails?id=${wx.getStorageSync('u_id')}`
        })
    },
    //获取用户详情
    getUserInfo() {
        app.request.getSelfInfo({
            params: {
                to_uid: wx.getStorageSync('u_id'),
                from_uid: wx.getStorageSync('u_id')
            },
            success: res => {
                this.setData({
                    userInfo: res.data.info
                })
            }
        })
    },
    getMyNotice() {
        app.request.getMyNotice({
            params: {},
            success: res => {
                this.setData({
                    noticeList: res.data.list
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
        const system = wx.getSystemInfo({
            success: result => {
                this.setData({
                    statusBarHeight: result.statusBarHeight
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getUserInfo();
        this.getMyNotice()
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