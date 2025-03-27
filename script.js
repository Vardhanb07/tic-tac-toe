const gameboard = (function(){
    let firstPlayerName = ''
    let secondPlayerName = ''
    let firstPlayerGameChoices = []
    let secondPlayerGameChoices = []
    function firstPlayer(...firstPlayerChoices){
        let choices = Array.prototype.slice.call(firstPlayerChoices)
        choices.forEach(choice => {
            firstPlayerGameChoices.push(choice)
        })
    }
    function secondPlayer(...secondPlayerChoices){
        let choices = Array.prototype.slice.call(secondPlayerChoices)
        choices.forEach(choice => {
            secondPlayerGameChoices.push(choice)
        })
    }
    let firstPlayerWin = false
    let secondPlayerWin = false
    function decideWin(x , o , first, second){
        if(x.includes('1') && x.includes('2') && x.includes('3')){
            firstPlayerWin = true
        }else if(x.includes('4') && x.includes('5') && x.includes('6')){
            firstPlayerWin = true
        }else if(x.includes('7') && x.includes('8') && x.includes('9')){
            firstPlayerWin = true
        }else if(x.includes('1') && x.includes('4') && x.includes('7')){
            firstPlayerWin = true
        }else if(x.includes('2') && x.includes('5') && x.includes('8')){
            firstPlayerWin = true
        }else if(x.includes('3') && x.includes('6') && x.includes('9')){
            firstPlayerWin = true
        }else if(x.includes('1') && x.includes('5') && x.includes('9')){
            firstPlayerWin = true
        }else if(x.includes('3') && x.includes('5') && x.includes('7')){
            firstPlayerWin = true
        }
        if(o.includes('1') && o.includes('2') && o.includes('3')){
            secondPlayerWin = true
        }else if(o.includes('4') && o.includes('5') && o.includes('6')){
            secondPlayerWin = true
        }else if(o.includes('7') && o.includes('8') && o.includes('9')){
            secondPlayerWin = true
        }else if(o.includes('1') && o.includes('4') && o.includes('7')){
            secondPlayerWin = true
        }else if(o.includes('2') && o.includes('5') && o.includes('8')){
            secondPlayerWin = true
        }else if(o.includes('3') && o.includes('6') && o.includes('9')){
            secondPlayerWin = true
        }else if(o.includes('1') && o.includes('5') && o.includes('9')){
            secondPlayerWin = true
        }else if(o.includes('3') && o.includes('5') && o.includes('7')){
            secondPlayerWin = true
        }
        if(secondPlayerWin == true && firstPlayerWin == true){
            return 'It\'s a tie!'
        }else if(secondPlayerWin == true){
            return  `${second} wins!`
        }else if(firstPlayerWin == true){
            return `${first} wins!`
        }else {
            return 'It\'s a tie'
        }
    }
    return {firstPlayer, secondPlayer, decideWin, firstPlayerName, secondPlayerName, firstPlayerGameChoices, secondPlayerGameChoices} 
})()
let c = 0
const cols = document.querySelectorAll(".col")
cols.forEach(col => {
    col.addEventListener('click', function gameLogic(event) {
        if(!(gameboard.firstPlayerName == '') && !(gameboard.secondPlayerName == '')){
            const dataNo = col.getAttribute('data-no')
            c++
            if(!(c%2)){
                gameboard.firstPlayer(dataNo)
                col.style.backgroundColor = 'white'
                col.style.backgroundImage = 'url(./assets/svgs/alpha-o.svg)'
                col.style.backgroundRepeat = 'no-repeat'
                col.style.backgroundPosition = 'center'
                col.setAttribute('data-used', 'used')
                document.querySelector('.player-name').textContent = `${gameboard.firstPlayerName}'s turn!`
                let rstring = gameboard.decideWin(gameboard.secondPlayerGameChoices, gameboard.firstPlayerGameChoices, gameboard.firstPlayerName, gameboard.secondPlayerName)
                let first = gameboard.firstPlayerName
                let second = gameboard.secondPlayerName
                if(rstring === `${first} wins!` || rstring === `${second} wins!`){
                    document.querySelector('.player-name').textContent = rstring
                    document.querySelector('.game').remove()
                    gameboard.firstPlayerGameChoices = []
                    gameboard.secondPlayerGameChoices = []
                }
            }else {
                gameboard.secondPlayer(dataNo)
                col.style.backgroundColor = 'white'
                col.style.backgroundImage = 'url(./assets/svgs/alpha-x.svg)'
                col.style.backgroundRepeat = 'no-repeat'
                col.style.backgroundPosition = 'center'
                col.setAttribute('data-used', 'used')
                let rstring = gameboard.decideWin(gameboard.secondPlayerGameChoices, gameboard.firstPlayerGameChoices,gameboard.firstPlayerName, gameboard.secondPlayerName)
                let first = gameboard.firstPlayerName
                let second = gameboard.secondPlayerName
                if(c < 9){
                    document.querySelector('.player-name').textContent = `${gameboard.secondPlayerName}'s turn!`
                }
                if(rstring === `${first} wins!` || rstring === `${second} wins!`){
                    document.querySelector('.player-name').textContent = rstring
                    document.querySelector('.game').remove()
                    gameboard.firstPlayerGameChoices = []
                    gameboard.secondPlayerGameChoices = []
                }
            }
        }
    },{once : true})
})
const start = document.querySelector('.start')
start.addEventListener('click', () => {
    gameboard.firstPlayerName = document.querySelector('#player-1').value
    gameboard.secondPlayerName = document.querySelector('#player-2').value
    if(!(gameboard.firstPlayerName == '') && !(gameboard.secondPlayerName == '')){
    document.querySelector('.players-info').style.display = 'none'
    let div = document.createElement('div')
    let p = document.createElement('p')
    p.classList.add('player-name')
    p.textContent = `${gameboard.firstPlayerName}'s turn!`
    div.appendChild(p)
    document.querySelector('.player-space').appendChild(div)
    }
})
const restart = document.querySelector('.restart')
restart.addEventListener('click', () => {
    console.log(gameboard.firstPlayerGameChoices)
    console.log(gameboard.secondPlayerGameChoices)
    if(gameboard.firstPlayerName != '' && gameboard.secondPlayerName != ''){
        if(document.querySelector('.game') != null){
            document.querySelector('.game').remove()
        }
        let game = document.createElement('div')
        game.classList.add('game')
        for(let i = 0; i < 3 ;i++){
            let row = document.createElement('div')
            row.classList.add('row')
            for(let j = 0; j < 3; j++){
                let col = document.createElement('div')
                col.classList.add('col')
                row.appendChild(col)
            }
            game.appendChild(row)
        }
        document.querySelector('.background').appendChild(game)
    }
})