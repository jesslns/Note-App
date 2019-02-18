(function(exports) {
  function NoteList(makeNote) {
    this.notes = [];
    this.makeNote = makeNote;
  };

  NoteList.prototype.createNote = function (text) {
    var note = new this.makeNote(text);
    this.notes.push(note);
  }

  // NoteList.prototype.storeNote = function(note){
  //   this.notes.push(note);
  // };

  exports.NoteList = NoteList;

})(this);
