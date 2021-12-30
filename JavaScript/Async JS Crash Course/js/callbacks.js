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

const createPost = ( post, callback) => {
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000)
}

createPost({
    title: 'Post three',
    body: 'Body three'
}, getPosts);