const switch__bar = document.getElementsByClassName('switch__bar')[0]
const button = switch__bar.querySelector('.switch__circle')

const toogleStyles = ()=>{
    button.classList.toggle('active__circle')
}

button.addEventListener('click',()=>{
    toogleStyles()
})