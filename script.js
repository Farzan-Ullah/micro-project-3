const foodData = require("./food.json");

//function for filtering categories.

function listFood(category = " ") {
  if (category.length > 0) {
    return foodData.filter((food) => food.category === category);
  } else {
    return foodData;
  }
}

console.log(listFood());
console.log("================================================================");
console.log(listFood("Vegetable"));
console.log("================================================================");
console.log(listFood("Protein"));
console.log("================================================================");
console.log(listFood("Nuts"));
console.log("================================================================");
console.log(listFood("Grain"));
console.log("================================================================");
console.log(listFood("Dairy"));
console.log("================================================================");

console.log(
  "******************************************************************"
);

// function for sort calorie.

function sortCalorie(condition) {
  if (condition === "asec") {
    return foodData.filter((food) => food.calorie < 100);
  } else if (condition === "desc") {
    return foodData.filter((food) => food.calorie > 100);
  }
}

console.log(
  "\n================== calorie sorting below 100 =====================\n"
);

console.log(sortCalorie("asec"));
console.log(
  "\n================================================================"
);

console.log("\n============== calorie sorting above 100 ===================");
console.log(sortCalorie("desc"));

console.log("\n");
console.log(
  "******************************************************************"
);

//function for sorting protiens and cabs.

function sort(type) {
  if (type === "protein") {
    return foodData.sort((a, b) => b.protiens - a.protiens);
  } else if (type === "carb") {
    return foodData.sort((a, b) => a.cab - b.cab);
  }
}

console.log(
  "\n=================== Protien High to low ========================\n"
);
console.log(sort("protein"));

console.log(
  "\n==============================Cab Low to High===========================\n"
);
console.log(sort("carb"));
