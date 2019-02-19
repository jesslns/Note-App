function testNoteListView() {
  var note1 = new Note('I can TDD everything');
  var note2 = new Note('I can programme fluently');

  var noteList = new NoteList();
  noteList.createAndStoreNote(note1)
  noteList.createAndStoreNote(note2);

  var noteListView = new NoteListView(noteList);

  console.log(noteListView.returnHtmlString())
  // console.log(noteList.notes)
  // console.log(noteList.notes[1])

  assert.isTrue(noteListView.returnHtmlString() ===
  '<ul><li><div>I can TDD everything</div></li><li><div>I can programme fluently</div></li></ul>');

};


testNoteListView();
