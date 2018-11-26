const app = getApp()
const round = Math.floor(Math.random() * 10);
const bai1 = parseInt(Math.random() * 1000);
const bai2 = parseInt(Math.random() * 1000);
const num = parseInt(Math.random() * 10);
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        finderList: [
            {
                type: 1,
                changeData: [{
                    placing: 5,
                    change: '+2',
                    name: '手机上最耐玩最好看的集成类卡牌游戏手机上最耐玩最好看的集成类卡牌游戏手机上最耐玩最好看的集成类卡牌游戏',
                    flag: 1
                }, {
                    placing: 7,
                    change: '-2',
                    name: '蔡依林',
                    flag: 0
                }],
                targetRank: {
                    id: 283,
                    name: '手机上最耐玩最好看的集成类卡牌游戏',
                },
            },
            {
                type: 2,
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4655,
                    name: '小冰冰传奇',
                    img: 'http://p8rk87lub.bkt.clouddn.com/FsDV1Rr2TEjElF5nDn_wIZ07ZSJX',
                    attr: '原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。',
                    rate: round + num / 10,
                    score: bai1
                },
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                post: {
                    rate: round + num / 10,
                    content: '原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。原版名为《刀塔传奇》，是上海莉莉丝科技股份有限公司研发、北京中清龙图网络技术有限公司运营的一款卡牌类手机游戏。',
                    img: 'http://p8rk87lub.bkt.clouddn.com/FsDV1Rr2TEjElF5nDn_wIZ07ZSJX'
                }
            },
            {
                type: 2,
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4324,
                    name: '阴阳师',
                    img: '',
                    score: bai2,
                    rate: round + num / 10,
                    attr: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                },
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                post: {
                    rate: round + num / 10,
                    content: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                }
            },
            {
                type: 3,
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4324,
                    name: '阴阳师',
                    img: 'http://p8rk87lub.bkt.clouddn.com/FqgGfLuRYbJTGiOC6yOhX5uuZBrg',
                    score: bai2,
                    rate: round + num / 10,
                    attr: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                },
            },
            {
                type: 3,
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4324,
                    name: '阴阳师',
                    img: '',
                    score: bai2,
                    rate: round + num / 10,
                    attr: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                },
            },
            {
                type: 2,
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4324,
                    name: '阴阳师',
                    img: '',
                    score: bai2,
                    rate: round + num / 10,
                    attr: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                },
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                post: {
                    rate: '',
                    content: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                }
            },
            {
                type: 2,
                targetRank: {
                    id: 283,
                    title: '手机上最耐玩最好看的集成类卡牌游戏',
                },
                targetEle: {
                    id: 4324,
                    name: '阴阳师',
                    img: '',
                    score: bai2,
                    rate: round + num / 10,
                    attr: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。'
                },
                user: {
                    img: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    avatar: 'http://p8rk87lub.bkt.clouddn.com/user/you.jpg',
                    name: '抠脚大汉'
                },
                post: {
                    rate: '',
                    content: '阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。阴阳师真的是我玩过手游时间最长的一款游戏，也是我每天第一个想到的游戏，可我却不得不卸载他了，他真的很好玩可他也不成熟，像一口陈酿了多年的酒，去掉封泥香动四座、人物的设计上也好，音乐美工上也罢，我只有发自内心的四个字无可挑剔。',
                    img: 'http://p8rk87lub.bkt.clouddn.com/FsDV1Rr2TEjElF5nDn_wIZ07ZSJX'
                }
            },
            {
                type: 7
            },
            {
                type: 1,
                changeData: [{
                    placing: 5,
                    change: '+2',
                    name: '周杰伦',
                    flag: 1
                }, {
                    placing: 7,
                    change: '-2',
                    name: '蔡依林',
                    flag: 0
                }]
            },
            {
                type: 1,
                changeData: [{
                    placing: 5,
                    change: '+2',
                    name: '周杰伦',
                    flag: 1
                }, {
                    placing: 7,
                    change: '-2',
                    name: '蔡依林',
                    flag: 0
                }]
            },
        ],
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
                    console.log(res);
                }
            })
        }
    }
})