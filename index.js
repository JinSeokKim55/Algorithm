document.getElementById("button").addEventListener("click", main);

let keys = [10000, 70000, 110000, 170000];
let resultAllObject;

function main() {
  resultAllObject = [];

  let money = Number(document.getElementById("text").value);

  loop(money);

  // 각각의 경우의 수의 총 합 구하기
  let addArray = [];
  for (let row of resultAllObject) {
    let add = 0;

    for (let value of row) {
      if (value) {
        add += value;
      }
    }

    addArray.push(add);
  }

  // 총합이 제일 낮은 값과 그 배열 위치를 찾기
  let small = addArray[0]; // 비교 값
  let smallkey = 0;        // 배열 위치 key
  let limit = addArray.length;
  for (let i = 1; i < limit; i++) {
    if (addArray[i] < small) {
      small = addArray[i];
      smallkey = i;
    }
  }

  // 출력
  for (let i = 0; i < 4; i++) {
    if (resultAllObject[smallkey][i]) {
      document.getElementById('print_' + i).innerHTML = resultAllObject[smallkey][i];
    } else {
      document.getElementById('print_' + i).innerHTML = 0;
    }
  }
};

function loop(value, array = []) {
  let limit = keys.length;

  for (let i = 0; i < limit; i++) {
    if (keys[i] <= value) {
      calculation(keys[i], value, array, i);
    } else {
      break;
    }
  }
};

function calculation(key, value, array, i) {
  let copy = cloneArray(array);
  let divide = Math.floor(value / key); // 몫
  let quotient = value % key;           // 나머지 값

  copy[i] = divide;

  if (quotient) {
    loop(quotient, cloneArray(copy));
  } else {
    resultAllObject.push(copy);
  }
};

function cloneArray(array) {
  let copy = [];

  for (let row of array) {
    copy.push(row);
  }

  return copy
};
