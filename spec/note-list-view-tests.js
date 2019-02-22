function testNoteListView() {

  var noteList = new NoteList();
  noteList.createAndStoreNote('Goal One: I can TDD everything')
  noteList.createAndStoreNote('Goal Two: I can programme fluently');

  var noteListView = new NoteListView(noteList);
  console.log(noteListView.returnHtmlString())
  assert.isTrue(noteListView.returnHtmlString() ===
  '<ul><li><div><a href="#6">Goal One: I can TDD </a></div></li><li><div><a href="#7">Goal Two: I can prog</a></div></li></ul>');
  console.log('NoteListView return first 20 characters')

  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.returnHtmlString() ===
  undefined)
  console.log('html string returns undefine when there is no note')
};


testNoteListView();
