const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        menu: {
            type: Array,
            value: []
        }
    },
    data: {},
    attached() {

    },
    methods: {
        closeModal() {
            this.triggerEvent('closeModal')
        },
        menuItemHandle(e) {
            this.triggerEvent('activeItem', {item: e.detail.item})
        }
    }
})