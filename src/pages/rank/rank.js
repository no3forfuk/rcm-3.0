//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        rankData: {},
        elementList: [],
        popupElementList: [],
        popupPostList: [],
        scrollHeight: 0,
        moreModalMenu: [{
            text: '分享',
            handle: 'share'
        }, {
            text: '邀请排名',
            handle: 'invite'
        },],
        bottomTab: [{
            label: '排名',
            key: 'rank',
            num: 0
        }, {
            label: '帖子',
            key: 'post',
            num: 0
        }, {
            label: '活动',
            key: 'active',
            num: 0
        }],
        addRatePopupHeight: 0,
        showAddRate: false,
        showMoreModal: false,
        showDetailModal: false,
        showInviteModal: false,
        activeElement: {}
    },
    //获取榜单数据
    getRankDetails() {
        app.request.getRankDetails({
            params: {
                second_id: this.options.id,
            },
            success: res => {
                this.setData({
                    rankData: res.data.info,
                    bottomTab: [{
                        label: '排名',
                        key: 'rank',
                        num: res.data.info.element_num
                    }, {
                        label: '帖子',
                        key: 'post',
                        num: res.data.info.post_num
                    }, {
                        label: '活动',
                        key: 'active',
                        num: 0
                    }]
                })
                this.getRankSubElement()
                this.getRankSubpost()
            }
        })
    },
    //获取榜单排名列表
    getRankSubElement() {
        app.request.getRankSubElement({
            params: {
                second_id: this.data.rankData.id,
                page: 1,
                limit: 1000
            },
            success: res => {
                this.setData({
                    elementList: res.data.list.slice(0, 5),
                    popupElementList: res.data.list
                })
            }
        })
    },
    //获取榜单帖子
    getRankSubpost() {
        app.request.getRankSubpost({
            params: {
                second_id: this.data.rankData.id,
                page: 1,
                limit: 1000
            },
            success: res => {
                this.setData({
                    popupPostList: res.data.list
                })
            }
        })
    },
    //关注榜单
    focusRank() {
        if (this.data.rankData.is_attention == 1) {
            //取消关注
            app.request.cancelFocusRank({
                params: {
                    second_id: this.options.id
                },
                success: res => {
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                    this.getRankDetails()
                }
            })
        } else {
            //添加关注
            app.request.focusRank({
                params: {
                    second_id: this.options.id
                },
                success: res => {
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                    this.getRankDetails()
                }
            })
        }
    },
    //获取维度
    // getDimension() {
    //     app.request.getDimension({
    //         params: {
    //             first_id: this.data.rankData.domain_id
    //         },
    //         success: res => {
    //             console.log(res);
    //         }
    //     })
    // },
    //分享榜单
    share() {

    },
    //打开邀请
    invite() {
        this.setData({
            showInviteModal: !this.data.showInviteModal
        })
    },
    //点击更多按钮
    handleMoreItem(e) {
        this.toggleMoreModal()
        const handle = e.detail.item.handle
        this[handle]()
    },
    cancelAddRate() {
        this.setData({
            showAddRate: false
        })
    },
    link2AddElement(e) {
        wx.navigateTo({
            url: `/pages/addElement/addElement?id=${this.data.rankData.first_id}&rankId=${this.data.rankData.id}`
        })
    },
    toggleAddRate(e) {
        // console.log(e.detail.activeElement);
        if (e.detail && e.detail.activeElement) {
            this.setData({
                activeElement: e.detail.activeElement
            })
        }
        this.setData({
            activeElement: {},
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
        this.getRankDetails();
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