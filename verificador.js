console.log('Verificando sua Idade')
let ano_nascimento = 1992
let agora = new Date()
let data = agora.getFullYear()
let idade = data - ano_nascimento

if (idade > 18 && idade < 65){
    console.log('Você é adulto')
} else if(idade >= 65) {
    console.log('Você está na melhor idade')
} else{
    console.log('Você é menor de idade')
}
