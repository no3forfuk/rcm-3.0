const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        finderList: [],
        scrollHeight: 0,
    },
    attached() {

    },
    ready() {
        app.tools.setScrollHeight({
            target: '.discover-page',
            component: this,
            isComponent: true,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        });
        this.getIndexFind()
    },
    methods: {
        onScrollView(e) {
            this.triggerEvent('hideBottom', {info: e.detail, height: this.data.scrollHeight})
        },
        pullDownRefresh() {
            console.log('a');
        },
        getIndexFind() {
            app.request.getIndexFind({
                params: {
                    limit: 100
                },
                success: res => {
                    if (res.status_code == 1) {
                        this.setData({
                            finderList: res.data.list
                        })
                    }
                }
            })
        }
    }
})