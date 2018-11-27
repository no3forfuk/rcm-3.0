const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        dynamicList: []
    },
    attached() {

    },
    ready() {
        this.getIndexDynamic()
    },
    methods: {
        onScrollView(e) {
            this.triggerEvent('hideBottom', {info: e.detail, height: this.data.scrollHeight})
        },
        //获取关注动态列表
        getIndexDynamic() {
            app.request.getIndexDynamic({
                params: {
                    page: 1,
                    limit: 100
                },
                success: res => {
                    if(res.status_code == 1 && res.data.list){
                        this.setData({
                            dynamicList: res.data.list.reverse()
                        })
                    }

                }
            })
        },
    }
})