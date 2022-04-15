const printToTerminal = (array) => {
  array.forEach((el) => {
    console.log(`${el.join(",")}
    `);
  });
};

const algorithmic = (n) => {
  const result = [];
  for (let i = n - 1; i > 0; i--) {
    let temp = [i];
    let counter = i;
    for (let j = i; j > 0; j--) {
      if (counter + j <= n) {
        counter += j;
        temp.push(j);
        if (j > 0 && counter === n) {
          result.push(temp);
          counter = i;
          temp = [i];
        } else {
          if (counter + j > n) {
            continue;
          }
          let done = false;
          while (!done) {
            if (counter + j > n) {
              done = true;
            }
            counter += j;
            temp.push(j);
            if (counter === n) {
              result.push(temp);
              done = true;
            }
          }
        }
      }
    }
  }
  printToTerminal(result);
};

algorithmic(4);
