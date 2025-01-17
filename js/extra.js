const loadInitialData = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const getData = await res.json();
    const getPosts = getData.posts;
    getPost(getPosts);
}

const getPost=(getPosts)=>
{
    const showPost = document.getElementById('posts')
    getPosts.forEach(post => {
        // console.log(post)
        const creating = document.createElement('div')
        creating.innerHTML= `<div class="card  mt-5 flex-row bg-[#797DFC1A] ">
        <div class="p-5">
            <div class="avatar indicator">
                <span class="indicator-item badge ${post.isActive? "badge-error":"badge-success"}"></span>
                <div class="w-20 h-20 rounded-lg">
                    <img alt="Tailwind CSS examples"
                        src=" ${post.image} "/>
                </div>
            </div>
        </div>
        <div class="card-body items-left text-left">
            <div class="flex flex-row">
                <p>#${post.category}</p>
                <p>Author : ${post.author.name}</p>
            </div>
            <h2 class="card-title">${post.title}</h2>
            <p>${post.description}</p>
            <hr>
            <div class="card-actions justify-end">
                <img src="images/Group 13.png" alt="">
                <p>${post.
                    comment_count}</p>
                <img src="images/Group 16.png" alt="">
                <p>${post.view_count}</p>
                <img src="images/Group 18.png" alt="">
                <p>${post.posted_time
                } min</p>

                <button onclick='touch("${post.description}","${post.view_count}")'class="btn rounded-full">
                <img src="images/Group.png" alt=""></button>
            </div>
        </div>

    </div>`
    showPost.appendChild(creating)

    })

   loading(false);
   
}

const showData = async (inputFieldText) => {
    loading(true);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${inputFieldText}`);
    const getData = await res.json();
    const getPosts = getData.posts;
    const showPost = document.getElementById('posts');
    
    showPost.innerHTML = '';
    
    getPost(getPosts);
}

 const getInput=()=>{

    const inputField=document.getElementById("input")
   
    const inputFieldText= inputField.value ;
   
    showData(inputFieldText);
 }
 window.onload = loadInitialData;

 const loading = (isSpining)=>{
    const load = document.getElementById("spinner")
    
    if(isSpining){
        load.classList.remove('hidden')
    }
    else{
        load.classList.add('hidden')
    }

 }

 const touch = async (description, view_count) => {
    console.log(description, view_count);

    try {
        const getTitle = document.getElementById("show-title");
      

        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
            <div class="card-body">
                <div class="card bg-white shadow-2xl">
                    <div class="card-body flex flex-row">
                        <p>${description}</p>
                        <img src="images/Group 16.png" alt="">
                        <p>${view_count}</p>
                    </div>
                </div>
            </div>`;
        getTitle.appendChild(createDiv);
    } catch (error) {
        console.error('Error appending data:', error);
    }
};

 
const latastPost = async ()=>{
    const  res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    const getName = await res.json()
    console.log(getName)
    getA(getName)
}
 const getA = (getName)=>{
    const getB = document.getElementById("get-B")

getName.forEach(c =>{
    console.log(c)
    const creatingTAg =document.createElement('div')
    creatingTAg.innerHTML=`
    <div class="card card-compact  bg-base-100 shadow-xl mt-5">
                <figure><img src="${c.cover_image}" alt="" /></figure>
                <div class="card-body">
                    <div class=" flex flex-row ">
                        <img src="images/Frame.png" alt=""><p>${c?.
                            author?.posted_date || 'No publish date'}</p>
                    </div>
                  <h2 class="card-title">${
                    c.title}</h2>
                  <p>${
                    c.description
                    }</p>
                  <div class="card-actions justify-start">
                    <div class="avatar">
                        <div class="w-20 rounded-full">
                          <img src="${c.profile_image}" />
                        </div>
                      </div>
                      <div>
                        <h3 class="text-2xl font-bold">${c.author.name}</h3>
                        <p>${c.author?.designation || 'Unknown'}</p>
                      </div>
                  </div>
                </div>
              </div>`
              getB.appendChild(creatingTAg)

});

 }


latastPost();