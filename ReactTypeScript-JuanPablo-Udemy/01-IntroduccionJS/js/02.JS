//Short Circuit &&
//Es cuando una expresion se trata como truthy, es un valor que es considerado true cuando se evalua en un contexto de boolean. Todos los valores van a ser truthy al menos que sean definidos como falsy

// const auth = true

if(40){
    console.log('Truthy');
} else{
    console.log('Falsy');
}

const auth = true;

auth && console.log('Usuario Autenticado'); //Se en vez del ternario, la diferencia es que no hay otra accion en caso de que no se cumpla. Ej: Si el usuario esta identificado (true) entonces (&&) usuario autenticado. Y en caso de que no este identificado, no hara nada. (en cambio con el ternario se le indica alguna dos acciones (?:) )