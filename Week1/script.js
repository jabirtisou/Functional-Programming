import fs from 'fs'; // Importing fs module

function parseData() {
  let file = 'data.json';
  let data = JSON.parse(fs.readFileSync(file)); // Convert to object
  const questionKey = 'Op welke verdieping van het TTH studeer je het liefst?';
  const newJson = dataLooper(data, questionKey);
  return newJson;
}

function dataLooper(data, questionKey) {
  // Function to loop through every data
  let newJson = [];
  data.forEach((obj) => {
    let temp = forLooper(obj, questionKey);
    newJson.push(temp);
  });
  return ifEmptyChangeToZero(newJson);
}

function forLooper(obj, questionKey) {
  // Function for looping thought object keys, values
  const temp = {};
  for (let [key, value] of Object.entries(obj)) {
    temp[key] = checkValue(key, value, questionKey);
  }
  return temp;
}

function checkValue(key, value, questionKey) {
  if (key === questionKey) {
    // Function if key is same as questionKey
    return convertoINT(value);
  } else {
    return value;
  }
}

function convertoINT(string) {
  if (isNaN(parseInt(string))) {
    return string;
  } else {
    // Function to parrseint the string
    return parseInt(string);
  }
}
console.log(parseData());

function ifEmptyChangeToZero(string) {
  // Function anwserr is empty change to 'No anwser'
  if (typeof string === 'string' && string.length === 0) {
    return 'No anwser';
  } else {
    return string;
  }
}
