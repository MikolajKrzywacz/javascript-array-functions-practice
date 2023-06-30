const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);
//2. Get array of all heights
const heights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const minifiedCharacters = characters.map((character) => {
  return { name: character.name, height: character.height };
});
//4. Get array of all first names
const firstName = characters.map((character) => {
  character.name.split(" ")[0];
});

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, el) => {
  return acc + el.mass;
}, 0);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, el) => {
  return acc + el.height;
});
//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, el) => {
  const eyeColor = el.eye_color;
  if (acc[eyeColor]) {
    acc[eyeColor]++;
  } else {
    acc[eyeColor] = 1;
  }
  return acc;
}, {});
//4. Get total number of characters in all the character names
const totalCharInCharacters = characters.reduce((acc, el) => {
  return acc + el.name.length;
}, 0);
//***FILTER***
//1. Get characters with mass greater than 100
const charactersWithMassGreaterThanHundred = characters.filter(
  (character) => character.mass > 100
);
console.log(charactersWithMassGreaterThanHundred);
//2. Get characters with height less than 200
const charactersHeightLessTwoHundredHeight = characters.filter(
  (character) => character.height < 200
);
console.log(charactersHeightLessTwoHundredHeight);
//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
console.log(femaleCharacters);
//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
