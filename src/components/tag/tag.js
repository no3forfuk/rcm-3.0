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
        },
        bgc: {
            value: '#f8f8f8',
            type: String
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