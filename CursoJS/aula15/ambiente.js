var num = [5, 8, 2, 9, 3]

num[3] = 6
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(`O terceiro elemento da sequência é ${num[2]}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`A sequência em ordem crescente é ${num.sort()}`)
var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos + 1}`)
