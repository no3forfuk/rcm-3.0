const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        element: [{
            id: 4655,
            name: '小冰冰传奇小冰冰传奇小冰冰传奇小冰冰传奇小冰冰传奇小冰冰传奇',
            img: 'http://p8rk87lub.bkt.clouddn.com/FsDV1Rr2TEjElF5nDn_wIZ07ZSJX',
            attr: '原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。',
            rate: 8.4,
            score: 4655,
            user: {
                avatar: 'http://p8rk87lub.bkt.clouddn.com/FsDV1Rr2TEjElF5nDn_wIZ07ZSJX',
                name: '冰冰传奇'
            },
            father: {
                title: '原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清',
                id: 283
            }
        }],
        recommendElement: [],
        scrollHeight: 0,
        recommendType: {
            text: '收藏',
            key: 'collect'
        }
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
    },
    methods: {}
})