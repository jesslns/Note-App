(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
    // this.singleNoteView = new SingleNoteView;
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createAndStoreNote(text) // instantiate new Note
  };

  NoteController.prototype.htmlListString = function() {
    return this.noteListView.returnHtmlString();
  };

  NoteController.prototype.getNoteIdFromURL = function (location) {
    // var html = this.noteListView.returnHtmlString(); // can be simplified to window.location.hash
    // var firstSplit = html.split("#notes/")[1]
    // return Number(firstSplit.split("\"")[0])
    // return window.location.hash.split("#notes/")[1];
  };

  NoteController.prototype.htmlSingleString = function () {
    return this.singleNoteView.returnHtmlString(this.noteList.findNoteById(this.getNoteIdFromURL()))
  }; // wrap this with above notes, so that variable can be used?

  NoteController.prototype.render = function(elementID, htmlString) {
    return elementID.innerHTML = htmlString;
  };

  NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage);

    function showNoteForCurrentPage() {
      console.log(getNoteIdFromUrl(window.location))
      showNote(getNoteIdFromUrl(window.location));
    };

    function getNoteIdFromUrl(location) {
      console.log(location.hash.split("#notes/")[1]);
      var id = location.hash.split("#notes/")[1];
      return id;
    };

    function showNote(note) {
      console.log(note)
      var html = new SingleNoteView()
    document.getElementById("app").innerHTML = html.returnHtmlString(note);
    };
  };


  exports.NoteController = NoteController;

})(this);


window.onload = function() {
  console.log('running contoller')
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var elementID = document.getElementById("app")
  console.log(noteController.noteList);
  noteController.createNote('Goal One: I can TDD everything')
  noteController.createNote('Goal Two: I can programme fluently')
  var htmlString = noteController.htmlListString();
  noteController.render(elementID,htmlString);
  noteController.makeUrlChangeShowNoteForCurrentPage()
};
