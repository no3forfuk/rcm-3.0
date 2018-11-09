//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rankData: {},
        elementList: [],
        pageElementList: [],
        popupElementList: [],
        scrollHeight: 0,
        moreModalMenu: [{
            text: '关注',
            handle: 'focus'
        }, {
            text: '邀请排名',
            handle: 'invite'
        },],
        bottomTab: [{
            label: '排名',
            key: 'rank'
        }, {
            label: '帖子',
            key: 'post'
        }, {
            label: '活动',
            key: 'active'
        }],
        addRatePopupHeight: 0,
        showAddRate: false,
        showMoreModal: false,
        showDetailModal: false
    },
    focusRank() {
        wx.showModal({
            tutle: '',
            content: '关注成功',
            mask: true,
            showCancel: false
        })
    },
    openAddRate() {
        this.setData({
            showAddRate: true
        })
    },
    cancelAddRate() {
        this.setData({
            showAddRate: false
        })
    },
    toggleAddRate() {
        this.setData({
            showAddRate: !this.data.showAddRate
        })
    },
    toggleMoreModal() {
        this.setData({
            showMoreModal: !this.data.showMoreModal
        })
    },
    toggleDetailModal() {
        this.setData({
            showDetailModal: !this.data.showDetailModal
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    openBottmTab() {
        this.selectComponent("#bottomTab").slideUp();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        app.tools.setScrollHeight({
            isComponent: false,
            target: '.rank-scroll-view',
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        });
        wx.getSystemInfo({
            success: outres => {
                const query = wx.createSelectorQuery();
                query.select('#rankHeader').boundingClientRect()
                query.exec(res => {
                    if (res[0]) {
                        this.setData({
                            addRatePopupHeight: outres.screenHeight - res[0].height - 12
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
        app.request.getRankDetails({
            params: {
                level: 2,
                id: this.options.id,
                page: 1,
                solt_name: 'exponent'
            },
            success: res => {
                const arr = res.data.data.data
                this.setData({
                    rankData: res.data,
                    elementList: arr.splice(0, 8),
                    popupElementList: arr
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