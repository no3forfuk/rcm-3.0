const app = getApp()
Component({

    properties: {
        image: {
            type: String,
            value: ''
        },
        video: {
            type: String,
            value: ''
        },
        text: {
            type: String,
            value: '',
            observer(n, o, c) {
                if (n.length > 0) {
                    this.setData({
                        text: n
                    })
                }
            }
        }
    },
    data: {
        text: ''
    },
    attached() {

    },
    ready() {

    },
    methods: {}
})