const headerTitle = document.getElementById('header-title');
console.log(headerTitle);

// Change style
headerTitle.style.borderBottom = 'solid 3px #000';

// QuerySelector 
const submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

const item = document.querySelector('.list-group-item');
console.log(item);
item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';