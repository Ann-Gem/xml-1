let url = "http://jsonplaceholder.typicode.com/posts";


function xFetch(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.addEventListener('load', () => {
        if(xhr.status === 200) {
            let response = JSON.parse(xhr.responseText); 
            callback(response, null);
        } else {
            callback(null, response.statusText);
        }
        
    })
    xhr.addEventListener('error', () => {
        console.error('error');
    })
    xhr.send();
}

xFetch(response => {
    console.log(response);
});