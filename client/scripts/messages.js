// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //add each object from server to _data array
  retrieve: function (dataList) {
    var newData = [];
    // for each element of data(object) being returned,
    for (var eachMessage of dataList) {
      // if data array is empty, push each element into data array
      if (!Messages._data.length) {
        // object key = eachMessage's messageID, assign each message to objectkey
        newData.push(eachMessage);
      } else if (eachMessage.message_id > Messages._data[0].message_id) {
        newData.push(eachMessage);
      }
    }
    Messages._data = newData.concat(Messages._data);
  },

  add: function (message) {
    // add to beginning of data list
    Messages._data.unshift(message);
  },

  interact: function() {
    return Messages._data;
  }

};