class Usuario {
    constructor(nombre,apellido,libros,mascotas){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
}
//Creamos metodo para agregar mascotas
addMascota(mascota){
    this.mascotas.push(mascota)
}
//Metodo para contar mascota y no requiere parametros
countMascotas(){
    return this.mascota.length
}
// Agrega un libro y requiere 2 parametros
addBook (book, author){
    this.libros.push({name:book, author:author})
}
//Metodo para traernos los libros 
getBooks(){
    let arrayNombres = []
    for (let i = 0; i < this.libros.length; i++) {
        arrayNombres.push(this.libros[i].nombre)
    }
    return arrayNombres
        
    }

//Metodo que devuelve un template string con nombre y apellido
getFullName(){
    return `${this.nombre} ${this.apellido}`
}
}

//Insertar datos mediante los metodos.

let nombre = 'Damian', apellido = 'Carrizo', libros = [], mascotas = []
let usuario= new Usuario(nombre,apellido,libros,mascotas);

// la variable usuario HEREDO las propiedades de la clase Usuario y sus argumentos.
// nombre_de_la_variable.nombre_del_argumento

usuario.addMascota('Perro');
usuario.addMascota('Gato');
usuario.addBook('Harry Potter', 'J.K.Rowling');
usuario.addBook('The Shinning', 'Stephen King');

console.log(usuario);
console.log(usuario.getBooks());
console.log(usuario.getFullName());