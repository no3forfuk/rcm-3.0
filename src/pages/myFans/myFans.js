//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user: [],
        isSelf: false,
        selfId: 0
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
            target: '.focus-rank-scroll',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    toggleFocus(e) {
        if (e.currentTarget.dataset.item.is_attention == 0) {
            app.request.focusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: e.currentTarget.dataset.id
                },
                success: res => {
                    wx.showModal({
                        title: '',
                        content: res.message,
                        showCancel: false,
                        mask: true
                    })
                    this.getUserFansList()
                }
            })
        } else {
            app.request.cancelFocusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: e.currentTarget.dataset.id
                },
                success: res => {
                    wx.showModal({
                        title: '',
                        content: res.message,
                        showCancel: false,
                        mask: true
                    })
                    this.getUserFansList()
                }
            })
        }
    },
    getUserFansList() {
        app.request.getUserFansList({
            params: {
                from_uid: wx.getStorageSync('u_id'),
                to_uid: this.options.id
            },
            success: res => {
                if (res.status_code == 1) {
                    this.setData({
                        user: res.data.list
                    })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

        wx.getStorage({
            key: 'u_id',
            success: res => {
                if (this.options.id == res.data) {
                    this.setData({
                        isSelf: true
                    })
                } else {
                    this.setData({
                        isSelf: false
                    })
                }
                this.setData({
                    selfId: res.data
                })
            }
        });
        this.getUserFansList()
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