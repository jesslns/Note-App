function isNoteController(noteList) {
  let constructor_name = "NoteController"
  assert.isNoteController(noteList.__proto__.constructor.name === constructor_name)
};

  isNoteController(new NoteController(new NoteList()));

function testNoteController_ListView() {
  // var htmlElement = document.createElement("div");
  // htmlElement.setAttribute("id","app");
  // console.log(htmlElement)

  var noteList = new NoteList();
  var singleNoteView = new SingleNoteView()
  var noteController = new NoteController(noteList, singleNoteView);
  noteController.createNote('Goal One: I can TDD everything')
  // console.log(noteController.htmlListString())
  assert.isTrue(noteController.htmlListString() === '<ul><li><div><a href="#notes/9">Goal One: I can TDD </a></div></li></ul>')
  console.log('NoteController can return note lists in HTML string')

};

testNoteController_ListView();

function testNoteController_SingleView() {
  var noteList = new NoteList();
  var singleNoteView = new SingleNoteView()
  var noteController = new NoteController(noteList, singleNoteView);
  noteController.createNote('Goal One: I can TDD everything')
  noteController.createNote('Goal Two: I can programme fluently')
  var htmlListString = noteController.htmlListString()
  console.log(htmlListString);
  console.log(noteController.noteListView);
  console.log(noteController.getNoteIdFromURL());
  assert.isTrue(noteController.getNoteIdFromURL() === 10);
  // assert.isTrue(noteController.renderSingleNote() === '<div>Goal One: I can TDD everything</div>')
  // console.log('NoteController can return single note in html string')
};

testNoteController_SingleView();
