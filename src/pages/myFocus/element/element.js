const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        element: [{}],
        recommendElement: [],
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
        });
        app.request.getRankDetails({
            params: {
                level: 2,
                id: 289,
                page: 1,
                solt_name: 'exponent'
            },
            success: res => {
                this.setData({
                    rankData: res.data,
                    element: res.data.data.data,
                })
            }
        })
    },
    methods: {}
})