const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        height: {
            type: Number,
            value: 0
        },
        show: {
            type: Boolean,
            value: false,
        }
    },
    data: {
        tabData: [{
            text: '热门邀请'
        }, {
            text: '关注的'
        }, {
            text: '粉丝'
        },],
        current: 0,
        markLeft: 0,
        scrollHeight: 0,
        peopleData: []

    },
    attached() {
        let arr = []
        for (let i = 0; i < 20; i++) {
            var obj = {
                user: {
                    avatar: 'http://img4.imgtn.bdimg.com/it/u=1091628847,41930541&fm=26&gp=0.jpg',
                    name: '来呀，快活呀',
                    rank: 1215,
                    zan: 456,
                    isInvited: false
                }
            }
            arr.push(obj)
        }
        this.setData({
            peopleData: [arr, arr, arr]
        })
    },
    ready() {
        this.setMarkLeft(0);

    },
    methods: {
        cancelInvite() {
            this.triggerEvent('cancel')
        },
        setMarkLeft(i) {
            const query = wx.createSelectorQuery().in(this)
            query.selectAll('.invite-tab-item').boundingClientRect()
            query.exec(res => {
                const result = res[0][i]
                this.setData({
                    markLeft: (result.width - 32) / 2 + result.left
                })
            })
        },
        changeTabItem(e) {
            this.setData({
                current: e.currentTarget.dataset.index
            })
            this.setMarkLeft(e.currentTarget.dataset.index)
        },
        changeSwiper(e) {
            this.setData({
                current: e.detail.current
            })
            this.setMarkLeft(e.detail.current)
        },
        invite(e) {
            wx.showModal({
                titie: '',
                content: '邀请成功',
                showCancel:false
            })
            const arr = this.data.peopleData
            arr[this.data.current][e.currentTarget.dataset.index].user.isInvited = true
            this.setData({
                peopleData: arr
            })
        }
    }
})