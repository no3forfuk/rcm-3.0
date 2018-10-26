const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        changeItem: {
            value: {},
            type: Object,
            observer(n, o, c) {

            }
        }
    },
    data: {
        info: {
            title: '哪些歌手的演唱会最值得一看',
            id: 283
        }
    },
    attached() {

    },
    methods: {}
})