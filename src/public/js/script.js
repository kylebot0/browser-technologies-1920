const form = document.querySelector('form')
const buttons = document.querySelectorAll('a')
const body = document.querySelector('body')
const header = document.querySelector('main')
const main = document.querySelector('main')

fade()
function fade(){
    body.classList.remove('no-js-body')
    main.classList.remove('no-js-container')
    main.classList.add('fadeIn')
}
setTimeout(()=> {
    body.classList.add('bc')

}, 200)
setTimeout(()=>{
    main.classList.remove('fadeIn')
    main.classList.add('show')
    
}, 600)

if (form) {
    const formbuttons = document.querySelectorAll('.poll-btn')
    console.log(formbuttons)
    formbuttons.forEach(item => {
        item.addEventListener('click', function(){
            console.log('1')
            let attr = item.getAttribute('formaction')
            form.setAttribute('action', attr)
            form.addEventListener('submit', animatePage)
        })
    })
    if(formbuttons.length == 0){
        form.addEventListener('submit', animatePage)
    }
} 
if(buttons){
    buttons.forEach(item => {
        item.addEventListener('click', function(e) {
            animateButton(e, item)
        })    
    })
        
}


function animatePage(e) {
    e.preventDefault()
    header.classList.add('fadeOut')
    main.classList.add('fadeOut')
    body.classList.remove('bc')
    function nextPage(){
        console.log('2')
        form.submit()
    }
    window.setTimeout(nextPage, 1000)
}


function fadeIn() {

}

function animateButton(e, button) {
    console.log(e)
    e.preventDefault()
    header.classList.add('fadeOut')
    main.classList.add('fadeOut')
    body.classList.remove('bc')

    function nextPage() {
        window.location.href = button.href
    }
    window.setTimeout(nextPage, 1000)

}