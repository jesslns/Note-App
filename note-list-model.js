(function(exports) {
  function NoteList() {
    this.list = [];
    // var note = Note;
  };

  NoteList.prototype.storeNote = function(note){
    this.list.push(note);
  };

  exports.NoteList = NoteList;

})(this);
