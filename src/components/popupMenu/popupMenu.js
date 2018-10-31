const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        menu: {
            type: Array,
            value: []
        },
        headerTextL: {
            type: String,
            value: ''
        }
    },
    data: {},
    attached() {

    },
    methods: {
        cancel() {
            this.triggerEvent('closeMenu')
        },
    }
})