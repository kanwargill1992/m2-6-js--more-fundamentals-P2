// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = (arr, first, last) => {
  const newArr = [...arr];

  newArr.pop();
  newArr.push(last);
  newArr.unshift(first);

  return newArr;
};

const printList = (arr) => {
  for (i = 0; i < arr.length; i++) {
    console.log(`${i + 1} ${arr[i]}`);
  }
};

printList(
  fixList(mostPopularFood, "bean burritos", "buffalo-flavored cauliflower")
);
