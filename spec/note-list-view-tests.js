function testNoteListView() {

  var noteList = new NoteList();
  noteList.createAndStoreNote('Goal One: I can TDD everything')
  noteList.createAndStoreNote('Goal Two: I can programme fluently');

  console.log(noteList.notes[0].id)
  console.log(noteList.notes[1].id)
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHtmlString() ===
  '<ul><li><div>Goal One: I can TDD </div></li><li><div>Goal Two: I can prog</div></li></ul>');
  console.log('NoteListView return first 20 characters')

  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHtmlString() ===
  undefined)
  console.log('html string returns undefine when there is no note')
};


testNoteListView();
