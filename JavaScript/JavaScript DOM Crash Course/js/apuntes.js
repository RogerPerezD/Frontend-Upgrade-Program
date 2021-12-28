// Examine the document object
console.log(document.domain);
console.log(document.URL);
console.log(document.title);

// Change the title of your page
document.title = 'Rogelio Perez';

// Get element by id
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);


// Differents ways to change the text inside of the component
// Text content se enfoca en todo el contenido que tenga el componente, 
// sin importar el estilo 
headerTitle.textContent = 'Hello';
// Solo muestra el contenido de texto que sea visible al usuario
headerTitle.innerText = 'Goodbay';

// Cambia por completo el nodo por el compenente que le pasemos
headerTitle.innerHTML = '<h3>Mundo</h3>';

// Change style
headerTitle.style.borderBottom = 'solid 3px #000';
headerTitle.style.fontSize = '14';
headerTitle.style.backgroundColor = 'red';


// QuerySelector 
const submit = document.querySelector('input[type="submit"]');
submit.value = "Send";

const item = document.querySelector('.list-group-item');
console.log(item);
item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'; 