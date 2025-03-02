#!/usr/bin/env node
import cli from '../src/cli.js'
import game from '../bin/brain-even.js'
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log('Hello, ' + name + '!')
console.log('Answer "yes" if the number is even, otherwise answer "no".')
// cli()