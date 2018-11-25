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
            }
        }
    },
    data: {},
    attached() {

    },
    ready() {

    },
    methods: {
        link2post() {
            wx.navigateTo({
                url: `/pages/post/post`
            })
        },
        link2UserDetail() {
            wx.navigateTo({
                url: `/pages/userDetails/userDetails`
            })
        }
    }
})