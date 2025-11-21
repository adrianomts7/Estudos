 'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`
  }

  click() {
    this.clicks++;
  }

}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;

    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;

    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cyc = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cyc);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const btnClearWorkouts = document.querySelector('.btn__clear');
const btnSortAscending = document.querySelector('.btn__sort');
const btnLocals = document.querySelector('.btn__locals');

const sidebar = document.querySelector('.sidebar');

const containerMessage = document.querySelector('.messages');
const shadow = document.querySelector('.shaddow');
const messageError = document.querySelector('.message--error');
const containerDeletionConfirmation = document.querySelector('.deletion--confirmation');
const messageConfirmation = document.querySelector('.message--confirmation');
const deleteWorkout = document.querySelector('.btn--confirmation__true');
const notdeleteWorkout = document.querySelector('.btn--confirmation__false');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workout;
  #workouts = [];
  #update = false;
  #indWorkout;
  #sorted = false;

  constructor() {
    this._getPosition();

    this._getLocalStorage();

    this._showOrHideWorkoutsButtons();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    sidebar.addEventListener('click',this._buttonsEvents.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () =>
        this._showMessageError('Could not get your position')
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    })
  }

  _buttonsEvents(e) {
    if (e.target.classList.contains('delete')) {
      btnClearWorkouts.addEventListener('click', () => this._confirmationDeletion('Do you really want to delete all your workouts?'));
    }

    if (e.target.classList.contains('sort')) {
      btnSortAscending.addEventListener('click', () => this._sortingAscendigWorkouts());
    }

    if (e.target.classList.contains('locals')) {
      btnLocals.addEventListener('click', () => this._localsZoom())
    }

  }

  _localsZoom() {
     this.#map.fitBounds(this.#workouts.map( work => work.coords ));
  }

  _showMessageError(message) {
    shadow.style.display = 'block';
    containerMessage.style.display = 'flex';
    messageError.textContent = message;
   
    setTimeout(() => this._hiddenMessageError(), 5000)
  }

  _hiddenMessageError() {
    shadow.style.display = 'none'; 
    containerMessage.style.display = 'none';
  }

  _clearInputs() {
    inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = '';
  }

  _showForm(mapE) {
    this._clearInputs();
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    this._clearInputs();
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => form.style.display = 'grid', 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _confirmationDeletion(message) {
    shadow.style.display = 'block'; 

    containerDeletionConfirmation.style.display = 'flex';
    messageConfirmation.textContent = message;

    if (message === 'Do you really want to delete all your workouts?') {
      deleteWorkout.addEventListener('click', () => this._clearWorkouts());
      notdeleteWorkout.addEventListener('click', () => this._hiddenConfirmationDeletion());
    }

    if (message === 'Do you really want to delete the workout?') {
      deleteWorkout.addEventListener('click', () => this._removeWorkout());
  
      notdeleteWorkout.addEventListener('click', () => this._hiddenConfirmationDeletion());
    }

  }

  _hiddenConfirmationDeletion() {
    shadow.style.display = 'none';
    containerDeletionConfirmation.style.display = 'none';
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInput = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    if (!this.#update) {
      const { lat, lng } = this.#mapEvent.latlng;
      if (type === 'running') {
        const cadence = +inputCadence.value;
  
        if (
          !validInput(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        )
          return this._showMessageError('Inputs have to be positive numbers!');
  
        workout = new Running([lat, lng], distance, duration, cadence);
      }
  
      if (type === 'cycling') {
        const elevation = +inputElevation.value;
  
        if (
          !validInput(distance, duration, elevation) ||
          !allPositive(distance, duration)
        )
          return this._showMessageError('Inputs have to be positive numbers!');
        
          workout = new Cycling([lat, lng], distance, duration, elevation);
      }
      
      this.#workouts.push(workout);
      this._renderWorkoutMarker(workout);
    }

    if (this.#update) {  
      if (type === 'running') {
        Object.setPrototypeOf(this.#workout, Running.prototype);

        const cadence = +inputCadence.value;

         if (
          !validInput(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
        )
          return this._showMessageError('Inputs have to be positive numbers!');
  
        Object.assign(this.#workout, { type: 'running', distance, duration, cadence })
        this.#workout.calcPace();
      }
      
      if (type === 'cycling') {
        Object.setPrototypeOf(this.#workout, Cycling.prototype);
        
        const elevation = +inputElevation.value;
        
        if (
          !validInput(distance, duration, elevation) ||
          !allPositive(distance, duration)
        )
          return this._showMessageError('Inputs have to be positive numbers!');
        
        Object.assign(this.#workout, { type: 'cycling', distance, duration, elevationGain: elevation })
        this.#workout.calcSpeed();
      }

      this.#workout._setDescription();
      this.#workouts.splice(this.#indWorkout, 1, this.#workout);
      this._reloadPage();   
      this.#update = false;
    }
    
    this._setLocalStorage();
    this._getLocalStorage();
    this._hideForm();
    this._showOrHideWorkoutsButtons();
  }

  _removeWorkout() {
    this.#workouts.splice(this.#indWorkout, 1);

    this._hideForm();
    this._setLocalStorage();
    this._getLocalStorage();
    this._hiddenConfirmationDeletion();
    this._reloadPage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }

  _renderWorkout(workout) {

    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description} <span class="btn__delete"><ion-icon name="trash-outline"></ion-icon></span></h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    
    `
    if(workout.type === 'running') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>

      `;
    }

    if (workout.type  === 'cycling') {
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li> 
      `
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    const btnDeleteWorkout = e.target.closest('.btn__delete');
    
    if (!workoutEl) return;
    
    if (btnDeleteWorkout) return this._confirmationDeletion('Do you really want to delete the workout?');

    let workout = this.#workouts.find(work => work.id === workoutEl.dataset.id)

    const coords = workout.coords;
    this.#map.setView(coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      }
    })

    this.#workout = workout;
    this.#update = true;
    this._showForm();

    inputDistance.value = workout.distance;
    inputDuration.value = workout.duration;
    inputType.value = workout.type;
    
    this._toggleElevationField();
    if (workout.type === 'running') {
      inputCadence.value = workout.cadence;
    } 
    
    if (workout.type === 'cycling') {
        inputElevation.value = workout.elevationGain; 
      }

    this.#indWorkout = this.#workouts.indexOf(this.#workout);
  }  

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if(!data) return;

    data.forEach(dados => {
      dados.type === 'running' ? Object.setPrototypeOf(dados, Running.prototype) : Object.setPrototypeOf(dados, Cycling.prototype);
      
      dados.date = new Date(dados.date);
    
    });

    this.#workouts = data;

    this._displayWorkouts(this.#workouts);
  }

  _showOrHideWorkoutsButtons() {
    if (this.#workouts.length >= 3) {
      btnClearWorkouts.classList.remove('hidden')
      btnSortAscending.classList.remove('hidden')
      btnLocals.classList.remove('hidden');
    } 
  }

  _clearWorkouts() {
    localStorage.removeItem('workouts');
    this.#workouts = [];
    this._displayWorkouts();
    this._hiddenConfirmationDeletion();
    this._reloadPage();
  }
  
  _displayWorkouts() {
    this._clearContainerWorkouts();

    const workouts = this.#sorted ? this.#workouts.slice().sort((a, b) => a.distance - b.distance) : this.#workouts;

    workouts.forEach(work => this._renderWorkout(work));
  }

  _clearContainerWorkouts() {
    document.querySelectorAll('.workout').forEach( work => work.remove() );
  }

  _sortingAscendigWorkouts() {
    this.#sorted = !this.#sorted; 
    this._displayWorkouts();
  }

  _reloadPage() {
    location.reload();
  }

}

const app = new App();
