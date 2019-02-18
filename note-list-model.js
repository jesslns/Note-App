(function(exports) {
  function NoteList(createNote) {
    this.notes = [];
    this.createnote = createNote;
  };

  NoteList.prototype.createNote = function (text) {
    var note = new this.note.createNote(text);
    this.notes.push(note);
  }

  // NoteList.prototype.storeNote = function(note){
  //   this.notes.push(note);
  // };

  exports.NoteList = NoteList;

})(this);
