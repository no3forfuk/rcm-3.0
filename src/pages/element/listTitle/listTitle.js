const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        label: {
            value: '',
            type: String
        },
        btnText: {
            value: '',
            type: String
        },
        handle: {
            value: '',
            type: String
        }
    },
    data: {},
    attached() {

    },
    methods: {
        emitClickRight() {
            this.triggerEvent(this.properties.handle)
        }
    }
})