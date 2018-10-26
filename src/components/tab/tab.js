const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabItem: {
            value: [],
            type: Array
        },
        current: {
            value: 0,
            type: Number,
            observer(n, o, c) {
                this.setData({
                    current: n
                })
                this.unscale()
                this.setCurrentStyle(n)
            }
        },
        fontColor: {
            value: '#000',
            type: String,
        },
        bgColor: {
            value: '#fff',
            type: String,
        },
        fontSize: {
            value: '16px',
            type: String,
        },
        activeColor: {
            value: '#499DFF',
            type: String,
        }
    },
    data: {
        current: 0,
        tabHeaderArray: [],
        markStyle: {
            width: 0,
            left: 0
        }
    },
    attached() {

    },
    ready() {
        (() => {
            //设置标记span位置及样式
            const query = wx.createSelectorQuery().in(this)
            query.selectAll('.tab-component-item-text').boundingClientRect()
            query.exec(res => {
                if (!res[0]) {
                    return
                } else {
                    this.setData({
                        tabHeaderArray: res[0]
                    })
                    this.setCurrentStyle(this.data.current)
                }
            })
        })();
    },
    methods: {
        ontapitem(e) {
            this.unscale()
            const dataset = e.currentTarget.dataset
            const index = this.data.current
            if (dataset.index === index) {
                return
            } else {
                this.setCurrentStyle(dataset.index)
                this.setData({
                    current: dataset.index
                })
                this.triggerEvent('change', dataset)
            }
        },
        scale() {
            var animation = wx.createAnimation({
                duration: 300,
                timingFunction: 'ease',
            })
            animation.scale(1.2).step()
            this.setData({
                scale: animation.export()
            })
        },
        unscale() {
            var animation = wx.createAnimation({
                duration: 300,
                timingFunction: 'ease',
            })
            animation.scale(1).step()
            this.setData({
                unscale: animation.export()
            })
        },
        setCurrentStyle(index) {
            if (this.data.tabHeaderArray.length <= 0) {
                return
            } else {
                const [crtIndex, allItem] = [index, this.data.tabHeaderArray]
                this.setData({
                    markStyle: allItem[crtIndex]
                })
                this.scale()
            }
        }
    }
})