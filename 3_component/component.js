Vue.component(
    'todo-item-origin', {
        template: '<li>this is a TODO</li>'
    }
)

Vue.component(
    'todo-item', {
        // prop : customize properties
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'

    }
)

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'vegetables' },
            { id: 1, text: 'fruit' },
            { id: 2, text: 'else' }
        ]
    }
})