const baseUrl = "https://rougecub.com/wp-json/wp/v2/posts"

const postsContainer = document.querySelector(".all-posts")



async function getPosts(url){ 
    
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        postsContainer.innerHTML += `
        <div class="all-posts-generated-image">
        <a href="blog.html?id=${post.id}"> 
        <img src="${post.jetpack_featured_media_url}"></a></div>
        <div class="all-posts-generated-post">
        <a href="blog.html?id=${post.id}"> <span> ${post.title.rendered} </span></a>
        ${post.excerpt.rendered}</div>
        `
    })
}

getPosts(baseUrl);

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


