const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        user: {
            type: Array,
            value: []
        }
    },
    data: {
        recommendUser: [],
        scrollHeight: 0
    },
    attached() {

    },
    ready() {
        app.tools.setScrollHeight({
            target: '.focus-rank-scroll',
            isComponent: true,
            component: this,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
    },
    methods: {}
})