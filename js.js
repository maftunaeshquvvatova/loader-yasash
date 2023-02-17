//set time out
// setTimeout(function(){
// alert('salom')    
// }, 2000)
// setInterval(function(){
//     alert('Maftuna')
// }, 3000)
window.addEventListener('DOMContentLoaded',()=>{
    const loader = document.querySelector('.loader')

setTimeout(handler=()=>{
    loader.style.opcity='0'
    setTimeout(()=>{
        loader.style.display='none'
    },500)
    loader.style.display='none'
},8000)
})