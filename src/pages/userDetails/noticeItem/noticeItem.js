const app = getApp()
Component({
    properties: {
        info: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if (n.dynamic_type == 14 || n.dynamic_type == 1) {
                    let reg = /<[^>]+>|&[a-z]*;/g
                    if (!reg.test(n.second.ranking_details)) {
                        const arr = JSON.parse(n.second.ranking_details)
                        if (arr) {
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i].type == 'image') {
                                    this.setData({
                                        rankImageSrc: arr[i].src,
                                    })
                                }
                                if (arr[i].type == 'text') {
                                    this.setData({
                                        rankDescText: arr[i].value
                                    })
                                }
                            }
                        }
                    }
                } else if (n.dynamic_type == 13 || n.dynamic_type == 3) {
                    let reg = /<[^>]+>|&[a-z]*;/g
                    if (!reg.test(n.post.post_content)) {
                        const arr = JSON.parse(n.post.post_content)
                        if (arr) {
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i].type == 'image') {
                                    this.setData({
                                        postImage: arr[i].src,
                                    })
                                }
                                if (arr[i].type == 'text') {
                                    this.setData({
                                        postText: arr[i].value
                                    })
                                }
                                if (this.data.postImage && this.data.postText) {
                                    break
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    data: {
        rankImageSrc: '',
        rankDescText: '',
        postImage: '',
        postText: ''
    },
    attached() {

    },
    ready() {

    },
    methods: {
        link2Post() {
            wx.navigateTo({
                url: `/pages/post/post?id=${this.properties.info.post.id}`
            })
        }
    }
})