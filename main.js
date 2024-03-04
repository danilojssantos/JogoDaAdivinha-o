
// variáveis 

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos 

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

//funçao callback

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
     // console.log(randomNumber)
    if (Number(inputNumber.value)== randomNumber) {

        toggleScree()
        
     //   console.log(`Acertou em ${xAttempts} tentativas!`)
        document
            .querySelector(".screen2 h2 ")
            .innerHTML = `Acertou em ${xAttempts} Tentativas`
    }

    inputNumber.value = ""

    xAttempts++

    //console.log(xAttempts)
}


function handleResetClick() {
    toggleScree()
    xAttempts = 1

}

function toggleScree() {

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

}
