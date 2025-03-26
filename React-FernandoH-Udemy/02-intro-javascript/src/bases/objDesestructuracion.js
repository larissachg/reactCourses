//Desestructuracion

//Asignacion Destructurante
const persona = {
    nombre: "Lara",
    edad: 26,
    clave: "Estudiando",
  };
  
  //const {nombre, edad, clave} = persona;
  
  //console.log(nombre); //Es lo mismo que console.log(persona.nombre);
  //console.log(edad);
  //console.log(clave);
  
  const useContext = ({clave, nombre, edad, rango = 'Alumna'}) => { //Si la propiedad no esta en el objeto, usa la que nosotros le definimos 
  
      //console.log( nombre, edad, rango);
      return{
          nombreClave: clave,
          años: edad,
          latlng: {
              lat: 14.12,
              lng: -12.32
          }
      }
  }
  
  const {nombreClave, años, latlng: {lat, lng}} = useContext(persona);
  console.log(nombreClave, años);
  console.log(lat, lng);