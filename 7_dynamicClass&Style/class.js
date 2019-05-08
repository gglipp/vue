var app1 = new Vue({
    el: '#app-1',
    data: {
        isActive: true
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        classObject: {
            active: true,
            'text-danger': null 
        }
    }
})

var app3 = new Vue({
    el: '#app-3',
    computed: {
        computedObject: function() {
            return {
                active: true,
                'haha': true
            }
        }
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        isActive: null,
        errorClass: 'hahaha'
    }
})