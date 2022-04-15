const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./dataBefore.json", "utf-8"));

const result = {
  h: Object.keys(data[0]),
  d: [],
};

data.forEach((el) => {
  result.d.push([el.username, el.hair_color, el.height]);
});

fs.writeFileSync("./dataCurrent.json", JSON.stringify(result, null, 2));
