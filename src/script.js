import { BASE_url,API_key } from "./API";

const form=document.getElementById('form')
const searchInp=document.getElementById('searchInp')
const searchIcon=document.getElementById('searchIcon')
const dropdownbtn=document.getElementById('dropdown')
const div1=document.getElementById('div1')
const div2=document.getElementById('div2')
const div3=document.getElementById('div3')
const div4=document.getElementById('div4')
const div5=document.getElementById('div5')
const div6=document.getElementById('div6')
const div7=document.getElementById('div7')
const item1=document.getElementById('item1')
const item2=document.getElementById('item2')
const item3=document.getElementById('item3')
const content=document.getElementById('content')
const times=document.getElementById('times')

const items=[item1,item2,item3]

searchIcon.addEventListener('click',()=>{
    form.classList.remove('hidden')
})
times.addEventListener('click',()=>{
    form.classList.add('hidden')
})
dropdownbtn.addEventListener('click',()=>{
    content.style.display='block'
})
items.forEach(item=>item.addEventListener('click',()=>{
    dropdownbtn.textContent=item.textContent
    content.style.display='none'
}))
const request=async ()=>{
    const response=await fetch(BASE_url,{
        headers:{'X-Api-Key':API_key}
    })
    let data=await response.json()

    await data.articles.slice(0,9).forEach((item)=>{
        div1.innerHTML +=`
            <div class="divs">
              <h3>${item.title.slice(0,60)}</h3>
              <p>${item.source.name}</p>
              <hr/>
            </div>
        `
    })
    await data.articles.slice(0,1).forEach(item=>{
        div2.innerHTML +=`
            <div><h3>${item.title.slice(0,100)}</h3> <p>${item.description}</p> </div>
            <div><img src=${item.urlToImage} /></div>
        `
    })
    await data.articles.slice(0,6).forEach(item=>{
        div3.innerHTML +=`
            <div>
              <h3>${item.title.slice(0,70)}</h3>
              <img src=${item.urlToImage} alt="medium" />
            </div>
        `
    })
    await data.articles.slice(4,5).forEach(item=>{
        div5.innerHTML=`
        <div class="div51">
            <img src=${item.urlToImage} alt="medium" />
            <p>Jahon | 21:40 / 01.07.2025</p>
            <h2>${item.title}</h2>
            <p class='p'>${item.description}</p>
        </div>
        `
    })
    await data.articles.slice(10,13).forEach(item=>{
    div6.innerHTML +=`
        <div class="div61">
            <img src=${item.urlToImage}/>
            <p>17:56 / 21.09.2024</p>
            <h4>${item.title.slice(0,100)}</h4>
        </div>
        `
    })
    await data.articles.slice(14,16).forEach(item=>{
    div7.innerHTML +=`
        <div class="div71">
            <img src=${item.urlToImage} alt="medium" />
            <p>Jahon | 21:40 / 01.07.2025</p>
            <h4>${item.title.slice(0,80)}</h4>
        </div>
       `
    })
    console.log(data.articles);
    
}
request()
