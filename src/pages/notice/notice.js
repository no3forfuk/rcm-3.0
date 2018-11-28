//获取应用实例
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollHeight: 0,
        noticeItem: [{
            icon: 'personalcenter_information_commentandreply@2x.png',
            text: ' 评论了你的贴子',
            isRead: true,
            display: '',
            user: '',
            type: '2',
            show: false,
            router: 'comment'
        }, {
            icon: 'personalcenter_information_zan@2x.png',
            text: ' 点赞了你的贴子',
            isRead: true,
            display: '',
            user: '',
            type: '8',
            show: false,
            router: 'zan'
        }, {
            icon: 'personalcenter_information_focus@2x.png',
            text: ' 关注了你的榜单/排名',
            isRead: true,
            display: '',
            user: '',
            type: '9,10',
            show: false,
            router: 'focus'
        }, {
            icon: 'personalcenter_information_collect@2x.png',
            text: ' 收藏了你的帖子',
            isRead: true,
            display: '',
            user: '',
            type: '11',
            show: false,
            router: 'collect'
        }, {
            icon: 'personalcenter_information_ranking@2x.png',
            text: ' 邀请你添加排名',
            isRead: true,
            display: '',
            user: '',
            type: '7',
            show: false,
            router: 'invite'
        }]
    },
    routerLink(e) {
        wx.navigateTo({
            url: `/pages/notice${e.currentTarget.dataset.router}/notice${e.currentTarget.dataset.router}`
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
            target: '.notice-page',
            isComponent: false,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    getMyNotice() {
        app.request.getMyNotice({
            params: {},
            success: res => {
                if (res.status_code == 1 && res.data.list) {
                    const arr = res.data.list
                    const noticeItem = this.data.noticeItem
                    let type0conut = 0
                    let type1conut = 0
                    let type2conut = 0
                    let type3conut = 0
                    let type4conut = 0
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i].notice_type == 2) {
                            let item = noticeItem[0]
                            if (arr[i].is_read == 0) {
                                item.isRead = false
                            }
                            if (type0conut > 0) {
                                if (type0conut > 1) {
                                    type0conut++
                                    continue
                                }
                                item.user = item.user + '等'
                                type0conut++
                                continue
                            }
                            item.display = app.tools.formatPostContent(arr[i].post.post_content, arr[i].post.type).text;
                            item.user = arr[i].from_user.name
                            item.show = true
                            type0conut++
                        } else if (arr[i].notice_type == 8) {
                            let item = noticeItem[1]
                            if (arr[i].is_read == 0) {
                                item.isRead = false
                            }
                            if (type1conut > 0) {
                                if (type1conut > 1) {
                                    type1conut++
                                    continue
                                }
                                item.user = item.user + '等'
                                type1conut++
                                continue
                            }
                            item.display = app.tools.formatPostContent(arr[i].post.post_content, arr[i].post.type).text;
                            item.user = arr[i].from_user.name
                            item.show = true
                            type1conut++
                        } else if (arr[i].notice_type == 9 || arr[i].notice_type == 10) {
                            let item = noticeItem[2]
                            if (arr[i].is_read == 0) {
                                item.isRead = false
                            }
                            if (type2conut > 0) {
                                if (type2conut > 1) {
                                    type2conut++
                                    continue
                                }
                                item.user = item.user + '等'
                                type2conut++
                                continue
                            }
                            if (arr[i].notice_type == 9) {
                                item.display = arr[i].second.ranking_name
                            } else {
                                item.display = arr[i].element.element_name
                            }

                            item.user = arr[i].from_user.name
                            item.show = true
                            type2conut++
                        } else if (arr[i].notice_type == 11) {
                            let item = noticeItem[3]
                            if (arr[i].is_read == 0) {
                                item.isRead = false
                            }
                            if (type3conut > 0) {
                                if (type3conut > 1) {
                                    type3conut++
                                    continue
                                }
                                item.user = item.user + '等'
                                type3conut++
                                continue
                            }
                            item.display = app.tools.formatPostContent(arr[i].post.post_content, arr[i].post.type).text;
                            item.user = arr[i].from_user.name
                            item.show = true
                            type3conut++
                        } else if (arr[i].notice_type == 7) {
                            let item = noticeItem[4]
                            if (arr[i].is_read == 0) {
                                item.isRead = false
                            }
                            if (type4conut > 0) {
                                if (type4conut > 1) {
                                    type4conut++
                                    continue
                                }
                                item.user = item.user + '等'
                                type4conut++
                                continue
                            }
                            item.display = arr[i].second.ranking_name;
                            item.user = arr[i].from_user.name
                            item.show = true
                            type4conut++
                        }

                    }
                    this.setData({
                        noticeItem: noticeItem
                    })
                }
            }
        })
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
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