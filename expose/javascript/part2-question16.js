let statistics = {
    redCars: 21,
    bluecars: 45,
    greencars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let key in statistics) {
    // Check if the property starts with the letter 'r' or if the value is an odd number
    if (key[0] === 'r' || statistics[key] % 2 !== 0) {
        console.log(statistics[key]);//print values
    }
}