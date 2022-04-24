// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //add each object from server to _data array
  retrieve: function (dataList) {
    // for each element of data(object) being returned,
    for (var eachMessage of dataList) {
      // object key = eachMessage's messageID, assign each message to objectkey
      Messages._data[eachMessage.message_id] = eachMessage;
    }
  },

  add: function () {

  }

};