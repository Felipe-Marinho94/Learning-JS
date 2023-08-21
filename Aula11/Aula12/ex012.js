/*Trabalhando com condicionais
Autor:Felipe Pinto Marinho
Data:21/08/2023 
*/

//Bom dia, Boa tarde e Boa Noite
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if(hora < 12){
    console.log('Bom dia.')
}
else if(hora <= 18){
    console.log('Boa tarde.')
}
else{
    console.log('Boa noite.')
}