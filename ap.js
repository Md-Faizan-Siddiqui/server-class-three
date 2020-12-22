function get() {
    const Http = new XMLHttpRequest();
    const url = 'https://192.168.50.177/bulb';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

function Get(){
    const Http = new XMLHttpRequest();
    const url = 'http://192.168.50.177:3000/bulb';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}











// const Http = new XMLHttpRequest();

// function get() {
//     const url = 'https://192.168.50.177/bulb';
//     Http.open("GET", url);
//     Http.send();
//     Http.onreadystatechange = (e) => {
//         console.log(Http.responseText)
//     }
//     document.write()

// }


const Http = new XMLHttpRequest();

function post() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    document.write()

}



const Http = new XMLHttpRequest();

function put() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("PUT", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    document.write()

}


const Http = new XMLHttpRequest();

function dlt() {
    const url = 'https://192.168.50.177/bulb';
    Http.open("DELETE", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
    document.write()

}

