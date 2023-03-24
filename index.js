



function main() {
    var people = ["Natan", "Bianca", "Rafael", "Mariana"];
    invert(people);

    var grades = [8, 7, 10];
    mean(grades);


    var media = 8.33;
    isApproved(media);

    var data = "24/03/2023";
    wide(data);

// var name = prompt("Digite um nome: ");
//     if(name != null){
//         people.push(" "+ name);
//     }
//     document.getElementById("array").innerHTML = people;
//     console.log(people);
// }


}




    
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns  Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
   let invertido = [...people].reverse();
    console.log(people);
    console.log(invertido);
    return invertido;

}




/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */

function mean(grades){
    
    var soma = grades.reduce(function(acumulador,value){
    return acumulador + value;
},0);

    var media = soma/3;
    // media = media.toFixed(2);
    console.log(media);
    return media;
    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    
}


/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */

function isApproved(mean){
        
    var situacao = "";
    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    if(mean >= 7){
        situacao = "aprovado";
    }else{
        situacao = "reprovado";
    }
    
    console.log(situacao);
    return situacao;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(data){
    if(data != '' && data.includes("/")){
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto","setembro","outubro","novembro","dezembro"];
    
    dataExtenso = data.split("/");
    console.log(dataExtenso);
    let mes = parseInt(dataExtenso[1]);
    let dia = dataExtenso[0];
    let ano = dataExtenso[2];
    var dataFinal = `${dia} de ${meses[mes-1]} de ${ano}`;
    }else{
        dataFinal = '';
    }
    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.
    return dataFinal;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}