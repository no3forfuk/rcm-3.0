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
                    contentText: '',
                    contentImage: []
                })
                if ('id' in n) {
                    if (n.type == 1) {
                        let reg = /<[^>]+>|&[a-z]*;/g;
                        let htmlArr = n.post_content.split(reg)
                        this.setData({
                            contentText: htmlArr.join('')
                        })
                    } else if (n.type == 3) {
                        let reg = /<[^>]+>|&[a-z]*;/g
                        let htmlStr = n.post_content
                        let htmlArr = []
                        if (reg.test(htmlStr)) {
                            let newArr = n.post_content.split(reg)
                            this.setData({
                                contentText: newArr.join('')
                            })
                        } else {
                            htmlArr = JSON.parse(n.post_content)
                            for (let i = 0; i < htmlArr.length; i++) {
                                if (htmlArr[i].type == 'text') {
                                    this.setData({
                                        contentText: this.data.contentText + htmlArr[i].value
                                    })
                                }
                                if (htmlArr[i].type == 'image') {
                                    this.setData({
                                        contentImage: [...this.data.contentImage, htmlArr[i].src]
                                    })
                                }
                            }
                        }
                    }
                }
            }
        },
        fatherId: {
            type: Number,
            value: 0,
        }
    },
    data: {
        contentText: '',
        contentImage: []
    },
    attached() {

    },
    ready() {

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