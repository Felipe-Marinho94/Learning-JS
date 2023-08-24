let num = [5, 8, 2, 9, 3]
num.push(7)
num.sort()
console.log(`Nosso vetor é o ${num}.`)
console.log(`Meu vetor tem ${num.length} componentes.`)
console.log(`O primeiro valor do vetor é ${num[0]}.`)

for(let c = 0; c < num.length; c++){
    console.log(`A posição ${c} tem o valor ${num[c]}.`)
}

for(c in num){
    console.log(c)
}