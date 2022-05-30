const baseUrl = "https://rougecub.com/wp-json/wp/v2/posts"
const latestPostUrl = baseUrl + "?per_page=3"
const drinksUrl = baseUrl + "?tags=35"
const randomPostUrl = baseUrl + "?filter[orderby]=rand&filter[posts_per_page]=4"



const latestPostsContainer = document.querySelector(".latest-posts")
const mostPopularContainer = document.querySelector(".most-popular")
const drinksContainer = document.querySelector(".drinks-posts")
const randomContainer = document.querySelector(".random-posts")




async function getItems(url){ 
    
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts)

    posts.forEach(function(post){
        
        latestPostsContainer.innerHTML +=
        `<div class="latest-generated-post">
        <a href="blog.html?id=${post.id}"> <span> ${post.title.rendered} </span></a>
        
        <div class="latest-generated-image">
        <a href="blog.html?id=${post.id}">
        <img src="${post.jetpack_featured_media_url}"></div></div></a>
        `


    })
    
}
getItems(latestPostUrl); 


async function getDrinks(url){ 
    
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts)

    posts.forEach(function(post){
        
        drinksContainer.innerHTML +=
        `<div class="generated-post">
        <a href="blog.html?id=${post.id}"> <span> ${post.title.rendered} </span></a>
        
        <div class="generated-image">
        <a href="blog.html?id=${post.id}">
        <img src="${post.jetpack_featured_media_url}"></div></div></a>
        `


    })
    
}
getDrinks(drinksUrl); 



async function getRandomPosts(url){ 
    
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts)

    posts.forEach(function(post){
        
        randomContainer.innerHTML +=
        `<div class="generated-post">
        <a href="blog.html?id=${post.id}"> <span> ${post.title.rendered} </span></a>
        
        <div class="generated-image">
        <a href="blog.html?id=${post.id}">
        <img src="${post.jetpack_featured_media_url}"></div></div></a>
        `

    })
    
}
getRandomPosts(randomPostUrl); 

async function getPopularPosts(url){ 
    
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts)

    posts.forEach(function(post){
        
        mostPopularContainer.innerHTML +=
        `<div class="generated-post">
        <a href="blog.html?id=${post.id}"> <span> ${post.title.rendered} </span></a>
        
        <div class="generated-image">
        <a href="blog.html?id=${post.id}">
        <img src="${post.jetpack_featured_media_url}"></div></div></a>
        `


    })
    
}
getPopularPosts(randomPostUrl); 






const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('toggle-menu'),
      closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click',()=>
{
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click',()=>
{
    navMenu.classList.remove('show')
})



















/*

async function getPost(){

        const response = await fetch(baseUrl);
        const posts = await response.json();
        displayPost(posts);


}
getPost();


function displayPost(posts){
    latestPostsContainer.innerHTML +=`
    <div class=latest-posts-post>
    <a href="post.html?id=${posts.id}"> <span> ${posts.title.rendered} </span></a>
    <img src="${posts.jetpack_featured_media_url}">
    </div>`


}*/