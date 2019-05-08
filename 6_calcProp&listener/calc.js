var app = new Vue({
    el: '#app',
    data: {
        message: 'this is origin message!'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    },
    
})