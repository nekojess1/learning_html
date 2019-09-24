var nome = prompt("Qual o seu nome?")
var altura = prompt("Digite a sua altura(em centímetros:")
var peso = prompt("Digite o seu peso:")

peso= parseFloat(peso)
altura=parseFloat(altura/100)
var imc= peso/(altura)**2


if (imc < 16){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso muito grave")
}

if (imc >= 16 && imc <= 16.99){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso grave")
}

if (imc >= 17 && imc <=18.49 ){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: baixo peso")
}

if (imc >= 18.50 && imc <= 24,9){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: peso normal")
}

/*if (imc < 16){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso muito grade")
}

if (imc < 16){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso muito grade")
}

if (imc < 16){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso muito grade")
}

if (imc < 16){
    document.write(nome+" possui indice de massa corporal igual a "+imc+", sendo classificado como: Baixo peso muito grade")
}
*/