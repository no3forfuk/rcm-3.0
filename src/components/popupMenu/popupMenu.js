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
        },
        show: {
            type: Boolean,
            value: false
        }
    },
    data: {},
    attached() {

    },
    methods: {
        cancel() {
            this.triggerEvent('closeMenu')
        },
        tapItem(e) {
            this.triggerEvent('handleEvent', {item: e.currentTarget.dataset.item})
        }
    }
})