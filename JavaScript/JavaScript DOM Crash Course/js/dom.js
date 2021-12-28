const form = document.querySelector('#addForm');

const itemList = document.querySelector('#items');



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

form.addEventListener('submit', addItem);