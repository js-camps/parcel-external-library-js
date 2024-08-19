// Step 1: Define the original array
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Step 2: Display the original array
document.getElementById('originalArray').innerText = originalArray.join(', ');

// Step 3: Function to shuffle the array using Lodash
const shuffleArray = () => {
    const shuffled = _.shuffle(originalArray);
    document.getElementById('shuffledArray').innerText = shuffled.join(', ');
};

// Step 4: Set up event listener for the shuffle button
document.getElementById('shuffleArray').addEventListener('click', shuffleArray);
