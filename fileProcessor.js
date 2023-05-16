const fs = require('fs');
const path = require('path');

const directoryPath = 'packages/_assets/pokemon';
const manifestFileName = 'manifest.js';
const manifestFilePath = path.join(directoryPath, manifestFileName);

function processFiles() {
  // Check if the manifest.js file already exists
  if (fs.existsSync(manifestFilePath)) {
    // If it exists, delete the file
    fs.unlinkSync(manifestFilePath);
  }

  readDirectory(directoryPath)
    .then(filterJSONFiles)
    .then(importFiles)
    .then(dataArray => {
      const jsonString = JSON.stringify(dataArray, null, 2);

      // Create the manifest.js file and write the output
      const manifestData = `export const manifestData = ${jsonString};`;

      fs.writeFileSync(manifestFilePath, manifestData, 'utf8');
      console.log('Manifest file created successfully!');
    })
    .catch(err => {
      console.error('Error processing files:', err);
    });
}

function readDirectory(directoryPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, directories) => {
      if (err) {
        reject(err);
        return;
      }

      const filePromises = directories.map(directoryName => {
        const directoryFullPath = path.join(directoryPath, directoryName);

        return new Promise((resolve, reject) => {
          fs.readdir(directoryFullPath, (err, files) => {
            if (err) {
              reject(err);
            } else {
              const filePaths = files.map(fileName =>
                path.join(directoryFullPath, fileName),
              );
              resolve(filePaths);
            }
          });
        });
      });

      Promise.all(filePromises)
        .then(filePathsArray => {
          const flattenedFilePaths = filePathsArray.flat();
          resolve(flattenedFilePaths);
        })
        .catch(err => {
          reject(err);
        });
    });
  });
}

function filterJSONFiles(filePaths) {
  return filePaths.filter(filePath => {
    return fs.statSync(filePath).isFile() && filePath.endsWith('.json');
  });
}

function importFiles(filteredFiles) {
  const dataArray = [];

  for (const filePath of filteredFiles) {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const imagePath = path.join(
      path.dirname(filePath),
      `${jsonData.number}.png`,
    );

    const dataObject = {
      filePath: path.dirname(filePath),
      data: {
        ...jsonData,
        imagePath: imagePath,
      },
    };

    dataArray.push(dataObject);
  }

  return dataArray;
}

processFiles();
