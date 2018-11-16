const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {
        firstRankTags: [],
        currentFirstRankIndex: 0,
        sortMap: [{
            text: '最新',
            key: 'lastest'
        }, {
            text: '热门',
            key: 'hostest'
        }],
        sortMapIndex: 0,
        rankList: [{
            ranking_name: '世上歌手千千万万，每年演唱会多到根本没法下手！周末闲下来超想去看一场演唱会发个朋友圈但又没有特别喜欢的明星怎么办？！有选择困难症',
            second_id: 1
        }],
        showMore: false,
        canIscroll: false,
        showPullDownView: false,
        scrollViewTop: 0
    },
    attached() {

    },
    ready() {
        app.tools.setScrollHeight({
            target: '.scroll-view-class',
            isComponent: true,
            component: this,
            success: height => {
                this.setData({
                    scrollHeight: height
                })
            }
        })
        app.request.getFirstRankList({
            success: res => {
                this.setData({
                    firstRankTags: res.data
                })
            }
        });
    },
    methods: {
        //切换一级榜单标签
        toggleFirstRank(e) {
            this.setData({
                canIscroll: true
            })
            const dataset = e.currentTarget.dataset
            this.setData({
                currentFirstRankIndex: dataset.index
            })
            setTimeout(() => {
                this.setData({
                    canIscroll: false
                })
            }, 100)
        },
        //切换排序类型
        toggleSortType(e) {
            if (this.data.sortMapIndex == 0) {
                this.setData({
                    sortMapIndex: 1
                })
            } else if (this.data.sortMapIndex == 1) {
                this.setData({
                    sortMapIndex: 0
                })
            }
        },
        //展示更多领域
        showMoreTag() {
            this.setData({
                showMore: !this.data.showMore
            })
        },
        //下拉刷新
        pullDownRefresh() {
            this.setData({
                showPullDownView: true,
                scrollViewTop: -60
            })
            setTimeout(() => {
                this.setData({
                    showPullDownView: false
                })
            }, 2000)
        }
    }
})