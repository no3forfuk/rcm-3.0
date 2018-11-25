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
        postList: {
            type: Array,
            value: []
        }
    },
    data: {},
    attached() {

    },
    ready() {

    },
    methods: {
        refresh(){
            this.triggerEvent('refreshPost')
        }
    }
})