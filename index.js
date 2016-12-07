let keys = [10000, 70000, 110000, 170000];
let money = 500000;

main(money);

function main(money) {
  let text = loop(money);
  console.log(text);
}

function loop(value) {
  let pushYo = [];

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] <= value) {
      console.log('start : ' + keys[i]);
      let test = calculation(keys[i], value);
      console.log('test', test);
      pushYo.push(test);
      console.log('push', pushYo);
      console.log('----------');
    } else {
      return pushYo;
    }
  }
};

function calculation(key, value) {
  let divide = Math.floor(value / key);
  let quotient = value % key;

  console.log(quotient);
  if (quotient) {
    loop(quotient);
  }
  console.log('k : ' + key + ' - v : ' + divide + ' - q : ' + quotient);
  return divide;
}
