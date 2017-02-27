var App = new Vue({
  el: '#app',
  data: {
    todos: [],
    update: false,
    id: 0,
    todo: '',
    status: false
  },
  methods: {
    createTodo: function(){
      data = {
        id: this.id + 1, 
        todo: this.todo,
        status: this.status
      }
      this.todos.push(data);
      this.id = data.id
      this.todo = ''
    },
    editTodo: function(todo, selected_todo){
      this.selectedTodo = selected_todo
      this.todo = todo
      this.update = true
    },
    cancelEdit: function(){
      this.update = false
      this.todo = ''
    },
    changeStatus: function(todo, status){
      var index = this.todos.indexOf(todo)
      if (status) {
        status = false
      }
      else {
        status = true
      }
      this.todos[index].status = status
    },
    getStatus: function(status){
      return status == true
    },
    updateTodo: function(){
      var index = this.todos.indexOf(this.selectedTodo)
      this.todos[index].todo = this.todo
      this.update = false
      this.todo = ''
    },
    deleteTodo: function(todo){
      var index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
  }
});