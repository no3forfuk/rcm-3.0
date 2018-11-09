//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            name: '未登录',
            avatar: 'http://img2.imgtn.bdimg.com/it/u=1219433764,1891815064&fm=26&gp=0.jpg',
            sign: '点击头像登录'
        },
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
        statusBarHeight: 0
    },
    linkTargetPage(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.page
        })
    },
    link2UserDetails() {
        wx.navigateTo({
            url: `/pages/userDetails/userDetails`
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