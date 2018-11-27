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
                const colorIndex = parseInt(Math.random() * 5)
                this.setData({
                    color: app.randomColor[colorIndex]
                })
            }
        },
        type: {
            type: String,
            value: ''
        },
        rate: {
            type: Number,
            value: 0
        },
        bgc: {
            type: String,
            value: '#f8f8f8'
        }
    },
    data: {
        color: '#499DFF'
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