var ul = document.querySelector('ul')
var li = document.querySelectorAll('li')
console.log(ul)
var p = document.querySelectorAll('.p-tag')
console.log(p)
var img = document.getElementsByClassName('img4')
console.log(img)



li.forEach(addEventListener('click', (e)=>{
    if(e.target.classList.contains('img4')|| e.target.classList.contains('faq')||  e.target.classList.contains('p-tag')) {
        var j = e.target.children[1];
       j.classList.toggle('active')
    
    }
    console.log(e.target)
    
}))



