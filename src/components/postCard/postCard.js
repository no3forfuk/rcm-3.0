const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        postInfo: {
            type: Object,
            value: {},
            observer(n, o, c) {
                this.setData({
                    userInfo: {
                        avatar: n.avatar
                    }
                })
            }
        },
        fatherId: {
            type: Number,
            value: 0,
        }
    },
    data: {
        userInfo: {},
        rate: 0
    },
    attached() {

    },
    ready() {
        const round = Math.floor(Math.random() * 10);
        const num = parseInt(Math.random() * 10);
        this.setData({
            rate: round + num / 10
        })
    },
    methods: {
        togglePostZan() {
            if (this.properties.postInfo.is_praise == 0) {
                app.request.praisePost({
                    params: {
                        post_id: this.properties.postInfo.id
                    },
                    success: res => {
                        this.triggerEvent('refresh')
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
                        post_id: this.properties.postInfo.id
                    },
                    success: res => {
                        this.triggerEvent('refresh')
                        wx.showToast({
                            title: res.message,
                            mask: true,
                            duration: 1000
                        })
                    }
                })
            }

        },
        togglePostCollect() {
            if (this.properties.postInfo.is_collect == 0) {
                app.request.collectPost({
                    params: {
                        post_id: this.properties.postInfo.id
                    },
                    success: res => {
                        this.triggerEvent('refresh')
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
                        post_id: this.properties.postInfo.id
                    },
                    success: res => {
                        this.triggerEvent('refresh')
                        wx.showToast({
                            title: res.message,
                            mask: true,
                            duration: 1000
                        })
                    }
                })
            }
        },
        link2Post() {
            wx.navigateTo({
                url: `/pages/post/post?id=${this.properties.postInfo.id}&fatherId=${this.properties.fatherId}`
            })
        },
        togglePostComment(e) {
            // this.triggerEvent('openComment', {item: e.currentTarget.dataset.item})
            wx.navigateTo({
                url: `/pages/post/post?id=${e.currentTarget.dataset.item.id}`
            })
        }
    }
})