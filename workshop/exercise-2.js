// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuestOrder = (first, last) => {
  let newArr = [...first, ...last];
  for (let i = 0; i < newArr.length; i++) {
    console.log(`${i + 1}. ${newArr[i]}`);
  }
};

printGuestOrder(earlyBirds, lateComers);
