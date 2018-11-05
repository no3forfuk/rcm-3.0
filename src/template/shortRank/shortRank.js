const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: []
        },
        mode: {
            type: Object,
            value: {
                text: '关注',
                key: 'focus'
            }
        }
    },
    data: {
        rotate: 0
    },
    attached() {

    },
    methods: {
        changeRank() {
            this.setData({
                rotate: this.data.rotate + 540
            })
        }
    }
})