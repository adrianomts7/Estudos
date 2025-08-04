// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 12, 17, 15, 14, 9, 5];

// const amplitudeTemperatura = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);
//   let maiorTemperatura = -Infinity;
//   let menorTemperatura = Infinity;

//   for (let temperatura of temps) {
//     if (typeof temperatura === 'string') continue;

//     if (temperatura > maiorTemperatura) maiorTemperatura = temperatura;

//     if (temperatura < menorTemperatura) menorTemperatura = temperatura;
//   }

//   console.log(menorTemperatura);
//   console.log(maiorTemperatura);
//   return maiorTemperatura - menorTemperatura;
// };

// console.log(amplitudeTemperatura([2,3,4,5,6,7,89], [1, -1,4,7, -10, 9, 2]));

// const mensureKelvin = function() {
//   const mensurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Degress celsius')),
//     value: 10,
//   }

//   const kelvin = mensurement.value + 273;
//   return kelvin;
// }

// console.log(mensureKelvin());

/*
Dado um conjunto de temperaturas máximas previstas, o termômetro exibe uma string com essas temperaturas.
Exemplos: [17, 21, 23] imprimirá "... 17ºC em 1 dia, ... 21ºC em 2 dias ... 23ºC em 3 dias..."

Crie uma função 'printForecast' que recebe um conjunto 'arr' e registra uma string como a acima no console.

Use a estrutura de resolução de problemas: entenda o problema e divida-o em subproblemas.

DADOS DE TESTE 1: [17, 21, 23
DADOS DE TESTE 2: [12, 5, -5, 0, 4]
*/

// function printForecast(arr) {
//   let str = ''
//   for(let i = 0; i < arr.length; i++) {
//     str += ` ${arr[i]}ºC no ${i + 1} dia ...`;
//   }

//   console.log('...' + str);
// }

// console.log(printForecast([12, 5, -5, 0, 4]));

/*
Digamos que você esteja criando um aplicativo de controle de tempo para freelancers. Em algum momento da criação deste aplicativo, você precisa de uma função que receba as horas trabalhadas diárias de uma semana e retorne:
1. Total de horas trabalhadas
2. Média de horas diárias
3. O dia com mais horas trabalhadas
4. Número de dias trabalhados
5. Se a semana foi em tempo integral (35 horas trabalhadas ou mais)

Test Data [7.5, 8, 6.8, 0, 8.5, 4, 0]
*/

const TempoTrabalhado = function (horasTrabalhadasSemana) {
  let horasTrabalhadas = 0;
  let diaComMaisHoraTrabalhada = 0;
  let horasTrabalhadaDia = horasTrabalhadasSemana[0];
  let diasTrabalhados = 0;
  let tempoIntegral = false;

  for (let i = 0; i < horasTrabalhadasSemana.length; i++) {
    horasTrabalhadas += horasTrabalhadasSemana[i];

    if (horasTrabalhadasSemana[i] > horasTrabalhadaDia) {
      diaComMaisHoraTrabalhada = i;
    }

    if (horasTrabalhadasSemana[i] > 0) {
      diasTrabalhados++;
    }
  }

  const mediaHorasDiarias = horasTrabalhadas / horasTrabalhadasSemana.length;

  if (horasTrabalhadas >= 35) {
    tempoIntegral = true;
  }

  return {
    horasTrabalhadas,
    mediaHorasDiarias,
    diaComMaisHoraTrabalhada,
    diasTrabalhados,
    tempoIntegral
  }
};

console.log(TempoTrabalhado([7.5, 8, 6.8, 0, 8.5, 4, 0]));
