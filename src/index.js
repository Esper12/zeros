function doubleEven(number) {
  let countFive = 0;
  let countTwo = 0;
  for(let i = 2; i <= number; i = i + 2) {
    let k = i;
    let l = i;
    while(k % 5 == 0) {
      k = k / 5;
      countFive++;
    }
    while(l % 2 == 0) {
      l = l / 2;
      countTwo++;
    }
  }
  return [countTwo, countFive];
}

function doubleOdd(number) {
  let countFive = 0;
  let countTwo = 0;
  for(let i = 1; i <= number; i = i + 2) {
    let k = i;
    let l = i;
    while(k % 5 == 0) {
      k = k / 5;
      countFive++;
    }
    while(l % 2 == 0) {
      l = l / 2;
      countTwo++;
    }
  }
  return [countTwo, countFive];
}

function single(number) {
  let countFive = 0;
  let countTwo = 0;
  for(let i = 1; i <= number; i++) {
    let k = i;
    let l = i;
    while(k % 5 == 0) {
      k = k / 5;
      countFive++;
    }
    while(l % 2 == 0) {
      l = l / 2;
      countTwo++;
    }
  }
  return [countTwo, countFive];
}

module.exports = function zeros(expression) {
  let arrayStr = expression.split('*');
  let counterTwo = 0;
  let counterFive = 0;

  for(let i = 0; i < arrayStr.length; i++) {
    let str = arrayStr[i];

    if((str[str.length - 2]) == '!'){
      let number = parseInt(str);
      if(number % 2 === 0) {
        counterTwo += doubleEven(number)[0];
        counterFive += doubleEven(number)[1];
      } else {
        counterTwo += doubleOdd(number)[0];
        counterFive += doubleOdd(number)[1];
      }
    } else {
      let number = parseInt(str);

      counterTwo += single(number)[0];
      counterFive += single(number)[1];
    }
  }

  if(counterTwo <= counterFive) {
    return counterTwo;
  } else {
    return counterFive;
  }
}
