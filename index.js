// Step 1: Define the original array
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Display the original array
document.getElementById('originalArray').innerText = originalArray.join(', ');

// Step 3: Function to shuffle the array using Lodash
const shuffleArray = () => {
    const shuffled = _.shuffle(originalArray);
    document.getElementById('shuffledArray').innerText = shuffled.join(', ');
};

// Step 4: Function to filter even numbers using Lodash
const filterEvenNumbers = () => {
    const evenNumbers = _.filter(originalArray, num => num % 2 === 0);
    document.getElementById('filteredArray').innerText = evenNumbers.join(', ');
};

// Step 5: Function to find the maximum value using Lodash
const findMaxValue = () => {
    const maxValue = _.max(originalArray);
    document.getElementById('maxValue').innerText = maxValue;
};

// Step 6: Function to find the minimum value using Lodash
const findMinValue = () => {
    const minValue = _.min(originalArray);
    document.getElementById('minValue').innerText = minValue;
};

// Step 7: Function to sort the array in descending order using Lodash
const sortArrayDesc = () => {
    const sortedArray = _.orderBy(originalArray, [], ['desc']);
    document.getElementById('sortedArray').innerText = sortedArray.join(', ');
};

// Step 8: Set up event listeners for each button
document.getElementById('shuffleArray').addEventListener('click', shuffleArray);
document.getElementById('filterEvenNumbers').addEventListener('click', filterEvenNumbers);
document.getElementById('findMaxValue').addEventListener('click', findMaxValue);
document.getElementById('findMinValue').addEventListener('click', findMinValue);
document.getElementById('sortArrayDesc').addEventListener('click', sortArrayDesc);
