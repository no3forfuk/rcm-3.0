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
        }
    },
    data: {
        color: app.randomColor[colorIndex]
    },
    attached() {

    },
    ready() {

    },
    methods: {}
})