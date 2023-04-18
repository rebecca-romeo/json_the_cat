const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    try {
      const data = JSON.parse(body);

      callback(null, data[0].description);

    } catch (error) {

      if (data.length === 0 || error.type === undefined) {
        callback(`Error occurred, could not find ${breedName}. Error: ${error}`, null);
      }

    } // catch error

  }); // request

}; // fetchBreedDescription

module.exports = fetchBreedDescription;