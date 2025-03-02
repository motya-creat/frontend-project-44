#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumber = Math.floor(Math.random() * 100)

export default function calc(){
    console.log('What is the result of the expression?')
    const answer =  readlineSync.question('Question: ')
}