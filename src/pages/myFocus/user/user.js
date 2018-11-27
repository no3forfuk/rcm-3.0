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
        scrollHeight: 0,
        selfId: 0
    },
    attached() {

    },
    ready() {
        wx.getStorage({
            key: 'u_id',
            success: res => {
                this.setData({
                    selfId: res.data
                })
            }
        });
    },
    methods: {}
})