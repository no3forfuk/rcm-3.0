const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: Number,
            value: 0
        }
    },
    data: {
        postList: []
    },
    attached() {

    },
    ready() {
        app.request.getHotPost({
            success: res => {
                console.log(res);
                this.setData({
                    postList: res.data.data
                })
            }
        })
    },
    methods: {}
})