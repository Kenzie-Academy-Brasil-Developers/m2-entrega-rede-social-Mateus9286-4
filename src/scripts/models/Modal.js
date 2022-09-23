
function templateModal(arr){

    const ul = document.querySelector(".containerModal")
    const li = document.createElement("li")
    const divContainer = document.createElement("div")
    const picture = document.createElement("picture")
    const img = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")

    li.classList.add("perfilModal")
    divContainer.classList.add("flex")
    divContainer.classList.add("tamanho")
    img.classList.add("img")
    div.classList.add("perfilInfo")
    h2.classList.add("nome")
    p.classList.add("profiçao")

    img.src = arr.img
    img.alt = arr.user
    h2.innerText = arr.user
    p.innerText = arr.stack

    picture.append(img)
    div.append(h2,p)
    divContainer.append(picture,div)
    li.append(divContainer)
    ul.append(li)
           
    return li

}

function templatePostModal(arr){
    
    const li = document.querySelector(".perfilModal")
    const div = document.createElement("div")
    const Title = document.createElement("h2")
    const text = document.createElement("p")
    const button = document.createElement("button")

    Title.classList.add("tituloModal")
    text.classList.add("textoModal")
    button.classList.add("btnFechar")
    button.id = "fechar"
    button.addEventListener("click",(event)=>{
        event.preventDefault()
        const ul = document.querySelector(".containerModal")
        ul.classList.toggle("flex")
        ul.classList.toggle("fundo")
        ul.classList.toggle("z-index")
        li.remove()
    })

    Title.innerText = arr.title
    text.innerText = arr.text
    button.innerText = "X" 

    div.append(Title,text,button)
    li.append(div)
    
    return div

}


