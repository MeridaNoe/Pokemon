// let var const
// const genera una constante
// var y let genera una variable
// var es para variables globales
// let es para variables locales
// $scope = fragmento de codigo

// function suma() {
//   //$scope primero
//   const numero = 2;
//   let numero2 = 4;
//   var numero3 = 4;
//   function suma2() {
//     //$scope segundo
//     const numero = 3;
//     let numero2 = 4;
//     var numero3 = 4;
//   }
// }

// Arrow function

function suma(numero1, numero2) {
  return numero1 + numero2;
}

const suma = function (numero1, numero2) {
  return numero1 + numero2;
};

const suma = (numero1, numero2) => numero1 + numero2;


// template string

const name = "noe"
const surname = "merida"
const lastname = "puente"
const fullname = name + ' ' + surname + ' ' + lastname;
const fulname2 = `${name} ${surname} ${lastname}`

const person = {
    name: '',
    surname : '',
    lastname: null
}
(()=>{
    const name = person.nombre.toString();
    const name2 = `${person.nombre} ${person.surname} ${person.lastname ? person.lastname : ''}`;
})()


//array
const roles = [1,2,3,{name:'', surname: ''}]
// Arraylist
const roles2 = [{
    key: 'ADMIN',
    name: 'Super admin',
},
{
    key: 'USER',
    name: 'Usuario'
}]
// List
const roles3 = {}
// arraylist arary list 

// push, splice, indexOf, find, filter, map, foreach

roles.forEach((element, index) =>{
    console.log(element.name);
})

for (let i = 0; i < roles.length; i++) {
    console.log(roles[i].name);
}

while () {
    
}

do {
    
} while ();

// desestructuracion de objetos

const person2 = {
    name: 'noe',
    age: 24,
    address: {
        street: 'barona',
        number: 54
    }
}
console.log(person2.name);
console.log(person2.address.street);

(() =>{
    const {name, address:{street}} = person2
})
