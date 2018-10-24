const app = getApp()
const ajax = app.request

Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {},
    attached() {
        ajax.getHotRank({
            params: {
                page: 1
            },
            success: res => {
                console.log(res);
            }
        })
    },
    methods: {}
})