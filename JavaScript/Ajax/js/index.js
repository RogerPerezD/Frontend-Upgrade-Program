
const button = document.querySelector('#buttonAjax');

const handleFetchInformation = () =>{
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // Open - type, url/file, async
    xhr.open('GET', 'assets/test.txt', true);

    // Optional - use for loaders while the request is processing
    xhr.onprogress = function(){
        console.log('ReadyState :', xhr.readyState);
        console.log('Loading')
    }

    // One way to fetch the information
    // xhr.onload = function(){
    //     if (this.status === 200) {
    //         console.log(this.responseText);
    //     }
    // }

    // Another way
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    // for handle errors
    xhr.onerror = function(){
        console.log('Request Error....');
    }

    // Send request
    xhr.send();   
}

// readyState values
// 0: request not initialized
// 1: server connection establised
// 2: request received
// 3: processing request
// 4: request finished and response is ready 

button.addEventListener( 'click', handleFetchInformation );