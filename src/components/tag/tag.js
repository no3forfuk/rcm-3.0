const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        value: {
            value: '',
            type: String
        },
        color: {
            value: false,
            type: Boolean
        }
    },
    data: {},
    attached() {

    },
    methods: {
        handleClick() {
            this.triggerEvent('clickTag')
        }
    }
})