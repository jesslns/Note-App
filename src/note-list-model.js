(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.createAndStoreNote = function(text) {
    note = new Note(text)
    this.notes.push(note);
  };

  

  exports.NoteList = NoteList;

})(this);
