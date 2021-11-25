const shortIt = require(".");

shortIt("for your information", (err, resp) => {
  if (err) {
    console.log(err);
  }

  console.log(resp);
});
