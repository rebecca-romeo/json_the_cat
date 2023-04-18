const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    try {
      const data = JSON.parse(body);

      callback(null, data[0].description);

    } catch (error) {

      if (error.type === undefined) {
        callback(`Invalid breed`);
      }

    } // catch error

  }); // request

}; // fetchBreedDescription

module.exports = fetchBreedDescription;