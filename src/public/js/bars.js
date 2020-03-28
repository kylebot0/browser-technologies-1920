const bars = document.querySelectorAll('.result-bar')
const js = document.querySelectorAll('.no-js')
const totalValue = (parseInt(bars[0].getAttribute('data-value')) + parseInt(bars[1].getAttribute('data-value')))

function calcWidth(val, totalVal) {
    return (val / totalVal) * 100
}
const bar1w = calcWidth(bars[0].getAttribute('data-value'), totalValue)
const bar2w = calcWidth(bars[1].getAttribute('data-value'), totalValue)
const titles = document.querySelectorAll('.result-title')
titles.forEach(item =>{
    item.remove()
})

js.forEach(item =>{
    item.classList.remove('no-js')
})
bars.forEach(item => {
    
    item.addEventListener("mouseover", function(e) {
        let tooltip = document.querySelector(".tooltip")
        let h2 = document.querySelector(".tooltip h2")
        h2.textContent = item.getAttribute('data-value')
        tooltip.classList.add("show")
        tooltip.style.top = (e.clientY - 60 + "px")
        tooltip.style.left = (e.clientX - 75 + "px")
    })
    item.addEventListener("mouseout", function(e) {
        let tooltip = document.querySelector(".tooltip")
        tooltip.classList.remove("show")
    })
})

bars[0].setAttribute("style", `width:${bar1w}%`)
bars[1].setAttribute("style", `width:${bar2w}%`)



