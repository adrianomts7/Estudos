'use strict';

/*
Exemplo 1:

Entrada: num = 3749

Saída: "MMMDCCXLIX"

Explicação:

3000 = MMM como 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC como 500 (D) + 100 (C) + 100 (C)
  40 = XL como 10 (X) menos de 50 (L)
  9 = IX como 1 (I) menos 10 (X)
Nota: 49 não é 1 (I) a menos que 50 (L) porque a conversão é baseada em casas decimais
Exemplo 2:

Entrada: num = 58

Saída: "LVIII"

Explicação:

50 = L
 8 = VIII
Exemplo 3:

Entrada: num = 1994

Saída: "MCMXCIV"

Explicação:

1000 = M
 900 = CM
  90 = XC
  4 = IV

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const numerosStrings = String(num).split('');
  let numeroString = '';

  for (let i = 0; i < numerosStrings.length; i++) {
    if (numerosStrings.length > 3) {
      for (let j = 0; j < numerosStrings[i]; j++) {
        numeroString += 'M';
      }

      numerosStrings.shift();
    } else if (numerosStrings.length === 3) {
      let numeroAtual = numerosStrings[0];

      if (numeroAtual == 9) {
        numeroString += 'CM';
        numeroAtual -= 9;
      } else if (numeroAtual >= 5) {
        numeroString += 'D';
        numeroAtual -= 5;
      } else if (numeroAtual == 4) {
        numeroString += 'CD';
        numeroAtual -= 4;
      }

      for (let j = 0; j < numeroAtual; j++) {
        numeroString += 'C';
      }

      numerosStrings.shift();
    }
    if (numerosStrings.length === 2) {
      let numeroAtual = numerosStrings[0];

      if (numeroAtual == 9) {
        numeroString += 'XC';
        numeroAtual = 0;
      } else if (numeroAtual >= 5) {
        numeroString += 'L';
        numeroAtual -= 5;
      } else if (numeroAtual == 4) {
        numeroString += 'XL';
        numeroAtual = 0;
      }

      for (let j = 0; j < numeroAtual; j++) {
        numeroString += 'X';
      }

      numerosStrings.shift();
    }
    if (numerosStrings.length === 1) {
      let numeroAtual = numerosStrings[0];

      if (numeroAtual == 9) {
        numeroString += 'IX';
        numeroAtual = 0;
      } else if (numeroAtual >= 5) {
        numeroString += 'V';
        numeroAtual -= 5;
      } else if (numeroAtual == 4) {
        numeroString += 'IV';
        numeroAtual = 0;
      }

      for (let j = 0; j < numeroAtual; j++) {
        numeroString += 'I';
      }
    }
  }
  return numeroString;
};

// console.log(intToRoman(3749));
// console.log(intToRoman(58));
// console.log(intToRoman(1994));

/*
Desafio de Programação nº 1

/*
Vamos criar um aplicativo de enquete simples!

Uma enquete tem uma pergunta, um conjunto de opções entre as quais as pessoas podem escolher e um conjunto com o número de respostas para cada opção. Esses dados são armazenados no objeto inicial abaixo.

Aqui estão suas tarefas:

1. Crie um método chamado 'registerNewAnswer' no objeto 'poll'. O método faz duas coisas:
1.1. Exibe uma janela de prompt para o usuário inserir o número da opção selecionada. O prompt deve ser semelhante a este:
Qual é a sua linguagem de programação favorita?
0: JavaScript
1: Python
2: Rust
3: C++
(Escreva o número da opção)

1.2. Com base no número inserido, atualize o conjunto de respostas. Por exemplo, se a opção for 3, aumente o valor NA POSIÇÃO 3 do array em 1. Certifique-se de verificar se a entrada é um número e se o número faz sentido (por exemplo, a resposta 52 não faria sentido, certo?)
2. Chame este método sempre que o usuário clicar no botão "Responder à enquete".
3. Crie um método 'displayResults' que exiba os resultados da enquete. O método recebe uma string como entrada (chamada 'type'), que pode ser 'string' ou 'array'. Se o tipo for 'array', simplesmente exiba o array de resultados como ele está, usando console.log(). Esta deve ser a opção padrão. Se o tipo for 'string', exiba uma string como "Os resultados da enquete são 13, 2, 4, 1".
4. Execute o método 'displayResults' ao final de cada chamada do método 'registerNewAnswer'.

DICA: Use muitas das ferramentas que você aprendeu nesta e na última seção 😉

BÔNUS: Use o método 'displayResults' para exibir os 2 arrays nos dados de teste. Use as opções 'array' e 'string'. NÃO coloque os arrays no objeto de pesquisa! Então, como a palavra-chave "this" deve ser nesta situação?

DADOS DE TESTE BÔNUS 1: [5, 2, 3]
DADOS DE TESTE BÔNUS 2: [1, 5, 3, 9, 6, 1]
BOA SORTE 😀
*/

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const resposta = Number(prompt(`${this.question}\n ${this.options.join(', ')}`));

    if (resposta < 0 || resposta > 3) alert('Número inválido');

    if (resposta === 0) {
      this.answers[0] += 1;
    } else if (resposta === 1) {
      this.answers[1] += 1;
    } else if (resposta === 2) {
      this.answers[2] += 1;
    } else if (resposta === 3) {
      this.answers[3] += 1;
    }

    const type = prompt('How do you want to display the data ("string"/"array")');
    this.displayResults(type);
  },

  displayResults(type = 'array') {
    if (type === 'array') {
     return console.log(this.answers);
    } else if (type === 'string') {
      const result = this.answers.join(',');
      return console.log(`The poll results are ${result}`);
    }
  }

}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

/*
BÔNUS: Use o método 'displayResults' para exibir os 2 arrays nos dados de teste. Use as opções 'array' e 'string'. NÃO coloque os arrays no objeto de pesquisa! Então, como a palavra-chave "this" deve ser nesta situação?
DADOS DE TESTE BÔNUS 1: [5, 2, 3]
DADOS DE TESTE BÔNUS 2: [1, 5, 3, 9, 6, 1]
/*
/*
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/*
Você recebe uma sequência de caracteres scomposta por letras minúsculas em inglês ( 'a'to 'z').

Sua tarefa é:

Encontre a vogal (uma de 'a', 'e', 'i', 'o', ou 'u') com a frequência máxima .
Encontre a consoante (todas as outras letras, exceto as vogais) com a frequência máxima .
Retorna a soma das duas frequências.

Observação : se várias vogais ou consoantes tiverem a mesma frequência máxima, você pode escolher qualquer uma delas. Se não houver vogais ou consoantes na sequência, considere sua frequência como 0.

A frequência de uma letra xé o número de vezes que ela ocorre na sequência.
 

Exemplo 1:

Entrada: s = "sucessos"

Saída: 6

Explicação:

As vogais são: 'u'(frequência 1), 'e'(frequência 2). A frequência máxima é 2.
As consoantes são: 's'(frequência 4), 'c'(frequência 2). A frequência máxima é 4.
A saída é 2 + 4 = 6.
Exemplo 2:

Entrada: s = "aeiaeia"

Saída: 3

Explicação:

As vogais são: 'a'(frequência 3), 'e'(frequência 2), 'i'(frequência 2). A frequência máxima é 3.
Não há consoantes em s. Portanto, a frequência máxima de consoantes = 0.
A saída é 3 + 0 = 3.

*/

/**
 * @param {string} s
 * @return {number}
 */
/*
var maxFreqSum = function(s) {
  const arrayStrings = s.toLowerCase().split('');
  const objVogais = {};
  const objConsoantes = {};

  for(const letra of arrayStrings) {
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      objVogais[letra] ? objVogais[letra]++ : objVogais[letra] = 1; 
    } else {
      objConsoantes[letra] ? objConsoantes[letra]++ : objConsoantes[letra] = 1; 
    }
  }

  const valoresVogais = Math.max(...Object.values(objVogais)) ;
  const valoresConsoantes = Math.max(...Object.values(objConsoantes))

  const maiorVogal = valoresVogais < 0 ? 0 : valoresVogais;
  const maiorConsoante = valoresConsoantes< 0 ? 0 : valoresConsoantes;

  return maiorVogal + maiorConsoante;

};  

console.log(maxFreqSum('successes'));
console.log(maxFreqSum("aeiaeia"));
*/

