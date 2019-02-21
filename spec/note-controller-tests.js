'use strict'

function isNoteController(noteList) {
  let constructor_name = "NoteController"
  // console.log(noteList.__proto__.constructor.name)
  assert.isNoteController(noteList.__proto__.constructor.name === constructor_name)
};

  isNoteController(new NoteController(new NoteList()));


function testNoteController() {
  console.log('testNoteController')

  var htmlElement = document.createElement("div");
  htmlElement.setAttribute("id","app");
  console.log(htmlElement)

  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.createNote('Favourite drink: seltzer')
  noteController.renderNotes();

  var expect = '<ul><li><div>Favourite drink: seltzer</div></li></ul>'
  console.log(document.getElementById("app"));
  assert.isTrue(document.getElementById("app").innerHTML === expect )

};

    testNoteController();
