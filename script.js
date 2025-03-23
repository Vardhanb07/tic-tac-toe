const gameboard = (function(){
    let gameboardObject = {
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,
        6 : false,
        7 : false,
        8 : false,
        9 : false
    }
    let firstPlayerName = ''
    let secondPlayerName = ''
    let firstPlayerGameChoices = []
    let secondPlayerGameChoices = []
    function firstPlayer(...firstPlayerChoices){
        let choices = Array.prototype.slice.call(firstPlayerChoices)
        choices.forEach(choice => {
            gameboardObject.choice = true
            firstPlayerGameChoices.push(choice)
        })
    }
    function secondPlayer(...secondPlayerChoices){
        let choices = Array.prototype.slice.call(secondPlayerChoices)
        choices.forEach(choice => {
            gameboardObject.choice = true
            secondPlayerGameChoices.push(choice)
        })
    }
    let firstPlayerWin = false
    let secondPlayerWin = false
    function decideWin(x = firstPlayerGameChoices, y = secondPlayerGameChoices){
        if(x.includes(1) && x.includes(2) && x.includes(3)){
            firstPlayerWin = true
        }else if(x.includes(4) && x.includes(5) && x.includes(6)){
            firstPlayerWin = true
        }else if(x.includes(7) && x.includes(8) && x.includes(9)){
            firstPlayerWin = true
        }else if(x.includes(1) && x.includes(4) && x.includes(7)){
            firstPlayerWin = true
        }else if(x.includes(2) && x.includes(5) && x.includes(8)){
            firstPlayerWin = true
        }else if(x.includes(3) && x.includes(6) && x.includes(9)){
            firstPlayerWin = true
        }else if(x.includes(1) && x.includes(5) && x.includes(9)){
            firstPlayerWin = true
        }else if(x.includes(3) && x.includes(5) && x.includes(7)){
            firstPlayerWin = true
        }
        if(y.includes(1) && y.includes(2) && y.includes(3)){
            secondPlayerWin = true
        }else if(y.includes(4) && y.includes(5) && y.includes(6)){
            secondPlayerWin = true
        }else if(y.includes(7) && y.includes(8) && y.includes(9)){
            secondPlayerWin = true
        }else if(y.includes(1) && y.includes(4) && y.includes(7)){
            secondPlayerWin = true
        }else if(y.includes(2) && y.includes(5) && y.includes(8)){
            secondPlayerWin = true
        }else if(y.includes(3) && y.includes(6) && y.includes(9)){
            secondPlayerWin = true
        }else if(y.includes(1) && y.includes(5) && y.includes(9)){
            secondPlayerWin = true
        }else if(y.includes(3) && y.includes(5) && y.includes(7)){
            secondPlayerWin = true
        }
        if(secondPlayerWin == true && firstPlayerWin == true){
            return 'It\'s a tie!'
        }else if(secondPlayerWin == true){
            return ' lose!'
        }else if(firstPlayerWin == true){
            return 'You win!'
        }
    }
    return {firstPlayer, secondPlayer, decideWin, gameboardObject, firstPlayerName, secondPlayerName} 
})()
const cols = document.querySelectorAll('.col')
cols.forEach(col => {
    col.addEventListener('click', () => {
        const dataNo = col.getAttribute('data-no')
        gameboard.gameboardObject[dataNo] = true;
        col.style.backgroundColor = 'white'
        col.style.backgroundImage = 'url(./assets/svgs/alpha-x.svg)'
        col.style.backgroundRepeat = 'no-repeat'
        col.style.backgroundPosition = 'center'
    })
})
const start = document.querySelector('.start')
start.addEventListener('click', () => {
    gameboard.firstPlayerName = document.querySelector('#player-1').value
    gameboard.secondPlayerName = document.querySelector('#player-2').value
    if(!(gameboard.firstPlayerName == '') && !(gameboard.secondPlayerName == '')){
    console.log(gameboard.firstPlayerName)
    console.log(gameboard.secondPlayerName)
    document.querySelector('.players-info').style.display = 'none'
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.classList.add = 'system-message'
    p.textContent = 'Start the game!'
    div.appendChild(p)
    p = document.createElement('p')
    p.classList.add = 'player-name'
    p.textContent = `It's ${gameboard.firstPlayerName} turn!`
    div.appendChild(p)
    document.querySelector('.player-space').appendChild(div)
    }
})