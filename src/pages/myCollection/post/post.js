const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        info: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if ('id' in n) {
                    if (n.type == 1) {
                        let reg = /<[^>]+>|&[a-z]*;/g;
                        let htmlArr = n.post_content.split(reg)
                        this.setData({
                            contentText: htmlArr.join('')
                        })
                    }
                    if (n.type == 2) {
                        this.setData({
                            contentImage: n.img
                        })
                    }
                    if (n.type == 3) {
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
                                if (this.data.contentImage) {
                                    break
                                } else {
                                    if (htmlArr[i].type == 'image') {
                                        this.setData({
                                            contentImage: htmlArr[i].src
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    data: {
        contentVideo: '',
        contentImage: '',
        contentText: ''
    },
    attached() {

    },
    ready() {

    },
    methods: {
        link2post() {
            wx.navigateTo({
                url: `/pages/post/post?id=${this.properties.info.id}`
            })
        },
        link2UserDetail() {
            wx.navigateTo({
                url: `/pages/userDetails/userDetails?id=${this.properties.info.user.id}`
            })
        }
    }
})