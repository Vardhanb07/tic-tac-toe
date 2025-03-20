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
    let playerGameChoices = []
    let computerGameChoices = []
    function player(...playerChoices){
        let choices = Array.prototype.slice.call(playerChoices)
        choices.forEach(choice => {
            gameboardObject.choice = true
            playerGameChoices.push(choice)
        })
    }
    function computer(...computerChoices){
        let choices = Array.prototype.slice.call(computerChoices)
        choices.forEach(choice => {
            gameboardObject.choice = true
            computerGameChoices.push(choice)
        })
    }
    function decideWin(x = playerGameChoices){
        if(x.includes(1) && x.includes(2) && x.includes(3)){
            return 'You win!'
        }else if(x.includes(4) && x.includes(5) && x.includes(6)){
            return 'You win!'
        }else if(x.includes(7) && x.includes(8) && x.includes(9)){
            return 'You win!'
        }else {
            return 'You lose!'
        }
    }
    return {player, computer, decideWin} 
})()
gameboard.player(1, 2, 3)
gameboard.computer(3, 4, 7)
console.log(gameboard.decideWin())