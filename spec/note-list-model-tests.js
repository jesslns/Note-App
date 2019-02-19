function testNoteList() {
  var note1 = new Note('I can TDD everything');
  var note2 = new Note('I can programme fluently');
  var note3 = new Note ('I am having fun');
  var noteList = new NoteList();
  noteList.createAndStoreNote(note1)
  noteList.createAndStoreNote(note2);
  // noteList(note3).createNote();
  console.log(noteList)
  console.log(noteList.notes)
  console.log(noteList.notes[1])

  assert.isTrue(noteList.notes[0] === 'I can TDD everything');
  assert.isFalse(noteList.notes[1] === 'I can TDD everything');

};


testNoteList();




// assert.isTrue(noteList.list ===
//   'I can TDD everything',
//   'I can programme fluently',
//   'I am having fun'
// );
