(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    // document.getElementById("app").innerHTML = 'howdy';
    // var content = document.getElementById("app").innerHTML;
    // console.log(content);
  };

  NoteController.prototype.renderNotes = function() {

    document.getElementById("app").innerHTML = 'howdy';
    var content = document.getElementById("app").innerHTML;
    console.log(content);
  };

  exports.NoteController = NoteController

})(this);


window.onload = function() {
  var note1 = new Note('I can TDD everything');
  var note2 = new Note('I can programme fluently');
  var noteList = new NoteList();
  noteList.createAndStoreNote(note1)
  noteList.createAndStoreNote(note2);

  var noteController = new NoteController(noteList);
  noteController.renderNotes();
};
