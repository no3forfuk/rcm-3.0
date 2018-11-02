const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        userList: [{
            user: {
                avatar: 'http://img0.imgtn.bdimg.com/it/u=463928895,3324661629&fm=26&gp=0.jpg',
                name: '哈哈哈',
                sign:'哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
            }
        }],
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