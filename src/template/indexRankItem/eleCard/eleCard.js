const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        eleInfo: {
            type: Object,
            value: {}
        }
    },
    data: {
        color: ''
    },
    attached() {

    },
    ready() {
        const colorIndex = parseInt(Math.random() * 5);
        this.setData({
            color: app.randomColor[colorIndex]
        })
    },
    methods: {
        link2Element(e) {
            wx.navigateTo({
                url: `/pages/element/element?id=${e.currentTarget.dataset.id}`
            })
        }
    }
})