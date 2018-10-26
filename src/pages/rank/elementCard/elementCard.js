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
    },
    methods: {}
})