const wxs = getApp().globalwxs
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tabbarData: {
            type: Object,
            value: null,
            observer(n, o, c) {
                if (n) {
                    this.setData({
                        style: n
                    })
                    //动画
                    if (n.show) {
                        this.slide(0)
                    } else {
                        this.slide('100%')
                    }
                } else {
                    return
                }
            }
        }
    },
    data: {
        animationData: {},
        style:{}
    },
    attached() {

    },
    methods: {
        slide(val) {
            const animation = wx.createAnimation({
                duration: 300,
                timingFunction: 'ease'
            })
            animation.translateY(val).step()
            this.setData({
                animationData: animation.export()
            })
        }
    }
})