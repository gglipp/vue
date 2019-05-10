var app = new Vue({
    el: '#app',
    data: {
        counter: 1
    },
    methods: {
        add: function(event) {
            this.counter += 1
            if (event) {
                console.info(event.target.tagName)
            }
        },
        say: function(message) {
            console.info(message)
        },
        warn: function(message, event) {
            if(event) event.preventDefault();
            console.info(message)
        },
        
        once: function() {
            console.info('click once')
        }

    },
})