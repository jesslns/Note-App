(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList
    this.noteListView = new NoteListView(noteList)
    // this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.createNote = function (text){
    this.noteList.createAndStoreNote(text) // instantiate new Note
  };

  NoteController.prototype.renderNotes = function() {
    var htmlString = this.noteListView.returnHtmlString();
    document.getElementById("app").innerHTML = htmlString;
  };

  exports.NoteController = NoteController;

})(this);


// window.onload = function() {
//   var noteList = new NoteList();
//   var noteController = new NoteController(noteList);
//   console.log(noteController);
//   noteController.createNote('Favourite drink: seltzer')
//   noteController.createNote('Favourite food: sushi')
//   console.log(noteController);
//   noteController.renderNotes();
// }
