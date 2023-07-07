// ver 1 : refractored, but results in only a single spin


const x = (str) => {
  let time = 100
  for (let sym of str) {
    time += 200
    setTimeout(() => {
      process.stdout.write(`\r${sym}   `);
    }, time);
  }
};


x("|/-\\|")