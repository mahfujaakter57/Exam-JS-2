function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

loadUsers();


function displayUsers(data){
    const sectionId = document.getElementById('posts');
    for(const todos of data){
        const div = document.createElement('div');
        div.classList.add("posts")
        div.innerHTML = `
         <h1>${posts.id}</h1>
         <h3>${posts.title}</h3>
         <h3>${posts.body}</h3>

        
        
        `;
        sectionId.appendChild(div);

        console.log(posts);
    }
}