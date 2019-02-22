function testNoteCanPrintText() {
  var note = new Note('My favouite language is JavaScript.');
  // assert.isTrue(note.text === 'My favouite language is JavaScript.');
  console.log(note.id)
  assert.isTrue(note.showText() === 'My favouite language is JavaScript.');
  console.log('Note can be created with some text')

  var note0 = new Note ('Who doesn\'t love JavaScript?.')
  var note1 = new Note ('I can make single-page app with JS.')
  console.log(note0.id)
  console.log(note1.id)
  assert.isTrue(note0.id === 2)
  assert.isTrue(note1.id === 3)
  console.log('ID will be assigned to each note in chronological order.')
};

testNoteCanPrintText();
