




//setTimeout(callback,delay);

console.log("Iniciando programa");

setTimeout(()=>{
    console.log("Hola");
},1000);

console.log("este mensaje se imprimira antes que el Hola");

//setInterval (callback, interval)

console.log("Iniciando programa");

let contador= 0;

const intervalo = setInterval(()=>{
    console.log(contador);
    contador++;
})