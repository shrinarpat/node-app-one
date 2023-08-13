const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "dummy");

// for (let i = 0; i < 5; i++) {
//   fs.writeFileSync(
//     path.join(__dirname, "dummy", `hello${i}.txt`),
//     `This is beautiful hello ${i} file`
//   );
// }

// fs.readdir(path.join(__dirname, "dummy"), (err, files) => {
//   console.log(files);
// });

//* create file

// fs.writeFile(`${dirPath}/hello.txt`, "This is hello text file", (err) => {
//   if (!err) console.log("file created successfully");
// });

//* append file

// fs.appendFile(
//   `${dirPath}/hello.txt`,
//   ", I'm appending to hello text file",
//   (err) => {
//     if (!err) console.log("content appended successfully");
//   }
// );

//* read from file

// fs.readFile(`${dirPath}/hello.txt`, (err, content) => {
//   if (!err) console.log(content.toString());
// });

//* renaming file

// fs.rename(`${dirPath}/hello.txt`, `${dirPath}/greeting.txt`, (err) => {
//   if (!err) console.log("file renamed successfully");
// });

//* delete file

// fs.unlink(`${dirPath}/greeting.txt`, (err) => {
//   if (!err) console.log("file deleted successfully");
// });
