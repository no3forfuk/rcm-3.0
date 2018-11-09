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
        height: {
            type: Number,
            value: 0
        },
        info: {
            type: Object,
            value: {}
        }
    },
    data: {
        userInfo: {
            avatar: 'http://img0.imgtn.bdimg.com/it/u=3028361118,4241907784&fm=26&gp=0.jpg',
            name: '神烦菩萨'
        }
    },
    attached() {

    },
    methods: {
        closeModal() {
            this.triggerEvent('closeModal')
        }
    }
})