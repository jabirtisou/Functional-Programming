import fetch from 'node-fetch'; // Importing node-fetch

fetch('https://api.jsonbin.io/b/617fc7b54a82881d6c688213')
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function (data) {
    // Functions will be executed here
    let latestDatas = parseOnlyLatestDate(data);
    let latestDatasWithDecimal = parseDecimals(latestDatas);
    console.log(latestDatasWithDecimal);
  })
  .catch(function (err) {
    // If an error occured, it will be catched here
    console.log(err);
  });

function parseOnlyLatestDate(datas) {
  // Function to parse only if the year is 2021
  let finalData = [];
  for (let i = 0; i < datas.length; i++) {
    let data = datas[i];
    let date = new Date(data.date); // Date() constructor
    if (date.getFullYear() == '2021') {
      // getFullYear() method returns the year
      finalData.push(data);
    }
  }
  return finalData;
}

function parseDecimals(datas) {
  let finalData = [];
  for (let i = 0; i < datas.length; i++) {
    let data = datas[i];
    let dollar_price = data.dollar_price.toFixed(2); // parsing to 2 decimal
    data.dollar_price = parseFloat(dollar_price); // Convert from string to float and sending new values to data
    finalData.push(data);
  }
  return finalData;
}
