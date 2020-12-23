


function get() {
    const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"Get", time:"2pm"}));
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }

}


function post() {
    const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"Faizan", time:"2pm"}));
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }

}


function put() {
    const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"Put", time:"2pm"}));
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }

}



function dlt() {
    const Http = new XMLHttpRequest();
    const url='http://192.168.50.210:3000/bulb';
    Http.open("POST", url);
    
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify({name:"Siddiqui", time:"2pm"}));
    
    Http.onreadystatechange = (e) => {
      console.log(Http.responseText)
    }
    
}

Http.onreadystatechange = (e) => {
    document.write(Http.responseText)
}


