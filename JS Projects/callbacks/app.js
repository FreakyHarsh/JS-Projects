const posts = [
    {title: 'post one',body: 'This is post One'},
    {title: 'post two',body: 'This is post Two'}
];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },2000);
}

function getPosts(){
    setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
    },1000);
}

createPost({title:'post three',body:'this is post three'},getPosts);


