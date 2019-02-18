function testNoteCanPrintText() {
  var note = new Note('My favouite language is JavaScript.');
  assert.isTrue(note.text === 'My favouite language is JavaScript.');
  assert.isTrue(note.addText() === 'My favouite language is JavaScript.');
};

testNoteCanPrintText();
