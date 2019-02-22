function isNoteController(noteList) {
  let constructor_name = "NoteController"
  // console.log(noteList.__proto__.constructor.name)
  assert.isNoteController(noteList.__proto__.constructor.name === constructor_name)
};

  isNoteController(new NoteController(new NoteList()));

function testNoteController() {

  // var htmlElement = document.createElement("div");
  // htmlElement.setAttribute("id","app");
  // console.log(htmlElement)

  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.createNote('Goal One: I can TDD everything')

  assert.isTrue(noteController.htmlString() === '<ul><li><div><a href="#notes/8">Goal One: I can TDD </a></div></li></ul>')
  console.log('NoteController can creturn HTML string')
};

    testNoteController();
