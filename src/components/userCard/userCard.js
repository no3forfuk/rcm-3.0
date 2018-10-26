const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        avatarWidth: {
            type: Number,
            value: 0
        },
        avatarHeight: {
            type: Number,
            value: 0
        },
        userInfo: {
            type: Object,
            value: {}
        },
        alignItems: {
            type: String,
            value: 'center'
        }
    },
    data: {},
    attached() {

    },
    methods: {}
})