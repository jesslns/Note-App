(function(exports) {

  function NoteController(noteList) {
    noteList.createAndStoreNote("Favourite drink: seltzer") // instantiate new Note
    this.noteListView = new NoteListView(noteList)
  };

  // NoteController.prototype.createNote = function(noteText) {
  //   return new Note(noteText)
  // };
  //
  // NoteController.prototype.createNoteList = function() {
  //   var noteList = new NoteList(this.note)
  // };

  NoteController.prototype.renderNotes = function() {
    var htmlString = this.noteListView.returnHtmlString();
      console.log(htmlString);
    document.getElementById("app").innerHTML = htmlString;
    // var content = document.getElementById("app").innerHTML;
    // console.log(content);
  };

  exports.NoteController = NoteController;

})(this);


window.onload = function() {
  let noteList = new NoteList();
  let noteController = new NoteController(noteList);
  noteController.renderNotes();
}
