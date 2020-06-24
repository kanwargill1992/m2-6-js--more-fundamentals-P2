// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function
const createRecommendations = (food) => {
  return Object.keys(food).map((food1) => {
    return `With ${food1}, it is best to have ${food[food1]}`;
  });
};
// printRecommendations function
const printRecommendations = (recommend) => {
  recommend.forEach((recommend1) => {
    console.log(`${recommend1}`);
  });
};
// function call (done)
printRecommendations(createRecommendations(foodPairings));
