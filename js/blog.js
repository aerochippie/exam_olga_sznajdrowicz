const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

const baseUrl = `https://rougecub.com/wp-json/wp/v2/posts/${id}`
const blogContainer = document.querySelector(".blog");


    async function getBlog(){
        try{
            const response = await fetch(baseUrl);
            const blogs = await response.json();
            displayBlog(blogs);
    
        }
        catch(error){
            console.error(error)
            console.log("An error occured")
            blogContainer.innerHTML="Something went wrong :(";
        }
       
    }
    getBlog();

function displayBlog(blogs){
    blogContainer.innerHTML +=`
    <div class="generated-blog">

    <h1>${blogs.title.rendered}</h1>
    ${blogs.content.rendered}
    </div>
    `

}

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


