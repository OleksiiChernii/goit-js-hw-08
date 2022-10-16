const _ = require('lodash');

const formRef = document.querySelector('form');
const key = 'feedback-form-state';
const saveCurrentState = _.throttle((state) => localStorage.setItem(key, JSON.stringify(state)), 1000);

const state = {email:'', message: ''};

loadState();

formRef.addEventListener('input', event => {
    if(event.target.name === 'email'){
        console.log('email = ', event.target.value)
        state.email = event.target.value;
    }
    if(event.target.name === 'message'){
        console.log('message = ', event.target.value);
        state.message = event.target.value;
    }
    saveCurrentState(state);
});


formRef.addEventListener('submit', event => {
    event.preventDefault();
    const stateBeforeRemove = JSON.parse(localStorage.getItem(key));
    console.log(stateBeforeRemove);
    formRef[0].value = '';
    formRef[1].value = '';
    localStorage.removeItem(key);
})

function loadState(){
    const currentState = JSON.parse(localStorage.getItem(key));
    if(!currentState){
        return;
    }
    formRef[0].value = currentState.email;
    formRef[1].value = currentState.message;
}