const app = getApp()
Component({
    options: {
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        fixWidth: {
            type: Number,
            value: 0
        },
        alignItem: {
            type: String,
            value: 'center'
        },
        spaceWidth:{
            type: Number,
            value: 0
        }
    },
    data: {},
    attached() {

    },
    methods: {}
})