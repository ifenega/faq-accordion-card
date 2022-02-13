var ul = document.querySelector('ul')
var li = document.querySelectorAll('li')
console.log(ul)
var p = document.querySelectorAll('.p-tag')
console.log(p)
var img = document.getElementsByClassName('img4')
console.log(img)



li.forEach(function (i) {
    i.addEventListener('click', (e)=>{
        if( e.target.classList.contains('faq')) {
            let j = e.target.children[1];
            let b= e.target.children[2]
           j.classList.toggle('active')
           b.classList.toggle('active')
           b.addEventListener('click',(e) => {
               if (e.target.classList.contains('active')) {
                   j.classList.toggle('active')
                   b.classList.toggle('active')
               }
           })
        } else if(e.target.classList.contains('img4')) {
            var k = e.target.nextElementSibling;
            k.classList.toggle('active')
            e.target.classList.toggle('active')
                
        } 
        else {
            var m = e.target.nextElementSibling;
            var z = e.target.nextElementSibling.nextElementSibling
            console.log(z)
            m.classList.toggle('active')
            z.classList.toggle('active')
        }
        
        
        
        
        
       

        
    })

   
})

// li.forEach(addEventListener('click', e=> {
//     if(e.target.classList.contains('img4')) {
//         var m = e.target.parentElement;
//         m.child[2].classList.toggle("active")
//     }
// }))







