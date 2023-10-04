velocidade = 0

let nave = prompt("digite o nome da nave: ") 
let opcao = true

while( opcao){
    let menu = prompt("1-acelarar a nave em 5 /n 2- desacelerar em 5km /n 3- imprimir dados de bordo /n 4- sair")
    if( menu == 1){
/*acelerar*/ acelerar()
    }else if(menu == 2){
        desacelerar()
    }else if(menu == 3){
        /*dado de bordo*/dados()
    }else if (menu == 4){
        /*sair do programa*/
       alert("obrigado(a) por viajar conosco!")
       opcao =false

    }else{
        alert("opção Inválida")
    }
}
function acelerar (){
    velocidade += 5  /* velocidade +5 */
    return alert(velocidade)
}
function desacelerar (){
    if(velocidade <=0){
        alert("A nave ja esta parada")
    }else{
        velocidade -= 5
    }
    velocidade -= 5  /* velocidade +5 */
    return alert(velocidade)
}
function dados(){
    return alert( "o nome da nave é "+nave+" e a velocidade atual é "+ velocidade)
}





/*
let contador = 1
while(contador <=100){
    console.log(contador)
    contador++
}
     */
