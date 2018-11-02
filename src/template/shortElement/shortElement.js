const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        list: {
            type: Array,
            value: []
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