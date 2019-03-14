(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.createAndStoreNote = function(text) {
    note = new Note(text)
    this.notes.push(note);
  };

  NoteList.prototype.findNoteById = function(id) {
    var findNote = this.notes.find(note =>
      note.id === id);
                        // (function(note) {
                        //   return note.id === id
                        // });
    return findNote.text
  };

  exports.NoteList = NoteList;

})(this);
