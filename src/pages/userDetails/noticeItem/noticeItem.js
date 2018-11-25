const app = getApp()
Component({
    properties: {
        info: {
            type: Object,
            value: {},
            observer(n, o, c) {
                if (n.dynamic_type == 1) {
                    this.setData({
                        secondRankDesc:JSON.parse(n.second.ranking_details)
                    })
                }
            }
        }
    },
    data: {
        fatherRank: {
            title: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友'
        },
        secondRankDesc: []
    },
    attached() {

    },
    ready() {

    },
    methods: {}
})