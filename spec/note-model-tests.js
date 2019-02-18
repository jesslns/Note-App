function testNoteCanPrintText() {
  var note = new Note('My favouite language is JavaScript.');
  assert.isTrue(note.text === 'My favouite language is JavaScript.');
  assert.isTrue(note.printText() === 'My favouite language is JavaScript.');
};

testNoteCanPrintText();


// var note = require("./note-model").Note;
//
// if (note.printText() !== "My favouite language is JavaScript.") {
//   throw new Error("Text should be: 'My favouite language is JavaScript.");
// } else {
//   console.log(".");
// };
