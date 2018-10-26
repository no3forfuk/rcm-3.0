const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        change: {
            value: 'up',
            type: String
        },
        text: {
            value: '',
            type: String
        },
        num: {
            value: 0,
            type: Number
        }
    },
    data: {},
    attached() {

    },
    methods: {}
})