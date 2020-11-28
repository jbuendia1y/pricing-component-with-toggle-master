const switch__bar = document.getElementsByClassName('switch__bar')[0]
const button = switch__bar.querySelector('.switch__circle')


const prices = document.querySelectorAll('.stats__amount')

const monthlyPrices = ['19.99','24.99','39.99']
const annuallyPrices = ['199.99','249.99','399.99']

const changePrice = ()=>{
    if(cont == 0){
        for(let i = 0; i<prices.length;i++){
            prices[i].textContent = annuallyPrices[i]
            animation(i)
        }
        cont++
    }else if(cont > 0){
        for(let i = 0; i<prices.length;i++){
            prices[i].textContent = monthlyPrices[i]
            animation(i)
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

const animation = (i)=>{
    if(cont==0){
        prices[i].classList.toggle('animate__headShake')
    }else if(cont>0){
        prices[i].classList.toggle('animate__headShake')
        prices[i].classList.toggle('animate__shakeX')
        setTimeout(()=>{
            prices[i].classList.toggle('animate__shakeX')
        },1000)
    }
}