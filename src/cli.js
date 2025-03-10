import readlineSync from 'readline-sync';

export default function welcome(description) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  if (description !== undefined) {
    console.log(description);
  }
  return name;
}
export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
export const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export const getRandomNumber = (min = 1, max = 100) => {
  const range = max - min + 1
  return Math.floor(Math.random() * range) + min
}
export const getAnswerQestion = {
  '+': function (x, y) { return x + y; },
  '-': function (x, y) { return x - y; },
  '*': function (x, y) { return x * y; },
};

export function progression() {

  let arr = []

  const start = getRandomNumber()
  const length = getRandomNumber(5, 10)
  const step = getRandomNumber()


  for (let i = 0; i < length; i++) {
    arr.push(start + step * i)
  }

  const randIndex = getRandomNumber(5, arr.length)
  const correctNumber = arr[randIndex]
  arr[randIndex] = '..'

  return { arr, correctNumber }

}


