for (let step = 0; step < 5; step++) {
  console.log(`Walking east one step ${step} with for.`);
}

const steps = [0, 1, 2, 3, 4];

steps.forEach((step) => {
  console.log(`Walking east one step ${step} with foreach.`);
});
