
const btnText = document.querySelector('#btn-text');
const btnJson = document.querySelector('#btn-json');
const divOutput = document.querySelector('#output');
const formPost = document.querySelector('#addPost');
const inputTitle = document.querySelector('#title');
const inputBody = document.querySelector('#body');

const handleText = async () => {
    const resp = await fetch('assets/sample.txt');
    const data = await resp.text();
    divOutput.textContent = data;
}

const handleJSON = async () => {
    const resp = await fetch('assets/users.json');
    const data = await resp.json();
    const ul = document.createElement('ul');
    data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
    });
    divOutput.appendChild(ul);
}

const handlePost = async (e) =>{
    e.preventDefault();
    const title = inputTitle.value;
    const body = inputBody.value;
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts ',
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify( {body, title})
    });

    const data = await resp.json();
    console.log(data);
}

btnText.addEventListener('click', handleText);
btnJson.addEventListener('click', handleJSON);
formPost.addEventListener('submit', handlePost);