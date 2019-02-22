(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
    // this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createAndStoreNote(text) // instantiate new Note
  };

  NoteController.prototype.renderNotes = function() {
    var htmlString = this.noteListView.returnHtmlString();
    return document.getElementById("app").innerHTML = htmlString;
  };

  exports.NoteController = NoteController;

})(this);


// window.onload = function() {
//   console.log('running contoller')
//   var noteList = new NoteList();
//   var noteController = new NoteController(noteList);
//   console.log(noteController);
//   noteController.createNote('Goal One: I can TDD everything')
//   noteController.createNote('Goal Two: I can programme fluently')
//   noteController.renderNotes();
// };
