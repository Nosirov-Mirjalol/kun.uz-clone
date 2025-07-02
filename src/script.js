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
const card=document.getElementById('simleCard')
const div7=document.getElementById('div7')
const item1=document.getElementById('item1')
const item2=document.getElementById('item2')
const item3=document.getElementById('item3')
const section=document.getElementById('yangilik')
const section2=document.getElementById('yangilik2')
const content=document.getElementById('content')
const times=document.getElementById('times')
const israil=document.getElementById('bignew')
const news=document.getElementById('news')
const intervyu=document.getElementById('intervyu')
const div10=document.getElementById('div10')
const div11=document.getElementById('div11')
const div12=document.getElementById('div12')

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
            <p>17:56 / 21.09.2024</p>
            <h4>${item.title.slice(0,100)}</h4>
        </div>
        `
    })
    await data.articles.slice(11,13).forEach(item=>{
    div7.innerHTML +=`
        <div class="div71">
            <img src=${item.urlToImage} alt="medium" />
            <p>Jahon | 21:40 / 01.07.2025</p>
            <h4>${item.title.slice(0,80)}</h4>
        </div>
       `
    })
    await data.articles.slice(4,12).forEach(item=>{
        section.innerHTML +=`
            <div class="ziga">
            <img src=${item.urlToImage || "https://storage.kun.uz/source/thumbnails/_medium/11/U-Am9UIq-hbx2J3GUH-O1PJsb_Jwwn0a_medium.jpg"} alt="medium" />
            <h3>${item.title}</h3>
            <p>O‘zbekiston | 21:23 / 19.09.2024</p>
        </div>
        `
    })
    await data.articles.slice(5,13).forEach(item=>{
        section2.innerHTML +=`
            <div class="ziga">
            <img src=${item.urlToImage || "https://storage.kun.uz/source/thumbnails/_medium/11/U-Am9UIq-hbx2J3GUH-O1PJsb_Jwwn0a_medium.jpg"} alt="medium" />
            <h3>${item.title}</h3>
            <p>O‘zbekiston | 21:23 / 19.09.2024</p>
        </div>
        `
    })
    await data.articles.slice(3,4).forEach(item=>{
        israil.innerHTML=`
            <img src=${item.urlToImage} />
            <div>
              <h2>${item.title.slice(0,40)}</h2>
              <p>${item.description}</p>
            </div>
        `
    })
    await data.articles.slice(8,12).forEach(item=>{
        news.innerHTML +=`
          <img src=${item.urlToImage} />
        <div>
          <p>21:11/28.06.2025</p>
          <h3>${item.title.slice(0,60)}</h3>
          <hr/>
        </div>
        `
    })
    await data.articles.slice(9,13).forEach(item=>{
        intervyu.innerHTML +=`
          <div>
            <img src=${item.urlToImage} alt='img' />
            <h3>${item.title.slice(0,100)}</h3>
            <i class="ri-play-circle-line"></i>
            <p>Jahon</p>
          </div>
        `
    })
    await data.articles.slice(2,4).forEach(item=>{
        card.innerHTML +=`
          <div class='cardDiv'>
            <img src=${item.urlToImage} alt="img" />
            <h3 style="color: white;">${item.title.slice(0,60)}</h3>
          </div>
        `
    })
    await data.articles.slice(7,8).forEach(item=>{
        div10.innerHTML=`
          <div class="divcha">
          <img src=${item.urlToImage} alt="medium" />
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          </div>
        `
    })
    await data.articles.slice(3,6).forEach(item=>{
        div11.innerHTML +=`
          <div id="div2">
            <img src=${item.urlToImage} alt="medium" />
            <div>
              <i class="ri-play-circle-line"></i>
              <p>Jamiyat</p>
              <h5>${item.title.slice(0,100)}</h5>
            </div>
          </div>
          <hr />
        `
    })
    await data.articles.slice(2,3).forEach(item=>{
        div12.innerHTML=`
          <div class="devcha">
          <img src=${item.urlToImage} alt="medium" />
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          </div>
        `
    })
    console.log(data.articles);
}
request()
