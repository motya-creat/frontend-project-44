#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import welcome from '../src/cli';
// calcGame(welcome())

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
const getAnswerQestion = {
    "+": function(x, y) {return x + y},
    "-": function(x, y) {return x - y},
    "*": function(x, y) {return x * y}
}

export const calculateGame = (name) =>{
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
            return
        }
        
    }
}
calculateGame()