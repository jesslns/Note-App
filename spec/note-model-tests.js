function testNoteCanPrintText() {
  var note = new Note('My favouite language is JavaScript.');
  // assert.isTrue(note.text === 'My favouite language is JavaScript.');
  assert.isTrue(note.showText() === 'My favouite language is JavaScript.');
};

testNoteCanPrintText();
