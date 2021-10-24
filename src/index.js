
import { Todo,TodoList } from "./classes" //acá busca el index.js de class e importa todo
import { crearTodoHtml } from "./js/componentes";
import './styles.css';


export const todoList = new TodoList();



//todoList.todos.forEach(crearTodoHtml);    
todoList.todos.forEach(todo => {
        crearTodoHtml(todo);        
});