function testNoteListView() {

  console.log('html string when there are more than one note')

  var noteList = new NoteList();
  noteList.createAndStoreNote('I can TDD everything')
  noteList.createAndStoreNote('I can programme fluently');

  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHtmlString() ===
  '<ul><li><div>I can TDD everything</div></li><li><div>I can programme fluently</div></li></ul>');

  console.log('html string when there is no note')

  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  console.log(noteListView.returnHtmlString())
  assert.isTrue(noteListView.returnHtmlString() ===
  "no note")
};


testNoteListView();
