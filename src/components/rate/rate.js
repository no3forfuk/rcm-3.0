const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rate: {
            type: Number,
            value: 0,
            observer(n, o, c) {
                if (n) {
                    this.setData({
                        int: parseInt(n / 2),
                        float: parseFloat(n)
                    })
                }
            }
        },
        mode: {
            type: String,
            value: 'tiny',
        },
        hasNum: {
            type: Boolean,
            value: false,
        }
    },
    data: {
        total: [0, 0, 0, 0, 0],
        int: 0,
        float: 0
    },
    attached() {

    },
    methods: {}
})