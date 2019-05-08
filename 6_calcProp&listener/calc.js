var app = new Vue({
    el: '#app',
    data: {
        message: 'this is origin message!',
        data: 'this is data',
        myName: 'lijun pan',
        firstName: '',
        lastName: ''
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        now: function() {
            return Date.now()
        },
        name: {
            get: function() {
                return this.myName
            },
            set: function(valName) {
                console.info(valName),
                this.myName= valName,
                names = valName.split(' '),
                console.info('names ' + names),
                this.firstName = names[0],
                this.lastName = names[1]
            }
        }
    },
    watch: {
        message: function(val) {
            console.info(val),
            this.data= val + '+'
        }
    },
    
})