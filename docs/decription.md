# external library-js on CDN

```js
/js-external-library
├── index.html 
├── index.js 
├── .gitignore 
├── package-lock.json 
├── package.json 
└── Readme.md
```

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lodash Array Manipulation Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
</head>
<body>
    <div>
        <h1>Lodash Array Manipulation</h1>
        <p>Original Array: <span id="originalArray"></span></p>
        <p>Shuffled Array: <span id="shuffledArray"></span></p>
        <button id="shuffleArray">Shuffle Array</button>
    </div>
<script src="./index.js"></script>
</body>
</html>
```

`index.js`
```js
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
```

`package.json`
```json
{
  "scripts": {
      "start": "parcel index.html"
  },
  "devDependencies": {
      "parcel": "^2.12.0"
  }
}
```


