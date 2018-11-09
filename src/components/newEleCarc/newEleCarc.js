const app = getApp()
const colorIndex = parseInt(Math.random() * 5)
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        info: {
            value: {},
            type: Object
        }
    },
    data: {
        color: app.randomColor[colorIndex]
    },
    attached() {

    },
    methods: {
        link2Element() {
            wx.navigateTo({
                url: `/pages/element/element`
            })
        }
    }
})