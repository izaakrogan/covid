// import covid from './covid.js';

console.log(1);

// const names = covid.map(i => {
//   return i.var;
// });

// console.log('names', names);

(function filterByInputs() {
  const a = riskData.map(i => {
    return i.var;
  });
  console.log('a', a);
  const b = a.reduce((acc, elm) => {
    if (acc.indexOf(elm) > -1) return acc;
    acc.push(elm);
    return acc;
  }, []);

  console.log('b', b);
  const c = b.map(i => {
    return {
      name: i,
      id: i,
    };
  });
  console.log('c', JSON.stringify(c, null, 2));
})();
