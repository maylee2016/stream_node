const fs = require("fs");
const https = require("http");

const url = "http://wpd.ugr.es/~bioestad/guia-spss/practica-6/";
https.get(url, (res) => {
  const chunks = [];
  res
    .on("data", (data) => chunks.push(data))
    .on("end", () =>
      fs.writeFile("file/recovery_web.txt", Buffer.concat(chunks), (err) => {
        err ? console.error(err) : console.log("Se guardo con exito!");
      })
    );
});