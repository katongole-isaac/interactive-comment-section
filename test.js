// const { produce } = require("immer");

// const state = [
//   {
//     lang: "Ts",
//     time: new Date(),
//     isHard: true,
//   },
//   {
//     lang: "Redx",
//     time: new Date(),
//     isHard: true,
//   },
//   {
//     lang: "C++",
//     time: Date("19-20-2022"),
//     isHard: false,
//   },
// ];

// const nextState = produce(state, (draft) => {
//   draft[0].isHard = false;
//   draft.push({
//     lang: "Java",
//     time: new Date(),
//     isPremium: true,
//   });
// });


// console.log(nextState);


const t = new Array(2).fill(null);
console.log(t);