const fs = require('fs');

// writing files
const writeReadMe = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeReadMe('index.js', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

module.exports = { writeReadMe };