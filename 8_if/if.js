var app = new Vue({
    el: '#app',
    data: {
        awesome: null
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        ok: 1
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        loginType: 'username'
    },
    methods: {
        sw: function() {
            if(this.loginType == 'username') {
                this.loginType = 'email'
            } else {
                this.loginType = 'username'
            }
        }
    }
})