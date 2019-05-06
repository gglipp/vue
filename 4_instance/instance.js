var data = { a: 1 }
// 冻结数据对象，使之只读   Object.freeze(data)
// Vue 实例; 应用的起点，类比class
var vm = new Vue({
    // 选项
    
    el: '#app',
    //选项-数据; Vue隐式为数据对象data的属性转换getter/setter，使得data属性响应数据变化
    data: data,
    created: function () {
        console.info('a is: ' + this.a)
    }
})


vm.$data === data
vm.$el === document.getElementById('app')

vm.$watch('a', function(newValue, oldValue){
    // vm.a改变后回调
    console.info('a has changed!')
})