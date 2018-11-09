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
                    userInfo: n.user
                })
            }
        }
    },
    data: {
        targetRank: {},
        targetEle: {},
        userInfo: {},
    },
    attached() {

    },
    methods: {
        link2UserDetail() {
            wx.navigateTo({
                url: `/pages/userDetails/userDetails`
            })
        }
    }
})