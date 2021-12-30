
const button = document.querySelector('#users');
const tbody = document.querySelector('#bodyTable');

const fetchUsers = ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            const users = JSON.parse(this.responseText);

            users.forEach(({id, login, avatar_url:image}) => {
                const tr = document.createElement('tr');
                const tdId = document.createElement('td');
                const tdLogin = document.createElement('td');
                const tdImage = document.createElement('td');
                const imageTag = document.createElement('img');
                imageTag.src = image;
                tdId.textContent = id;
                tdLogin.textContent = login;
                tdImage.append(imageTag);
                tr.appendChild(tdId);
                tr.appendChild(tdLogin);
                tr.appendChild(tdImage);
                tbody.appendChild(tr);
            });
        }
    }
    console.log('object')

    xhr.send();
}

button.addEventListener('click', fetchUsers);