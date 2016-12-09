document.getElementById("button").addEventListener("click", main);

let keys = [170000, 110000, 70000, 10000];
let resultAllObject = [];

main();

function main() {
  let limit = keys.length;
  let money = Number(document.getElementById("text").value); // 나머지 값
  // let money = 50000;

  let newKeys = [];
  let saveObject = [];

  for (let count = 0; count < limit; count++) {
    if (keys[count] <= money) {
      newKeys.push(keys[count]);
    } else {
      saveObject.push(0);
    }
  }

  let newlimit = newKeys.length;

  for (let count = 0; count < newlimit; count++) {
    // 몫
    let divide = Math.floor(money / newKeys[count]);

    if (divide > 0) {
      // 나머지값
      let quotient = money % newKeys[count];

      if ((count === 0 && quotient < newKeys[1]) || divide > 1 && quotient < newKeys[1] && count+1 >= newlimit) {
        divide--;
        quotient = money - (newKeys[count] * divide);
      }

      if (divide) {
        resultAllObject[count] = divide;
      } else {
        resultAllObject[count] = 0;
      }

      money = quotient;
    } else {
      resultAllObject[count] = 0;
    }
  }
  resultAllObject = saveObject.concat(resultAllObject);
  resultAllObject = resultAllObject.reverse();

  console.log(resultAllObject);

  // 출력
  for (let i = 0; i < resultAllObject.length ; i++) {
    if (resultAllObject[i]) {
      document.getElementById('print_' + i).innerHTML = resultAllObject[i];
    } else {
      document.getElementById('print_' + i).innerHTML = 0;
    }
  }

  // 배열 초기화
  resultAllObject = [];
};
