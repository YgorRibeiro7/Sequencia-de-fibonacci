function isFibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b === n;
  }
  
  function fibonacciSequence(n) {
    let sequence = [0, 1];
    while (sequence[sequence.length - 1] < n) {
      let nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
    }
    return sequence;
  }
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número inteiro: ', (number) => {
    sequence = fibonacciSequence(number);
  
    if (sequence.includes(number)) {
      console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
  
    readline.close();
  });