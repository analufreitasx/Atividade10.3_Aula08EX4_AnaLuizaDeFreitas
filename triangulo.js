function FormaçãoDeTriângulo (lado1, lado2, lado3){
    if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado3 + lado1 > lado2){
        if( lado1 === lado3 && lado1 === lado2){
            return document.write("Os segmentos informados podem formar um triangulo equilátero!");
        }
        else if ( lado1 === lado2||lado2 === lado3 ||lado1 === lado3){
            return document.write("Os segmentos informados podem formar um triangulo isósceles!");
        }
        else{
            return document.write("Os segmentos informados podem formar um triangulo escaleno!");
        }
    }
    else{
        return document.write(" Não é possível formar um triângulo com esses lados.")
    }
}
const lado1 = parseInt (prompt (' Olá! Digite os valores de três lados de um triângulo. \n1º Lado: '))
const lado2 = parseInt (prompt('2º Lado: '))
const lado3 = parseInt (prompt('3º Lado: '))
var result = FormaçãoDeTriângulo (lado1, lado2, lado3)