// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // remove old messages
    // render new messages
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // append each new message to #chats
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // retrieve each message from data list
    // render each message into the appropriate template
    // return each message converted to html
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};