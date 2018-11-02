const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        rank: [{
            title: '我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单',
            desc: '我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单',
            id:289
        }, {
            title: '我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单',
            desc: '我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单我是我是榜单我是榜单我是榜单我是榜单我是榜单我是榜单榜单',
            img: 'http://img2.imgtn.bdimg.com/it/u=1799866839,3408188415&fm=26&gp=0.jpg',
            video:'http://p9w69x04q.bkt.clouddn.com/post/1/31Q888piC7wM.mp4',
            id:289
        }],
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