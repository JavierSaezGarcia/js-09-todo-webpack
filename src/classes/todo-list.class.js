

export class TodoList {

    constructor () {
        this.todos = [];
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }
    eliminarTodo( id ){
        //TODO eliminar el objeto de esta id
        this.todos = this.todos.filter( todo => todo.id !== Number(id));
    }
    marcarCompletado( id ){
        //TODO marcar si esta completado
        for( const todo of this.todos ){
            // console.log('todo.id', typeof(todo.id));
            // console.log('id', typeof(id));
            if(todo.id === Number(id)){
                console.log('iguales id y todo.id')
                todo.completado = !todo.completado;
            }
        }

    }
    eliminarCompletados() {
        //TODO eliminar los que tengan todo=true
        this.todos = this.todos.filter( todo => !todo.completado );
            }
    
}