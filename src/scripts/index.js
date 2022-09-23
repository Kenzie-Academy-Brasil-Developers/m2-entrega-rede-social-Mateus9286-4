function listUsers(arr){ 
   const Sugest  = arr.filter((element)=>element.id == sugestUsers[0] || element.id == sugestUsers[1] || element.id == sugestUsers[2]) 
   
   Sugest.forEach(element => {
          templateUsers(element)
   });

   }
   
   function templateUsers(arr){
       const container = document.getElementById("Sugestoes")
       const div = document.createElement("div")
       const picture = document.createElement("picture")
       const img = document.createElement("img")
       const divInfo = document.createElement("div")
       const h2 = document.createElement("h2")
       const p = document.createElement("p")
       const button = document.createElement("button")
   
       div.classList.add("perfilSeguir")
       img.classList.add("img")
       divInfo.classList.add("perfilInfo")
       h2.classList.add("nome")
       p.classList.add("profiçao")
       button.classList.add("btnSeguir")
   
       img.src = arr.img
       img.alt = arr.user
       h2.innerText = arr.user
       p.innerText = arr.stack || ""
       button.innerText = "Seguir"
   
       picture.append(img)
       divInfo.append(h2,p,button)
       div.append(picture,divInfo)
       container.append(div)
   
       return div
   }
   listUsers(users)



   function templateUserPost(){
    const Filter =  users.filter((element)=> element.id == .2 || element.id == 4 || element.id == 5)
    
    Filter.forEach((element,i,arr)=>{
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const Perfil = document.createElement("div")
    const picture = document.createElement("picture")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const conte = document.createElement("div")

    Perfil.classList.add("perfil")
    img.classList.add("img")
    div.classList.add("perfilInfo")
    h2.classList.add("nome")
    p.classList.add("profiçao")
    conte.classList.add("divTitle")
    conte.id = i

    img.src = arr[i].img
    img.alt = arr[i].user
    h2.innerText = arr[i].user
    p.innerText = arr[i].stack

    picture.append(img)
    div.append(h2,p)
    Perfil.append(picture,div)
    li.append(Perfil, conte)
    ul.append(li)
           
    return li

})
}
templateUserPost()


function Posts(){

    posts.forEach((element,i,arr)=>{
    const cont0 = document.getElementById("0")
    const cont1 = document.getElementById("1")
    const cont2 = document.getElementById("2")  
          
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const div = document.createElement("div")
    const button = document.createElement("button")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")

    h2.classList.add("titulo")
    p.classList.add("texto")
    div.classList.add("like")
    button.classList.add("AbrirPost")
    img.classList.add("margin")

    h2.innerText = arr[i].title
    p.innerText = arr[i].text
    button.innerText = "Abrir Post"
    button.id = arr[i].user
    img.src = "./src/assets/heartBlack.png"
    h3.innerText = 28

    div.append(button,img,h3)

    if(i == 0){
       cont0.append(h2,p,div)
    }
    if(i == 1){
        cont1.append(h2,p,div)
     }
     if(i == 2){
        cont2.append(h2,p,div)
     }

})
}
Posts()


function events(){
const btnPost = document.querySelectorAll(`.AbrirPost`)

btnPost.forEach((element)=>{

      element.addEventListener("click",function(event){
           event.preventDefault()
           const ul = document.querySelector(".containerModal")
           ul.innerText = ""
           const id = event.target.id
           const post = users.filter((element)=>element.id == id)
           const postModal = posts.filter((element)=>element.user == id)
           ul.classList.toggle("flex")
           ul.classList.toggle("fundo")
           ul.classList.toggle("z-index")
        post.forEach((element)=>{
         templateModal(element)

        })

        postModal.forEach((element)=>{
         templatePostModal(element)

        })
       })

      })
     
   }
   events()

  


   

