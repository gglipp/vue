var app = new Vue({
    el: '#app',
    data: {
        todos: [
            { text: 'go for reading' },
            {
                text: 'go for lunch'
            },
            {
                text: 'do somothing else'
            }
        ]
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        object: {
            name: 'panlijun',
            sex: 'M',
            age: '29'
        }
    }
})