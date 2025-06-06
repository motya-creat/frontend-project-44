#!/usr/bin/env node
import readlineSync from 'readline-sync'
import welcome, { progression } from '../src/cli.js'

export default function progressionGame(name) {
  let i = 0

  while (i < 3) {
    const { arr, correctNumber } = progression()
    console.log(`Question: ${arr.join(' ')}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (`${userAnswer}` === `${correctNumber}`) {
      console.log('Correct!')
      i += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctNumber}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

progressionGame(welcome('What number is missing in the progression?'))
