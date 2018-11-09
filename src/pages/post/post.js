//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        elementInfo: {
            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3671205051,3612742836&fm=26&gp=0.jpg'
        },
        userInfo: {
            avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3671205051,3612742836&fm=26&gp=0.jpg'
        },
        scrollViewHeight: 0,
        bottomBar: [{
            handle: 'zan',
            iconUrl: 'weizan@2x.png'
        }, {
            handle: 'collect',
            iconUrl: 'Collect1@2x.png'
        }, {
            handle: 'comment',
            iconUrl: 'CommentPost@2x.png'
        },],
        showCommentModal: false,
        keyboardHeight: 0,
        commentContent: ''
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
            target: '.scroll-view',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollViewHeight: height
                })
            }
        });
        this.setData({
            statusHeight: app.statusBarHeight
        })
    },
    zan() {
        wx.showModal({
            title: '',
            content: '点赞成功',
            mask: true,
            showCancel: false
        })
    },
    collect() {
        wx.showModal({
            title: '',
            content: '收藏成功',
            mask: true,
            showCancel: false
        })
    },
    comment() {
        this.setData({
            showCommentModal: !this.data.showCommentModal
        })
    },
    inputFocus(e) {
        this.setData({
            keyboardHeight: e.detail.height || 336
        })
    },
    setCommentValue(e) {
        this.setData({
            commentContent: e.detail.value
        })
    },
    inputBlur() {
        this.setData({
            keyboardHeight: 0
        })
    },
    submitComment() {
        this.comment()
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