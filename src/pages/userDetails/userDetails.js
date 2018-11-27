//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: 0,
        socialList: [{
            text: '榜单',
            key: 'ranking_num',
            router: 'myRank'
        }, {
            text: '关注',
            key: 'user_attention_num',
            router: 'myFocus'
        }, {
            text: '粉丝',
            key: 'fan',
            router: 'myFans'
        }, {
            text: '收藏',
            key: 'collect_num',
            router: 'myCollection'
        }],
        noticeList: [],
        scrollHeight: 0,
        userInfo: {},
        selfId: 0
    },
    goUserItemPage(e) {
        wx.navigateTo({
            url: `/pages/${e.currentTarget.dataset.router}/${e.currentTarget.dataset.router}?id=${this.data.userInfo.id}`
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
        });
        app.tools.setScrollHeight({
            isComponent: false,
            target: '.user-details-page',
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    link2EditInfo() {
        wx.navigateTo({
            url: `/pages/editInfo/editInfo`
        })
    },
    //获取用户动态
    getUserDynamic() {
        app.request.getUserDynamic({
            params: {
                from_uid: wx.getStorageSync('u_id'),
                to_uid: this.options.id,
                page: 1,
                limit: 100
            },
            success: res => {
                if (res.status_code == 1) {
                    this.setData({
                        noticeList: res.data.list.reverse()
                    })
                }

            }
        })
    },
    //获取用户详情
    getUserInfo() {
        app.request.getSelfInfo({
            params: {
                to_uid: this.options.id,
                from_uid: wx.getStorageSync('u_id')
            },
            success: res => {
                if (res.status_code == 1) {
                    this.setData({
                        userInfo: res.data.info
                    })
                }

            }
        })
    },
    focusPeople(e) {
        if (this.data.userInfo.is_attention == 0) {
            app.request.focusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: this.options.id,
                },
                success: res => {

                    if (res.status_code == 1) {
                        wx.showToast({
                            title: '关注成功',
                            mask: true,
                            duration: 1000
                        })
                        this.getUserInfo()
                    }
                }
            })
        } else {
            app.request.cancelFocusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: this.options.id,
                },
                success: res => {
                    if (res.status_code == 1) {
                        wx.showToast({
                            title: '取消关注成功',
                            mask: true,
                            duration: 1000
                        })
                        this.getUserInfo()
                    }

                }
            })
        }

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.setData({
            selfId: wx.getStorageSync('u_id')
        })
        this.getUserInfo()
        this.getUserDynamic()
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