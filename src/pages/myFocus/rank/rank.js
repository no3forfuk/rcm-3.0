const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        rank: {
            type: Array,
            value: []
        }
    },
    data: {
        recommendRank: [],
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