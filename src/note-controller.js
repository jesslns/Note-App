(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
    // this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createAndStoreNote(text) // instantiate new Note
  };

  NoteController.prototype.htmlString = function() {
    return htmlString = this.noteListView.returnHtmlString();
    // return document.getElementById("app").innerHTML = htmlString;
  };

  NoteController.prototype.renderNotes = function(elementID, htmlString) {
    // var htmlString = this.noteListView.returnHtmlString();
    return elementID.innerHTML = htmlString;
  };

  exports.NoteController = NoteController;

})(this);


// window.onload = function() {
//   console.log('running contoller')
//   var noteList = new NoteList();
//   var noteController = new NoteController(noteList);
//   var elementID = document.getElementById("app")
//   console.log(noteController);
//   noteController.createNote('Goal One: I can TDD everything')
//   noteController.createNote('Goal Two: I can programme fluently')
//   var htmlString = noteController.htmlString();
//   noteController.renderNotes(elementID,htmlString);
//   // noteController.renderNotes(notes);
// };
