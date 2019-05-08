
var app2 = new Vue({
    el: '#app-2',
    data: {
        question: '',
        answer: 'invalid question.'
    },

    watch: {
        question: function (oldVal, newVal) {
            this.answer = 'waiting for typing...',
            this.debouncedGetAnswer()
        }
    },
    created: function() {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },

    methods: {
        getAnswer: function(){
            this.answer = 'thinking...',
            // var vm = this,
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                
                this.answer = _.capitalize(response.data.answer)
                
             })
            .catch(function (error) {
                this.answer = 'Error! Could not reach the API. ' + error
             })
        }
    },


})