(function(exports) {
  function NoteList() {
    this.notes = [];
    // this.note = note; // initialize Note module
  };

  NoteList.prototype.createAndStoreNote = function(text) {
    // var note = new this.note(text); // calling new Note
    // var note = text.text
    var note = new Note(text)
    this.notes.push(note);
  }
  exports.NoteList = NoteList;

})(this);
