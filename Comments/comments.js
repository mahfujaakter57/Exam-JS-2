function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

loadUsers();


function displayUsers(data){
    const sectionId = document.getElementById('comments');
    for(const todos of data){
        const div = document.createElement('div');
        div.classList.add("comments")
        div.innerHTML = `
         <h1>${comments.id}</h1>
         <h3>${comments.name}</h3>
         <h4>${comments.email}</h4>
         <a>${comments.phone}</a>
        
        
        `;
        sectionId.appendChild(div);

        console.log(todos);
    }
}