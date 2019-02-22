(function(exports) {

  function NoteController(noteList,singleNoteView) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    this.singleNoteView = singleNoteView;
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createAndStoreNote(text) // instantiate new Note
  };

  NoteController.prototype.htmlListString = function() {
    return this.noteListView.returnHtmlString();
  };

  NoteController.prototype.getNoteIdFromURL = function () {
    var html = this.noteListView.returnHtmlString();
    var firstSplit = html.split("#notes/")[1]
    return Number(firstSplit.split("\"")[0])
  };

  // NoteController.prototype.htmlSingleString = function () {
  //   return this.singleNoteView

  NoteController.prototype.renderNotes = function(elementID, htmlString) {
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
//   var htmlString = noteController.htmlListString();
//   noteController.renderNotes(elementID,htmlString);
// };
