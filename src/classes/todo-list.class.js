


export class TodoList {
        constructor(){
                this.cargarLS();
        }


        nuevoTodo(todo){
                this.todos.push(todo);
                this.guardarLS();
        }

        eliminarTodo (id){
                //se regresa un nuevo arreglo excluyendo el todo que coincida con el id
                this.todos = this.todos.filter(todo => todo.id != id)
                this.guardarLS();

        }


        
        marcarCompletado( id ){

                for (const todo of this.todos) {
                        if (todo.id==id) {
                                todo.completado = !todo.completado;
                                this.guardarLS();
                                break;

                                
                        }
                        
                }

        }
        
        eliminatCompletados(){
                this.todos = this.todos.filter(todo => !todo.completado)
                this.guardarLS();

        }

        guardarLS(){
                localStorage.setItem('todo', JSON.stringify(this.todos));
        }

        cargarLS(){

                this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo')) 
                        : this.todos = [ ];

              

        }

}