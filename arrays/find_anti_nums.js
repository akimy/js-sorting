function findAntiNumbers(a) {
  const map = new Map();

  for (let i = 0; i < a.length; i += 1) {
    if (map.get(-a[i]) === a[i]) {
      console.log(`Founded ${a[i]}, ${-a[i]}`);
      return true;
    }
    map.set(a[i], -a[i]);
  }
  return false;
}

const array = [...Array(10000).keys()].sort(() => Math.random()).concat([-3456]);
findAntiNumbers(array);
