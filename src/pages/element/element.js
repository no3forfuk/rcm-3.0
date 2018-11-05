//获取应用实例
const app = getApp()
const colorIndex = parseInt(Math.random() * 5)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        elementDetails: {},
        starModal: [[0, 0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0], [0, 0], [0]],
        color: app.randomColor[colorIndex],
        userInfo: {
            attention: 1,
            avatar: "http://p8rk87lub.bkt.clouddn.com/user/you.jpg",
            collect: 3,
            fan: 0,
            id: 51,
            name: "名字不能改",
            ranking_id: 1,
            ranking_name: "生活休闲",
            signature: "修改个性签名"
        },
        scrollHeight: 0,
        addPostPopupHeight: 0,
        showMoreModal: false,
        moreModalMenu: [{
            text: '收藏',
            handle: 'collect'
        }, {
            text: '邀请排名',
            handle: 'invite'
        },],
        showInviteModal: false
    },
    //打开更多弹窗
    openMoreModal() {
        this.setData({
            showMoreModal: true
        })
    },
    //关闭更多弹窗
    closeMoreModal() {
        this.setData({
            showMoreModal: false
        })
    },
    //
    handleMoreItem(e) {
        this.closeMoreModal()
        const handle = e.detail.item.handle
        this[handle]()
    },
    //收藏
    collect() {
        wx.showModal({
            title: '',
            mask: true,
            content: '收藏成功',
            showCancel: false
        })
    },
    //打开邀请弹窗
    invite() {
        this.setData({
            showInviteModal: true
        })
    },
    //关闭邀请弹窗
    closeInviteModal() {
        this.setData({
            showInviteModal: false
        })
    },
    //开始添加post
    addPostStart() {
        this.openAddPostPopup()
    },
    //打开弹窗
    openAddPostPopup() {
        const animation = wx.createAnimation({
            duration: 350,
            timingFunction: 'ease',
        })
        animation.translateY('-100%').step()
        this.setData({
            togglePopup: animation.export()
        })
    },
    //关闭弹窗
    closeAddPostPopup() {
        const animation = wx.createAnimation({
            duration: 350,
            timingFunction: 'ease',
        })
        animation.translateY('0').step()
        this.setData({
            togglePopup: animation.export()
        })
    },
    //取消发送POST
    cancelAddPost() {
        this.closeAddPostPopup()
    },
    //关注排名
    focusElement() {
        wx.showModal({
            tutle: '',
            content: '关注成功',
            mask: true,
            showCancel: false
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
        app.tools.setScrollHeight({
            target: '.element-page-scroll',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        });
        wx.getSystemInfo({
            success: outres => {
                const query = wx.createSelectorQuery();
                query.select('#eleHeader').boundingClientRect()
                query.exec(res => {
                    if (res[0]) {
                        this.setData({
                            addPostPopupHeight: outres.screenHeight - res[0].height - 12
                        })
                    }
                })
            }
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        app.request.getElementDetail({
            params: {
                id: this.options.id,
                page: 1,
                solt_name: 'created_at'
            },
            success: res => {
                this.setData({
                    elementDetails: res.data,
                    subPostList: res.data.data.data
                })
            }
        })
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