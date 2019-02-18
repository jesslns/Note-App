(function(exports) {
  function NoteList(noteModule) {
    this.notes = [];
    this.noteModule = noteModule; // initialize Note module
  };

  NoteList.prototype.createNote = function (text) {
    var note = new this.noteModule(text); // calling new Note
    this.notes.push(note);
  }

  // NoteList.prototype.storeNote = function(note){
  //   this.notes.push(note);
  // };

  exports.NoteList = NoteList;

})(this);
