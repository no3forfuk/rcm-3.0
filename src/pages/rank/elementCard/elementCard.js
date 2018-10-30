const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        info: {
            type: Object,
            value: {}
        }
    },
    data: {
        rate: [0, 0, 0, 0, 0],
        rateIndex: 0,
        floatIndex: 0,
        intIndex: 0,
        color: ''
    },
    attached() {

    },
    ready() {
        const round = Math.floor(Math.random() * 10);
        const num = parseInt(Math.random() * 10);
        this.setData({
            rateIndex: round + num / 10,
            floatIndex: num,
            intIndex: parseInt(round / 2)
        })
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