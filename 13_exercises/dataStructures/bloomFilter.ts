const noOfHashFunction = 6; // number of hash functions
const names = ["Abhin", "Pai", "Tajib", "Hasan", "Kemal"]; // n names
const storage: number[] = Array(Math.pow(2, 22) - 1).fill(0); // Bllom filter bit

const hash = (key: string) => {
  const hashNumbers = [];

  for (let i = 1; i <= noOfHashFunction; i++) {
    hashNumbers.push(
      Math.abs(
        key.split("").reduce((a, b) => ((a << i) - a + b.charCodeAt(0)) | 0, 0)
      )
    );
  }

  return hashNumbers;
};

// Initializing bloom filter bit for a hash index
names.forEach((name) => {
  const indexes = hash(name);

  indexes.forEach((index) => (storage[index] = 1));
});

// Traditional single name search
console.time("Single Traditional Search");
const isValueContain = (searchString: string) => {
  let result: boolean;

  for (let i = 0; i < names.length; i++) {
    if (names[i] === searchString) {
      result = true;
      break;
    }
  }

  return !!result;
};
console.log(isValueContain("Pai"));
console.timeEnd("Single Traditional Search");
// End of traditional Search

const result = [];
// Bloom filter single name search
console.time("Single Bloom Filter Search");
const isValueContainInBloom = (searchString: string) => {
  const hashes = hash(searchString);

  for (let i = 0; i < hashes.length; i++) {
    if (!hashes[i]) return false;
  }

  return true;
};
console.log(isValueContainInBloom("Tajib"));
console.timeEnd("Single Bloom Filter Search");
// End of Bloom Filter Search

// Traditional Search for 1000 names
console.time("Traditional Search");
names.forEach((name) => {
  result.push(isValueContain(name));
});
console.log(result.filter((res) => !res));
console.timeEnd("Traditional Search");
// End of traditional Search for 1000 names

// Bloom filter search for 1000 names
console.time("Bloom Filter");
names.forEach((name) => {
  result.push(isValueContainInBloom(name));
});
console.log(result.filter((res) => !res));
console.timeEnd("Bloom Filter");
// End of Bloom filter search for 1000 names
