var fs = require('fs');

// Read a File


// Sync version:
// try {
//   var buffer = fs.readFileSync(process.argv[2]);
//   console.log('Content: ', buffer.toString());
// }
// catch (error) {
//   console.log('Didn\'t work.');
//   console.log('Error message: ', error.message);
// }

// Async version:
// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log('Didn\'t work.');
//     console.log(err.message);
//     return;
//   }
//   console.log('Buffer : ', buffer.toString());
// });
// console.log('First!');


// Read and Write

// Sync version:
try {
  var text = fs.readFileSync(process.argv[2]);
  console.log(text.toString());
  fs.writeFileSync('file2.txt', text);
  var otherText = fs.readFileSync(process.argv[3]);
  var otherText2 = otherText.toString();
  var otherText3 = otherText2.toUpperCase();
  console.log(otherText3);
}
  catch (error) {
    console.log('Didn\'t work.');
    console.log('Error message: ', error.message);
  }

// Async version:
// fs.readFile(process.argv[2], function(error, buffer) {
//   if (error) {
//     console.log('Didn\'t work.');
//     console.log(error.message);
//     return;
//   }
//   text = buffer.toString();
//   lowerText = text.toUpperCase();
//   fs.writeFile(process.argv[3], lowerText, function(error) {
//     if (error) {
//       console.log('Write didn\'t work.');
//       console.log(error.message);
//     }
//     console.log('It worked.');
//   });
// });


// 2 in 1

// Sync version:

try {
  var text1 = fs.readFileSync(process.argv[2]);
  textString1 = text1.toString();
  textSplit1 = textString1.split('\n', 3);
  var text2 = fs.readFileSync(process.argv[3]);
  textString2 = text2.toString();
  textSplit2 = textString2.split('\n', 3);

  myArray = [];
  var splitIntoLines = function(text) {
    myArray.push(text + '\n');
  };

  var haiku1text = textSplit1.forEach(splitIntoLines);
  var haiku2text = textSplit2.forEach(splitIntoLines);
  myOtherArray = myArray.join();
  console.log(myOtherArray);

  myNewArray = [];
  myNewArray.push(myArray[0]);
  myNewArray.push(myArray[3]);
  myNewArray.push(myArray[1]);
  myNewArray.push(myArray[4]);
  myNewArray.push(myArray[2]);
  myNewArray.push(myArray[5]);
  console.log(myNewArray);
  var newerArray = myNewArray.join('');
  fs.writeFileSync('output.txt', newerArray);
}
  catch (error) {
    console.log('Didn\'t work.');
    console.log('Error message: ', error.message);
  }
