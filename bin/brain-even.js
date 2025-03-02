#!/usr/bin/env node
import readlineSync from 'readline-sync';
function isEven() {  
    randNumber = Math.floor(Math.random(10 - 1) * 10)
    if( randNumber % 2 == 0){
        console.log('yes')
    }else{
        console.log('no')
    }
}
function game(){
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${randNumber}`)
    const answer = readlineSync.question('answer')
    const correct = isEven(randNumber)
    if(correct === answer){
        console.log('Correct')
    }else{
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
        console.log("Let's try again, Bill!")
    }
}
game()