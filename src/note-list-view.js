'use strict'

(function(exports) {

  function NoteListView(noteList) {
    this.noteList = noteList.notes;
  };

  NoteListView.prototype.returnHtmlString = function(){
    if (this.noteList.length > 0){
      var html = this.noteList.map(note => {
        return "<li><div>" + note.text + "</div></li>"
      })
      return "<ul>" + html.join('') + "</ul>"
    } return "no note"
  };

  exports.NoteListView = NoteListView;

})(this);
