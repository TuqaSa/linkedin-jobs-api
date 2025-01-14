const linkedIn = require("./index");

const queryOptions = {
  keyword: "ٌReact",
  location: "Amman",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
