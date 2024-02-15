const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": ""
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];
console.log(posts)
// fine milestone 1

// Milestone 2 
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.




// creo un array che stampa i post
function printPosts() {
    const postContainer = document.getElementById("container");
    postContainer.innerHTML = "";
    // console.log(postContainer);

    posts.forEach(currentPost => {
        
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `<div class="post">
                            <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${currentPost.author.image}" alt="${currentPost.author.name}">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${currentPost.author.name}</div>
                                        <div class="post-meta__time">${currentPost.created}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                            <div class="post__image">
                                <img src="${currentPost.media}" alt="${currentPost.media}">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button  js-like-button" href="#" data-postid="${currentPost.id}">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-${currentPost.id}" class="js-likes-counter">${currentPost.likes}</b> persone
                                    </div>
                                </div> 
                            </div>            
                        </div>`;
        
                        
                        postContainer.append(post);


});

// richiamo funzione per avviarla
moreLike();
};

// richiamo funzione per stamparla
printPosts()




// Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// creo una fuznione che gestisca i click dei like

function moreLike(){

    const likeBtn = document.querySelectorAll(".js-like-button");
    // dichiaro le variabili degli delle proprietà degli oggetti
    let postId;
    let likeCounter;
    let likeCounterElement;
    // array vuoto dei like
    let likesArray = [];


    likeBtn.forEach(function(key) {

        key.addEventListener("click", function(event) {
            // aggiungo il colore
            key.classList.toggle("liked")
            // console.log("click");
            event.preventDefault();


            postId = key.dataset.postid;
            console.log("hai messo like al post: " + postId)
            
            likeCounter = document.querySelector(`#like-counter-${postId}`);
            // console.log("hai messo like a: " + likeCounter + "post")
            
            likeCounterElement = Number(likeCounter.textContent);
            // console.log(likeCounterElement)

            
            


            // Milestone 3
            // Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
            
            //aggiungo il numero di like dentro un array inizialmente vuoto
            if (!likesArray.includes(postId)) {
                // Se il postId non è nell'array
                likesArray.push(postId);
                // aggiorno il numero di like
                likeCounter.textContent = likeCounterElement + 1;
            } else {
                // creo una funzione che mi cerca se ho già messo like, se lo trova, lo toglie dall'array
                likesArray = likesArray.filter(function(id) {
                    return id !== postId;
                });
                
                // aggiorno il numero di like
                likeCounter.textContent = likeCounterElement - 1;
            }
            console.log(likesArray); 
            


        });
    });
}