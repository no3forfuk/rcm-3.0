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
        postInfo: {},
        scrollViewHeight: 0,
        bottomBar: [{
            handle: 'zan',
            iconUrl1: 'yizan1@2x.png',
            status: 'is_praise',
            iconUrl2: 'yizan@2x.png'
        }, {
            handle: 'collect',
            iconUrl1: 'Collect1@2x.png',
            status: 'is_collect',
            iconUrl2: 'Colletbig2@2x.png'
        }],
        showCommentModal: false,
        keyboardHeight: 0,
        commentContent: '',
        showInput: false,
        replyAll: true,
        elementImage: '',
        postContent: [],
        selfId: 0,
        contentText: '',
        commentShow: false,
        commentNum: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    closeInput() {
        this.setData({
            showInput: false
        })
    },
    toggleInput() {
        this.setData({
            replyAll: true,
            showInput: true
        })
    },
    noReplyAll() {
        this.setData({
            replyAll: false,
        })
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
        if (this.data.postInfo.is_praise == 0) {
            app.request.praisePost({
                params: {
                    post_id: this.data.postInfo.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        } else {
            app.request.unPraisePost({
                params: {
                    post_id: this.data.postInfo.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        }
    },
    collect() {
        if (this.data.postInfo.is_collect == 0) {
            app.request.collectPost({
                params: {
                    post_id: this.data.postInfo.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        } else {
            app.request.unCollectPost({
                params: {
                    post_id: this.data.postInfo.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        }
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
    //获取帖子详情
    getPostDetails() {
        app.request.getPostDetails({
            params: {
                post_id: this.options.id
            },
            success: res => {
                if (res.status_code == 1) {

                    if (res.data.info.type == 1) {
                        this.setData({
                            contentText: res.data.info.post_content,
                            postInfo: res.data.info,
                        })
                    }
                    if (res.data.info.type == 3) {
                        this.setData({
                            postInfo: res.data.info,
                            postContent: JSON.parse(res.data.info.post_content),
                        })
                    }
                    this.getElementDetail(res.data.info.element.id)
                }
            }
        })
    },
    //获取父元素详情
    getElementDetail(id) {
        app.request.getElementDetail({
            params: {
                element_id: id
            },
            success: res => {
                this.setData({
                    elementInfo: res.data.info
                })
                const arr = JSON.parse(res.data.info.element_details)
                if (arr) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].type == 'image') {
                            this.setData({
                                elementImage: arr[i].src
                            })
                        }
                    }
                }

            }
        })
    },
    //关注用户
    focusPeople() {
        if (this.data.postInfo.user.is_attention == 0) {
            app.request.focusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: this.data.postInfo.user.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        } else {
            app.request.cancelFocusUser({
                params: {
                    from_uid: wx.getStorageSync('u_id'),
                    to_uid: this.data.postInfo.user.id
                },
                success: res => {
                    this.getPostDetails()
                    wx.showToast({
                        title: res.message,
                        mask: true,
                        duration: 1000
                    })
                }
            })
        }
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.getPostDetails()
        this.setData({
            selfId: wx.getStorageSync('u_id')
        })
    },
    showComment(e) {
        this.setData({
            commentShow: true,
            commentNum: e.detail.count
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