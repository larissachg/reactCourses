const personajes = ['Kira', 'Pepo', 'Sky'];
const [, ,p3] = personajes; //Con la coma se indica que ignore al que esta antes y muestre el que sigue.
console.log(p3);

//Ejercicio 2
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Ejercicio 3
const useState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }];
}

const [nombre, setNombre] = useState('Lara');

console.log(nombre);
setNombre();