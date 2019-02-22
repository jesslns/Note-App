function testNoteList() {
  var noteList = new NoteList();
  noteList.createAndStoreNote('I can TDD everything')
  noteList.createAndStoreNote('I can programme fluently');
  // console.log(noteList.notes[0].id);

  assert.isTrue(noteList.notes[0].text === 'I can TDD everything');
  assert.isFalse(noteList.notes[1].text === 'I can TDD everything');
  console.log('NoteList can create and store notes')

  // console.log(noteList.findNoteById(4));
  assert.isTrue(noteList.findNoteById(4) === 'I can TDD everything');
  console.log('NoteList can fetch note by id.')
};

testNoteList();

// function testNoteListFindNoteById() {
//
// };
//
// testNoteListFindNoteById()
