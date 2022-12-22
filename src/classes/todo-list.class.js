

export class TodoList {

    constructor () {
        this.cargarLocalStorage();
        
    }
    
    
    nuevoTodo( todo ){
        
        this.todos.push( todo );
        this.guardarLocalStorage();
        
    }
    eliminarTodo( id ){
        //TODO eliminar el objeto de esta id
        this.todos = this.todos.filter( todo => todo.id !== Number(id));
        this.guardarLocalStorage();
    }
    marcarCompletado( id ){
        //TODO marcar si esta completado
        for( const todo of this.todos ){
            // console.log('todo.id', typeof(todo.id));
            // console.log('id', typeof(id));
            if(todo.id === Number(id)){
                console.log('iguales id y todo.id')
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
                
            }
        }

    }
    eliminarCompletados() {
        //TODO eliminar los que tengan todo=true
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
       
        this.todos = (localStorage.getItem('todo')) 
            ? JSON.parse(localStorage.getItem('todo')) 
            : [];
        
    }
    
}