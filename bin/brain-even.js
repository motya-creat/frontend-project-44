#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

export default function game(name) {
    let i = 0
    while( i < 3){
        const randNumber = Math.floor(Math.random(10 - 1) * 10)
        console.log(`Question: ${randNumber}`)
        const answer = readlineSync.question('Your answer:')
        const correct = isEven(randNumber)
        
        if (correct === answer) {
            console.log('Correct')
            i++
        } else {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
            console.log("Let's try again, Bill!")
            return
        }
    }
    console.log(`Congratulations, Bill`)
}
game()