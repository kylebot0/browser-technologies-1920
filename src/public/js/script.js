const form = document.querySelector('form')
const buttons = document.querySelectorAll('a')
const body = document.querySelector('body')
const header = document.querySelector('main')
const main = document.querySelector('main')
const sparklecont = document.querySelector('.sparkleCont')
const madePolls = document.querySelector(".pollsMade");
const copyCont = document.querySelector("#pollCode ~ .button");

fade()

function fade() {
    sparklecont.sparkle({
        count: 50,
    })
    body.classList.remove('no-js-body')
    main.classList.remove('no-js-container')
    if(madePolls){
        madePolls.classList.remove('no-js-container-polls')
    }
    if(copyCont){
        copyCont.classList.remove('no-js-container-button')
    }
    main.classList.add('fadeIn')
}
setTimeout(() => {
    body.classList.add('bc')

}, 200)
setTimeout(() => {
    main.classList.remove('fadeIn')
    main.classList.add('show')

}, 600)

if (form) {
    const formbuttons = document.querySelectorAll('.poll-btn')
    console.log(formbuttons)
    formbuttons.forEach(item => {
        item.addEventListener('click', function () {
            console.log('1')
            let attr = item.getAttribute('formaction')
            form.setAttribute('action', attr)
            form.addEventListener('submit', animatePage)
        })
    })
    if (formbuttons.length == 0) {
        form.addEventListener('submit', animatePage)
    }
}
if (buttons) {
    buttons.forEach(item => {
        item.addEventListener('click', function (e) {
            animateButton(e, item)
        })
    })

}
const pollCode = document.querySelector('#pollCode')

if(window.localStorage) {
    let items = getItems()
    let container = document.querySelector(".pollsMade > div");
    let header = document.querySelector(".pollsMade > div > h2")
    console.log(items)
    if(items == 0){
        if(madePolls){
            madePolls.remove()

        }
    } else {
        if(madePolls){
            let markup = ``

            items.forEach((item) => {
              markup = `
              <div class="button">
              <div class="translate"></div>
              <a href="/result/${item}">${item}</a>
            </div>`
            container.insertAdjacentHTML("beforeend", markup);
            })
        } else {

        }
       
    }
} 

if(pollCode){
let button = document.getElementById('copy')
button.addEventListener('click', function(){
    copy(button)
})
let code = pollCode.textContent
code = code.replace(/(\r\n|\n|\r)/gm, "")
code = Number(code)
setItems(code)
}
function getItems() {
    if (window.localStorage.length == 0) {
        return window.localStorage.length
    } else if (window.localStorage.polls.length >= 1) {
        let parsed = JSON.parse(window.localStorage.getItem("polls"));
        return parsed;
    }
}

function setItems(data) {
    console.log(data)
    let items = getItems()
    let arr = []
    if(items.length > 1){
        items.forEach((item) => {
            arr.push(item)
        })
    } else if(items.length = 1){
        arr.push(items)
    }
    
   
    arr.push(data)

    return window.localStorage.setItem("polls", JSON.stringify(arr))
}


function animatePage(e) {
    e.preventDefault()
   sparklecont.classList.add('fade')
    header.classList.add('fadeOut')
    main.classList.add('fadeOut')
    body.classList.remove('bc')
    	
    function nextPage() {
        console.log('2')
        form.submit()
    }
    window.setTimeout(nextPage, 1000)
}


function copy(){
    let pollInput = document.getElementById('pollInput')
    pollInput.type = 'text';
    pollInput.select();
    pollInput.setSelectionRange(0, 99999);

  document.execCommand("copy");
  pollInput.type = 'hidden';
  alert("Copied the text: " + pollInput.value);
}

function animateButton(e, button) {
    console.log(e)
    e.preventDefault()
    
    sparklecont.classList.add('fade')
    header.classList.add('fadeOut')
    main.classList.add('fadeOut')
    body.classList.remove('bc')

    function nextPage() {
        window.location.href = button.href
    }
    window.setTimeout(nextPage, 1000)

}