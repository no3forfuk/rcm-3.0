const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {},
    data: {},
    attached() {

    },
    methods: {
        cancel() {
            this.triggerEvent('cancel')
        },
        comfirm() {
            this.triggerEvent('comfirm')
        }
    }
})