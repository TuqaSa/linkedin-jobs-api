const linkedIn = require("./index");

const queryOptions = {
  keyword: "web developer",
  location: "India",
  dateSincePosted: "past Week",
  jobType: "full time",
  remoteFilter: "remote",
  salary: "100000",
  experienceLevel: "entry level",
  limit: "10",
  sortBy: "recent",
  page: "1",
};

linkedIn.query(queryOptions).then((response) => {
  console.log(response); // An array of Job objects
});
