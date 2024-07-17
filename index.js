
function myFunction(){
    let number
    let x = prompt("Insira aqui um número")
    let y = prompt("Insira outro número")

    if (x === y){
        alert("Legal! Você me deu dois números iguais")
    } else{
        alert("Legal! Você me deu dois números diferentes")
    }

let z = Number(x) + Number(y);
alert("A soma é " + z);


if (z % 2 == 0){
    alert("A soma é um número par!")
} else{
    alert("A soma é um número ímpar!")
}

let a = Number(x) - Number(y);
alert("A subtração é " + a);

let b = Number(x) * Number(y);
alert("A multiplicação é " + b);

let c = Number(x) / Number(y);
alert("A divisão é " + c);

let d = Number(x) % Number(y);
alert("O resto da divisão é " + d);
}