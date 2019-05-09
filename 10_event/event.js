var app = new Vue({
    el: '#app',
    data: {
        counter: 1
    },
    methods: {
        add: function(event) {
            this.counter += 1
            console.info(event)
            if (event) {
                console.info(event.target.tagName)
            }
        }
    },
})