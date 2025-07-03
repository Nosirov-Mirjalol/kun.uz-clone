
const body=document.getElementById('body')
const head=document.getElementById('head')
const creditimg=document.getElementById('credit')
const dropdownbtn=document.getElementById('dropdown')
const dropdownDiv=document.getElementById('dropdownDiv')
const content=document.getElementById('content')
const barContainer=document.getElementById('barContainer')
const nav=document.getElementById('nav')
const searchbtn=document.getElementById('searchbtn')
const form=document.getElementById('form')
const searchIcon=document.getElementById('searchIcon')
const searchInp=document.getElementById('searchInp')
const barTimes=document.getElementById('barTimes')
const vatan=document.getElementById('vatan')
const vatan1=document.getElementById('vatan1')
const vatan2=document.getElementById('vatan2')

const darkModes=[barContainer,nav]
const darkbtn=[dropdownDiv,dropdownbtn,content,searchbtn,searchIcon,form,searchInp,barTimes]

export const dark=()=>{
    body.classList.add('dark-body');
    creditimg.src='https://kun.uz/assets/66844a27/img/business-bg-dark.png'
    head.classList.add('dark-body')
    vatan.classList.remove('Vatanga')
    vatan.classList.add('vatan')
    vatan1.classList.add('vatan')
    vatan1.style.backgroundColor='#172b33 !important'
    vatan2.classList.add('vatan')
    vatan2.style.backgroundColor='#173125 !important'


    darkModes.forEach(item=>{
        item.classList.add('dark-mode')
    })
    darkbtn.forEach(item=>{
        item.style.backgroundColor='#1e242d'
        item.style.boxShadow='none'
    })

}