// Import the 'request' library
const request = require('request');
const breedName = process.argv[2]

function fetchBreedDescription(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed not found', null);
    } else {
      const breedData = data[0].description;
      callback(null, breedData);
    }
   
  });
}
// fetchBreedDescription("Siberia", ((error, data)=>{
// console.log(error)
// console.log(data)
// }));

module.exports =  { fetchBreedDescription };