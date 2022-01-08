import '../css/main.css';
// import gitImage from '../assets/images/git.png'

// Crear un h1 y ponerle estilo 
export const saludar = ( name ) => {
    const h1 = document.createElement('h1');
    h1.textContent = `Hola, ${name}`;
    document.querySelector('body').appendChild(h1);
}

// Crear una imagen
// export const showImage = () => {
//     const image = document.createElement('img');
//     image.src = gitImage;
//     document.querySelector('body').appendChild(image);
// }