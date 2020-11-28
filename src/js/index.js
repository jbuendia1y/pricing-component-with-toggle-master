const switch__bar = document.getElementsByClassName('switch__bar')[0]
const button = switch__bar.querySelector('.switch__circle')


const prices = document.querySelectorAll('.stats__amount')

const monthlyPrices = ['19.99','24.99','39.99']
const annuallyPrices = ['199.99','249.99','399.99']

const changePrice = ()=>{
    console.log(prices[0])
    if(cont == 0){
        for(let i = 0; i<prices.length;i++){
            prices[i].textContent = annuallyPrices[i]
        }
        cont++
    }else if(cont > 0){
        for(let i = 0; i<prices.length;i++){
            prices[i].textContent = monthlyPrices[i]
        }
        cont--
    }
}

let cont = 0

button.addEventListener('click',()=>{
    positionButton()
    changePrice()
})

const positionButton = ()=>{
    button.classList.toggle('active__circle')
}