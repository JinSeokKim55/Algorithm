document.getElementById("button").addEventListener("click", main);

let keys = [10000, 70000, 110000, 170000];
let wow = [];

function main() {
  wow = [];

  let text = Number(document.getElementById("text").value)
  loop(text);

  let checkArray = [];
  for (let row of wow) {
    let add = 0;
    for(let value of row) {
      if (value) {
        add += value;
      }
    }
    checkArray.push(add);
  }

  let small = checkArray[0];
  let smallkey = 0;
  for (let i = 1; i < checkArray.length; i++) {
    if (checkArray[i] < small) {
      small = checkArray[i];
      smallkey = i;
    }
  }

  if(wow[smallkey][0]){
    document.getElementById('1').innerHTML = wow[smallkey][0];
  } else {
    document.getElementById('1').innerHTML = 0;
  }
  if(wow[smallkey][1]){
    document.getElementById('7').innerHTML = wow[smallkey][1];
  } else {
    document.getElementById('7').innerHTML = 0;
  }
  if(wow[smallkey][2]){
    document.getElementById('11').innerHTML = wow[smallkey][2];
  } else {
    document.getElementById('11').innerHTML = 0;
  }
  if(wow[smallkey][3]){
    document.getElementById('17').innerHTML = wow[smallkey][3];
  } else {
    document.getElementById('17').innerHTML = 0;
  }
}

function loop(value, array = []) {

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] <= value) {
      calculation(keys[i], value, array, i);
    } else {
      break;
    }
  }
};

function calculation(key, value, array, i) {
  let clone = cloneArray(array);
  let divide = Math.floor(value / key);
  let quotient = value % key;

  clone[i] = divide;

  if (quotient) {
    loop(quotient, cloneArray(clone));
  }
  else {
    wow.push(clone);
  }
}

function cloneArray(array) {
  let clone = [];
  for (let row of array) {
    clone.push(row);
  }
  return clone
}
