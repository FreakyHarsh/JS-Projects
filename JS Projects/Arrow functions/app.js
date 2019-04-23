const posts = [
    {title: 'Post One', body: 'This is first post'},
    {title: 'Post Two', body: 'This is Second post'}, 
];

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            posts.push(post);
            const error = null;
            if(!error){
                resolve();
            }
            else{
                reject('Something went Wrong !');
            }

        },2000)
    });
}

function getPost(){
    setTimeout(() => {     
    let output = '';
    posts.forEach(value =>{
    output += `<li>${value.title}</li>`;
    });
    document.querySelector('.list').innerHTML = output;
    },1000);
}

createPost({title: 'Post Three',body: 'This is third post'}).then(getPost).catch(err=>console.log(err));
