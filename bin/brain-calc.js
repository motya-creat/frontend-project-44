#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import welcome from '../src/cli';

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
const getAnswerQestion = {
    "+": function(x, y) {return x + y},
    "-": function(x, y) {return x - y},
    "*": function(x, y) {return x * y}
}

export const calcGame = (name) =>{
    let i = 0
    const signs = ['+','-','*']
    while (i < 3){
        const firstNumber = getRandomNumber(25, 55)
        const secondNumber = getRandomNumber(25, 55)
        const sign = signs[getRandomNumber(0, 2)]
        const answerOfQuestion = getAnswerQestion[sign] (firstNumber, secondNumber)
        console.log(`Quetion: ${firstNumber} ${sign} ${secondNumber}`)
        const userAnswer = readlineSync.question(`Your answer: `)
        if (userAnswer == answerOfQuestion ){
            i++
            console.log('Correct!')
        }else{
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answerOfQuestion}'.\nLet's try again, Sam! `)
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}
calcGame()