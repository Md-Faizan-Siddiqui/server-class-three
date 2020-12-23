

const Http = new XMLHttpRequest();

function get() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("GET", url);
    Http.send();

}


function post() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("POST", url);
    Http.send();

}


function put() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("PUT", url);
    Http.send();

}



function dlt() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("DELETE", url);
    Http.send();
    
}

Http.onreadystatechange = (e) => {
    document.write(Http.responseText)
}


