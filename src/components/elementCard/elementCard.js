const app = getApp()
const colorIndex = parseInt(Math.random() * 5)
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        info: {
            type: Object,
            value: {}
        },
        type: {
            type: String,
            value: ''
        }
    },
    data: {
        color: app.randomColor[colorIndex]
    },
    attached() {

    },
    ready() {

    },
    methods: {
        link2Element(e) {
            wx.navigateTo({
                url: `/pages/element/element?id=${e.currentTarget.dataset.id}`
            })
        }
    }
})