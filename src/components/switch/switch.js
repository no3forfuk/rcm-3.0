const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        items: {
            value: [],
            type: Array
        },
        current: {
            value: 0,
            type: Number,
            observer(n, o, c) {
                let animation = wx.createAnimation({
                    duration: 300,
                    timingFunction: 'ease',
                })
                if (n == 1) {
                    animation.translateX('100%').step()
                } else if (n == 0) {
                    animation.translateX('0').step()
                }
                this.setData({
                    animationData: animation.export()
                })
            }
        },
        bgc: {
            value: '#F3F3F3',
            type: String
        },
        outerColor: {
            value: '#D1D1D1',
            type: String
        },
        frontColor: {
            value: '#161616',
            type: String
        }
    },
    data: {},
    attached() {

    },
    methods: {
        toggleSwitch() {
            this.triggerEvent('switchChange')
        }
    }
})