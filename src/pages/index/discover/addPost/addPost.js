const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        addInfo: {
            type: Object,
            value: {},
            observer(n, o, c) {
                this.setData({
                    targetRank: n.targetRank,
                    targetEle: n.targetEle,
                    userInfo: n.user,
                    postInfo: n.post
                })
            }
        }
    },
    data: {
        userInfo: {},
        targetRank: {},
        targetEle: {},
        postInfo: {}
    },
    attached() {

    },
    ready() {

    },
    methods: {}
})