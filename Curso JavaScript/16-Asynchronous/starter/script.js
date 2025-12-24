'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className) {
  const html = `
       <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
  
    countriesContainer.insertAdjacentHTML('beforeend', html);
    // countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
/*
const getCountryData = function(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
  
    const html = `
       <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
    `;
  
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  
  })
}

getCountryData('portugal');
getCountryData('brasil');
*/
/*

const getCountryAndNeighbour = function(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    renderCountry(data);

    console.log(data);

    const [neighbour] = data.borders;

    if (!neighbour) return;

    const requestTwo = new XMLHttpRequest();
    requestTwo.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    requestTwo.send();

    requestTwo.addEventListener('load', function() {
      const data2 = JSON.parse(this.responseText);

      renderCountry(data2, 'neighbour');
    })

  })
}

getCountryAndNeighbour('brasil');

*/

const request = fetch('https://restcountries.com/v2/name/brasil');
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       renderCountry(data[0]);
//     })

// }

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url)
    .then( response => {
      if (!response.ok) 
        throw new Error(`${errorMsg} (${response.status})`);
    
      return response.json();
    })
}

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v2/name/${country}`) 
//     .then(response => {
      
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json()
//     })
//     .then( data => {  

//       renderCountry(data[0]) 
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);

//     })
//     .then( response => response.json() )
//     .then( data => renderCountry(data, 'neighbour') )
//     .catch(err => { 
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => countriesContainer.style.opacity = 1 );
//   }



const getCountryData = function(country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then( data => {  
      renderCountry(data[0]) 

      const neighbour = data[0].borders?.[0];
      
      if (!neighbour) throw new Error('No neighbour found!');
            
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');

    })
    .then( data => renderCountry(data, 'neighbour') )
    .catch(err => { 
      console.error(err.message);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => countriesContainer.style.opacity = 1 );
  }


// btn.addEventListener('click', function() {
//   getCountryData('india');
// })

// getCountryData('kajaksdjhaks');

// Desafio de Código #1

/*
Neste desafio, você irá construir uma função chamada 'whereAmI' que renderiza um país
APENAS com base em coordenadas GPS. Para isso, você utilizará uma segunda API para
geocodificar coordenadas.

Aqui estão as tarefas:

PARTE 1
1. Crie uma função 'whereAmI' que receba como parâmetros um valor de latitude (lat)
   e um valor de longitude (lng) (essas são coordenadas GPS; exemplos abaixo).
2. Faça a 'geocodificação reversa' das coordenadas fornecidas. Geocodificação reversa
   significa converter coordenadas em um local significativo, como o nome de uma
   cidade e de um país. Use esta API para fazer a geocodificação reversa:
   https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

   A chamada AJAX deve ser feita para uma URL neste formato:
   https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381

   Use a API fetch e Promises para obter os dados.
   NÃO utilize a função getJSON que criamos — isso seria trapaça 😉
3. Depois de receber os dados, observe-os no console para ver todos os atributos
   retornados sobre a localização fornecida. Em seguida, usando esses dados,
   exiba no console uma mensagem como:
   'Você está em Berlim, Alemanha'
4. Encadeie um método .catch() ao final da cadeia de Promises e registre os erros no console.
5. Esta API permite apenas 3 requisições por segundo. Se você recarregar a página
   rapidamente, receberá um erro com código 403. Esse é um erro de requisição.
   Lembre-se: o fetch() NÃO rejeita a Promise automaticamente nesses casos.
   Portanto, crie manualmente um erro para rejeitar a Promise, com uma mensagem
   de erro significativa.

PARTE 2
6. Agora é hora de usar os dados recebidos para renderizar um país.
   Pegue o atributo relevante retornado pela API de geocodificação e use-o
   na API de países que já estamos utilizando.
7. Renderize o país e capture quaisquer erros, assim como fizemos na última aula
   (você pode até copiar o código, não precisa digitá-lo novamente).

COORDENADAS DE TESTE 1: 52.508, 13.381 (Latitude, Longitude)
COORDENADAS DE TESTE 2: 19.037, 72.873
COORDENADAS DE TESTE 3: -33.933, 18.474

BOA SORTE 😀
*/

/*
const whereAmI = function(lat, lng) {
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    .then( response => {

      console.log(response)

      if (!response.status) 
        throw new Error('problem with geocoding');

      return response.json() 
    })
    .then( data => { 
      const country = data.countryName;

      console.log(`Você está em ${data.city}, ${country}`);

      if (!country)
        throw new Error('Country not found')

      return fetch(`https://restcountries.com/v2/name/${country}`);

      })
    .then( response => { 
      
      if (!response.status) 
        throw new Error('Country not found');

      return response.json()
    })
    .then( data => {
      
      const country = data[0];

      if (!country)
        throw new Error(`Country not found`)

      renderCountry(country);

      const neighbour = country.borders?.[0];

      if (!neighbour || neighbour === 'undefined')
        throw new Error('No neighbour found!');

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then( response => response.json() )
    .then(data => renderCountry(data, 'neighbour'))
    .catch( err => { 
      console.error(err) 
      renderError(err.message)
    })
    .finally( () => countriesContainer.style.opacity = 1 );
    // city, countryName
}

// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
*/

/*
console.log('Test start');
setTimeout(() => console.log('0 set timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');
*/

/*
const loterryPromise = new Promise(function(resolve, reject) {
  
  console.log('Lotter draw is happening')
  setTimeout(function() {
    if (Math.random() >= 0.5) {
    resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 1000);
});

loterryPromise.then(res => console.log(res)).catch( err => console.error(err) );

const wait = function(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(2);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(3)
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(4)
  })
  .then(() => console.log('4 seconds passed'));

*/

// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
// console.log('Getting position');

/*
const getPosition = function() {
  return new Promise( function(resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject)
  }); 
}

getPosition().then( pos => console.log(pos) );

const whereAmI = function() {
  getPosition().then( pos => { 
    const { latitude: lat, longitude: lng } = pos.coords 

  return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    
  })
    .then( response => {
      if (!response.status) 
        throw new Error('problem with geocoding');

      return response.json() 
    })
    .then( data => { 
      const country = data.countryName;

      console.log(`Você está em ${data.city}, ${country}`);

      if (!country)
        throw new Error('Country not found')

      return fetch(`https://restcountries.com/v2/name/${country}`);

      })
    .then( response => { 
      
      if (!response.status) 
        throw new Error('Country not found');

      return response.json()
    })
    .then( data => {
      
      const country = data[0];

      if (!country)
        throw new Error(`Country not found`)

      renderCountry(country);

      const neighbour = country.borders?.[0];

      if (!neighbour || neighbour === 'undefined')
        throw new Error('No neighbour found!');

      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then( response => response.json() )
    .then(data => renderCountry(data, 'neighbour'))
    .catch( err => { 
      console.error(err) 
      renderError(err.message)
    })
    .finally( () => countriesContainer.style.opacity = 1 );
}

btn.addEventListener('click', whereAmI);

*/

///////////////////////////////////////
// Desafio de Código #2

/*
Construa a funcionalidade de carregamento de imagens que acabei de mostrar na tela.

As tarefas não são muito descritivas desta vez, para que você possa descobrir algumas coisas por conta própria.
Finja que está trabalhando sozinho 😉

PARTE 1
1. Crie uma função chamada 'createImage' que recebe 'imgPath' como parâmetro.
   Essa função deve retornar uma Promise que:
   - Cria uma nova imagem (use document.createElement('img'));
   - Define o atributo .src com o caminho da imagem fornecido;
   - Quando a imagem terminar de carregar, deve:
     - Adicionar a imagem ao elemento do DOM com a classe 'images';
     - Resolver a Promise.
   - O valor retornado na resolução da Promise deve ser o próprio elemento da imagem.
   - Caso ocorra um erro ao carregar a imagem (evento 'error'), a Promise deve ser rejeitada.

Se esta parte for muito difícil, basta assistir à primeira parte da solução.

PARTE 2
2. Consuma a Promise usando .then e também adicione um manipulador de erro;
3. Após a imagem carregar, pause a execução por 2 segundos usando a função wait que criamos anteriormente;
4. Após os 2 segundos, esconda a imagem atual (defina display como 'none') e carregue uma segunda imagem
   (DICA: Use o elemento de imagem retornado pela Promise createImage para esconder a imagem atual.
   Você precisará de uma variável global para isso 😉);
5. Após a segunda imagem carregar, pause a execução por mais 2 segundos;
6. Após os 2 segundos, esconda a imagem atual.

DADOS DE TESTE:
- Imagens na pasta 'img';
- Teste o manipulador de erro passando um caminho de imagem incorreto;
- Configure a velocidade da rede para 'Fast 3G' na aba Network do DevTools,
  caso contrário as imagens carregam rápido demais.

BOA SORTE 😀
*/

/*
const createImage = function(imgPath) {
  return new Promise(function(resolve, reject) {
    const container = document.querySelector('.images');

    if (imgPath.indexOf('.jpg') === -1) return reject(new Error('Image not found'));

    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', function() {
      image.classList.add('images')
      container.appendChild(image);
      resolve(image);
    })
    
    image.addEventListener('error', function() {
      reject(new Error('Image not found'));     
    })
  })
}

let imgParou = false;

createImage('../img/img-1.jpg')
  .then(img => {
    return new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => {
        img.style.display = 'none';

        return createImage('../img/img-2.jpg')
      })
    })    
  .then(img => {
    return new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => {
        img.style.display = 'none';
      })
  })
  .catch(err => console.error(err));
*/

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

// fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res));
const whereAmI = async function() {
  const pos = await getPosition();
  
  const {latitude: lat, longitude: lng} = pos.coords; 
  
  const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
  const dataGeo = await resGeo.json();
   console.log(dataGeo);

  const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
  console.log(res);
  const data = await res.json();
  countriesContainer.style.opacity = 1;
  renderCountry(data[0]);
}

whereAmI();