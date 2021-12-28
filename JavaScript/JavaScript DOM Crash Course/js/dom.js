
const itemInput = document.querySelector('input[type="text"]');

const form = document.querySelector('form');

let eventName;
eventName = 'keydown';
// eventName = 'keyup';
// eventName = 'keypress';

// eventName = focus;
// eventName = blur;


const runEvent = (e) => {
    console.log('Event Type: ', e.type);
    console.log(e.target.value);
}

itemInput.addEventListener(eventName, runEvent);

