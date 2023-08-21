/*Trabalhando com condições compostas em JavaScript
Autor: Felipe Pinto Marinho
Data:21/08/2023 
*/

//Declarando variáveis
var idade = 17

//Condicional para um sistema de votação
if(idade < 16){
    console.log('Não vota.')
}
else if(idade < 18 || idade > 65){
    console.log('voto facultativo.')
}
else{
    console.log('Voto obrigatório.')
}

    