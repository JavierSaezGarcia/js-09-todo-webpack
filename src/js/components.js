import { Todo } from "../classes";
import { todoList } from "../index";


// Referencias en el Html
const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const ulFilters   = document.querySelector('.filters');
const anchorFilters   = document.querySelectorAll('.filtro');





export const crearTodoHtml = ( todo ) => {  

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''} />
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>
    `;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}


// EVENTS (LISTENERS)
txtInput.addEventListener('keyup', ( event ) => {
    if( event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo(nuevoTodo);
        // console.log(todoList);
        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }    
});

divTodoList.addEventListener('click', (event)=> {

    // console.log('click');
    const nombreElemento = event.target.localName;    
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    
    if( nombreElemento.includes('input')){

        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');
        const check = todoElemento.firstElementChild.firstElementChild;
        (check.hasAttribute('checked')) ? check.removeAttribute('checked') : check.setAttribute('checked', '');
        
    } else if( nombreElemento.includes('button')){
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento);
    }
    

});

btnBorrar.addEventListener('click', (event) => {
    
    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>= 0; i--){
        
        const elemento = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
            
        }
        

    }
});

ulFilters.addEventListener('click', (event)=> {

    console.log(event.target.text);
    const filtro = event.target.text;
    if( !filtro ){ return };

    anchorFilters.forEach(elem => elem.classList.remove('selected'));
    
    //console.log(event.target);
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ){

        elemento.classList.remove('hidden');
        const completado =  elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ){
                   elemento.classList.add('hidden');                  
                   
                   
                

                }
            break;

            case 'Completados':
                if( !completado ){
                    elemento.classList.add('hidden');
                }
            break;


        }
    }


});


 





