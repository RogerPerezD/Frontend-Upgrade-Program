
const btnUser = document.querySelector('#btn-user');
const btnUsers = document.querySelector('#btn-users');
const divUser = document.querySelector('#user');
const divUsers = document.querySelector('#users');



const fetchUser = ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','assets/user.json',true);

    xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200) {
                const user = JSON.parse(this.responseText);

                const ul = document.createElement('ul');
                for (const userValue in user) {
                        const li = document.createElement('li');
                        li.textContent = `${userValue}: ${user[userValue]}`;
                        ul.appendChild(li);
                    }
                divUser.appendChild(ul);
            }
    }


    xhr.send();
}

const fetchUsers = ()=>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET','assets/users.json',true);

    xhr.onreadystatechange = function(){
            if (this.readyState === 4 && this.status === 200) {
                const users = JSON.parse(this.responseText);

                users.forEach(userObject => {
                     const ul = document.createElement('ul');
                    for (const userValue in userObject) {
                        const li = document.createElement('li');
                        li.textContent = `${userValue}: ${userObject[userValue]}`;
                        ul.appendChild(li);
                    }
                    divUsers.appendChild(ul);
                });
            }
    }


    xhr.send();
}

btnUser.addEventListener('click', fetchUser);

btnUsers.addEventListener('click', fetchUsers);

