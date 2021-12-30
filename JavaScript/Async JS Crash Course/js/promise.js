const divPost = document.querySelector('#post');

const posts = [
    {
        title: 'Post one',
        body: 'Body one'
    },
    {
        title: 'Post two',
        body: 'Body two'
    }
];

const getPosts = () =>{
    setTimeout( () =>{
        let output = '';
        posts.forEach(post => {
           output += `<li> ${ post.title }</li>`;
        });

        divPost.innerHTML = output;
    }, 1000);
}

const createPost = ( post ) => {
    return new Promise( ( resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);
            console.log('Promesa')
            resolve();
        }, 2000)
    });
}

createPost({
    title: 'Post three',
    body: 'Body three'})
    .then( () => { getPosts() })
    .catch( (err) => console.log(err));