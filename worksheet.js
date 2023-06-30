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
//console.log(charactersWithMassGreaterThanHundred);
//2. Get characters with height less than 200
const charactersHeightLessTwoHundredHeight = characters.filter(
  (character) => character.height < 200
);
//console.log(charactersHeightLessTwoHundredHeight);
//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
//console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
//console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});
//console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => {
  return a.height - b.height;
});
// console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a, b) => {
  //ascending
  //   if (a.name < b.name) return -1;
  //   return 1;

  //descending
  if (a.name < b.name) return 1;
  return -1;
});
// console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a, b) => {
  if (a.gender === "female") return -1; // return -1 means that this is first
  return 1;
});
console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some(
  (character) => character.gender === "male"
);
// console.log(oneMaleCharacter);
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(
  (character) => character.eye_color === "blue"
);
// console.log(oneBlueEyes);
//3. Is there at least one character taller than 210?
const taller210 = characters.some((character) => character.height > 210);
// console.log(taller210);
//4. Is there at least one character that has mass less than 50?

const massLess50 = characters.some((character) => character.mass < 50);
console.log(massLess50);
