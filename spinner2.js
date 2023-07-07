// ver 1 : refactored, but results in only a single spin


// const x = (str) => {
//   let time = 100
//   for (let sym of str) {
//     time += 200
//     setTimeout(() => {
//       process.stdout.write(`\r${sym}   `);
//     }, time);
//   }
// };



// ver 2: improved upon ver 1; enabled the ability to choose how many spins the code will result in by passing in a "num"  value as a 2nd param. 

const x = (str, num) => {
  let time = 100;
  for (let i = 0; i < num; i++) {
    for (let sym of str) {
      time += 200;
      setTimeout(() => {
        process.stdout.write(`\r${sym}   `);
      }, time);
    };
  };
};


x("|/-\\|", 5)