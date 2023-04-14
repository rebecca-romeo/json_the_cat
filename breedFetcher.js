const request = require('request');

// console.log(request)

// Slice process.argv to only return the users input
const getUserChoice = process.argv.slice(2);

// Cat breed entered:
const userQuery = getUserChoice[0];

// API Endpoint:
const url = `https://api.thecatapi.com/v1/breeds/search?q=${userQuery}`;

request(url, (error, response, body) => {
  // console.log(typeof body)
  // const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);

  try {
    const data = JSON.parse(body);
    // console.log("json data", data);

    // Return the cat breed description
    return console.log(data[0].description);

  } catch (error) {

    if (error.type === undefined) {
      // Return error message if cat breed not found
      console.log("type of error:", error.type);
      console.log("Could not find that cat breed. Please try again");
    }

  }



});