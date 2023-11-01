var vm = new Vue({
    el:'#root',
    data:{
        todo:'',
        todo_list:[],
    },
    methods:{
        AddTodo:function(){

            if (this.todo){

                var todo = document.createElement('div');
                todo.setAttribute('class','todo')

                var todo_text = document.createElement('h1');
                todo_text.textContent = this.todo;

                
                todo.appendChild(todo_text)
                
                this.todo_list.push(todo)
                this.todo_list.reverse()

                var container = document.querySelector('.down');
                container.innerHTML = '';

                this.todo_list.forEach(item=>{
                    container.appendChild(item)
                })
                
                this.todo = '';
            }else{
                alert('please enter todo text')
            }
        }
    }
})