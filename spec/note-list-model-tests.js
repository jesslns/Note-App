function testNoteList() {
  // var note1 = new Note('I can TDD everything');
  // var note2 = new Note('I can programme fluently');
  // var note3 = new Note ('I am having fun');
  var noteList = new NoteList();
  noteList.createAndStoreNote('I can TDD everything')
  noteList.createAndStoreNote('I can programme fluently');

  // console.log(noteList.notes)
  // console.log(noteList.notes[1])

  assert.isTrue(noteList.notes[0].text === 'I can TDD everything');
  assert.isFalse(noteList.notes[1].text === 'I can TDD everything');

};


testNoteList();
