document.querySelector('.btntext').addEventListener('click',getText);

document.querySelector('.btnjson').addEventListener('click',getJson);

document.querySelector('.btn').addEventListener('click',getExternalApi);

function getText(){
    fetch('text.txt')
    .then(res=>res.text())
    .then(data =>document.querySelector('.field').innerHTML = data)
    .catch(err=>console.log(err));
}

function getJson(){
    fetch('json.json')
    .then(res => res.json())
    .then(function(data){
        let output = '';
        data.forEach(function(value){
            output += `<li>${value.title}</li>`;
        });
        document.querySelector('.field').innerHTML = output
    })
    .catch(err=>console.log(err));
}

function getExternalApi(){
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(function(data){
        let output = '';
        data.forEach(function(value){
            output += `<li>${value.login}</li>`;
        });
        document.querySelector('.field').innerHTML = output
    })
    .catch(err=>console.log(err));
}
