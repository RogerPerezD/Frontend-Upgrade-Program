

const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');


// HandleMethods
const addItem = (e) => {
    // Prevenir que se recargue la pagina
    e.preventDefault();
    // obtener el valor del input
    const newItem = document.querySelector('#item').value;

    // Crear un list item
    const liTag = document.createElement('li');
    liTag.className = 'list-group-item';

    // Add text node with input value
    // My way
    // liTag.append(newItem);
    // Another way
    liTag.appendChild(document.createTextNode(newItem));

    // Create a delete button
    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger btn-sm delete float-right';
    buttonDelete.appendChild(document.createTextNode('X'));

    liTag.appendChild(buttonDelete);

    // Introducir el nuevo item en la lista
    itemList.appendChild(liTag);
}

const deleteItem = (e) => {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const liSelected = e.target.parentNode;
            itemList.removeChild(liSelected);
        }
    }
}

const handleFilter = (e) => {
    const inputValue = e.target.value.toLowerCase();

    const items = document.querySelectorAll('li');

    Array.from(items).forEach( item => {
        const textItem = item.firstChild.textContent.toLowerCase();

        item.style.display = 'block';

        if (textItem.indexOf( inputValue ) === -1) {
            item.style.display = 'none';
        }
       
    });
}



// Events
form.addEventListener('submit', addItem);

itemList.addEventListener('click', deleteItem);

filter.addEventListener('keyup', handleFilter);