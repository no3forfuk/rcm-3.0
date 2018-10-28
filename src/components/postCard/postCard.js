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
    methods: {}
})