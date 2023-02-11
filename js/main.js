//  705.484.450-52          070.987.720-03
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2   
70  0   40  28  48  20  16  15  0       =   237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número que sair dessa conta for > 9, será 0.



7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10     =   284

11 - (284 % 11) = 2 (Segundo dígito)


*/



function validaCPF(cpf) {


    //Limpa o CPF, retirando os pontos e traços.
    let cpfLimpo = cpf.replace(/\D+/g, '');
    

    //Adiciona o CPF em um novo array e retira os dígitos.
    cpfArray = Array.from(cpfLimpo);
    cpfArray.splice(9, 2);

    //Verificando sequências
    if (verificaSequencia(cpfArray) === cpfArray[0]*9) {
        console.log('CPF INVÁLIDO, DIGITE UM NOVO CPF.')
        return;
    }

    
    //Múltiplica os números do CPF e adiciona os resultados em um novo array.
    multiplicaNumerosPrimeiroDigito(cpfArray);
    

    //Soma todos os números
    const total1 = cpfArraySomado.reduce((ac, val) => ac += val, 0);

    //Realiza a conta do primeiro digito.
    cpfArray.push(contaDigito(total1).toString());


    //Múltiplica os números do CPF (1 dígito implementado) e adiciona os resultados em um novo array.
    multiplicaNumerosSegundoDigito(cpfArray);

    
    //Soma todos os números (2 vez)
    const total2 = cpfArraySomadoDois.reduce((ac, val) => ac += val, 0);

    //Realiza a conta do segundo digito
    cpfArray.push(contaDigito(total2).toString());
    
    
    verificaValidade(cpfLimpo, cpfArray);

}


/* Funções */


function verificaSequencia(array) {
    const sequencia = array.reduce((ac, val) => ac += Number(val), 0);
    return sequencia;
}



function multiplicaNumerosPrimeiroDigito(array) {
    cpfArraySomado = [];
    let decremento = 10;

    for (let i = 0; i < array.length; i++) {
        cpfArraySomado.push(Number(array[i] * decremento));
        decremento = decremento - 1;
    }

    return cpfArraySomado;
}


function contaDigito(somatoria) {
    let digito = 11 - (somatoria % 11);
    
    if (digito > 9) digito = 0;
    return digito;
}

function multiplicaNumerosSegundoDigito(array) {
    cpfArraySomadoDois = [];
    let decremento = 11;

    for (let i = 0; i < array.length; i++) {
        cpfArraySomadoDois.push(Number(array[i] * decremento));
        decremento = decremento - 1;
    }
}

function verificaValidade(string, array) {
    if (array[10] === string[10] && array[9] === string[9]) {
        console.log('CPF VÁLIDO');
    } else {
        console.log('CPF INVÁLIDO');
    }
}


/* Chamando o código */

validaCPF('705.484.450-52');
