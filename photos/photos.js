function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

loadUsers();


function displayUsers(data){
    const sectionId = document.getElementById('photos');
    for(const todos of data){
        const div = document.createElement('div');
        div.classList.add("photos")
        div.innerHTML = `
         <h1>${photos.id}</h1>
         <h3>${photos.title}</h3>
         <h3>${photos.url}</h3>
        <a>${photos.thumbnailUrl}</a>
        
        `;
        sectionId.appendChild(div);

        console.log(photos);
    }
}