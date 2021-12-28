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


// ----------------------Second Video----------------------------------

// Traversing the dom

const itemList = document.querySelector('#items');

// get the parent Node
const parentNodeList = itemList.parentNode;
console.log(parentNodeList);

// change properties of parent node
parentNodeList.style.backgroundColor = '#f4f4f4';

// get parent Element
// Es casi lo mismo que parent node, nos trae el nodo padre del elemento
const parentElementList = itemList.parentElement;
console.log(parentElementList);


// Child nodes
// Trae a los hijos del componente, pero si tiene enters, los
// marca como si fueran espacios en blanco, marcando mas elementos
// de los que hay en realidad
console.log(itemList.childNodes);

// children
// Tambien nos trae a los nodos hijos del componente,
// pero sin la problematica de childNodes,
// por ende es mas recomendada usarla 
console.log(itemList.children);

// firstchild
// Nos trae al primer elemento que encuentra,
// Auunque sea un espacio en blanco, esto nos puede
// traer problemas
console.log(itemList.firstChild);

// firstElementChild
// Nos trae al primer nodo de HTMl que encuentra,
// Es mejor que usar firstChild
console.log(itemList.firstElementChild);

// lastChild
// Nos trae al ultimo elemento que encuentra,
// Auunque sea un espacio en blanco, esto nos puede
// traer problemas
console.log(itemList.lastChild);

// lastElementChild
// Nos trae al ultimo nodo de HTMl que encuentra,
// Es mejor que usar lastChild
console.log(itemList.lastElementChild);

// nextSibling
// Nos trae al siguiente hermano del component, sufre del mismo
// error de traer espacios en blancos en ciertas ocasiones
console.log(itemList.nextSibling);

/* nextElementSibling */
// Nos trae al siguiente hermano del componente
// Si no tiene un hermano siguiente, retorna null
console.log(itemList.nextElementSibling);

/* previousSibling */
// Nos trae al anterior hermano del componente, sufre del mismo
// error de traer espacios en blancos en ciertas ocasiones
console.log(itemList.previousSibling);

/* previousElementSibling */
// Nos trae al anterior hermano del componente
// Si no tiene un hermano anterior, retorna null
console.log(itemList.previousElementSibling);

/* Create Elemenet */
// Create a div

const newDiv = document.createElement('div');

// add class
newDiv.className = 'test-style';

// add id
newDiv.id = 'hello-id';

// add attribute
newDiv.setAttribute('title', 'Hello div');
// newDiv.setAttribute('none', '');

// Create text node
const newDivText = document.createTextNode('Hello World');

// add text to div
newDiv.appendChild(newDivText);

// Insert the div into our header

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

// insertarlo antes de la etiqueta h1
container.insertBefore(newDiv, h1);


console.log(newDiv);

// ----------------------------Events----------------------------

// Click event
const button = document.querySelector('#button');

const handleClick = ( e ) =>{
    document.querySelector('#header-title').textContent = 'Changed';
    document.querySelector('#main').style.background = '#f4f4f4';

    // Get el elemento que fue clickeado
    console.log(e.target);
    console.log(e.target.textContent);

    // Get the type of the event for example in this case 'click'
    console.log(e.type);

    // saber si alguna de las sigueintes teclas estan presionadas
    // al momento que ocurre el evento
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

button.addEventListener('click', handleClick);