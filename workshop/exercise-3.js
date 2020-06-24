// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

// const newArr = mostPopularFood.sort();
// for (let i = 0; i < mostPopularFood.length; i++) {
//   console.log(`${newArr[i]} (${i + 1}) `);
// }

const newArr = (list) => {
  const popular = [...list].sort();
  for (i = 0; i < popular.length; i++) {
    console.log(`${popular[i]} (${list.indexOf(popular[i]) + 1})`);
  }
};

newArr(mostPopularFood);
