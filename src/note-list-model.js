(function(exports) {
  function NoteList() {
    this.notes = [];
    // this.note = note; // initialize Note module
  };

  NoteList.prototype.createAndStoreNote = function (note) {
    // var note = new this.note(text); // calling new Note
    // var note = text.text
    this.notes.push(note.text);
  }
  exports.NoteList = NoteList;

})(this);
