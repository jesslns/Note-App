function testNoteList() {
  var note1 = new Note('I can TDD everything');
  var note2 = new Note('I can programme fluently');
  var note3 = new Note ('I am having fun');
  var noteList = new NoteList();
  noteList.storeNote(note1)
  noteList.storeNote(note2)
  noteList.storeNote(note3)
  console.log(noteList.list)

  assert.isTrue(noteList.list.length === 3);
};

// var note1 = 'I can TDD everything';
// var note2 = 'I can programme fluently'
//
// var noteList = new NoteList(note1);


testNoteList();




// assert.isTrue(noteList.list ===
//   'I can TDD everything',
//   'I can programme fluently',
//   'I am having fun'
// );
