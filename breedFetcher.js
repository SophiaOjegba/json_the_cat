// Import the 'request' library
const request = require('request');
const breedName = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
function fetchBreed(breedName, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      const breedData = data[0];
      callback(null, breedData);
    }
  });
}
fetchBreed("Siberia", ((error, data)=>{
console.log(error)
console.log(data)
}));