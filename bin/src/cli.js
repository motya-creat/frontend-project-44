import readlineSync from 'readline-sync';

export default function cli () {
    const name = readlineSync.question('May I have your name?')
    return console.log('Hello,' + ' ' + name + '!')
}
