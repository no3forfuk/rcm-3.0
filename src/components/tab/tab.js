const wxs = getApp().globalwxs
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabData: {
            type: Object,
            value: null,
            observer(n, o, c) {
                if (n) {
                    this.setData({
                        style: n
                    })
                    this.unscale()
                    this.setCurrentStyle(n.current)
                } else {
                    return
                }
            }
        }
    },
    data: {
        style: {},
        markStyle: {
            width: 0,
            left: 0
        },
        tabHeaderArray: [],
        scale: {},
        unscale: {}
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
                    this.setCurrentStyle(this.data.style.current)
                }
            })
        })();
    },
    methods: {
        ontapitem(e) {
            this.unscale()
            const dataset = e.currentTarget.dataset
            const style = this.data.style
            if (dataset.index === style.current) {
                return
            } else {
                this.setCurrentStyle(dataset.index)
                style.current = dataset.index
                this.setData({
                    style
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